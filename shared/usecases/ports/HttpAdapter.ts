import { AxiosRequestConfig } from 'axios';

export default interface HttpAdapter {
  get(
    url: string,
    options: {
      headers?: {
        [field: string]: string | number | boolean;
      };
      params?: {
        [field: string]: string | number | boolean | object | undefined;
      };
    },
  ): Promise<object | object[]>;

  post(
    url: string,
    body?: object,
    options?: AxiosRequestConfig,
  ): // requestConfig?: AxiosRequestConfig,
  Promise<object | object[]>;
}
