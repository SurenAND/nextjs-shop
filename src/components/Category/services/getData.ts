import { BASE_URL } from "@/src/constant/url";

export const getCategoriesData = async () => {
  const data = await fetch(`${BASE_URL}/categories`);
  return data.json();
};
