import api from '../config.api';

export const getBrandsApi = async () => {
  const response = await api.get('/brands');
  return response.data;
};
