import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Menu,
  Button,
  Divider,
  IconButton,
  MenuItem,
} from '@material-ui/core';
import {
  AccountCircleRounded,
  AssignmentRounded,
  DashboardRounded,
  ExitToApp,
  FingerprintRounded,
  SupervisorAccountRounded,
  UpdateRounded,
} from '@material-ui/icons';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import TodayClassList from './TodayClassList';
import StudentAcnnouncements from './StudentAnnouncements';
import { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  avatar: {
    backgroundColor: 'red',
    width: '2.5rem',
    height: '2.5rem',
  },
  menuBg: {
    backgroundColor: '#EEEEEE',
    color: '#292929',
    '& .MuiList-padding': {
      padding: '0',
    },
    '& .MuiMenuItem-root': {
      padding: '1.1rem',
      '&:hover': {
        backgroundColor: '#bdc3c7',
      },
    },
  },
  icon: {
    fontSize: '2rem',
    margin: '0.5rem',
    padding: '0.4rem',
    height: '2.5rem',
    width: '2.5rem',
    borderRadius: '10px',
  },
  button: {
    margin: theme.spacing(1),
    width: '92%',
  },
}));

const ProfileBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const authCtx = useContext(AuthContext);
  const role = authCtx.userRole.toLowerCase();
  const logoutHandler = () => {
    setAnchorEl(null);
    authCtx.logout();
  };

  const accountButtonClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const accountButtonCloseHandler = (event) => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Fragment>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='span'
                onClick={accountButtonClickHandler}
              >
                <AccountCircleRounded
                  style={{ color: 'primary', fontSize: '2.3rem' }}
                />
              </IconButton>
              <Menu
                classes={{ paper: classes.menuBg }}
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={accountButtonCloseHandler}
              >
                <MenuItem
                  onClick={accountButtonCloseHandler}
                  component={Link}
                  to='/dashboard/profile'
                >
                  <AccountCircleRounded
                    style={{
                      color: '#2e3447',
                      fontSize: 30,
                      marginRight: '0.5rem',
                    }}
                  />
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={accountButtonCloseHandler}
                  component={Link}
                  to='/dashboard'
                >
                  <DashboardRounded
                    style={{
                      color: '#42cfb7',
                      fontSize: 30,
                      marginRight: '0.5rem',
                    }}
                  />
                  Dashboard
                </MenuItem>
                <MenuItem onClick={logoutHandler} component={Link} to='/signin'>
                  <ExitToApp
                    style={{
                      color: '#e63832',
                      fontSize: 30,
                      marginRight: '0.5rem',
                    }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </Fragment>
          }
          title={(
            authCtx.userData.firstName +
            ' ' +
            authCtx.userData.lastName
          ).toUpperCase()}
          subheader={`Hi ${authCtx.userData.firstName}`}
        />
        <Divider variant='inset' />
        <CardContent>
          <Box
            display='flex'
            justifyContent='left'
            alignItems='center'
            padding='1rem  3rem 1rem 3rem'
          >
            <FingerprintRounded
              className={classes.icon}
              style={{ color: '#15A523', backgroundColor: '#C5E8C8' }}
            />
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='left'
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'sans-serif',
                  color: 'GrayText',
                }}
              >
                ID:
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                }}
              >
                {authCtx.userData.code}
              </p>
            </Box>
          </Box>
          <Box
            display='flex'
            justifyContent='left'
            alignItems='center'
            padding='1rem  3rem 1rem 3rem'
          >
            <AssignmentRounded
              className={classes.icon}
              style={{ color: '#FF9400', backgroundColor: '#FFE4BF' }}
            />
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='left'
              alignItems='left'
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'sans-serif',
                  color: 'GrayText',
                }}
              >
                Name:
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                }}
              >
                {authCtx.userData.firstName + ' ' + authCtx.userData.lastName}
              </p>
            </Box>
          </Box>
          <Box
            display='flex'
            justifyContent='left'
            alignItems='center'
            padding='1rem  3rem 1rem 3rem'
          >
            <SupervisorAccountRounded
              className={classes.icon}
              style={{ color: '#008BFF', backgroundColor: '#BFE2FF' }}
            />
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='left'
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'sans-serif',
                  color: 'GrayText',
                }}
              >
                Role:
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                }}
              >
                {authCtx.userRole}
              </p>
            </Box>
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            padding='0.5rem'
          >
            <Button
              variant='contained'
              color='default'
              className={classes.button}
              startIcon={<UpdateRounded style={{ fontSize: '1rem' }} />}
              component={Link}
              to='/dashboard/profile'
            >
              Edit Profile
            </Button>
          </Box>
        </CardContent>
        {role !== 'admin' && (
          <Box>
            {role === 'master' && <TodayClassList />}
            {role === 'student' && <StudentAcnnouncements />}
          </Box>
        )}
      </Card>
    </>
  );
};

export default ProfileBar;
