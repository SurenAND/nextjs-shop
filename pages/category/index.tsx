import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Layout from "@/src/components/Layout/MainLayout/Layout";
import { ReactElement } from "react";
import { useGetCategories } from "@/src/api/category/category.queries";
import { MainRoutes } from "@/src/constant/routes";

function Category() {
  const { data, isLoading, isError } = useGetCategories();
  return (
    <Stack gap={2} p={5}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "40px",
          textTransform: "uppercase",
          textDecoration: "underline",
          textDecorationThickness: "8px",
          mb: "40px",
        }}
      >
        Categories
      </Typography>
      {isLoading && <CircularProgress />}
      {isError && <Typography variant="body1">Error</Typography>}
      <Grid container spacing={6}>
        {data && data.length > 0 ? (
          data?.map((product) => (
            <Grid item lg={3} key={product.id}>
              <Link
                href={`${MainRoutes.CATEGORY}/${product.categoryName}`}
                underline="none"
              >
                <Paper elevation={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      height={290}
                      alt={product?.title}
                      image={product?.image}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        height={40}
                      >
                        {product?.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Link>
            </Grid>
          ))
        ) : (
          <Typography>There is No Category Here </Typography>
        )}
      </Grid>
    </Stack>
  );
}

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
