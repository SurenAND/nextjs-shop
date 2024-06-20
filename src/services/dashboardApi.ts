import { BASE_URL } from "../constant/url";
import { ProductDataType } from "../types/types";

export const postProductData = async (product: ProductDataType) => {
  const data = await fetch(`${BASE_URL}/products`, {
    signal: AbortSignal.timeout(6000),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(product),
  });
  return data.json();
};

export const deleteData = async (id: string) => {
  const data = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.json();
};

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
