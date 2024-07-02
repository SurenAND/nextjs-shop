import { Stack } from "@mui/material";
import EditForm from "@/src/components/template/Dashboard/_ProductManager/_EditProduct/_EditForm/EditForm";
import ProductsTable from "@/src/components/template/Dashboard/_ProductManager/_EditProduct/_ProductsTable/ProductsTable";
import { useState } from "react";

function EditProduct() {
  const [showForm, setShowForm] = useState(false);
  const [productId, setProductId] = useState("");
  return (
    <Stack
      spacing={5}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ userSelect: "none" }}
    >
      {showForm ? (
        <EditForm
          setShowForm={setShowForm}
          setProductId={setProductId}
          productId={productId}
        />
      ) : (
        <ProductsTable setShowForm={setShowForm} setProductId={setProductId} />
      )}
    </Stack>
  );
}

export default EditProduct;
