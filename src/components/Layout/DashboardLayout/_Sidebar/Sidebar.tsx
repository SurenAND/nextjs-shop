import { Drawer } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { drawerWidth } from "@/src/components/Layout/DashboardLayout/Layout";
import DrawerList from "@/src/components/Layout/DashboardLayout/_Sidebar/_DrawerList/DrawerList";

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
        height: "auto",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          top: "88px",
          position: "absolute",
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
          height: "auto",
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
