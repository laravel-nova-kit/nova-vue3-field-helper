declare module '*.vue';

type NovaType = import('./types/nova').Nova;

declare const Nova: NovaType;

declare module 'form-backend-validation' {
  class Errors {
    constructor(errors: { [field: string]: string[] });
    has: (field: string) => boolean;
    first: (field: string) => string;
    get: (field: string) => string[];
    any: (keys?: string[]) => boolean;
    record: (errors: { [field: string]: string[] }) => void;
    clear: (field: string | null) => void;
  }
}
