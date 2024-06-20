import { BASE_URL } from "../constant/url";

export const getDataByCategory = async (category: string) => {
  const data = await fetch(`${BASE_URL}/products?category=${category}`);
  return data.json();
};
