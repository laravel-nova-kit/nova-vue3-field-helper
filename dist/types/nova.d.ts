import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
export type Nova = Omit<import('laravel-nova-types').Nova, 'request'> & {
    request<C extends AxiosRequestConfig<D> | undefined = undefined, T = any, R = AxiosResponse<T>, D = any>(config?: C): C extends undefined ? Axios : Promise<R>;
};
