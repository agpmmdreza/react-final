import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import DashboardRoutes from '../../routes/DashboardRoutes';
import DrawerUI from '../Drawers/DrawerUI';
import ProfileBar from '../UI/ProfileBar';

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '0.3fr 3fr 1fr',
  },
  middle: {
    '&::-webkit-scrollbar': {
      width: '0.6em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      WebkitBorderRadius: '1rem',
      borderRadius: '1rem',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#bdc3c7',
      // outline: '1px solid slategrey',
      WebkitBorderRadius: '1rem',
      borderRadius: '1rem',
      transition: '0.3s',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#7f8c8d',
      // outline: '1px solid slategrey',
      // WebkitBorderRadius: '1rem',
      // borderRadius: '1rem',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.main}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            backgroundColor: '#FCFBFC',
            border: '2px solid #EEEEEE',
          }}
        >
          <DrawerUI />
        </div>
        <div className={classes.middle} style={{ overflowY: 'auto' }}>
          {/* <NavBar /> */}
          <DashboardRoutes />
        </div>
        <div
          style={{
            backgroundColor: '#FCFBFC',
            border: '2px solid #EEEEEE',
          }}
        >
          <ProfileBar />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
