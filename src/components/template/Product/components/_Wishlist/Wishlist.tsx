import { IconButton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUserContext } from "@/src/context/authContext";
import { useGetProductById } from "@/src/api/product/product.queries";
import { toast } from "sonner";
import { generate_token } from "@/src/lib/helper";
import {
  useAddProductToWishlist,
  useDeleteProductFromWishlist,
  useGetWishlistProductByUserId,
} from "@/src/api/wishlist/wishlist.queries";
import { ProductDataType } from "@/src/api/product/product.type";
import { wishlistDataType } from "@/src/api/wishlist/wishlist.type";

type wishlistType = {
  data: ProductDataType;
  wishlistData: wishlistDataType[] | undefined;
};

function Wishlist({ data, wishlistData }: wishlistType) {
  const { state } = useUserContext();
  const { mutate: deleteFromWishlist } = useDeleteProductFromWishlist();
  const { mutate: mutateWishlist } = useAddProductToWishlist();
  const userId = state.userId;

  function addToWishlist() {
    if (data && state.isLogin) {
      const productId = data.id;
      const product = {
        ...data,
        userId,
        productId,
        id: generate_token(5),
      };
      mutateWishlist(product);
      toast.success("Product Added to Wishlist", {
        className: "bg-green-400 text-white",
        position: "top-left",
      });
    }
  }

  function removeFromWishlist() {
    if (wishlistData && state.isLogin) {
      deleteFromWishlist(wishlistData[0].id);
      toast.success("Product Removed From Wishlist", {
        className: "bg-green-400 text-white",
        position: "top-left",
      });
    }
  }

  return (
    <Stack direction="row" alignItems="center" mb={3}>
      {wishlistData && wishlistData.length > 0 ? (
        <IconButton aria-label="wishlist" onClick={removeFromWishlist}>
          <FavoriteIcon style={{ color: red[500] }} />
        </IconButton>
      ) : (
        <IconButton aria-label="wishlist" onClick={addToWishlist}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
      <Typography variant="body1">Add To Wishlist</Typography>
    </Stack>
  );
}

export default Wishlist;
