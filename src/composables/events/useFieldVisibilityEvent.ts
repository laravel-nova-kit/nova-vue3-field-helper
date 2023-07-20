import { Ref, watch } from 'vue';

export type VisibilityEmitFn = {
  (event: 'field-shown' | 'field-hidden', attribute: string): void;
};

export function useFieldVisibilityEvent(
  emit: VisibilityEmitFn,
  attribute: Ref<string>,
  visibile: Ref<boolean>
) {
  const emitFieldVisibilityChange = (visibility: boolean) => {
    emit(visibility ? 'field-shown' : 'field-hidden', attribute.value);
  };

  watch(
    () => visibile.value,
    (actual, prev) => {
      if (actual !== prev) {
        emitFieldVisibilityChange(actual);
      }
    }
  );
}
