import { BASE_URL } from "@/src/constant/url";
import { ProductDataType } from "../hooks/types";

export const editProductById = async (product: ProductDataType) => {
  const data = await fetch(`${BASE_URL}/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return data.json();
};

export const getProductById = async (productId: string) => {
  const data = await fetch(`${BASE_URL}/products/${productId}`);
  return data.json();
};
