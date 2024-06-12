import { BASE_URL } from "../constant/url";

export const getUserData = async (email: string, password: string) => {
  const data = await fetch(
    `${BASE_URL}/users?email=${email}&password=${password}`
  );
  return data.json();
};
