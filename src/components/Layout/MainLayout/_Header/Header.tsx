import { useUserContext } from "../../../../context/authContext";
import {
  List,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AuthReducerAction, ROLES } from "../../../../types/enums";
import Link from "next/link";
import { menuItems } from "./data";
import { useRouter } from "next/router";
import { MainRoutes } from "@/src/constant/routes";
import Search from "@/src/components/shared/Search/Search";
import Image from "next/image";
import useCheckoutStore from "@/src/components/template/Cart/store/usecheckoutStore";

type HeaderProps = {
  isLogin: boolean;
};

export default function Header({ isLogin }: HeaderProps) {
  const { pathname, push: pushRouter } = useRouter();
  const { state, dispatch } = useUserContext();
  const { reset } = useCheckoutStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    reset()
    dispatch({
      type: AuthReducerAction.LOGOUT,
    });
    handleClose();
    if (pathname === '/cart') {
      pushRouter('/');
    }
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: { md: 20, xs: 1 },
        px: { md: 5, xs: 2 },
        py: { md: 2, xs: 1 },
      }}
    >
      <Link href={MainRoutes.HOME}>
        <Image src="/shop.png" alt="shop" width={144} height={144} />
      </Link>
      <Search />
      <List sx={{ display: "flex", gap: 1 }}>
        <ListItem sx={{ cursor: "pointer" }}>
          {isLogin ? (
            <Typography noWrap id="user-text" onClick={handleClick}>
              Hi, {state.userName}
            </Typography>
          ) : (
            <Link href={MainRoutes.REGISTER}>Login</Link>
          )}
        </ListItem>
        {menuItems.map((item, index) => (
          <ListItem sx={{ cursor: "pointer" }} key={index}>
            <Link
              href={item.path}
              className={`text-nowrap ${
                pathname == item.path ? "border-b-2 border-blue-400 pb-1" : ""
              }`}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-text",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        {state.role === ROLES.admin || state.role === ROLES.moderator ? (
          <MenuItem onClick={() => pushRouter(MainRoutes.DASHBOARD)}>
            Dashboard
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}
