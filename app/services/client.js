import ApiConfig from 'app/config/api-config';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: ApiConfig.BASE_URL,
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
