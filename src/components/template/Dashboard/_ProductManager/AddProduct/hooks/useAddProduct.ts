import { useMutation, useQueryClient } from "react-query";
import { postProductData } from "../services/postData";
import { Product } from "./types";

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: Product) => postProductData(newProduct),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products-by-category"],
      });
    },
  });
};
