import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import { useGetCategories } from "@/src/api/category/category.queries";
import Image from "next/image";

const Category = () => {
  const { data, isLoading, isError } = useGetCategories();
  return (
    <Box component="section" mb={5} p={4}>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error</p>}
      {data && data.length > 0 && (
        <Stack gap={3} px={3}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h3" fontSize="1.5rem" fontWeight="bold">
              Shop Our Top Categories
            </Typography>
            <Link href={"/category"}>
              <Typography
                variant="h3"
                fontSize="1.2rem"
                fontWeight="400"
                sx={{
                  textDecoration: "underline",
                  textTransform: "capitalize",
                }}
              >
                all categories
              </Typography>
            </Link>
          </Stack>
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
                  href={`/category/${item?.categoryName}`}
                  key={item?.id}
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
                    {item?.title}
                  </Typography>
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    height={296}
                    width={230}
                    style={{ objectFit: "contain" }}
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
