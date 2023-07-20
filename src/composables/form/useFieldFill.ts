import { watch, Ref } from 'vue';
import { Field } from '@/types';

export function useFieldFill<F extends Field>(
  field: Ref<F>,
  fill: (formData: FormData) => void
) {
  watch(
    field.value,
    (f) => {
      f.fill = fill;
    },
    { immediate: true }
  );
}
