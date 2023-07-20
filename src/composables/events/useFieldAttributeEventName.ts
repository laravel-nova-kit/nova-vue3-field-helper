import { computed, Ref } from 'vue';
import isNil from 'lodash/isNil';

export const getFieldAttributeEventName = (
  attribute: string,
  event: 'value' | 'change',
  formUniqueId?: string
) =>
  !isNil(formUniqueId) && formUniqueId !== ''
    ? `${formUniqueId}-${attribute}-${event}`
    : `${attribute}-${event}`;

export function useFieldAttributeEventName(
  attribute: Ref<string>,
  event: 'value' | 'change',
  formUniqueId?: Ref<string | undefined>
) {
  return computed(() =>
    getFieldAttributeEventName(attribute.value, event, formUniqueId?.value)
  );
}
