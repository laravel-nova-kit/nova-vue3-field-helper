import { Ref } from 'vue';
import { Field } from '@/types';
export declare function useDependentFormField<F extends Field<DV>, V, DV extends string | Blob>(currentValue: Ref<V>, initialValue: Ref<V>, dehydrate: (value: V) => DV, field: Ref<F>, formUniqueId: Ref<string>, resourceName: Ref<string>, resourceId: Ref<number | string>, viaRelationship?: Ref<string | undefined>, viaResource?: Ref<string | undefined>, viaResourceId?: Ref<number | string | undefined>, relatedResourceName?: Ref<string | undefined>, relatedResourceId?: Ref<number | string | undefined>, syncEndpoint?: Ref<string | undefined>): {
    currentField: Ref<F>;
};
