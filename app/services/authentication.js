import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default {
  login: body => apiClient.post(ApiConfig.LOGIN, body),
  register: body => apiClient.post(ApiConfig.REGISTER, body),
};
