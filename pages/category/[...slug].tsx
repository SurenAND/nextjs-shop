import Layout from "@/src/components/Layout/Layout";
import CategoriesTemplate from "@/src/components/template/Categories/Categories";
import ProductTemplate from "@/src/components/template/Product/Product";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function CategorySlug() {
  const { slug } = useRouter().query;

  if (!slug) {
    return <Typography>Not Found</Typography>;
  }

  return (
    <Layout>
      {slug.length === 1 ? (
        <CategoriesTemplate category={slug[0] as string} />
      ) : slug.length === 2 ? (
        <ProductTemplate
          category={slug[0] as string}
          productId={slug[1] as string}
        />
      ) : null}
    </Layout>
  );
}
