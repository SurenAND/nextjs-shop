import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useGetOrders, useUpdateOrder } from "@/src/api/orders/orders.queries";
import { OrderDataType } from "@/src/api/orders/orders.type";
import { removeHyphens } from "@/src/lib/helper";

export default function Orders() {
  const columns: GridColDef<OrderDataType>[] = [
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
      resizable: false,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 110,
      align: "left",
      headerAlign: "left",
      resizable: false,
    },
    {
      field: "shipment",
      headerName: "Shipment",
      type: "string",
      width: 150,
      resizable: false,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" alignItems="center" height="100%">
            <Typography sx={{ textTransform: "capitalize" }}>
              {removeHyphens(params.value)}
            </Typography>
          </Stack>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      type: "singleSelect",
      valueOptions: ["inprogress", "completed", "cancelled"],
      width: 200,
      editable: true,
      resizable: false,
      renderCell: (params) => {
        return (
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "500",
              borderRadius: 10,
              margin: "10px",
              textTransform: "uppercase",
              height: "50px",
              bgcolor:
                params.value === "inprogress"
                  ? "purple"
                  : params.value === "completed"
                  ? "green"
                  : "red",
            }}
          >
            {params.value}
          </Stack>
        );
      },
    },
  ];
  const { data } = useGetOrders();
  const { mutate } = useUpdateOrder();

  const row = Array.isArray(data) ? data : [];
  const [updatedData, setUpdatedData] = useState<OrderDataType[]>([]);

  const handleUpdateNewValue = (row: OrderDataType) => {
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
        Orders
      </Typography>
      <Box sx={{ height: "50%", width: "100%" }}>
        <DataGrid
          key={data?.id}
          showCellVerticalBorder
          disableRowSelectionOnClick
          showColumnVerticalBorder
          rows={row}
          columns={columns}
          rowHeight={70}
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
