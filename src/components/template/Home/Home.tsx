import { Stack } from '@mui/material';
import Hero from './components/_Hero/Hero';
import Category from './components/_Category/Category';
import BestDeals from './components/_BestDeals/BestDeals';
import Brands from './components/_Brands/Brands';

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
