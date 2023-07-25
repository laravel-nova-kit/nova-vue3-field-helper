import { Ref } from 'vue';
export declare function useFormEditMode(resourceId: Ref<string | number>, relatedResourceName?: Ref<string | undefined>, relatedResourceId?: Ref<string | number | undefined>): {
    pivot: import("vue").ComputedRef<boolean>;
    editMode: import("vue").ComputedRef<"update-attached" | "attach" | "update" | "create">;
};
