import { PropsWithChildren, useEffect } from "react";
import Header from "./_Header/Header";
import Footer from "./_Footer/Footer";
import { useUserContext } from "@/src/context/authContext";
import { Box } from "@mui/material";

export default function Layout({ children }: PropsWithChildren) {
  const { state } = useUserContext();
  useEffect(() => {
    console.log(state);
  }, [state.isLogin]);
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Header isLogin={state.isLogin} />
      {children}
      <Footer />
    </Box>
  );
}
