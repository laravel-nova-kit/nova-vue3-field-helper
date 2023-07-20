import { computed, onBeforeUnmount, onMounted, ref, Ref, watch } from 'vue';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import forIn from 'lodash/forIn';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { useFormEditMode } from '@/composables';
import { AxiosResponse, isCancel } from 'axios';
import { getFieldAttributeEventName } from '../events';
import { Field } from '@/types';

export function useDependentFormField<
  F extends Field<DV>,
  V,
  DV extends string | Blob
>(
  currentValue: Ref<V>,
  initialValue: Ref<V>,
  dehydrate: (value: V) => DV,
  field: Ref<F>,
  formUniqueId: Ref<string>,
  resourceName: Ref<string>,
  resourceId: Ref<number | string>,
  viaRelationship?: Ref<string | undefined>,
  viaResource?: Ref<string | undefined>,
  viaResourceId?: Ref<number | string | undefined>,
  relatedResourceName?: Ref<string | undefined>,
  relatedResourceId?: Ref<number | string | undefined>,
  syncEndpoint?: Ref<string | undefined>
) {
  const currentField = ref<F>(field.value) as Ref<F>;
  watch(field.value, (f) => {
    currentField.value = f;
  });

  const dependsOn = computed(() => currentField.value.dependsOn);
  const attribute = computed(() => currentField.value.attribute);
  const dependentComponentKey = computed(
    () => currentField.value.dependentComponentKey
  );

  const syncDebouncer = ref(debounce((callback) => callback(), 50));
  const syncAbortController = ref<AbortController | null>(null);
  const watchedFields = ref<{ [field: string]: unknown }>({});
  const watchedEvents = ref<{ [field: string]: (value: unknown) => void }>({});

  const { editMode } = useFormEditMode(
    resourceId,
    relatedResourceName,
    relatedResourceId
  );

  const syncFieldEndpoint = computed(() => {
    if (syncEndpoint?.value) {
      return syncEndpoint.value;
    }

    if (editMode.value === 'update-attached') {
      return `/nova-api/${resourceName.value}/${resourceId.value}/update-pivot-fields/${relatedResourceName?.value}/${relatedResourceId?.value}`;
    } else if (editMode.value === 'attach') {
      return `/nova-api/${resourceName.value}/${resourceId.value}/creation-pivot-fields/${relatedResourceName?.value}`;
    } else if (editMode.value === 'update') {
      return `/nova-api/${resourceName.value}/${resourceId.value}/update-fields`;
    }

    return `/nova-api/${resourceName.value}/creation-fields`;
  });

  const syncField = async () => {
    if (syncAbortController.value) {
      syncAbortController.value.abort();
    }
    syncAbortController.value = new AbortController();

    let response;

    try {
      response = (await Nova.request({
        method: 'patch',
        url: syncFieldEndpoint.value,
        data: {
          [attribute.value]: dehydrate(currentValue.value),
          ...watchedFields.value,
        },
        params: pickBy(
          {
            editing: true,
            editMode: editMode.value,
            viaResource: viaResource?.value,
            viaResourceId: viaResourceId?.value,
            viaRelationship: viaRelationship?.value,
            field: attribute.value,
            component: dependentComponentKey.value,
          },
          identity
        ),
        signal: syncAbortController.value.signal,
      })) as unknown as AxiosResponse<F>;
    } catch (e) {
      if (isCancel(e)) {
        return;
      }

      throw e;
    }

    currentField.value = response.data;
    currentField.value.value =
      currentField.value.value ?? field.value.value ?? initialValue.value;
  };

  onMounted(() => {
    if (!isEmpty(dependsOn.value)) {
      forIn(dependsOn.value, (defaultValue, dependsOn) => {
        watchedEvents.value[dependsOn] = (value) => {
          watchedFields.value[dependsOn] = value;
          syncDebouncer.value(() => {
            syncField().catch();
          });
        };

        watchedFields.value[dependsOn] = defaultValue;

        Nova.$on(
          getFieldAttributeEventName(dependsOn, 'change', formUniqueId.value),
          watchedEvents.value[dependsOn]
        );
      });
    }
  });

  onBeforeUnmount(() => {
    if (syncAbortController.value !== null) {
      syncAbortController.value.abort();
    }

    if (!isEmpty(watchedEvents.value)) {
      forIn(watchedEvents.value, (listener, dependsOn) => {
        Nova.$off(
          getFieldAttributeEventName(dependsOn, 'change', formUniqueId.value),
          listener
        );
      });
    }
  });

  return { currentField };
}
