import { Ref } from 'vue';
export declare const getFieldAttributeEventName: (attribute: string, event: 'value' | 'change', formUniqueId?: string) => string;
export declare function useFieldAttributeEventName(attribute: Ref<string>, event: 'value' | 'change', formUniqueId?: Ref<string | undefined>): import("vue").ComputedRef<string>;
