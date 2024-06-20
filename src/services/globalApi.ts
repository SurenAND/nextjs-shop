import { BASE_URL } from "../constant/url";

export const getProductById = async (productId: string) => {
  const data = await fetch(`${BASE_URL}/products/${productId}`);
  return data.json();
};

export const getAllProducts = async () => {
  const data = await fetch(`${BASE_URL}/products`);
  return data.json();
};
