import { computed, inject, Ref } from 'vue';
import { Field } from '@/types';

export function useRepeaterField<F extends Field<DV>, DV extends string | Blob>(
  field: Ref<F>
) {
  const viaParent = inject<Ref<string> | null>('viaParent', null);
  const index = inject<Ref<number> | null>('index', null);

  const nestedValidationKey = computed(() => {
    if (!viaParent || !index) {
      return null;
    }
    return `${viaParent.value}.${index.value}.fields.${field.value.attribute}`;
  });

  const nestedAttribute = computed(() => {
    if (!viaParent || !index) {
      return null;
    }
    return `${viaParent.value}[${index.value}][${field.value.attribute}]`;
  });

  return { viaParent, index, nestedValidationKey, nestedAttribute };
}
