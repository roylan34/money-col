import axios, { AxiosRequestConfig } from 'axios';

import HttpAdapter from '../../usecases/ports/HttpAdapter';

class HttpAdapterAxiosImpl implements HttpAdapter {
  get = async (
    url: string,
    options: {
      headers?: {
        [field: string]: string | number | boolean;
      };
      params?: {
        [field: string]: string | number | boolean | object;
      };
    },
  ): Promise<object | object[]> => {
    const { data } = await axios.get(url, options);
    return data;
  };

  post = async (
    url: string,
    body?: object,
    options?: AxiosRequestConfig,
  ): Promise<object | object[]> => {
    const { data } = await axios.post(url, body, options);
    return data;
  };
}

export default HttpAdapterAxiosImpl;
