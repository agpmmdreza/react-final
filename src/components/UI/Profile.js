import {
  Avatar,
  Button,
  IconButton,
  Paper,
  Divider,
  TextField,
} from '@material-ui/core';
import { Fragment, useContext, useEffect, useState } from 'react';
import {
  ArrowBackIosRounded,
  EditRounded,
  VpnKeyRounded,
} from '@material-ui/icons';
import AuthContext from '../../store/auth-context';
import { makeStyles } from '@material-ui/core/styles';
import useValidation from '../../hooks/use-validation';
import CustomSnackBar from './SnackBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '4rem',
  },
  container: {
    backgroundColor: '#454545',
    display: 'grid',
    gridTemplateRows: 'auto auto',
    minHeight: '450px',
    width: '400px',
    borderRadius: '1rem',
  },
  header: {
    boxShadow:
      '0 2.1px 1.9px -9px rgba(0, 0, 0, 0.065), 0 5px 4.4px -9px rgba(0, 0, 0, 0.093), 0 8.9px 7.9px -9px rgba(0, 0, 0, 0.115), 0 14.8px 13.2px -9px rgba(0, 0, 0, 0.135), 0 24.3px 21.7px -9px rgba(0, 0, 0, 0.157), 0 42.5px 37.9px -9px rgba(0, 0, 0, 0.185), 0 92px 82px -9px rgba(0, 0, 0, 0.25) ;',
    background:
      'linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0 0 200px 200px / 50px',
  },
  items: {
    placeSelf: 'center',
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(to right, #ee5a6f, #f29263)',
  },
  paper: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    minHeight: '60vh',
    minWidth: '50vw',
  },
  data: {
    padding: '3rem',
    display: 'grid',
    gridTemplateRows: 'auto auto',
  },
}));

let response;

const Profile = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  const classes = useStyles();
  const [fields, setFields] = useState({
    first: {
      value: '',
      error: false,
      helper: '',
    },
    last: {
      value: '',
      error: false,
      helper: '',
    },
  });
  const [passFields, setPassFields] = useState({
    current: {
      value: '',
      error: false,
      helper: '',
    },
    newPass: {
      value: '',
      error: false,
      helper: '',
    },
  });
  const [open, setOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isProfileEdited, setIsProfileEdited] = useState(false);
  const [resMessage, setResMessage] = useState('');

  const { handleOnChange, handleValidation } = useValidation(fields, setFields);

  const {
    handleOnChange: handleOnChangePass,
    handleValidation: handleValidationPass,
  } = useValidation(passFields, setPassFields);

  const handleEditClicked = () => {
    setShowProfile(false);
    setShowEdit(true);
  };
  const handleChangePassClicked = () => {
    setShowProfile(false);
    setShowPass(true);
  };
  const handlePasswordChange = () => {
    if (passFields.current.value !== '' && passFields.newPass.value !== '') {
      fetch(`${authCtx.baseURL}/api/Users/Profile/ChangePassword`, {
        method: 'POST',
        body: JSON.stringify({
          currentPassword: passFields.current.value,
          newPassword: passFields.newPass.value,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.status === 'success') {
            setShowProfile(true);
            setShowPass(false);
            setResMessage('Successfully Changed!');
          } else {
            setResMessage('Something Went Wrong!');
          }
          setOpen(true);
        });
    }
  };

  const handleEditProfile = () => {
    if (fields.first.value !== '' && fields.last.value !== '') {
      fetch(`${authCtx.baseURL}/api/Users/Profile`, {
        method: 'POST',
        body: JSON.stringify({
          firstName: fields.first.value,
          lastName: fields.last.value,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.status === 'success') {
            setShowEdit(false);
            setIsProfileEdited(true);
            setResMessage('Successfully Added!');
          } else {
            setResMessage('Something Went Wrong!');
          }
          setOpen(true);
        });
    }
  };

  useEffect(() => {
    // setIsLoading(true);
    fetch(`${authCtx.baseURL}/api/Users/Profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.data != null) {
          response = resData.data;
          setShowProfile(true);
        }
        // setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProfileEdited]);

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={5}>
          <div className={classes.avatar}>
            <Avatar
              style={{
                justifySelf: 'center',
                width: '100px',
                height: '100px',
                border: '0.2rem solid lightgray',
                marginTop: '4rem',
              }}
            />
            <div style={{ marginTop: '2.2rem', color: '#eeeeee' }}>
              <h4 style={{ marginBottom: '0.4rem' }}>
                {response && response.firstName.toUpperCase()}
              </h4>
              <h4>{response && response.lastName.toUpperCase()}</h4>
            </div>
          </div>
          {showPass && (
            <div>
              <div style={{ padding: '1.5rem', textAlign: 'left' }}>
                <IconButton
                  onClick={() => {
                    setShowProfile(true);
                    setShowPass(false);
                  }}
                >
                  <ArrowBackIosRounded />
                </IconButton>
                <h4 style={{ display: 'inline', marginLeft: '.4rem' }}>
                  Change Password
                </h4>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Fragment>
                  <TextField
                    value={passFields.current.value}
                    error={passFields.current.error}
                    helperText={passFields.current.helper}
                    style={{ margin: '2rem 0' }}
                    placeholder='Current Password'
                    name='current'
                    onChange={handleOnChangePass}
                    onBlur={handleValidationPass}
                  />
                  <TextField
                    value={passFields.newPass.value}
                    error={passFields.newPass.error}
                    helperText={passFields.newPass.helper}
                    style={{ marginBottom: '2rem' }}
                    placeholder='Last Name'
                    name='newPass'
                    onChange={handleOnChangePass}
                    onBlur={handleValidationPass}
                  />
                  <Button
                    color='secondary'
                    variant='contained'
                    onClick={handlePasswordChange}
                  >
                    Change Password
                  </Button>
                </Fragment>
              </div>
            </div>
          )}
          {showEdit && (
            <div>
              <div style={{ padding: '1.5rem', textAlign: 'left' }}>
                <IconButton
                  onClick={() => {
                    setShowProfile(true);
                    setShowEdit(false);
                  }}
                >
                  <ArrowBackIosRounded />
                </IconButton>
                <h4 style={{ display: 'inline', marginLeft: '.4rem' }}>
                  Edit Profile
                </h4>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Fragment>
                  <TextField
                    value={fields.first.value}
                    error={fields.first.error}
                    helperText={fields.first.helper}
                    style={{ margin: '2rem 0' }}
                    placeholder='First Name'
                    name='first'
                    onChange={handleOnChange}
                    onBlur={handleValidation}
                  />
                  <TextField
                    value={fields.last.value}
                    error={fields.last.error}
                    helperText={fields.last.helper}
                    style={{ marginBottom: '2rem' }}
                    placeholder='Last Name'
                    name='last'
                    onChange={handleOnChange}
                    onBlur={handleValidation}
                  />
                  <Button
                    color='primary'
                    variant='contained'
                    onClick={handleEditProfile}
                  >
                    Save Changes
                  </Button>
                </Fragment>
              </div>
            </div>
          )}
          {showProfile && (
            <div className={classes.data}>
              <Fragment>
                <Fragment>
                  <p
                    style={{
                      textAlign: 'left',
                      marginBottom: '.4rem',
                    }}
                  >
                    Information
                  </p>
                  <Divider />
                </Fragment>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto',
                    marginTop: '2rem',
                  }}
                >
                  <div style={{ justifySelf: 'start', marginLeft: '0.8rem' }}>
                    <h5 style={{ textAlign: 'left', marginBottom: '.4rem' }}>
                      Code
                    </h5>
                    <p>{authCtx.userData.code}</p>
                  </div>
                  <div style={{ justifySelf: 'start', marginLeft: '0.8rem' }}>
                    <h5 style={{ textAlign: 'left', marginBottom: '.4rem' }}>
                      Role
                    </h5>
                    <p>{authCtx.userRole.toLowerCase()}</p>
                  </div>
                </div>
              </Fragment>
              <div style={{ marginTop: '7rem', alignSelf: 'end' }}>
                <Button
                  variant='contained'
                  size='small'
                  style={{ background: '#2ecc71', width: '10.8rem' }}
                  onClick={handleEditClicked}
                >
                  <EditRounded style={{ marginRight: '0.3rem' }} />
                  Edit Profile
                </Button>
                <Button
                  variant='contained'
                  size='small'
                  style={{
                    background: '#e74c3c',
                    marginLeft: '1rem',
                    width: '10.8rem',
                  }}
                  onClick={handleChangePassClicked}
                >
                  <VpnKeyRounded style={{ marginRight: '0.3rem' }} />
                  Change Password
                </Button>
              </div>
            </div>
          )}
        </Paper>
      </div>

      <CustomSnackBar
        open={open}
        handleClose={() => setOpen(false)}
        resMessage={resMessage}
      />
    </Fragment>
  );
};

export default Profile;
