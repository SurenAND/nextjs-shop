import { useGetBrands } from "@/src/api/brand/brand.queries";
import { BrandsDataType } from "@/src/api/brand/brand.type";
import BrandCardComp from "@/src/components/shared/BrandCard/BrandCard";
import { Box, Stack, Typography } from "@mui/material";

const Brands = () => {
  const { data, isLoading, isError } = useGetBrands();

  return (
    <Box component="section" mb={5} p={4}>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error</p>}
      {data && data.length > 0 && (
        <Stack gap={3}>
          <Typography
            variant="h3"
            fontSize="1.5rem"
            fontWeight="bold"
            sx={{ p: 4 }}
          >
            Choose By Brand
          </Typography>
          <Box
            component="section"
            sx={{
              p: 4,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 5,
              overflowX: "auto",
            }}
          >
            {data?.map((item: BrandsDataType) => {
              return <BrandCardComp item={item} key={item.id} />;
            })}
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Brands;
