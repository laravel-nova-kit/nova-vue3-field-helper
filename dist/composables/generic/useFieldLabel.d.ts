import { Field } from '@/types';
import { Ref } from 'vue';
export declare function useFieldLabel<F extends Field>(field: Ref<F>, fieldName?: Ref<string | null>): {
    fieldLabel: import("vue").ComputedRef<string>;
};
