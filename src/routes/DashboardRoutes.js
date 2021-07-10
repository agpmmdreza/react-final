import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import React, { Suspense } from 'react';

const Users = React.lazy(() =>
  import('../components/RouteComponents/Users/Users')
);
const Bells = React.lazy(() =>
  import('../components/RouteComponents/Bells/Bells')
);
const Announcements = React.lazy(() =>
  import('../components/RouteComponents/Announcements/Announcements')
);
const Courses = React.lazy(() =>
  import('../components/RouteComponents/Courses/Courses')
);
const TimeTable = React.lazy(() =>
  import('../components/RouteComponents/TimeTables/TimeTable')
);
const TimeTableBells = React.lazy(() =>
  import('../components/RouteComponents/TimeTableBells/TimeTableBells')
);
const Profile = React.lazy(() => import('../components/UI/Profile'));
const Days = React.lazy(() =>
  import('../components/RouteComponents/Days/Days')
);

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: 'center',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    justifySelf: 'center',
  },
}));

const DashboardRoutes = () => {
  const classes = useStyles();
  const authCtx = useContext(AuthContext);
  const role = authCtx.userRole.toLowerCase();
  return (
    <Fragment>
      <div className={classes.content}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path='/dashboard/profile'>
              <Profile />
            </Route>
            <Route path='/dashboard/days'>
              <Days />
            </Route>
            {role === 'admin' && (
              <Route path='/dashboard/users'>
                <Users />
              </Route>
            )}
            <Route path='/dashboard/bells'>
              <Bells />
            </Route>
            <Route path='/dashboard/announcements'>
              <Announcements />
            </Route>
            <Route path='/dashboard/courses'>
              <Courses />
            </Route>
            <Route path='/dashboard/timetables'>
              <TimeTable />
            </Route>
            {role !== 'student' && (
              <Route path='/dashboard/timetablebells'>
                <TimeTableBells />
              </Route>
            )}
          </Switch>
        </Suspense>
      </div>
    </Fragment>
  );
};

export default DashboardRoutes;
