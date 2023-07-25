import { Ref } from 'vue';
import { Field, FieldProps } from '@/types';
import { FieldEmitFn } from '@/types';
export declare function useDetailField<P extends FieldProps<F>, F extends Field<DV>, DV extends string | Blob, V>(props: P, hydrate: (field: F) => V, emit: FieldEmitFn, fieldName?: Ref<string | null>): {
    value: Ref<V>;
    fieldLabel: import("vue").ComputedRef<string>;
};
