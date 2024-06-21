import { useUserContext } from "@/src/context/authContext";
import { Avatar, IconButton, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Link from "next/link";
import { MainRoutes } from "@/src/constant/routes";
import Search from "@/src/components/shared/Search/Search";
import { stringAvatar } from "@/src/lib/helper";
import Image from "next/image";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  const { state } = useUserContext();

  return (
    <Stack direction="row" alignItems="center" gap={5} p={3}>
      <Link href={MainRoutes.HOME}>
        <Image src="/shop.png" alt="shop" width={144} height={144} />
      </Link>
      <IconButton
        sx={{
          bgcolor: "#ece6f5",
          borderRadius: "8px",
          transition: "all .2s ease-in-out",
          color: "#5e35b0",
          "&:hover": { bgcolor: "#4527a1", color: "#fff" },
        }}
        onClick={() => toggleSidebar((prev) => !prev)}
      >
        <MenuIcon />
      </IconButton>
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
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar {...stringAvatar(state.userName)} />
      </Stack>
    </Stack>
  );
}
