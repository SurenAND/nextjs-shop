import Link from "next/link";
import { useFetchData } from "../../hooks/useFetchData";
import { getCategoriesData } from "../../services/getData";
import { Box, Stack, Typography } from "@mui/material";

const Category = () => {
  const { data, isLoading, error } = useFetchData(getCategoriesData);
  return (
    <Box component="section" mb={5} p={4}>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error</p>}
      {data && (
        <Stack gap={3} px={3}>
          <Typography variant="h3" fontSize="1.5rem" fontWeight="bold">
            Shop Our Top Categories
          </Typography>
          <Stack
            sx={{
              gap: 10,
              flexDirection: "row",
              overflowX: "auto",
              pb: 1,
            }}
          >
            {data?.map((item: any) => {
              return (
                <Link
                  href={`/category/${item.categoryName}`}
                  key={item.id}
                  className="relative min-w-max"
                >
                  <Typography
                    variant="h5"
                    sx={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "white",
                      fontSize: "1.25rem",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt={item.title}
                  />
                </Link>
              );
            })}
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default Category;
