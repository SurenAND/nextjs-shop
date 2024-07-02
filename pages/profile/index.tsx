import ProfileLayout from "@/src/components/Layout/ProfileLayout/Layout";
import ProfileTemplate from "@/src/components/template/Profile/Profile";
import { ReactElement } from "react";

export default function Profile() {
  return <ProfileTemplate />;
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
