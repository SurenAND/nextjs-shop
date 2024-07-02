import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PasswordIcon from "@mui/icons-material/Password";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
import PolicyIcon from "@mui/icons-material/Policy";
export const UserSideBarItems = [
  {
    title: "Account Settings",
    view: "account-settings",
    icon: <ManageAccountsIcon />,
  },
  {
    title: "Change Password",
    view: "change-password",
    icon: <PasswordIcon />,
  },
  {
    title: "Your Orders",
    view: "your-orders",
    icon: <LocalShippingIcon />,
  },
  {
    title: "Your Address",
    view: "your-address",
    icon: <HomeIcon />,
  },
  {
    title: "Legal Notice",
    view: "legal-notice",
    icon: <PolicyIcon />,
  },
];
