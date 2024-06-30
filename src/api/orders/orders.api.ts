import api from "../config.api";
import { OrderDataType } from "./orders.type";

export const getOrdersApi = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const updateOrderApi = async (order: OrderDataType) => {
  const response = await api.put(`/orders/${order.id}`, order);
  return response.data;
};
