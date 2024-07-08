import api from '@/src/api/config.api';
import { UserDataType } from '@/src/api/auth/auth.type';

export const getUserApi = async (email: string, password: string) => {
  const response = await api.get(`/users?email=${email}&password=${password}`);
  return response.data;
};

export const createUserApi = async (user: UserDataType) => {
  const response = await api.post('/users', user);
  return response.data;
};

export const getUsersApi = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const updateUserApi = async (user: UserDataType) => {
  const response = await api.put(`/users/${user.id}`, user);
  return response.data;
};

export const getUserByIdApi = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const deleteUserApi = async (id: string) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
