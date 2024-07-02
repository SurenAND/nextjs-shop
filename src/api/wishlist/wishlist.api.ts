import api from "../config.api";
import { wishlistDataType } from "./wishlist.type";

export const getWishlistProductByUserIdApi = async (
  productId: string,
  userId: string
) => {
  const response = await api.get(
    `/wishlist?productId=${productId}&userId=${userId}`
  );
  return response.data;
};

export const addProductToWishlistApi = async (product: wishlistDataType) => {
  const response = await api.post("/wishlist", product);
  return response.data;
};

export const deleteProductFromWishlistApi = async (id: string) => {
  const response = await api.delete(`/wishlist/${id}`);
  return response.data;
};
