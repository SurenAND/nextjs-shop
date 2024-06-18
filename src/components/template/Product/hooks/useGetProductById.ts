import { useQuery } from "react-query";
import { ProductDataType } from "./types";
import { getProductById } from "../services/getData";

export const useGetProductById = (productId: string) => {
  return useQuery<ProductDataType>({
    queryKey: ["products-by-id"],
    queryFn: () => getProductById(productId),
    refetchOnMount: "always",
  });
};
