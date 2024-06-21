import { useGetProductById } from "@/src/api/product/product.queries";
import ProductRating from "./components/_ProductRating/ProductRating";
import ProductSizes from "./components/_ProductSizes/ProductSizes";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";

const ProductTemplate = ({ category, productId }: any) => {
  const { data, isLoading, isError } = useGetProductById(productId);
  return (
    <Box component="main" sx={{ p: 5, mt: 5 }}>
      {isLoading && <Typography variant="h2">Loading ...</Typography>}
      {isError && <Typography variant="h2">Error</Typography>}
      {data && (
        <Stack
          sx={{
            position: "relative",
            overflowWrap: "break-word",
            borderRadius: 8,
          }}
          key={data?.id}
        >
          <Stack flexDirection="row" flexWrap="wrap">
            <Box width="50%" position="relative">
              <Image
                style={{ flexGrow: 1, borderRadius: 24 }}
                src={data?.image}
                alt={data?.name}
                fill
                objectFit="cover"
              />
            </Box>
            <Box
              sx={{
                paddingInlineStart: { lg: 24 },
                flex: { lg: "0_0_auto" },
                width: { lg: "50%" },
              }}
            >
              <Typography
                variant="h2"
                fontWeight="900"
                fontSize="2.25rem"
                mt={3}
                mb={1}
              >
                {data?.name}
              </Typography>
              <Typography variant="body1" mb={10} color="#6b7280">
                {data?.description}
              </Typography>
              <Stack p={3}>
                <Stack flexDirection="row">
                  <Typography variant="h3" fontSize="1.875rem" mb={1}>
                    ${data?.price?.toFixed(2)}
                  </Typography>
                  <TextField sx={{ opacity: 0 }} defaultValue={data?.price} />
                </Stack>
                {/* reviews */}
                <Stack flexDirection="row" mb={3}>
                  <ProductRating />
                  <Typography variant="body2" marginInlineStart={2}>
                    603 reviews
                  </Typography>
                </Stack>
                {/* sizes */}
                {category === "sneakers" ? <ProductSizes /> : null}

                <Button
                  sx={{
                    mb: 2,
                    py: 1,
                    px: 10,
                    borderRadius: 8,
                    bgcolor: "#9333ea",
                    color: "white",
                  }}
                  type="submit"
                >
                  Add to cart
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default ProductTemplate;
