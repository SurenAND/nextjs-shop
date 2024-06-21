import DashboardLayout from "@/src/components/Layout/DashboardLayout/Layout";
import DashboardTemplate from "@/src/components/template/Dashboard/Dashboard";
import { ReactElement } from "react";

export default function Dashboard() {
  return <DashboardTemplate />;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
