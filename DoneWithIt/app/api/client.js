import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.100.65:9000/api',
});

export default apiClient;
