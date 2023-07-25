import { Ref } from 'vue';
export type VisibilityEmitFn = {
    (event: 'field-shown' | 'field-hidden', attribute: string): void;
};
export declare function useFieldVisibilityEvent(emit: VisibilityEmitFn, attribute: Ref<string>, visibile: Ref<boolean>): void;
