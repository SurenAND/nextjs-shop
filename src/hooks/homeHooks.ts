import { useQuery } from "react-query";
import { CategoriesDataType } from "../types/types";
import { getCategoriesData } from "../services/homeApi";

export const useGetCategories = () => {
  return useQuery<CategoriesDataType[]>({
    queryKey: ["categories"],
    queryFn: () => getCategoriesData(),
  });
};
