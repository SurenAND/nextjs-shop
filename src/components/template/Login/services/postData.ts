import { BASE_URL } from "@/src/constant/url";
import { User } from "../hooks/types";

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
