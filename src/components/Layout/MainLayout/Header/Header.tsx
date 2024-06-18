import { useUserContext } from "../../../../context/authContext";
import {
  Box,
  InputAdornment,
  List,
  ListItem,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AuthReducerAction, ROLES } from "../../../../types/enums";
import Link from "next/link";
import { menuItems } from "./data";
import { useRouter } from "next/router";
import { MainRoutes } from "@/src/constant/routes";
import { Main } from "next/document";
import Search from "@/src/components/Search/Search";
import { deleteCookie } from "cookies-next";

type HeaderProps = {
  isLogin: boolean;
};

export default function Header({ isLogin }: HeaderProps) {
  const { pathname, push: pushRouter } = useRouter();
  const { state, dispatch } = useUserContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    deleteCookie("role");
    deleteCookie("userName");
    deleteCookie("token");

    dispatch({
      type: AuthReducerAction.LOGOUT,
      payload: {
        isLogin: false,
        userName: "",
        role: "",
      },
    });

    handleClose();
  };

  // fix Hydration
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
        <img className="w-36" alt="shop" src="/shop.png" />
      </Link>
      <Search />
      <List sx={{ display: "flex", gap: 1 }}>
        <ListItem sx={{ cursor: "pointer" }}>
          {isClient && isLogin ? (
            <Typography noWrap id="user-text" onClick={handleClick}>
              Hi, {state.userName}
            </Typography>
          ) : (
            <Link href={MainRoutes.LOGIN}>Login</Link>
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
