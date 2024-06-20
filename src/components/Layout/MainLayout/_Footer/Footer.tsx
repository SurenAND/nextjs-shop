import { Icon } from "@iconify/react";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "absolute",
        bottom: "-9rem",
        width: "100%",
        px: 5,
      }}
    >
      <hr className="h-0.5 bg-gray-200" />
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 2, md: 5 },
          flexDirection: { md: "row" },
        }}
      >
        <List sx={{ display: "flex", gap: 2 }}>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Icon
              icon="material-symbols-light:business-center-outline"
              className="text-red-400 text-xl"
            />
            <Typography
              variant="body1"
              noWrap
              fontWeight={600}
              fontSize="0.875rem"
            >
              Become Seller
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Icon
              icon="iconamoon:gift-light"
              className="text-red-400 text-xl"
            />
            <Typography
              variant="body1"
              noWrap
              fontWeight={600}
              fontSize="0.875rem"
            >
              Gift Cards
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Icon
              icon="material-symbols:help-outline"
              className="text-red-400 text-xl"
            />
            <Typography
              variant="body1"
              noWrap
              fontWeight={600}
              fontSize="0.875rem"
            >
              Help Center
            </Typography>
          </ListItem>
        </List>
        <List sx={{ display: "flex", gap: 2, flex: 1, width: "100%" }}>
          <ListItem sx={{ justifyContent: "end" }}>
            <Typography variant="body1" fontWeight={600} fontSize="0.875rem">
              Terms of Use
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" fontWeight={600} fontSize="0.875rem">
              Privacy Policy
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1" fontWeight={600} fontSize="0.875rem">
          All Right reserved by Group 1 | 2024
        </Typography>
      </Stack>
    </Box>
  );
}
