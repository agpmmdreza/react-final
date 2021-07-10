import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  Collapse,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore,
  ClassRounded,
  InfoOutlined,
} from '@material-ui/icons';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { Fragment } from 'react';
import { useState } from 'react';

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

const StudentAcnnouncements = () => {
  const classes = useStyles();
  const authCtx = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [showList, setShowList] = useState(false);

  fetch(`${authCtx.baseURL}/api/Announcements/StudentAnnouncements`, {
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
              <InfoOutlined style={{ fontSize: '1.7rem', color: '#2980b9' }} />
            </ListItemIcon>
            <ListItemText primary='Announcements' />
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
                <ListItem key={index} className={classes.nested}>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: '#ffbfd4' }}>
                      <ClassRounded
                        style={{ fontSize: '1.3rem', color: '#db356b' }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={row.timeTable.course.title}
                    secondary={row.message}
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

export default StudentAcnnouncements;
