import { BASE_URL } from "@/src/constant/url";
import { Product } from "../hooks/types";

export const postProductData = async (product: Product) => {
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
