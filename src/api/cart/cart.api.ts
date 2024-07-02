import api from "../config.api";
import { CartDataType } from "./cart.type";

export const addProductToCartApi = async (product: CartDataType) => {
  const response = await api.post("/cart", product);
  return response.data;
};
