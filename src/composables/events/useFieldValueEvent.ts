import { onBeforeUnmount, onMounted, Ref } from 'vue';
import { useFieldAttributeEventName } from '@/composables';

export function useFieldValueEvent<V = string>(
  attribute: Ref<string>,
  formUniqueId: Ref<string | undefined>,
  listenToValueChanges?: (value: V) => void
) {
  const changeValueEvent = useFieldAttributeEventName(
    attribute,
    'value',
    formUniqueId
  );

  onMounted(() => {
    if (listenToValueChanges) {
      Nova.$on(changeValueEvent.value, listenToValueChanges);
    }
  });

  onBeforeUnmount(() => {
    if (listenToValueChanges) {
      Nova.$off(changeValueEvent.value, listenToValueChanges);
    }
  });

  const emitValueChange = (newValue: V) => {
    Nova.$emit(changeValueEvent.value, newValue);
  };

  return {
    emitValueChange,
  };
}
