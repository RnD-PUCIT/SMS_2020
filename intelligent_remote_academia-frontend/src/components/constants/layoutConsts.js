import { makeStyles } from "@material-ui/core/styles";
import colors from "../../colors";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "white",
    boxShadow: "0 0.125rem 0.625rem rgba(90,97,105,0.12)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: { marginTop: "70px" },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#f5f6f8", // Github's backround
    // background: "#EDF0F2",
    minHeight: "100vh",
  },
  active: {
    color: "white",
    backgroundColor: colors.tertiaryDark,
    borderLeft: `3px solid ${colors.secondary}`,
    "&:hover": {
      color: "white",
    },
  },
  title: {
    flexGrow: 1,
  },
  linkText: {
    color: colors.light,
    fontSize: 14,
  },
  linksHeading: {
    color: "white",
    fontSize: 16,
  },
  linkIcon: {
    justifyContent: "center",
  },
}));

export { useStyles, drawerWidth };
