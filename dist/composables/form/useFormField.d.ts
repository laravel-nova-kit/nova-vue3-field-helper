import { Ref } from 'vue';
import { Field, FieldProps } from "../../types";
import { FieldEmitFn } from "../../types";
export declare function useFormField<P extends FieldProps<F>, F extends Field<DV>, DV extends string | Blob, V>(props: P, hydrate: (field: F) => V, dehydrate: (value: V) => DV, emit: FieldEmitFn, fieldName?: Ref<string | null>, showErrors?: Ref<boolean>, fill?: (formData: FormData) => void): {
    value: Ref<V>;
    currentField: Ref<F>;
    fieldLabel: import("vue").ComputedRef<string>;
    helpText: import("vue").ComputedRef<string | undefined>;
    shouldShowHelpText: import("vue").ComputedRef<boolean>;
    emitValueChange: (newValue: V) => void;
    errors: import("vue").ComputedRef<string[]>;
    firstError: import("vue").ComputedRef<string | null>;
    hasError: import("vue").ComputedRef<boolean>;
    shouldShowErrors: import("vue").ComputedRef<boolean>;
};
