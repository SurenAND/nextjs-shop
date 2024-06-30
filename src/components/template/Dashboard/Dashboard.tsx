import { Box, Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import AddProduct from "@/src/components/template/Dashboard/_ProductManager/_AddProduct/AddProduct";
import { useUserContext } from "@/src/context/authContext";
import EditProduct from "@/src/components/template/Dashboard/_ProductManager/_EditProduct/EditProduct";
import DeleteProduct from "@/src/components/template/Dashboard/_ProductManager/_DeleteProduct/DeleteProduct";
import Inventory from "@/src/components/template/Dashboard/_ProductManager/_Inventory/Inventory";
import UsersManager from "@/src/components/template/Dashboard/_UserManager/_Users/Users";
import AdminsManager from "@/src/components/template/Dashboard/_UserManager/_Admins/Admins";

function DashboardTemplate() {
  const searchParams = useSearchParams().get("view");
  const { state } = useUserContext();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={3}>
      {searchParams === "inventory" && <Inventory />}
      {searchParams === "add-product" && <AddProduct />}
      {searchParams === "edit-product" && <EditProduct />}
      {searchParams === "delete-product" && <DeleteProduct />}
      {searchParams === "users-manager" && <UsersManager />}
      {searchParams === "admin-manager" && <AdminsManager />}

      {!searchParams && (
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Typography variant="h3" fontWeight={900} textTransform="uppercase">
            Hi, {state.userName}
          </Typography>
          <Typography variant="h4" textTransform="capitalize">
            Welcome to your dashboard
          </Typography>
        </Stack>
      )}
    </Box>
  );
}

export default DashboardTemplate;
