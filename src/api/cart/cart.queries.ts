import { useMutation, useQueryClient } from "react-query";
import { addProductToCartApi } from "./cart.api";
import { CartDataType } from "./cart.type";

export const useAddProductToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: CartDataType) => addProductToCartApi(product),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};
