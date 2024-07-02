import { BrandsDataType } from "@/src/api/brand/brand.type";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BrandCardComp = ({ item }: any) => {
  return (
    <Link href={`/brand/${item.brandUrl}`}>
      <Stack
        minHeight="100px"
        sx={{
          backgroundColor: "lightgrey",
          flexDirection: "row",
          padding: "5px 10px",
          margin: "0",
          borderRadius: "15px",
          alignItems: "center",
        }}
        width={300}
      >
        <Image
          src={item.image}
          alt={item?.brand_name}
          height={75}
          width={75}
          style={{
            borderRadius: "100px",
            backgroundColor: "white",
            height: "75px",
            margin: "5px",
            padding: "15px",
          }}
        />
        <Stack padding={1} sx={{ flexDirection: "column" }}>
          <Typography fontWeight={800} fontSize={15}>
            {item?.brand_name}
          </Typography>
          <Typography fontSize={15}>
            delivery within {item?.delivery_time} hours
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default BrandCardComp;
