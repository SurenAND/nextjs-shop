import { Box } from "@mui/material";
import AddForm from "./AddForm/AddForm";

function DashboardTemplate() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <AddForm />
    </Box>
  );
}

export default DashboardTemplate;
