import { BASE_URL } from "@/src/constant/url";

export const getProductById = async (productId: string) => {
  const data = await fetch(`${BASE_URL}/products/${productId}`);
  return data.json();
};
