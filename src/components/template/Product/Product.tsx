import { useGetProductById } from "@/src/api/product/product.queries";
import ProductRating from "@/src/components/template/Product/components/_ProductRating/ProductRating";
import ProductSizes from "@/src/components/template/Product/components/_ProductSizes/ProductSizes";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { purple, red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useAddProductToCart } from "@/src/api/cart/cart.queries";
import { useUserContext } from "@/src/context/authContext";
import { useRouter } from "next/router";
import { MainRoutes } from "@/src/constant/routes";
import { Toaster, toast } from "sonner";
import { useGetWishlistProductByUserId } from "@/src/api/wishlist/wishlist.queries";
import { generate_token } from "@/src/lib/helper";
import Wishlist from "./components/_Wishlist/Wishlist";

const ProductTemplate = ({ category, productId }: any) => {
  const [qty, setQty] = useState(1);
  const { data, isLoading, isError } = useGetProductById(productId);
  const { mutate } = useAddProductToCart();
  const { state } = useUserContext();
  const userId = state.userId;
  const { data: wishlistData } = useGetWishlistProductByUserId(
    productId,
    userId
  );
  const router = useRouter();

  function addToCart() {
    if (data && state.isLogin) {
      const productId = data.id;
      const product = {
        ...data,
        qty,
        userId,
        productId,
        id: generate_token(5),
      };
      mutate(product);
      toast.success("Product Added to Cart", {
        className: "bg-green-400 text-white",
        position: "top-left",
      });
    } else {
      router.push(MainRoutes.REGISTER);
    }
  }

  function increaseQty() {
    if (data && qty < data?.qty) {
      setQty((prev) => (prev += 1));
    } else {
      toast.error("You Can't Add More Than Stuck", {
        className: "bg-red-400 text-white",
        position: "top-left",
      });
    }
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty((prev) => (prev -= 1));
    } else {
      toast.error("Min Number is 1", {
        className: "bg-red-400 text-white",
        position: "top-left",
      });
    }
  }

  return (
    <Box component="main" sx={{ py: 10, px: 20 }}>
      {isLoading && (
        <Typography variant="h2">
          Loading ... <CircularProgress />
        </Typography>
      )}
      {isError && (
        <Typography variant="h2">Error Something BAd Happend</Typography>
      )}
      {data && (
        <Paper elevation={5} sx={{ borderRadius: "24px" }}>
          <Stack flexDirection="row" flexWrap="wrap">
            <Toaster />
            <Box position="relative" sx={{ width: "50%" }}>
              <Image
                style={{ flexGrow: 1, borderRadius: "24px 0 0 24px" }}
                src={data?.image}
                alt={data?.name}
                fill
                objectFit="cover"
              />
            </Box>
            <Box
              sx={{
                paddingInlineStart: { lg: 24 },
                width: { lg: "50%" },
              }}
            >
              <Typography
                variant="h2"
                fontWeight="900"
                fontSize="2.25rem"
                mt={3}
                mb={3}
              >
                {data?.name}
              </Typography>
              <Typography variant="body1" mb={5} color="#6b7280">
                {data?.description}
              </Typography>
              <Wishlist data={data} wishlistData={wishlistData} />
              {/* sizes */}
              {category === "sneakers" ? <ProductSizes /> : null}
              <Typography variant="h5" mb={2}>
                Quantity
              </Typography>
              <Stack direction="row" alignItems="center" gap={2}>
                <IconButton aria-label="remove" onClick={decreaseQty}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h5">{qty}</Typography>
                <IconButton aria-label="Add" onClick={increaseQty}>
                  <AddIcon />
                </IconButton>
                {data.qty === 0 ? (
                  <Typography variant="h5" color={red[500]}>
                    Out Of Stuck
                  </Typography>
                ) : (
                  <Typography variant="body2">{data.qty} in Stuck</Typography>
                )}
              </Stack>
              <Stack py={3} pr={3}>
                <Typography variant="h3" fontSize="1.875rem" mb={1}>
                  ${data?.price?.toFixed(2)}
                </Typography>
                {/* reviews */}
                <Stack flexDirection="row" mb={3}>
                  <ProductRating />
                  <Typography variant="body2" marginInlineStart={2}>
                    603 reviews
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 10,
                    borderRadius: 8,
                    bgcolor: "#9333ea",
                    color: "white",
                    ":hover": {
                      bgcolor: purple[600],
                    },
                  }}
                  onClick={addToCart}
                  disabled={!data.qty}
                >
                  Add to cart
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      )}
    </Box>
  );
};

export default ProductTemplate;
