import { computed, Ref, ref, watch } from 'vue';
import { useFieldValueEvent } from '@/composables';
import { useFieldChangeEvent } from '@/composables';
import { Field } from '@/types';

export function useFieldValue<F extends Field<DV>, V, DV extends string | Blob>(
  field: Ref<F>,
  formUniqueId: Ref<string | undefined>,
  hydrate: (field: F) => V,
  dehydrate: null | ((value: V) => DV) = null
) {
  const attribute = computed(() => field.value.attribute);

  const initialValue = computed(() => hydrate(field.value));

  const currentValue = ref(initialValue.value) as Ref<V>;

  const { emitFieldValueChange } = useFieldChangeEvent<DV>(
    attribute,
    formUniqueId
  );

  watch(
    () => currentValue.value,
    (newValue, oldValue) => {
      if (dehydrate && newValue !== oldValue) {
        emitFieldValueChange(dehydrate(newValue));
      }
    }
  );

  const { emitValueChange } = useFieldValueEvent<V>(
    attribute,
    formUniqueId,
    (newValue) => {
      currentValue.value = newValue;
    }
  );

  return {
    value: currentValue,
    initialValue,
    emitValueChange,
  };
}
