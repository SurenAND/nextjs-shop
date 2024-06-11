import { Box, Typography } from "@mui/material";
import CardComp from "../../Card/Card";

const CategoriesTemplate = ({ category, data, isLoading, error }: any) => {
  const removeHyphens = (str: string): string => {
    return str?.replace(/-/g, " ");
  };

  return (
    <Box component="main">
      {isLoading && <Typography variant="body1">Loading ...</Typography>}
      {error && <Typography variant="body1">Error</Typography>}
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
        {data &&
          data?.map((item: any) => <CardComp key={item.id} data={item} />)}
      </Box>
    </Box>
  );
};

export default CategoriesTemplate;
