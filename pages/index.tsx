import Layout from "@/src/components/Layout/MainLayout/Layout";
import HomeTemplate from "@/src/components/template/Home/Home";
import { ReactElement } from "react";

export default function Home() {
  return <HomeTemplate />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
