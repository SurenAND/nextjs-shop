import { BASE_URL } from "@/src/constant/url";

export const deleteData = async (id: string) => {
  const data = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.json();
};
