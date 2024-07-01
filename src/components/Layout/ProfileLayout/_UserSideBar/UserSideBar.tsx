import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { UserSideBarItems } from "@/src/components/Layout/ProfileLayout/_UserSideBar/data";
import { MainRoutes } from "@/src/constant/routes";
import { useRouter } from "next/router";
import PersonIcon from "@mui/icons-material/Person";
import { useSearchParams } from "next/navigation";

const UserSidebar = () => {
  const activePage: string | null = useSearchParams().get("view");
  const { pathname, push: pushRouter } = useRouter();
  return (
    <List sx={{ width: "100%", padding: "10px 20px" }}>
      <ListItem
        sx={{
          color:
            pathname === MainRoutes.PROFILE && !activePage ? "#5e35b0" : "",
          backgroundColor:
            pathname === MainRoutes.PROFILE && !activePage ? "#ece6f5" : "",
          borderRadius: "20px",
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
          <ListItemText primary={"Profile"} />
        </ListItemButton>
      </ListItem>
      {UserSideBarItems.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            color: activePage === item.view ? "#5e35b0" : "",
            backgroundColor: activePage === item.view ? "#ece6f5" : "",
            borderRadius: "20px",
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
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UserSidebar;
