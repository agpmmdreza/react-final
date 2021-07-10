import { Snackbar, IconButton } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  snack: {
    background: '#04c256',
    color: 'black',
  },
  snackError: {
    background: '#EA2027',
  },
}));

const CustomSnackBar = (props) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      ContentProps={{
        classes: {
          root: props.resMessage.includes('Success')
            ? classes.snack
            : classes.snackError,
        },
      }}
      open={props.open}
      autoHideDuration={3000}
      onClose={props.handleClose}
      message={props.resMessage}
      action={
        <Fragment>
          <IconButton size='small' color='inherit' onClick={props.handleClose}>
            <CloseRounded fontSize='small' />
          </IconButton>
        </Fragment>
      }
    />
  );
};

export default CustomSnackBar;
