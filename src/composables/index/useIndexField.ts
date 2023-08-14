import { toRefs } from 'vue';
import { Field, FieldProps } from '@/types';
import { useFieldValue } from '@/composables';

export function useIndexField<
  P extends FieldProps<F>,
  F extends Field<DV>,
  DV extends string | Blob,
  V,
>(props: P, hydrate: (field: F) => V) {
  const { field, formUniqueId } = toRefs(props);

  const { value } = useFieldValue<F, V, DV>(field, formUniqueId, hydrate);

  return {
    value,
  };
}
