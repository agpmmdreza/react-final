import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import { useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';

const useStyles = makeStyles(() => ({
  list: {
    '& .Mui-selected': {
      backgroundColor: '#BDBDBD',
      color: '#212121',
    },
    '& .MuiListItem-root:hover': {
      backgroundColor: '#e0e0e0',
      color: '#292929',
    },
    color: '#808080',
    alignItems: 'center',
    width: '100%',
  },
}));

const adminDrawer = [
  {
    path: '/dashboard/users',
    icon: <GroupOutlinedIcon />,
    label: 'Users',
  },
  {
    path: '/dashboard/days',
    icon: <TodayOutlinedIcon />,
    label: 'Days',
  },
  {
    path: '/dashboard/bells',
    icon: <NotificationsNoneOutlinedIcon />,
    label: 'Bells',
  },
  {
    path: '/dashboard/announcements',
    icon: <InfoOutlinedIcon />,
    label: 'Announcements',
  },
  {
    path: '/dashboard/courses',
    icon: <BookOutlinedIcon />,
    label: 'Courses',
  },
  {
    path: '/dashboard/timetables',
    icon: <ScheduleIcon />,
    label: 'TimeTables',
  },
  {
    path: '/dashboard/timetablebells',
    icon: <AlarmAddIcon />,
    label: 'TimeTableBells',
  },
];
const masterDrawer = [
  {
    path: '/dashboard/days',
    icon: <TodayOutlinedIcon />,
    label: 'Days',
  },
  {
    path: '/dashboard/bells',
    icon: <NotificationsNoneOutlinedIcon />,
    label: 'Bells',
  },
  {
    path: '/dashboard/announcements',
    icon: <InfoOutlinedIcon />,
    label: 'Announcements',
  },
  {
    path: '/dashboard/courses',
    icon: <BookOutlinedIcon />,
    label: 'Courses',
  },
  {
    path: '/dashboard/timetables',
    icon: <ScheduleIcon />,
    label: 'TimeTables',
  },
  {
    path: '/dashboard/timetablebells',
    icon: <AlarmAddIcon />,
    label: 'TimeTableBells',
  },
];
const studentDrawer = [
  {
    path: '/dashboard/days',
    icon: <TodayOutlinedIcon />,
    label: 'Days',
  },
  {
    path: '/dashboard/bells',
    icon: <NotificationsNoneOutlinedIcon />,
    label: 'Bells',
  },
  {
    path: '/dashboard/announcements',
    icon: <InfoOutlinedIcon />,
    label: 'Announcements',
  },
  {
    path: '/dashboard/courses',
    icon: <BookOutlinedIcon />,
    label: 'Courses',
  },
  {
    path: '/dashboard/timetables',
    icon: <ScheduleIcon />,
    label: 'TimeTables',
  },
];

const DrawerUI = () => {
  const authCtx = useContext(AuthContext);
  const role = authCtx.userRole.toLowerCase();
  const location = useLocation();
  const classes = useStyles();
  let content;

  if (role === 'admin') {
    content = adminDrawer;
  } else if (role === 'master') {
    content = masterDrawer;
  } else {
    content = studentDrawer;
  }

  let selectedIndex;
  content.forEach((row, index) => {
    if (row.path === location.pathname.toLowerCase()) {
      selectedIndex = index;
    } else {
      selectedIndex = null;
    }
  });
  const [selected, setSelected] = useState(selectedIndex);

  return (
    <div className={classes.list}>
      <List>
        {content.map((item, index) => {
          return (
            <ListItem
              key={index}
              button
              selected={selected === index}
              onClick={() => setSelected(index)}
              component={Link}
              to={item.path}
              style={{
                justifyContent: 'center',
                padding: '0.6rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                {item.icon}
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.8rem',
                  }}
                >
                  {item.label}
                </p>
              </div>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default DrawerUI;
