import { Stack } from "@mui/material";
import EditForm from "./_EditForm/EditForm";
import ProductsTable from "./_ProductsTable/ProductsTable";
import { useState } from "react";

function EditProduct() {
  const [showForm, setShowForm] = useState(false);
  const [productId, setProductId] = useState("");
  return (
    <Stack spacing={2}>
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
