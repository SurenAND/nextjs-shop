import { useUserContext } from "@/src/context/authContext";
import { Avatar, IconButton, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Link from "next/link";
import { MainRoutes } from "@/src/constant/routes";
import Search from "@/src/components/Search/Search";
import { stringAvatar } from "@/src/lib/helper";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  const { state } = useUserContext();
  // fix Hydration
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Stack direction="row" alignItems="center" gap={5} p={3}>
        <Link href={MainRoutes.HOME}>
          <img className="w-36" alt="shop" src="/shop.png" />
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
    )
  );
}
