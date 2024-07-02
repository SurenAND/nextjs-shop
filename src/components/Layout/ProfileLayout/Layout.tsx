import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "@/src/components/Layout/ProfileLayout/_Header/Header";
import UserSidebar from "@/src/components/Layout/ProfileLayout/_UserSideBar/UserSideBar";

const ProfileLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack sx={{ minHeight: "100vh", bgcolor: "#ecf0f1" }}>
      <Header />
      <Stack direction="row" justifyContent="center" width="100%" mt="5vh">
        <Box width="20%" borderRadius="5px" minHeight="50vh">
          <UserSidebar />
        </Box>
        {children}
      </Stack>
    </Stack>
  );
};

export default ProfileLayout;
