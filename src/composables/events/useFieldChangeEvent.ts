import { Ref } from 'vue';
import { useFieldAttributeEventName } from '@/composables';

export function useFieldChangeEvent<V = string>(
  attribute: Ref<string>,
  formUniqueId: Ref<string | undefined>
) {
  const fieldAttributeChangeEventName = useFieldAttributeEventName(
    attribute,
    'change',
    formUniqueId
  );

  const fieldAttributeChangeEventNameWithoutFormUniqueId =
    useFieldAttributeEventName(attribute, 'change');

  const emitFieldValueChange = (value: V) => {
    Nova.$emit(fieldAttributeChangeEventNameWithoutFormUniqueId.value, value);

    if (
      fieldAttributeChangeEventName !==
      fieldAttributeChangeEventNameWithoutFormUniqueId
    ) {
      Nova.$emit(fieldAttributeChangeEventName.value, value);
    }
  };

  return { emitFieldValueChange };
}
