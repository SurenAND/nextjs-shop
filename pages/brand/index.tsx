import { Stack, Typography } from '@mui/material';
import Layout from '@/src/components/Layout/MainLayout/Layout';
import { ReactElement } from 'react';
import Brands from '@/src/components/template/Home/components/_Brands/Brands';

function Category() {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Stack gap={2}>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '50px',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            textDecorationThickness: '8px',
          }}
        >
          Brands
        </Typography>
        <Brands />
      </Stack>
    </Stack>
  );
}

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
