import SignInForm from '../components/Auth/SingInForm';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const SignInPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <SignInForm />
      </div>
    </Fragment>
  );
};

export default SignInPage;
