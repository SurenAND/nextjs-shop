import { BASE_URL } from "../constant/url";
import { Product } from "../types/types";

type User = {
  id: string;
  email: string;
  userName: string;
  password: string;
};

export const postUserData = async (user: User) => {
  const data = await fetch(`${BASE_URL}/users`, {
    signal: AbortSignal.timeout(6000),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  });
  return data.json();
};

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
