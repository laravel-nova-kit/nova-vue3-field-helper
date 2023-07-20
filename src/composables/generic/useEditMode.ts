import { computed, Ref } from 'vue';
import isNil from 'lodash/isNil';

export function useEditMode(
  resourceId: Ref<string | number>,
  relatedResourceName?: Ref<string | undefined>,
  relatedResourceId?: Ref<string | number | undefined>
) {
  const pivot = computed(() => {
    return (
      !isNil(relatedResourceName?.value) && relatedResourceName?.value !== ''
    );
  });
  const editMode = computed(() => {
    if (
      !isNil(relatedResourceName?.value) &&
      relatedResourceName?.value !== ''
    ) {
      if (!isNil(relatedResourceId?.value) && relatedResourceId?.value !== '') {
        return 'update-attached';
      } else {
        return 'attach';
      }
    } else {
      if (!isNil(resourceId?.value) && resourceId?.value !== '') {
        return 'update';
      } else {
        return 'create';
      }
    }
  });

  return { pivot, editMode };
}
