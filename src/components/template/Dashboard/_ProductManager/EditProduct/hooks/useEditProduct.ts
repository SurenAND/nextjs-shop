import { useMutation, useQueryClient } from "react-query";
import { ProductDataType } from "./types";
import { editProductById } from "../services/getProductById";

export const useEditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ newProduct }: { newProduct: ProductDataType }) =>
      editProductById(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      queryClient.invalidateQueries(["products-by-category"]);
    },
  });
};
