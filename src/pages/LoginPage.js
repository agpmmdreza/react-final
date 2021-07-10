import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BackGround from './graduation.jpg';
import AuthContext from '../store/auth-context';
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${BackGround})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const INITIAL_VALIDATION = {
  userName: {
    value: '',
    error: false,
    helper: '',
  },
  password: {
    value: '',
    error: false,
    helper: '',
  },
};

const LoginPage = () => {
  const classes = useStyles();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  // const [url, setUrl] = useState('');
  const [fields, setFields] = useState(INITIAL_VALIDATION);
  // const [urlField, setUrlField] = useState(false);

  // const urlButtonHandler = (event) => {
  //   if (urlField) {
  //     if (url.trim() !== '') {
  //       authCtx.setBaseURL(url);
  //     }
  //   } else {
  //     setUrlField(!urlField);
  //   }
  // };

  const handleOnChange = (event) => {
    setFields((prevState) => ({
      ...prevState,
      [event.target.name]: {
        ...prevState[event.target.name],
        value: event.target.value,
      },
    }));
    if (event.target.value !== '') {
      setFields((prevState) => ({
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          error: false,
          helper: '',
        },
      }));
    }
  };

  const handleValidation = (event) => {
    if (event.target.value === '') {
      setFields((prevState) => ({
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          error: true,
          helper: 'Enter a value!',
        },
      }));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (fields.password.value !== '' && fields.userName.value !== '') {
      fetch(`${authCtx.baseURL}/api/Auth/Login`, {
        method: 'POST',
        body: JSON.stringify({
          code: fields.userName.value,
          password: fields.password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          const data = resData.data;
          if (data != null) {
            authCtx.login(data.token, data.user.role, data.user, data.expireAt);
            history.replace('/dashboard');
          } else {
            console.log(resData.message);
          }
        });
    }
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
            <TextField
              value={fields.userName.value}
              error={fields.userName.error}
              helperText={fields.userName.helper}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='userName'
              onChange={handleOnChange}
              onBlur={handleValidation}
            />
            <TextField
              value={fields.password.value}
              error={fields.password.error}
              helperText={fields.password.helper}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              onChange={handleOnChange}
              onBlur={handleValidation}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
