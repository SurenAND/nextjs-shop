import { BASE_URL } from "../constant/url";
import { UserDataType } from "../types/types";

export const getUserData = async (email: string, password: string) => {
  const data = await fetch(
    `${BASE_URL}/users?email=${email}&password=${password}`
  );
  return data.json();
};

export const postUserData = async (user: UserDataType) => {
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
