import { useQuery } from "react-query";
import { ProductDataType } from "../types/types";
import { getDataByCategory } from "../services/categoriesApi";

export const useGetProductByCategory = (category: string) => {
  return useQuery<ProductDataType[]>({
    queryKey: ["products-by-category"],
    queryFn: () => getDataByCategory(category),
  });
};
