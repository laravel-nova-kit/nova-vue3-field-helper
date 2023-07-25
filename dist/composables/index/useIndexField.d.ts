import { Field, FieldProps } from "../../types";
export declare function useIndexField<P extends FieldProps<F>, F extends Field<DV>, DV extends string | Blob, V>(props: P, hydrate: (field: F) => V): {
    value: import("vue").Ref<V>;
};
