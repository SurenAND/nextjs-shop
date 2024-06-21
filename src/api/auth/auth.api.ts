import api from "../config.api";
import { UserDataType } from "./auth.type";

export const getUserApi = async (email: string, password: string) => {
  const response = await api.get(`/users?email=${email}&password=${password}`);
  return response.data;
};

export const createUserApi = async (user: UserDataType) => {
  const response = await api.post("/users", user);
  return response.data;
};
