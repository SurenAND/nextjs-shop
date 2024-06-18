import { MainRoutes } from "@/src/constant/routes";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Hero = () => {
  return (
    <Box component="section" sx={{ position: "relative" }}>
      <img className="w-full" src="/landing.webp" alt="Shop" />
      <Stack
        sx={{
          width: { xs: "50%", sm: "66%", lg: "33%" },
          position: "absolute",
          top: { md: "7rem", xs: "1rem" },
          left: { md: "7rem", xs: "1rem" },
          gap: { md: 5, sm: 4, xs: 1 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#166534",
            fontSize: "4vw",
            lineHeight: "1.1",
            fontWeight: "bold",
          }}
        >
          Shopping And Department Store.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#475569",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          Shopping is bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#166534",
            fontWeight: "600",
            px: 3,
            py: 1,
            borderRadius: "100px",
            width: 150,
            ":hover": {
              bgcolor: "#16a34a",
            },
          }}
        >
          <Link href={MainRoutes.ABOUT_US}>Learn More</Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
