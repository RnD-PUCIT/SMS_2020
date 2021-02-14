import { makeStyles } from '@material-ui/core';
import { NoEncryption } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    width: '50px',
    height: '50px',
    color: '#454545',
    marginRight: '12px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: theme.palette.grey[800],
    margin: '10px 0px',
  },
  icon: {
    marginRight: '5px',
  },
  timeline: {
    alignSelf: 'flex-start',
  },
  missingOppositeContent: {
    '&:before': {
      flex: 'none',
      content: 'none',
    },
  },
}));

export default useStyles;
