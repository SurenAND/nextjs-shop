import { useQuery } from "react-query";
import { ProductDataType } from "./types";
import { getDataByCategory } from "../services/getData";

export const useGetProductByCategory = (category: string) => {
  return useQuery<ProductDataType[]>({
    queryKey: ["products-by-category"],
    queryFn: () => getDataByCategory(category),
  });
};
