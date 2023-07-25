export interface Field<DV extends string | Blob = string | Blob> {
    attribute: string;
    component: string;
    dependentComponentKey?: string;
    dependsOn?: {
        [name: string]: unknown;
    };
    displayedAs?: string | Blob;
    fullWidth: boolean;
    helpText?: string;
    indexName?: string;
    name?: string;
    nullable: boolean;
    panel: string;
    placeholder?: string;
    prefixComponent: boolean;
    readonly: boolean;
    required: boolean;
    sortable: boolean;
    sortableUriKey: string;
    stacked: boolean;
    textAlign: string;
    uniqueKey: string;
    usesCustomizedDisplay: boolean;
    validationKey: string;
    value: DV;
    visible: boolean;
    wrapping: boolean;
    [key: string]: unknown;
    fill: (formData: FormData) => void;
}
