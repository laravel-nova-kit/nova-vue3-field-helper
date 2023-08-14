import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

export type Nova = Omit<import('laravel-nova-types').Nova, 'request'> & {
  request<
    C extends AxiosRequestConfig<D> | undefined = undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T = any,
    R = AxiosResponse<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    D = any,
  >(
    config?: C
  ): C extends undefined ? Axios : Promise<R>;
};
