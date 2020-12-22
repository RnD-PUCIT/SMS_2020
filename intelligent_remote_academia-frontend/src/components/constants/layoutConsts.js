import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

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
    background:
      "linear-gradient(135deg, rgb(24, 42, 115) 0%, rgb(33, 138, 174) 69%, rgb(32, 167, 172) 89%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginTop: "70px",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  active: {
    background:
      "linear-gradient(to right, rgb(33, 138, 174), rgb(32, 167, 172))",
    color: "white",
    boxShadow: "0 3px 10px rgb(0, 0, 0, .5)",
    borderTopRightRadius: "50px",
    // borderBottomRightRadius: "50px",
  },
  title: {
    flexGrow: 1,
  },
}));

export { useStyles, drawerWidth };
