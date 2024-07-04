import {
  useGetProducts,
  useUpdateProduct,
} from "@/src/api/product/product.queries";
import { ProductDataType } from "@/src/api/product/product.type";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

export default function Inventory() {
  const columns: GridColDef<ProductDataType>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      type: "number",
      disableColumnMenu: true,
      headerAlign: "center",
      align: "center",
      resizable: false,
    },
    {
      field: "name",
      headerName: "Product Name",
      width: 200,
      resizable: false,
    },
    {
      field: "qty",
      headerName: "Quantity",
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
      editable: true,
      resizable: false,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
      editable: true,
      resizable: false,
    },
  ];
  const { data } = useGetProducts();
  const { mutate } = useUpdateProduct();

  const row = Array.isArray(data) ? data : [];
  const [updatedData, setUpdatedData] = useState<ProductDataType[]>([]);

  const handleUpdateNewValue = (row: ProductDataType) => {
    const temp = [...updatedData];
    const foundedIndex = temp.findIndex((item) => item.id === row.id);
    if (foundedIndex > -1) {
      temp[foundedIndex] = row;
    } else temp.push(row);
    setUpdatedData(temp);
  };

  const handleUpdate = () => {
    updatedData.forEach((item) => mutate(item));
  };

  return (
    <Stack
      spacing={5}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ userSelect: "none" }}
    >
      <Typography variant="h4" fontWeight={900} textTransform="uppercase">
        Product Inventory
      </Typography>
      <Box sx={{ height: "50%", width: "100%" }}>
        <DataGrid
          key={data?.id}
          showCellVerticalBorder
          disableRowSelectionOnClick
          showColumnVerticalBorder
          rows={row}
          columns={columns}
          processRowUpdate={(updatedData) => {
            handleUpdateNewValue(updatedData);
            return updatedData;
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
        />
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: "#5e35b0",
          fontWeight: "900",
          py: 2,
          "&:hover": { bgcolor: "#4527a1" },
        }}
        onClick={handleUpdate}
      >
        Update
      </Button>
    </Stack>
  );
}
