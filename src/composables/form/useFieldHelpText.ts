import { computed, Ref } from 'vue';
import { Field } from '@/types';

export function useFieldHelpText<F extends Field>(
  showHelpText: Ref<boolean>,
  field: Ref<F>
) {
  const helpText = computed(() => field.value.helpText);

  const shouldShowHelpText = computed(
    () => showHelpText.value && (helpText.value?.length ?? 0) > 0
  );

  return { helpText, shouldShowHelpText };
}
