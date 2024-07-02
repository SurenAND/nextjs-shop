import { useUserContext } from "@/src/context/authContext";
import { Avatar, Badge, IconButton, Stack } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "next/link";
import { MainRoutes } from "@/src/constant/routes";
import Search from "@/src/components/shared/Search/Search";
import { stringAvatar } from "@/src/lib/helper";
import Image from "next/image";
import { useGetCartById } from "@/src/api/cart/cart.queries";
import { useRouter } from "next/router";

export default function Header() {
  const { state } = useUserContext();
  const { data: cartData } = useGetCartById(state.userId);
  const { push: pushRouter } = useRouter();
  // const { data: wishlistData } = useGetWishlistById(state.userId);

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={5}
      py={3}
      px={17}
      bgcolor="#fff"
    >
      <Link href={MainRoutes.HOME}>
        <Image src="/shop.png" alt="shop" width={144} height={144} />
      </Link>
      <Search />
      <Stack direction="row" alignItems="center" gap={2}>
        <IconButton
          sx={{
            bgcolor: "#ece6f5",
            borderRadius: "8px",
            transition: "all .2s ease-in-out",
            color: "#5e35b0",
            "&:hover": { bgcolor: "#4527a1", color: "#fff" },
          }}
        >
          {/* <Badge badgeContent={wishlistData?.length} color="error"> */}
          <FavoriteBorderOutlinedIcon />
          {/* </Badge> */}
        </IconButton>
        <IconButton
          sx={{
            bgcolor: "#ece6f5",
            borderRadius: "8px",
            transition: "all .2s ease-in-out",
            color: "#5e35b0",
            "&:hover": { bgcolor: "#4527a1", color: "#fff" },
          }}
          onClick={() => {
            pushRouter(MainRoutes.CART);
          }}
        >
          <Badge badgeContent={cartData?.length} color="error">
            <LocalMallOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar {...stringAvatar(state.userName)} />
      </Stack>
    </Stack>
  );
}
