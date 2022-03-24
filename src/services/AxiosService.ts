import { AxiosInstance } from 'axios';
import { AxiosFactory } from './AxiosFactory';

export class AxiosService {
  protected axios: AxiosInstance;

  constructor() {
    this.axios = AxiosFactory.getInstance();
  }
}

export default AxiosService;
