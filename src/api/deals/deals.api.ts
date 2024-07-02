import api from '../config.api';

export const getDealsApi = async () => {
  const response = await api.get('/deals');
  return response.data;
};
