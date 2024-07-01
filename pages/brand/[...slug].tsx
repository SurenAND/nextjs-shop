import Layout from '@/src/components/Layout/MainLayout/Layout';
import BrandsTemplate from '@/src/components/template/Brands/Brands';
import CategoriesTemplate from '@/src/components/template/Categories/Categories';
import ProductTemplate from '@/src/components/template/Product/Product';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export default function CategorySlug() {
  const { slug } = useRouter().query;

  if (!slug) {
    return <Typography>Not Found</Typography>;
  }

  return (
    <>
      {slug.length === 1 ? (
        <BrandsTemplate brand={slug[0] as string} />
      ) : slug.length === 2 ? (
        <ProductTemplate
          category={slug[0] as string}
          productId={slug[1] as string}
        />
      ) : null}
    </>
  );
}

CategorySlug.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
