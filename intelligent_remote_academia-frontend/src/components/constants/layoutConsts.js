import { makeStyles } from '@material-ui/core/styles';

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
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background:
      'linear-gradient(135deg, rgb(24, 42, 115) 0%, rgb(33, 138, 174) 69%, rgb(32, 167, 172) 89%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: { marginTop: '70px' },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: '#F8F8F8', // Github's backround
    // background: '#EDF0F2',
    minHeight: '100vh',
  },
  active: {
    background:
      'linear-gradient(to right, rgb(33, 138, 174), rgb(32, 167, 172))',
    color: 'white',
    boxShadow: '0 2px 5px rgb(0, 0, 0, .3)',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    '&:hover': {
      color: 'white',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export { useStyles, drawerWidth };
