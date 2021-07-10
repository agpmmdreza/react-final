import { Fragment, useContext, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Collapse,
  IconButton,
  TextField,
  Paper,
  Card,
} from '@material-ui/core';
import { useEffect } from 'react';
import CustomTable from '../../UI/Table';
import CustomSnackBar from '../../UI/SnackBar';
import { CheckCircleOutlineRounded, SearchRounded } from '@material-ui/icons';
import useValidation from '../../../hooks/use-validation';

let response;
let pageData;

const timeTablesHead = [
  { label: 'ID', align: 'left', addField: [''], addHeader: true },
  {
    label: 'Course',
    align: 'center',
    addField: [],
    addHeader: true,
  },
  {
    label: 'Course Time',
    secLabel: 'Time Table Bell List',
    align: 'center',
    addField: [],
    addHeader: true,
  },
  {
    label: 'Master',
    secLabel: 'Master',
    path: 'user',
    align: 'center',
    addField: [],
    addHeader: true,
  },
];

const mastersHead = [
  { label: 'ID', align: 'left', addField: [''], addHeader: true },
  {
    label: 'Master',
    secLabel: 'User',
    path: '',
    align: 'left',
    addField: [],
    addHeader: true,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '450px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    // padding: '2rem',
    width: '90%',
  },
}));

const Courses = () => {
  const authCtx = useContext(AuthContext);
  const role = authCtx.userRole.toLowerCase();
  const [idCalled, setIdCalled] = useState(false);
  const [courseId, setCourseId] = useState('');
  const [openBox, setOpenBox] = useState({ source: '', value: false });
  const [tableShow, setTableShow] = useState(false);
  const [reload, setReload] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [resMessage, setResMessage] = useState('');
  const [secTableShow, setSecTableShow] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [tableHead, setTableHead] = useState([
    { label: 'ID', align: 'left', addField: [''], addHeader: true },
    {
      label: 'Title',
      align: 'center',
      addField: ['add', 'update'],
      addHeader: true,
    },
    {
      label: 'Units Count',
      align: 'center',
      addField: ['add', 'update'],
      addHeader: true,
    },
  ]);
  const classes = useStyles();
  const [fields, setFields] = useState({
    id: {
      value: '',
      error: false,
      helper: '',
      type: 'numerical',
    },
    title: {
      value: '',
      error: false,
      helper: '',
    },
    unitsCount: {
      value: '',
      error: false,
      helper: '',
      type: 'numerical',
    },
  });

  const { handleOnChange, handleValidation } = useValidation(fields, setFields);

  useEffect(() => {
    if (role === 'admin') {
      setShowActions(true);
      if (!tableHead.some((item) => item.label === 'Actions')) {
        tableHead.push({
          label: 'Actions',
          align: 'right',
          addField: [],
          addHeader: true,
        });
      }
    }
    if (!tableShow && role !== 'student') {
      handleGetCourses();
    } else if (tableShow && reload) {
      handleGetCourses();
    } else if (role === 'student') {
      response = [];
      pageData = {
        count: 0,
        totalPages: 0,
        page: 0,
      };
      setSecTableShow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const handleGetCourses = () => {
    fetch(`${authCtx.baseURL}/api/courses`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData != null) {
          console.log(resData);
          response = resData.data.list;
          pageData = {
            count: resData.data.list.length,
            totalPages: resData.data.totalPage,
            page: resData.data.page,
          };
          setTableShow(false);
          setTableShow(true);
          setIdCalled(false);
          setReload(false);
        } else {
          console.log(resData.message);
        }
      });
  };

  const handleDeleteClicked = (id) => {
    fetch(`${authCtx.baseURL}/api/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(id, resData);
        if (resData.status === 'success') {
          setResMessage('Successfully Deleted!');
          setReload(true);
        } else {
          setResMessage('Something Went Wrong!');
        }
        setSnackOpen(true);
      });
  };

  const handleUpdateClicked = (id, fields) => {
    if (fields.title.value !== '' && fields.unitsCount.value !== '') {
      fetch(`${authCtx.baseURL}/api/courses/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: fields.title.value,
          unitsCount: fields.unitsCount.value,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.status === 'success') {
            setResMessage('Successfully Updated!');
            setReload(true);
          } else if (resData.data === null) {
            setResMessage('No match found!');
          } else {
            setResMessage('Something Went Wrong!');
          }
          setSnackOpen(true);
        });
    }
  };
  const handleAddClicked = (fields) => {
    if (fields.title.value !== '' && fields.unitsCount.value !== '') {
      fetch(`${authCtx.baseURL}/api/courses`, {
        method: 'POST',
        body: JSON.stringify({
          title: fields.title.value,
          unitsCount: fields.unitsCount.value,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.status === 'success') {
            setResMessage('Successfully Added!');
            setReload(true);
          } else {
            setResMessage('Something Went Wrong!');
          }
          setSnackOpen(true);
        });
    }
  };

  const handleById = (id) => {
    fetch(`${authCtx.baseURL}/api/courses/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.data != null) {
          response = [resData.data];
          pageData = {
            count: 1,
            totalPages: 1,
            page: 1,
          };
          setTableShow(false);
          setTableShow(true);
          setIdCalled(true);
        } else {
          setResMessage('Not Found!');
          setSnackOpen(true);
        }
      });
  };

  const handleGetByCourseId = () => {
    if (courseId !== '') {
      fetch(`${authCtx.baseURL}/api/courses/${courseId}/${openBox.source}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          if (resData.data != null) {
            response = resData.data.list;
            pageData = {
              count: resData.data.list.length,
              totalPages: resData.data.totalPage,
              page: resData.data.page,
            };
            if (openBox.value === 'choose') {
              if (resData.status === 'success') {
                setResMessage('Successfuly Chosen!');
                setSnackOpen(true);
              } else {
                setResMessage(resData.message);
                setSnackOpen(true);
              }
            }
            setTableHead(
              openBox.source === 'masters' ? mastersHead : timeTablesHead
            );
            setTableShow(false);
            setSecTableShow(false);
            setSecTableShow(true);
          } else {
            setResMessage(resData.message);
            setSnackOpen(true);
          }
        });
    }
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div style={{ marginBottom: '1rem', width: '90%' }}>
          <Card style={{ padding: '.4rem' }}>
            {role === 'master' && (
              <Button
                style={{ marginRight: '.5rem' }}
                onClick={() =>
                  setOpenBox((prevState) => ({
                    source: 'choose',
                    value: !prevState.value,
                  }))
                }
              >
                Choose Course
              </Button>
            )}

            <Button
              variant='outlined'
              color='secondary'
              style={{ marginRight: '.5rem' }}
              onClick={() =>
                setOpenBox((prevState) => ({
                  source: 'timetables',
                  value: !prevState.value,
                }))
              }
            >
              TimeTables by Course ID
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              onClick={() => {
                setOpenBox((prevState) => ({
                  source: 'masters',
                  value: !prevState.value,
                }));
              }}
            >
              Masters by Course ID
            </Button>
          </Card>
          <div>
            <Collapse in={openBox.value} timeout='auto' unmountOnExit>
              <Paper
                style={{
                  height: '5rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TextField
                  placeholder='Course ID'
                  onChange={(event) => setCourseId(event.target.value)}
                />
                <IconButton color='secondary' onClick={handleGetByCourseId}>
                  {openBox.source === 'choose' ? (
                    <CheckCircleOutlineRounded />
                  ) : (
                    <SearchRounded />
                  )}
                </IconButton>
              </Paper>
            </Collapse>
          </div>
        </div>
        {secTableShow && (
          <Fragment key={openBox.value}>
            <CustomTable
              reloadPage={(data) => setReload(data)}
              response={response}
              pageCount={pageData.count}
              pageNum={pageData.page}
              totalPages={pageData.totalPages}
              // tableHead={
              //   openBox.value === 'timetables' ? timeTablesHead : mastersHead
              // }
              tableHead={tableHead}
              tableTitle='Courses List'
            />
          </Fragment>
        )}
        {tableShow && role !== 'student' && (
          <CustomTable
            idCalled={idCalled}
            reloadPage={(data) => setReload(data)}
            response={response}
            pageCount={pageData.count}
            pageNum={pageData.page}
            totalPages={pageData.totalPages}
            tableHead={tableHead}
            tableTitle='Courses List'
            showEdit={role === 'admin'}
            showAdd={role === 'admin'}
            showActions={role === 'admin'}
            showSearch
            fields={fields}
            handleDelete={handleDeleteClicked}
            handleAdd={handleAddClicked}
            handleUpdate={handleUpdateClicked}
            handleGetById={handleById}
            onSetFields={setFields}
            onChange={handleOnChange}
            onBlur={handleValidation}
          />
        )}
      </div>
      <CustomSnackBar
        open={snackOpen}
        handleClose={() => setSnackOpen(false)}
        resMessage={resMessage}
      />
    </Fragment>
  );
};

export default Courses;
