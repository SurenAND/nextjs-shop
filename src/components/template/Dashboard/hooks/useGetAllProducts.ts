import { useQuery } from "react-query";
import { ProductDataType } from "./types";
import { getAllProducts } from "../services/getAllProducts";

export const useGetAllProducts = () => {
  return useQuery<ProductDataType>({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
};
