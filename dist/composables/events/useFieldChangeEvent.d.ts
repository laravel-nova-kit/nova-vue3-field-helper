import { Ref } from 'vue';
export declare function useFieldChangeEvent<V = string>(attribute: Ref<string>, formUniqueId: Ref<string | undefined>): {
    emitFieldValueChange: (value: V) => void;
};
