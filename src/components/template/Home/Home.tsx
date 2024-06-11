import { Stack } from "@mui/material";
import Hero from "../../Hero/Hero";
import Category from "../../Category/Category";

export default function HomeTemplate() {
  return (
    <Stack gap={4}>
      <Hero />
      <Category />
    </Stack>
  );
}
