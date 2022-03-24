import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class AxiosFactory {
  private static headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
  };

  public static getUrl(): string {
    return process.env.API_URL || 'http://localhost:5000/api';
  }

  public static getInstance(): AxiosInstance {
    return AxiosFactory.createAxiosInstance();
  }

  private static requestInterceptor(request: AxiosRequestConfig): AxiosRequestConfig {
    const finalRequest = {
      ...request,
      data: request,
    };
    return finalRequest;
  }

  private static responseIntercerptor(response: AxiosResponse): any {
    let responseData;
    try {
      responseData = response.data;
    } catch (e) {
      console.error('Unexpected response error', e);
    }
    return responseData;
  }

  private static responseErrorInterceptor(error: any) {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    const objectError = { ...error?.response?.data ?? error, statusCode: error?.response?.status };
    return Promise.reject(objectError);
  }

  private static createAxiosInstance = (): AxiosInstance => {
    const instance = axios.create({
      baseURL: AxiosFactory.getUrl(),
      timeout: 15000,
      headers: AxiosFactory.headers,
    });

    instance.interceptors.request.use(AxiosFactory.requestInterceptor);
    instance.interceptors.response.use(AxiosFactory.responseIntercerptor, AxiosFactory.responseErrorInterceptor);
    return instance;
  };
}

export default AxiosFactory;
