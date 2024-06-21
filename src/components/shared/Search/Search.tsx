import { Box, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";

export default function Search() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        color: "#6b7280",
        textAlign: "left",
        px: 2,
        py: 0.5,
        bgcolor: "#e5e7eb",
        borderRadius: "6px",
      }}
    >
      <TextField
        variant="standard"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Image
                src="/searchIcon.svg"
                alt="search icon"
                width={14}
                height={14}
              />
            </InputAdornment>
          ),
        }}
        type="text"
        sx={{
          width: "100%",

          bgcolor: "#e5e7eb",
          border: "none",
          "&:focus": {
            outline: "none",
          },
        }}
      />
    </Box>
  );
}
