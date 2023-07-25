import { Ref } from 'vue';
import { Field } from "../../types";
export declare function useFieldValidationErrors<F extends Field>(errorsObj: Ref<{
    errors: {
        [field: string]: string[];
    };
}>, field: Ref<F>, showErrors?: Ref<boolean>): {
    errors: import("vue").ComputedRef<string[]>;
    hasError: import("vue").ComputedRef<boolean>;
    firstError: import("vue").ComputedRef<string | null>;
    shouldShowErrors: import("vue").ComputedRef<boolean>;
};
