import { useGetUsers, useUpdateUser } from "@/src/api/auth/auth.queries";
import { UserDataType } from "@/src/api/auth/auth.type";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

export default function AdminsManager() {
  const columns: GridColDef<UserDataType>[] = [
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
      field: "userName",
      headerName: "User Name",
      width: 200,
      editable: true,
      resizable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
      resizable: false,
    },
    {
      field: "password",
      headerName: "Password",
      width: 200,
      editable: true,
      resizable: false,
    },
    {
      field: "role",
      headerName: "Role",
      width: 200,
      editable: true,
      resizable: false,
      type: "singleSelect",
      valueOptions: ["moderator", "admin", "user"],
    },
  ];
  const { data } = useGetUsers();
  const { mutate } = useUpdateUser();

  const row = Array.isArray(data)
    ? data.filter((item) => item.role === "admin" || item.role === "moderator")
    : [];
  const [updatedData, setUpdatedData] = useState<UserDataType[]>([]);

  const handleUpdateNewValue = (row: UserDataType) => {
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
    >
      <Typography variant="h4" fontWeight={900} textTransform="uppercase">
        Admin Manager
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
          pageSizeOptions={[10, 25, 50]}
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
