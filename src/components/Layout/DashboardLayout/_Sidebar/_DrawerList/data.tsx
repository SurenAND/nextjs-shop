import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PeopleIcon from "@mui/icons-material/People";

export const drawerProductsItems = [
  {
    title: "Inventory",
    view: "inventory",
    icon: <InventoryIcon />,
  },
  {
    title: "Add Product",
    view: "add-product",
    icon: <AddIcon />,
  },
  {
    title: "Edit Product",
    view: "edit-product",
    icon: <EditIcon />,
  },
  {
    title: "Delete Product",
    view: "delete-product",
    icon: <DeleteIcon />,
  },
];

export const drawerUserItems = [
  {
    title: "Admin Settings",
    view: "admin-settings",
    icon: <AdminPanelSettingsIcon />,
    roleToSee: ["moderator"],
  },
  {
    title: "Users",
    view: "users",
    icon: <PeopleIcon />,
    roleToSee: ["admin", "moderator"],
  },
];
