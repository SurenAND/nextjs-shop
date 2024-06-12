import { useQuery } from "react-query";
import { getCategoriesData } from "../services/getData";
import { CategoriesDataType } from "./types";

export const useGetCategories = () => {
  return useQuery<CategoriesDataType[]>({
    queryKey: ["categories"],
    queryFn: () => getCategoriesData(),
  });
};
