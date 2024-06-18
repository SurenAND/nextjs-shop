import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import AddProduct from "./_ProductManager/AddProduct/AddProduct";
import { useUserContext } from "@/src/context/authContext";
import EditProduct from "./_ProductManager/EditProduct/EditProduct";
import DeleteProduct from "./_ProductManager/DeleteProduct/DeleteProduct";

function DashboardTemplate() {
  const searchParams = useSearchParams().get("view");
  const { state } = useUserContext();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {searchParams === "add-product" && <AddProduct />}
      {searchParams === "edit-product" && <EditProduct />}
      {searchParams === "delete-product" && <DeleteProduct />}
      {!searchParams && (
        <Typography variant="h4">Hi, {state.userName}</Typography>
      )}
    </Box>
  );
}

export default DashboardTemplate;
