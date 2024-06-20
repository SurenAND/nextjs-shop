import { Stack } from "@mui/material";
import Hero from "./components/_Hero/Hero";
import Category from "./components/_Category/Category";

export default function HomeTemplate() {
  return (
    <Stack gap={4}>
      <Hero />
      <Category />
    </Stack>
  );
}
