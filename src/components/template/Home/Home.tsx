import { Stack } from "@mui/material";
import Hero from "@/src/components/template/Home/components/_Hero/Hero";
import Category from "@/src/components/template/Home/components/_Category/Category";
import BestDeals from "@/src/components/template/Home/components/_BestDeals/BestDeals";
import Brands from "@/src/components/template/Home/components/_Brands/Brands";

export default function HomeTemplate() {
  return (
    <Stack gap={4}>
      <Hero />
      <Category />
      <Brands />
      <BestDeals />
    </Stack>
  );
}
