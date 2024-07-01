import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "@/src/components/Layout/ProfileLayout/_Header/Header";
import UserSidebar from "@/src/components/Layout/ProfileLayout/_UserSideBar/UserSideBar";

const ProfileLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Header />
      <Stack
        direction="row"
        justifyContent="center"
        width="100%"
        mt="10vh"
        spacing={3}
      >
        <Box
          width="20%"
          border="1px solid #cfcfcf"
          borderRadius="5px"
          minHeight="50vh"
        >
          <UserSidebar />
        </Box>
        {children}
      </Stack>
    </Stack>
  );
};

export default ProfileLayout;
