import { Fragment, useContext, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Collapse,
  Paper,
  TextField,
  IconButton,
  Card,
} from '@material-ui/core';
import { useEffect } from 'react';
import CustomTable from '../../UI/Table';
import CustomSnackBar from '../../UI/SnackBar';
import { CheckCircleRounded } from '@material-ui/icons';
import useValidation from '../../../hooks/use-validation';

let response;
let pageData;

const tableHead = [
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
  table: {
    // minWidth: '30vw',
  },
  inner: {
    width: '250px',
  },
}));

const TimeTable = () => {
  const authCtx = useContext(AuthContext);
  const role = authCtx.userRole.toLowerCase();
  const [idCalled, setIdCalled] = useState(false);
  const [tableShow, setTableShow] = useState(false);
  const [timeTableId, setTimeTableId] = useState('');
  const [reload, setReload] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [resMessage, setResMessage] = useState('');
  const classes = useStyles();
  const [fields, setFields] = useState({
    id: {
      value: '',
      error: false,
      helper: '',
      type: 'numerical',
    },
  });

  const { handleOnChange, handleValidation } = useValidation(fields, setFields);
  useEffect(() => {
    if (!tableShow) {
      handleGetTimeTables();
    } else if (tableShow && reload) {
      handleGetTimeTables();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const handleGetTimeTables = () => {
    fetch(`${authCtx.baseURL}/api/TimeTables`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData != null) {
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

  const handleById = (id) => {
    fetch(`${authCtx.baseURL}/api/TimeTables/${id}`, {
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

  const handleProcessing = () => {
    fetch(`${authCtx.baseURL}/api/TimeTables/StartProcess`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.status === 'success') {
          setResMessage('Successfully Processed!');
        } else if (resData.data === null) {
          setResMessage(resData.message);
        } else {
          setResMessage('Something Went Wrong!');
        }
        setSnackOpen(true);
      });
  };
  const handleChooseById = () => {
    if (timeTableId !== '') {
      fetch(`${authCtx.baseURL}/api/TimeTables/${timeTableId}/Choose`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
        .then((res) => res.json())
        .then((resData) => {
          if (resData.status === 'success') {
            setResMessage('Successfully Chosen!');
          } else if (resData.data === null) {
            setResMessage('No match found!');
          } else {
            setResMessage('Something Went Wrong!');
          }
          setSnackOpen(true);
        });
    }
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div style={{ marginBottom: '1rem', width: '90%' }}>
          <Card
            style={{
              padding: '.8rem',
              // alignItems: 'center',
              backgroundColor: '#ebe9f5',
            }}
          >
            {role !== 'master' && (
              <Fragment>
                {role === 'student' ? (
                  <Button
                    variant='outlined'
                    color='secondary'
                    style={{ marginRight: '.5rem' }}
                    onClick={() => setOpenBox(!openBox)}
                  >
                    Choose Time Table
                  </Button>
                ) : (
                  <Button
                    variant='outlined'
                    color='secondary'
                    onClick={handleProcessing}
                  >
                    Start Processing
                  </Button>
                )}
              </Fragment>
            )}
          </Card>
          <div>
            <Collapse in={openBox} timeout='auto' unmountOnExit>
              <Paper
                style={{
                  // height: '5rem',
                  // width: '20rem',
                  // display: 'flex',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  height: '5rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TextField
                  placeholder='Time Table ID'
                  onChange={(event) => setTimeTableId(event.target.value)}
                />
                <IconButton color='secondary' onClick={handleChooseById}>
                  <CheckCircleRounded />
                </IconButton>
              </Paper>
            </Collapse>
          </div>
        </div>
        {tableShow && (
          <CustomTable
            idCalled={idCalled}
            reloadPage={(data) => setReload(data)}
            response={response}
            pageCount={pageData.count}
            pageNum={pageData.page}
            totalPages={pageData.totalPages}
            tableHead={tableHead}
            tableTitle='Time Tables List'
            fields={fields}
            showSearch
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

export default TimeTable;
