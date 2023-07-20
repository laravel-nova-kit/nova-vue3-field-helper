import { Field } from '@/types';
import { computed, Ref } from 'vue';

export function useFieldLabel<F extends Field>(
  field: Ref<F>,
  fieldName?: Ref<string | null>
) {
  const fieldLabel = computed(() => {
    if (fieldName && fieldName.value === '') {
      return fieldName.value;
    }
    return fieldName?.value || field.value.name || field.value.attribute;
  });

  return { fieldLabel };
}
