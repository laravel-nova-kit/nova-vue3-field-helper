import { Ref } from 'vue';
import { Field } from "../../types";
export declare function useFieldHelpText<F extends Field>(showHelpText: Ref<boolean>, field: Ref<F>): {
    helpText: import("vue").ComputedRef<string | undefined>;
    shouldShowHelpText: import("vue").ComputedRef<boolean>;
};
