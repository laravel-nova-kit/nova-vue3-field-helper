import { Ref } from 'vue';
export declare function useFieldValueEvent<V = string>(attribute: Ref<string>, formUniqueId: Ref<string | undefined>, listenToValueChanges?: (value: V) => void): {
    emitValueChange: (newValue: V) => void;
};
