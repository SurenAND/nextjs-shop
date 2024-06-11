import CategoriesTemplate from "@/src/components/template/Categories/Categories";
import ProductTemplate from "@/src/components/template/Product/Product";
import { useFetchData } from "@/src/hooks/useFetchData";
import { getData, getSingleData } from "@/src/services/getData";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CategorySlug() {
  const { slug } = useRouter().query;

  if (!slug) {
    return <Typography>Not Found</Typography>;
  }

  const { data, isLoading, error } =
    slug?.length === 1
      ? useFetchData(() => getData(slug[0] as string))
      : useFetchData(() => getSingleData(slug[1] as string));

  useEffect(() => {
    console.log("effect");
  }, [slug]);

  if (data) {
    return slug?.length === 1 ? (
      <CategoriesTemplate
        category={slug[0] as string}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    ) : (
      <ProductTemplate
        category={slug[0] as string}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}
