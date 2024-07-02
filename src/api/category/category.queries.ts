import { useQuery } from "react-query";
import { CategoriesDataType } from "@/src/api/category/category.type";
import { getCategoriesApi } from "@/src/api/category/category.api";

export const useGetCategories = () => {
  return useQuery<CategoriesDataType[]>({
    queryKey: ["categories"],
    queryFn: () => getCategoriesApi(),
  });
};
