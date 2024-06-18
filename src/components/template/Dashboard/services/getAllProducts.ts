import { BASE_URL } from "@/src/constant/url";

export const getAllProducts = async () => {
  const data = await fetch(`${BASE_URL}/products`);
  return data.json();
};
