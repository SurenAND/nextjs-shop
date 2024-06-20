import { Box, Typography } from "@mui/material";
import CardComp from "../../shared/Card/Card";
import { useGetProductByCategory } from "@/src/hooks/categoriesHooks";

const CategoriesTemplate = ({ category }: any) => {
  const removeHyphens = (str: string): string => {
    return str?.replace(/-/g, " ");
  };

  const { data, isLoading, isError } = useGetProductByCategory(category);

  return (
    <Box component="main">
      {isLoading && <Typography variant="body1">Loading ...</Typography>}
      {isError && <Typography variant="body1">Error</Typography>}
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          my: 5,
          fontSize: "3rem",
          textTransform: "uppercase",
          textDecoration: "underline",
          textDecorationOffset: "8px",
        }}
      >
        {removeHyphens(category)}
      </Typography>
      <Box
        component="section"
        sx={{
          p: 4,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 5,
        }}
      >
        {data && data?.length > 0 ? (
          data?.map((item: any) => <CardComp key={item.id} data={item} />)
        ) : (
          <Typography variant="body1">No products found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default CategoriesTemplate;
