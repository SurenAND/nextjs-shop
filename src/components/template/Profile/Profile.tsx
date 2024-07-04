import { Box, Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useUserContext } from "@/src/context/authContext";
import AccountSettings from "@/src/components/template/Profile/_AccountSetting/AccountSetting";
import ChangePassword from "@/src/components/template/Profile/_ChangePassword/ChangePassword";
import YourOrders from "@/src/components/template/Profile/_YourOrders/YourOrders";
import YourAddress from "@/src/components/template/Profile/_YourAddress/YourAddress";
import LegalNotice from "@/src/components/template/Profile/_LegalNotice/LegalNotice";

const ProfileTemplate = () => {
  const activePage: string | null = useSearchParams().get("view");
  const { state } = useUserContext();
  return (
    <Box
      width="60%"
      borderRadius="5px"
      sx={{
        overflowY: "auto",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        bgcolor: "#fff",
        zIndex: 100,
      }}
    >
      {/* profile main section */}
      {!activePage && (
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography variant="h3" fontWeight={900} textTransform="uppercase">
            Hi, {state.userName}
          </Typography>
          <Typography variant="h4" textTransform="capitalize">
            Welcome to your profile
          </Typography>
        </Stack>
      )}

      {activePage === "account-settings" && <AccountSettings />}
      {activePage === "change-password" && <ChangePassword />}
      {activePage === "your-orders" && <YourOrders />}
      {activePage === "your-address" && <YourAddress />}
      {activePage === "legal-notice" && <LegalNotice />}
    </Box>
  );
};

export default ProfileTemplate;
