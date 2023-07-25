import { Ref } from 'vue';
import { Field } from "../../types";
export declare function useFieldValue<F extends Field<DV>, V, DV extends string | Blob>(field: Ref<F>, formUniqueId: Ref<string | undefined>, hydrate: (field: F) => V, dehydrate?: null | ((value: V) => DV)): {
    value: Ref<V>;
    initialValue: import("vue").ComputedRef<V>;
    emitValueChange: (newValue: V) => void;
};
