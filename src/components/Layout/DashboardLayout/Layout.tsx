import { PropsWithChildren, useState } from "react";
import Header from "@/src/components/Layout/DashboardLayout/_Header/Header";
import Sidebar from "@/src/components/Layout/DashboardLayout/_Sidebar/Sidebar";
import { Box, Stack } from "@mui/material";

export const drawerWidth = 270;

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(true);
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header toggleSidebar={setOpen} />
      <Stack direction="row">
        <Sidebar toggleSidebar={setOpen} open={open} />
        <Box
          sx={{
            marginRight: 2,
            borderRadius: "30px 30px 0 0",
            bgcolor: "#edf1f5",
            transition: `all ${open ? "225ms ease-out" : "195ms ease-in"}`,
            marginLeft: open ? 0 : "-250px",
            width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
            height: open ? `calc(100vh + ${drawerWidth - 100}px)` : "100%",
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Stack>
    </Stack>
  );
}
