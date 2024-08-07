import { useMutation, useQuery, useQueryClient } from "react-query";
import { ProductDataType } from "@/src/api/product/product.type";
import {
  createProductApi,
  deleteProductApi,
  getProductByCategoryApi,
  getProductByIdApi,
  getProductByPriceApi,
  getProductListApi,
  updateProductApi,
} from "@/src/api/product/product.api";

export const useGetProducts = () => {
  return useQuery<ProductDataType>({
    queryKey: ["products"],
    queryFn: () => getProductListApi(),
    refetchOnMount: "always",
  });
};

export const useGetProductById = (productId: string) => {
  return useQuery<ProductDataType>({
    queryKey: ["products", "single", productId],
    queryFn: () => getProductByIdApi(productId),
    refetchOnMount: "always",
    enabled: !!productId,
  });
};

export const useGetProductByCategory = (category: string) => {
  return useQuery<ProductDataType[]>({
    queryKey: ["products", "category", category],
    queryFn: () => getProductByCategoryApi(category),
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: ProductDataType) => createProductApi(newProduct),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProductApi(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProduct: ProductDataType) => updateProductApi(newProduct),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["products", "category", data.category],
      });
      queryClient.invalidateQueries({
        queryKey: ["products", "single", data.id],
      });
    },
  });
};

export const useGetProductByPrice = (
  category: string,
  min: number,
  max: number
) => {
  return useQuery<ProductDataType[]>({
    queryKey: ["products", category, min, max],
    queryFn: () => getProductByPriceApi(category, min, max),
    enabled: !!min && !!max && !!category,
    refetchOnMount: "always",
  });
};
