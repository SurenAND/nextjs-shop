import { Drawer } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { drawerWidth } from "../Layout";
import DrawerList from "./DrawerList/DrawerList";

export default function Sidebar({
  open,
  toggleSidebar,
}: {
  open: boolean;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          top: "88px",
          position: "absolute",
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
      onClose={() => toggleSidebar(false)}
    >
      <DrawerList />
    </Drawer>
  );
}
