import api from "../config.api";

export const getCategoriesApi = async () => {
  const response = await api.get("/categories");
  return response.data;
};

