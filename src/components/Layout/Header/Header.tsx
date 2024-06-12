import {
  DASHBOARD_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from "../../../constant/routes";
import { useUserContext } from "../../../context/authContext";
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
import { removeFromLocalStorage } from "../../../lib/helper";
import { AuthReducerAction } from "../../../types/enums";
import Link from "next/link";
import { menuItems } from "./data";
import { useRouter } from "next/router";

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
    removeFromLocalStorage("role");
    removeFromLocalStorage("userName");
    removeFromLocalStorage("token");

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
      <Link href={HOME_PAGE_ROUTE}>
        <img className="w-36" alt="shop" src="/shop.png" />
      </Link>
      <Box
        sx={{
          flexGrow: 1,
          color: "#6b7280",
          textAlign: "left",
          px: 2,
          py: 0.5,
          bgcolor: "#e5e7eb",
          borderRadius: "6px",
        }}
      >
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="/searchIcon.svg"
                  alt="search icon"
                  className="w-[14px] h-[14px]"
                />
              </InputAdornment>
            ),
          }}
          type="text"
          sx={{
            width: "100%",

            bgcolor: "#e5e7eb",
            border: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        />
      </Box>
      <List sx={{ display: "flex", gap: 1 }}>
        <ListItem sx={{ cursor: "pointer" }}>
          {isClient && isLogin ? (
            <Typography noWrap id="user-text" onClick={handleClick}>
              Hi, {state.userName}
            </Typography>
          ) : (
            <Link href={LOGIN_PAGE_ROUTE}>Login</Link>
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
        {state.role === "admin" ? (
          <MenuItem onClick={() => pushRouter(DASHBOARD_PAGE_ROUTE)}>
            Dashboard
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Stack>
  );
}
