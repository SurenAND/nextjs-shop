import { useGetProductById } from "@/src/api/product/product.queries";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ProductRating from "@/src/components/template/Product/components/_ProductRating/ProductRating";

const DealsTemplate = ({ productId }: any) => {
  const { data, isLoading, isError } = useGetProductById(productId);

  return (
    <Box>
      {isLoading && <Typography variant="body1">Loading ...</Typography>}
      {isError && <Typography variant="body1">Error</Typography>}
      {data && (
        <Stack
          gap={2}
          p={1}
          height={350}
          minHeight="200px"
          spacing={1}
          justifyContent={"space-between"}
        >
          <Box height={150} position="relative">
            <Image
              style={{ borderRadius: 6, objectFit: "contain" }}
              src={data?.image}
              alt={data?.name}
              fill
              objectFit="cover"
            />
          </Box>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography sx={{ fontWeight: "800" }}>{data.name}</Typography>
            <Typography sx={{ fontWeight: "800" }}>{data.price}.00$</Typography>
          </Stack>
          <ProductRating />
          <Link href={`category/${data?.category}/${data?.id}`}>
            <Button
              variant="outlined"
              sx={{
                mb: 2,
                py: 1,
                px: 1,
                width: 200,
                borderRadius: 8,
                borderColor: "black",
                borderWidth: 1,
                bgcolor: "white",
                color: "black",
              }}
              type="submit"
            >
              More Info
            </Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
};
export default DealsTemplate;
