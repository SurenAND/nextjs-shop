import { BASE_URL } from "../constant/url";

export const getData = async (category: string) => {
  const data = await fetch(`${BASE_URL}/products?category=${category}`);
  return data.json();
};

export const getSingleData = async (id: string) => {
  const data = await fetch(`${BASE_URL}/products/${id}`);
  return data.json();
};

export const getCategoriesData = async () => {
  const data = await fetch(`${BASE_URL}/categories`);
  return data.json();
};

export const getUserData = async (email: string, password: string) => {
  const data = await fetch(
    `${BASE_URL}/users?email=${email}&password=${password}`
  );
  return data.json();
};
