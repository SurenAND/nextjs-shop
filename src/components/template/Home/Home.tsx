import { Stack } from "@mui/material";
import Hero from "@/src/components/template/Home/components/_Hero/Hero";
import Category from "@/src/components/template/Home/components/_Category/Category";

export default function HomeTemplate() {
  return (
    <Stack gap={4}>
      <Hero />
      <Category />
    </Stack>
  );
}
