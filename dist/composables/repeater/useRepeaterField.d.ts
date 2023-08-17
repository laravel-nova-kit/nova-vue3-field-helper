import { Ref } from 'vue';
import { Field } from "../../types";
export declare function useRepeaterField<F extends Field<DV>, DV extends string | Blob>(field: Ref<F>): {
    viaParent: Ref<string> | null;
    index: Ref<number> | null;
    nestedValidationKey: import("vue").ComputedRef<string | null>;
    nestedAttribute: import("vue").ComputedRef<string | null>;
};
