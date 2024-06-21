import { useQuery } from "react-query";
import { CategoriesDataType } from "./category.type";
import { getCategoriesApi } from "./category.api";

export const useGetCategories = () => {
  return useQuery<CategoriesDataType[]>({
    queryKey: ["categories"],
    queryFn: () => getCategoriesApi(),
  });
};
