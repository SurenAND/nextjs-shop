import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useGetOrders, useUpdateOrder } from "@/src/api/orders/orders.queries";
import { OrderDataType } from "@/src/api/orders/orders.type";
import { removeHyphens } from "@/src/lib/helper";
import DescriptionIcon from "@mui/icons-material/Description";
import OrderModal from "@/src/components/template/Dashboard/_Orders/_OrderModal/OrderModal";

export default function Orders() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [orderId, setOrderId] = useState("");

  const columns: GridColDef<OrderDataType>[] = [
    {
      field: "orderNumber",
      headerName: "Order Number",
      width: 145,
      disableColumnMenu: true,
      resizable: false,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" alignItems="center" height="100%">
            <Typography>{params.value}</Typography>
          </Stack>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      resizable: false,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" alignItems="start" height="100%">
            <Typography>
              {new Date(params.value).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}{" "}
              {new Date(params.value).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </Typography>
          </Stack>
        );
      },
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
      resizable: false,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" alignItems="center" height="100%">
            <Typography>{params.value} $</Typography>
          </Stack>
        );
      },
    },
    {
      field: "shippingName",
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
    {
      field: "actions",
      headerName: "View More",
      width: 150,
      align: "center",
      disableColumnMenu: true,
      renderCell: (params) => {
        const onButtonClick = (row: OrderDataType) => {
          setOrderId(String(row.id));
          handleOpen();
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
            <DescriptionIcon />
          </IconButton>
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
      <OrderModal open={open} handleClose={handleClose} orderId={orderId} />
    </Stack>
  );
}
