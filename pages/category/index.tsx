import { Stack, Typography } from "@mui/material";
import CategoryComponent from "@/src/components/Category/Category";

function Category() {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Stack gap={2}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "50px",
            textTransform: "uppercase",
            textDecoration: "underline",
            textDecorationThickness: "8px",
          }}
        >
          Categories
        </Typography>
        <CategoryComponent />
      </Stack>
    </Stack>
  );
}

export default Category;
