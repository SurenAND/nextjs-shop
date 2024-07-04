import { useGetDealsIds } from "@/src/api/deals/deals.queries";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DealsTemplate from "@/src/components/template/Home/components/_BestDeals/_Deals/Deals";
import { DealsDataType } from "@/src/api/deals/deals.type";

export default function BestDeals() {
  const { data, isLoading, isError } = useGetDealsIds();
  return (
    <Box component="section" mb={5} p={4}>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error</p>}
      {data && data.length > 0 && (
        <Stack gap={5} px={3}>
          <Typography variant="h3" fontSize="1.5rem" fontWeight="bold">
            Todays Best Deals For You!
          </Typography>
          <Stack
            sx={{
              gap: 5,
              flexDirection: "row",
              overflowX: "auto",
              pb: 1,
            }}
          >
            {data?.map((item: DealsDataType) => {
              return (
                <DealsTemplate
                  productId={item.productId}
                  key={item.productId}
                />
              );
            })}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
