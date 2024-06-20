import { useQuery } from "react-query";
import { getAllProducts, getProductById } from "../services/globalApi";
import { ProductDataType } from "../types/types";

export const useGetProductById = (productId: string) => {
  return useQuery<ProductDataType>({
    queryKey: ["products-by-id", productId],
    queryFn: () => getProductById(productId),
    refetchOnMount: "always",
  });
};

export const useGetAllProducts = () => {
  return useQuery<ProductDataType>({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
};
