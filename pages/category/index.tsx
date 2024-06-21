import { Stack, Typography } from "@mui/material";
import CategoryComponent from "@/src/components/template/Home/components/_Category/Category";
import Layout from "@/src/components/Layout/MainLayout/Layout";
import { ReactElement } from "react";

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

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
