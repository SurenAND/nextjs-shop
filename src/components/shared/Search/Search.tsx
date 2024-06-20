import { Box, InputAdornment, TextField } from "@mui/material";

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
              <img
                src="/searchIcon.svg"
                alt="search icon"
                className="w-[14px] h-[14px]"
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
