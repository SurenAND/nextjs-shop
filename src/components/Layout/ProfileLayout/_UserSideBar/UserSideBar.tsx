import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { UserSideBarItems } from "@/src/components/Layout/ProfileLayout/_UserSideBar/data";
import { MainRoutes } from "@/src/constant/routes";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import { useSearchParams } from "next/navigation";
import { useUserContext } from "@/src/context/authContext";
import { stringAvatar } from "@/src/lib/helper";

const UserSidebar = () => {
  const activePage: string | null = useSearchParams().get("view");
  const { pathname, push: pushRouter } = useRouter();
  const { state } = useUserContext();

  return (
    <List sx={{ width: "100%" }}>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          background: "linear-gradient(to top right, #fff 20%, #ecf0f1)",
          borderStartStartRadius: "8px",
          borderEndStartRadius: "20px",
          padding: "20px",
        }}
      >
        <Avatar
          {...stringAvatar(state.userName)}
          sx={{ width: "70px", height: "70px" }}
        />
        <Typography variant="h4">{state.userName}</Typography>
        <Typography variant="h6">{"38.00$"}</Typography>
        <Typography variant="body2">{"Balance"}</Typography>
      </ListItem>
      <ListItem
        sx={{
          background:
            pathname === MainRoutes.PROFILE && !activePage
              ? "linear-gradient(to right, #fff 70%, #ecf0f1)"
              : "linear-gradient(to right, #fff 20%, #ecf0f1)",
          borderLeft:
            pathname === MainRoutes.PROFILE && !activePage
              ? "5px solid #5e35b0"
              : "",
          borderStartStartRadius: "20px",
          borderEndStartRadius: "20px",
          margin: "10px 0",
        }}
      >
        <ListItemButton
          onClick={() => pushRouter(MainRoutes.PROFILE)}
          sx={{ borderRadius: "20px" }}
          disableRipple
        >
          <ListItemIcon>
            <PersonIcon
              sx={{
                color:
                  pathname === MainRoutes.PROFILE && !activePage
                    ? "#5e35b0"
                    : "",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={"Profile"}
            primaryTypographyProps={{
              fontWeight:
                pathname === MainRoutes.PROFILE && !activePage
                  ? "bold"
                  : "normal",
            }}
          />
        </ListItemButton>
      </ListItem>
      {UserSideBarItems.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            background:
              activePage === item.view
                ? "linear-gradient(to right, #fff 70%, #ecf0f1)"
                : "linear-gradient(to right, #fff 20%, #ecf0f1)",
            borderLeft: activePage === item.view ? "5px solid #5e35b0" : "",
            borderStartStartRadius: "20px",
            borderEndStartRadius: "20px",
            margin: "10px 0",
            textWrap: "nowrap",
          }}
        >
          <ListItemButton
            onClick={() =>
              pushRouter(`${MainRoutes.PROFILE}?view=${item.view}`)
            }
            sx={{ borderRadius: "20px" }}
            disableRipple
          >
            <ListItemIcon
              sx={{
                color: activePage === item.view ? "#5e35b0" : "",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontWeight: activePage === item.view ? "bold" : "normal",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UserSidebar;
