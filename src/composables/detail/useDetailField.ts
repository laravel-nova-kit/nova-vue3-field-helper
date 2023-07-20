import { computed, Ref, toRefs } from 'vue';
import { Field, FieldProps } from '@/types';
import {
  useFieldLabel,
  useFieldValue,
  useFieldVisibilityEvent,
} from '@/composables';
import { EmitFn } from '@/types';

export function useDetailField<
  P extends FieldProps<F>,
  F extends Field<DV>,
  DV extends string | Blob,
  V
>(
  props: P,
  hydrate: (field: F) => V,
  emit: EmitFn,
  fieldName?: Ref<string | null>
) {
  const { field, formUniqueId } = toRefs(props);

  const { value } = useFieldValue<F, V, DV>(field, formUniqueId, hydrate);

  const attribute = computed(() => field.value.attribute);
  const visible = computed(() => field.value.visible);
  useFieldVisibilityEvent(emit, attribute, visible);

  const { fieldLabel } = useFieldLabel<F>(field, fieldName);

  return {
    value,
    fieldLabel,
  };
}
