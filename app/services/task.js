import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default {
  get: body => apiClient.get(ApiConfig.TASK_LIST, body),
  create: (body, config = {}) =>
    apiClient.post(ApiConfig.TASK_CREATE, body, config),
  delete: (body, config = {}) =>
    apiClient.post(ApiConfig.TASK_DELETE, body, config),
  complete: (body, config = {}) =>
    apiClient.post(ApiConfig.TASK_COMPLETE, body, config),
};
