import Layout from "@/src/components/Layout/MainLayout/Layout";
import AboutUsTemplate from "@/src/components/template/AboutUs/AboutUs";
import { ReactElement } from "react";

export default function AboutUs() {
  return <AboutUsTemplate />;
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
