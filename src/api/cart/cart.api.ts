import api from '../config.api';
import { CartDataType } from './cart.type';

export const getCartByIdApi = async (id: string) => {
  const response = await api.get(`/cart?userId=${id}`);
  return response.data;
};

export const deleteCartApi = async (id: string) => {
  const response = await api.delete(`/cart/${id}`);
  return response.data;
};

export const updateCartApi = async (productInCart: CartDataType) => {
  const response = await api.put(`/cart/${productInCart.id}`, productInCart);
  return response.data;
};
