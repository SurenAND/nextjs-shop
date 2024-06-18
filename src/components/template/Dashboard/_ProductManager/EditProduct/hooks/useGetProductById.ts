import { useQuery } from "react-query";
import { ProductDataType } from "./types";
import { getProductById } from "../services/getProductById";

export const useGetProductById = (productId: string) => {
  return useQuery<ProductDataType>({
    queryKey: ["products-by-id", productId],
    queryFn: () => getProductById(productId),
    refetchOnMount: "always",
  });
};
