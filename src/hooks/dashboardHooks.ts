import { useMutation, useQueryClient } from "react-query";
import { ProductDataType } from "../types/types";
import {
  deleteData,
  editProductById,
  postProductData,
} from "../services/dashboardApi";

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: ProductDataType) => postProductData(newProduct),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products-by-category"],
      });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteData(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
};

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
