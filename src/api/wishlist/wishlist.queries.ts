import { useMutation, useQuery, useQueryClient } from "react-query";
import { wishlistDataType } from "./wishlist.type";
import {
  addProductToWishlistApi,
  deleteProductFromWishlistApi,
  getWishlistProductByUserIdApi,
} from "./wishlist.api";

export const useGetWishlistProductByUserId = (
  productId: string,
  userId: string
) => {
  return useQuery<wishlistDataType[]>({
    queryKey: ["wishlist", "single", productId, userId],
    queryFn: () => getWishlistProductByUserIdApi(productId, userId),
    refetchOnMount: "always",
  });
};

export const useAddProductToWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: wishlistDataType) => addProductToWishlistApi(product),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
};

export const useDeleteProductFromWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProductFromWishlistApi(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
};
