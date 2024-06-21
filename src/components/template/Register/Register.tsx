import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { generate_token } from "../../../lib/helper";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MainRoutes } from "@/src/constant/routes";
import Image from "next/image";
import { useLogin, useSignUp } from "@/src/api/auth/auth.queries";

function RegisterTemplate() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checked, setChecked] = useState(false);

  const { mutate: loginMutate } = useLogin(email, password);
  const { mutate: signupMutate } = useSignUp();

  const handlePageToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      router.push(`${router.pathname}?signup=true`);
    } else router.push(`${router.pathname}?login=true`);
  };

  const handleLogin = () => {
    loginMutate();
  };

  const handleSignUp = () => {
    const newUser = {
      id: generate_token(32),
      email: email,
      userName: name,
      password: password,
      role: "user",
    };
    signupMutate(newUser);
  };

  useEffect(() => {
    if (searchParams.get("signup") === "true") {
      setChecked(true);
    }
  }, [searchParams.get("signup")]);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="main"
    >
      <Container
        sx={{
          padding: "40px",
          bgcolor: "white",
          borderRadius: "30px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "block" },
            }}
            md={6}
            p={5}
          >
            <Image src="/login.svg" alt="login" width={500} height={500} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                gap: "25px",
              }}
            >
              <Link href={MainRoutes.HOME}>
                <Image src="/shop.png" alt="shop" width={200} height={100} />
              </Link>
              <Typography
                variant="h3"
                sx={{ textTransform: "uppercase", fontWeight: "bold" }}
              >
                Welcome Back
              </Typography>
              <Typography variant="body2" sx={{ opacity: "60%" }}>
                Please Login to Your Account
              </Typography>
              {searchParams.get("signup") === "true" && (
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="your name"
                  variant="outlined"
                  type="text"
                  fullWidth
                />
              )}
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="email address"
                variant="outlined"
                type="email"
                fullWidth
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="password"
                variant="outlined"
                type="password"
                fullWidth
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: orange[500],
                  ":hover": { backgroundColor: orange[600] },
                }}
                onClick={
                  searchParams.get("signup") === "true"
                    ? handleSignUp
                    : handleLogin
                }
              >
                {searchParams.get("signup") === "true" ? "SignUp" : "Login"}
              </Button>
              <Stack flexDirection="row" gap={2} alignContent="center">
                <Typography variant="h6">Login</Typography>
                <Switch
                  checked={checked}
                  onChange={handlePageToggle}
                  color="warning"
                />
                <Typography variant="h6">SignUp</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default RegisterTemplate;
