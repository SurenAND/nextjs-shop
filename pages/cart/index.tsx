import Layout from "@/src/components/Layout/MainLayout/Layout";
import CartTemplate from "@/src/components/template/Cart/Cart";
import { ReactElement } from "react";

export default function Cart() {
  return <CartTemplate />;
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
