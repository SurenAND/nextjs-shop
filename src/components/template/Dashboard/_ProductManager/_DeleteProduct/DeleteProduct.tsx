import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductDataType } from "@/src/types/types";
import { useDeleteProduct } from "@/src/hooks/dashboardHooks";
import { useGetAllProducts } from "@/src/hooks/globalHooks";

const columns: GridColDef<ProductDataType>[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    type: "number",
    disableColumnMenu: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "image",
    headerName: "Image",
    renderCell: (params) => {
      return (
        <Box>
          <img
            src={params.value}
            alt="product"
            style={{
              width: 100,
              height: 120,
              borderRadius: 10,
              objectFit: "cover",
              margin: "10px auto",
            }}
          />
        </Box>
      );
    },
    width: 200,
  },
  {
    field: "name",
    headerName: "Product Name",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 150,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 450,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    align: "center",
    disableColumnMenu: true,
    renderCell: (params) => {
      const { mutate: deleteProduct } = useDeleteProduct();
      const onButtonClick = (row: ProductDataType) => {
        deleteProduct(String(row.id));
      };
      return (
        <IconButton
          sx={{
            bgcolor: "#ece6f5",
            borderRadius: "8px",
            transition: "all .2s ease-in-out",
            color: "#5e35b0",
            "&:hover": { bgcolor: "#4527a1", color: "#fff" },
          }}
          onClick={() => onButtonClick(params.row)}
        >
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];

function DeleteProduct() {
  const { data } = useGetAllProducts();
  const row = Array.isArray(data) ? data : []; // to fix type error

  return (
    <Stack spacing={5} alignItems="center">
      <Typography variant="h4" fontWeight={900} textTransform="uppercase">
        Delete Product
      </Typography>
      <Box sx={{ height: 700, width: "100%" }}>
        <DataGrid
          key={data?.id}
          showCellVerticalBorder
          disableRowSelectionOnClick
          rowHeight={150}
          rows={row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </Box>
    </Stack>
  );
}

export default DeleteProduct;
