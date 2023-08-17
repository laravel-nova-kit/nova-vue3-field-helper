import { computed, Ref } from 'vue';
import { Errors } from 'form-backend-validation';
import { Field } from '@/types';
import { useRepeaterField } from '@/composables/repeater';

export function useFieldValidationErrors<F extends Field>(
  errorsObj: Ref<{
    errors: { [field: string]: string[] };
  }>,
  field: Ref<F>,
  showErrors?: Ref<boolean>
) {
  const { nestedValidationKey } = useRepeaterField(field);

  const validationKey = computed(
    () => nestedValidationKey.value ?? field.value.validationKey
  );

  const allErrors = computed(() => new Errors(errorsObj.value.errors ?? {}));

  const errors = computed(() => {
    return allErrors.value.get(validationKey.value);
  });

  const hasError = computed(() => {
    return allErrors.value.has(validationKey.value);
  });

  const firstError = computed(() => {
    if (!hasError.value) {
      return null;
    }
    return allErrors.value.first(validationKey.value);
  });

  const shouldShowErrors = computed(() => {
    return (!showErrors || showErrors.value) && hasError.value;
  });

  return {
    errors,
    hasError,
    firstError,
    shouldShowErrors,
  };
}
