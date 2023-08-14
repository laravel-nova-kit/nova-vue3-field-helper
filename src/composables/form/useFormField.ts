import { computed, Ref, toRefs } from 'vue';
import { Field, FieldProps } from '@/types';
import {
  useFieldLabel,
  useFieldVisibilityEvent,
  useDependentFormField,
  useFieldFill,
  useFieldHelpText,
  useFieldValidationErrors,
  useFieldValue,
} from '@/composables';
import { FieldEmitFn } from '@/types';

export function useFormField<
  P extends FieldProps<F>,
  F extends Field<DV>,
  DV extends string | Blob,
  V,
>(
  props: P,
  hydrate: (field: F) => V,
  dehydrate: (value: V) => DV,
  emit: FieldEmitFn,
  fieldName?: Ref<string | null>,
  showErrors?: Ref<boolean>,
  fill?: (formData: FormData) => void
) {
  const {
    field,
    errors: propsErrors,
    formUniqueId,
    showHelpText,
    resourceName,
    resourceId,
    viaRelationship,
    viaResource,
    viaResourceId,
    relatedResourceName,
    relatedResourceId,
    syncEndpoint,
  } = toRefs(props);

  const { value, initialValue, emitValueChange } = useFieldValue<F, V, DV>(
    field,
    formUniqueId,
    hydrate,
    dehydrate
  );

  const { currentField } = useDependentFormField<F, V, DV>(
    value,
    initialValue,
    dehydrate,
    field,
    formUniqueId,
    resourceName,
    resourceId,
    viaRelationship,
    viaResource,
    viaResourceId,
    relatedResourceName,
    relatedResourceId,
    syncEndpoint
  );

  useFieldFill<F>(currentField, (formData) => {
    if (currentField.value.visible) {
      formData.append(currentField.value.attribute, dehydrate(value.value));
      if (fill) {
        fill(formData);
      }
    }
  });

  const attribute = computed(() => currentField.value.attribute);
  const visible = computed(() => currentField.value.visible);
  useFieldVisibilityEvent(emit, attribute, visible);

  const { helpText, shouldShowHelpText } = useFieldHelpText<F>(
    showHelpText,
    currentField
  );

  const { errors, firstError, hasError, shouldShowErrors } =
    useFieldValidationErrors<F>(propsErrors, field, showErrors);

  const { fieldLabel } = useFieldLabel<F>(currentField, fieldName);

  return {
    value,
    currentField,
    fieldLabel,
    helpText,
    shouldShowHelpText,
    emitValueChange,
    errors,
    firstError,
    hasError,
    shouldShowErrors,
  };
}
