import { Field } from '@/types';
export interface FieldProps<F extends Field> {
    index: number;
    errors: {
        errors: {
            [field: string]: string[];
        };
    };
    resourceId: number | string;
    resourceName: string;
    relatedResourceName?: string;
    relatedResourceId?: number | string;
    field: F;
    viaResource?: string;
    viaResourceId?: number | string;
    viaRelationship?: string;
    shownViaNewRelationModal: boolean;
    formUniqueId: string;
    mode: 'form' | 'modal' | 'action-modal' | 'action-fullscreen';
    showHelpText: boolean;
    syncEndpoint?: string;
}
