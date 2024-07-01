import api from "@/src/api/config.api";
import { OrderDataType } from "@/src/api/orders/orders.type";

export const getOrdersApi = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const getOrderByIdApi = async (orderId: string) => {
  const response = await api.get(`/orders/${orderId}`);
  return response.data;
};

export const updateOrderApi = async (order: OrderDataType) => {
  const response = await api.put(`/orders/${order.id}`, order);
  return response.data;
};

export const addOrderApi = async (orders: OrderDataType) => {
  const response = await api.post("/orders", orders);
  return response.data;
};
