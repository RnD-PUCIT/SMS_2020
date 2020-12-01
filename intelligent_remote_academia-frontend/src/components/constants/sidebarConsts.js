import { makeStyles } from '@material-ui/core/styles';

//Sidebar link constatnts
const sideBarLinks = [
  {
    text: 'Subjects',
    url: '/subjects',
  },
  {
    text: 'Attendance',
    url: '/attendance',
  },
  {
    text: 'Announcements',
    url: '/announcements',
  },
  {
    text: "Fee Challan Form",
    url: "/challan",
  },
];

//Sidebar Css constants
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export { useStyles, sideBarLinks, drawerWidth };
