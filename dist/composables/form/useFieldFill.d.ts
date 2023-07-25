import { Ref } from 'vue';
import { Field } from "../../types";
export declare function useFieldFill<F extends Field>(field: Ref<F>, fill: (formData: FormData) => void): void;
