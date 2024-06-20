import { Box, IconButton, Stack, Typography } from "@mui/material";

const sizes = {
  XS: 3,
  S: 0,
  M: 1,
  L: 1213,
  XL: 6,
};

export default function ProductSizes() {
  return (
    <Box alignSelf="center">
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        mt={3}
        ml={1}
        gap={32}
      >
        <Typography variant="h6" fontWeight="600">
          Size
        </Typography>
        <Typography variant="body2" color="#9ca3af">
          Size guide
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="start"
        flexWrap="wrap"
        textAlign="center"
        my={2}
      >
        {Object.entries(sizes).map(([size, amount]) => (
          <Box mb={2} marginInlineEnd={2}>
            <Stack
              position="relative"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              {amount != 0 ? (
                <IconButton
                  sx={{
                    userSelect: "none",
                    cursor: "pointer",
                    width: 64,
                    height: 64,
                    border: 1,
                    borderColor: "#9ca3af",
                    borderRadius: 8,
                  }}
                >
                  {size}
                </IconButton>
              ) : (
                <IconButton
                  sx={{
                    userSelect: "none",
                    cursor: "pointer",
                    width: 64,
                    height: 64,
                    border: 1,
                    borderColor: "#9ca3af",
                    borderRadius: 8,
                  }}
                  disabled
                >
                  {size}
                </IconButton>
              )}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
