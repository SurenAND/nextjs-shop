import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { drawerProductsItems, drawerUserItems } from "./data";
import { useRouter } from "next/router";
import { MainRoutes } from "@/src/constant/routes";
import { useSearchParams } from "next/navigation";
import { useUserContext } from "@/src/context/authContext";

export default function DrawerList() {
  const { pathname, push: pushRouter } = useRouter();
  const searchParams = useSearchParams().get("view");
  const { state } = useUserContext();
  return (
    <Box sx={{ width: 250, padding: "10px 20px" }} role="presentation">
      <List>
        <Typography variant="h6" fontWeight={600}>
          Dashboard
        </Typography>
        <ListItem
          sx={{
            color:
              pathname === MainRoutes.DASHBOARD && !searchParams
                ? "#5e35b0"
                : "",
            backgroundColor:
              pathname === MainRoutes.DASHBOARD && !searchParams
                ? "#ece6f5"
                : "",
            borderRadius: "20px",
            margin: "10px 0",
          }}
        >
          <ListItemButton
            onClick={() => pushRouter(MainRoutes.DASHBOARD)}
            sx={{ borderRadius: "20px" }}
            disableRipple
          >
            <ListItemIcon>
              <InboxIcon
                sx={{
                  color:
                    pathname === MainRoutes.DASHBOARD && !searchParams
                      ? "#5e35b0"
                      : "",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <Typography variant="h6" fontWeight={600}>
          Products Management
        </Typography>
        {drawerProductsItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              color: searchParams === item.view ? "#5e35b0" : "",
              backgroundColor: searchParams === item.view ? "#ece6f5" : "",
              borderRadius: "20px",
              margin: "10px 0",
              textWrap: "nowrap",
            }}
          >
            <ListItemButton
              onClick={() =>
                pushRouter(`${MainRoutes.DASHBOARD}?view=${item.view}`)
              }
              sx={{ borderRadius: "20px" }}
              disableRipple
            >
              <ListItemIcon
                sx={{
                  color: searchParams === item.view ? "#5e35b0" : "",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <Typography variant="h6" fontWeight={600}>
          User Management
        </Typography>
        {drawerUserItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              color: searchParams === item.view ? "#5e35b0" : "",
              backgroundColor: searchParams === item.view ? "#ece6f5" : "",
              borderRadius: "20px",
              margin: "10px 0",
              textWrap: "nowrap",
              display: item.roleToSee.includes(state.role) ? "flex" : "none",
            }}
          >
            <ListItemButton
              onClick={() =>
                pushRouter(`${MainRoutes.DASHBOARD}?view=${item.view}`)
              }
              sx={{ borderRadius: "20px" }}
              disableRipple
            >
              <ListItemIcon
                sx={{
                  color: searchParams === item.view ? "#5e35b0" : "",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ position: "absolute", bottom: "0" }}>
        <Divider />
        <Typography
          margin="15px auto"
          width="70%"
          textAlign="center"
          variant="body1"
          fontWeight={600}
          fontSize="0.875rem"
        >
          All Right reserved by Group 1 | 2024
        </Typography>
      </List>
    </Box>
  );
}
