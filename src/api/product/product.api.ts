import api from "../config.api";
import { ProductDataType } from "./product.type";

export const getProductByCategoryApi = async (category: string) => {
  const response = await api.get(`/products?category=${category}`);
  return response.data;
};

export const createProductApi = async (product: ProductDataType) => {
  const response = await api.post("/product", product);
  return response.data;
};

export const deleteProductApi = async (id: string) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

export const updateProductApi = async (product: ProductDataType) => {
  const response = await api.put(`/products/${product.id}`, product);
  return response.data;
};

export const getProductByIdApi = async (productId: string) => {
  const response = await api.get(`/products/${productId}`);
  return response.data;
};

export const getProductListApi = async () => {
  const response = await api.get("/products");
  return response.data;
};
