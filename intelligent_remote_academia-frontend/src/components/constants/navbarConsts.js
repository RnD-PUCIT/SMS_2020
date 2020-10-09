import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "./sidebarConsts";


const accountMenu = [
  {
    text: "Profile",
    url: "/profile",
  },
  {
    text: "Logout",
    url: "/logout",
  },
];

const brandName = "Intelli School";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export { accountMenu, brandName, useStyles };
