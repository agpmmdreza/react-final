import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ClassIcon from '@material-ui/icons/Class';
import AuthContext from '../../store/auth-context';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

let response;

const TodayClassList = () => {
  const classes = useStyles();
  const authCtx = useContext(AuthContext);
  const [open, setOpen] = React.useState(true);
  const [showList, setShowList] = React.useState(false);

  fetch(`${authCtx.baseURL}/api/Courses/TodayCourses`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authCtx.token}`,
    },
  })
    .then((res) => res.json())
    .then((resData) => {
      if (resData.data != null && resData.data.length !== 0) {
        response = resData.data;
        setShowList(true);
      } else {
        console.log(resData.message);
      }
    });

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      {showList && (
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon style={{ color: '#FF4500' }} />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={open}
            timeout='auto'
            unmountOnExit
            style={{ maxHeight: '18rem', overflow: 'auto' }}
          >
            <List component='div' disablePadding>
              {response.map((row, index) => (
                <ListItem className={classes.nested} key={index}>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: '#1C9C24' }}>
                      <ClassIcon style={{ fontSize: '1.3rem' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={row.course}
                    secondary={`${row.day} (${row.bell})`}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      )}
    </Fragment>
  );
};

export default TodayClassList;
