import { Fragment, useContext, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import CustomTable from '../../UI/Table';
import CustomSnackBar from '../../UI/SnackBar';
import useValidation from '../../../hooks/use-validation';

let response;
let pageData;

const tableHead = [
  { label: 'ID', align: 'left', addField: [''], addHeader: true },
  {
    label: 'Day',
    path: 'label',
    align: 'center',
    addField: [],
    addHeader: true,
  },
  {
    label: 'Bell',
    path: 'label',
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
  {
    label: 'Day Id',
    align: 'center',
    addField: ['add'],
    addHeader: false,
  },
  {
    label: 'Bell Id',
    align: 'center',
    addField: ['add'],
    addHeader: false,
  },
  {
    label: 'Time Table Id',
    align: 'center',
    addField: ['add'],
    addHeader: false,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    minHeight: '450px',
    width: 'auto',
    justifyContent: 'center',
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

const TimeTableBells = () => {
  const authCtx = useContext(AuthContext);
  const role = authCtx.userRole.toLowerCase();
  const [idCalled, setIdCalled] = useState(false);
  const [tableShow, setTableShow] = useState(false);
  const [reload, setReload] = useState(false);
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
    dayId: {
      value: '',
      error: false,
      helper: '',
    },
    timeTableId: {
      value: '',
      error: false,
      helper: '',
      type: 'numerical',
    },
    bellId: {
      value: '',
      error: false,
      helper: '',
      type: 'numerical',
    },
  });

  const { handleOnChange, handleValidation } = useValidation(fields, setFields);

  useEffect(() => {
    if (role !== 'student') {
      if (!tableHead.some((item) => item.label === 'Actions')) {
        tableHead.push({
          label: 'Actions',
          align: 'right',
          addField: [],
          addHeader: true,
        });
      }
    }
    if (!tableShow) {
      handleGetBells();
    } else if (tableShow && reload) {
      handleGetBells();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const handleGetBells = () => {
    fetch(`${authCtx.baseURL}/api/timetablebells`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
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

  const handleDeleteClicked = (id) => {
    fetch(`${authCtx.baseURL}/api/timetablebells/${id}`, {
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
    // if (fields.label.value !== '' && fields.bellOfDay.value !== '') {
    //   fetch(`${authCtx.baseURL}/api/timetablebells/${id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       label: fields.label.value,
    //       dayOfWeek: fields.bellOfDay.value,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${authCtx.token}`,
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((resData) => {
    //       if (resData.status === 'success') {
    //         setResMessage('Successfully Updated!');
    //         setReload(true);
    //       } else if (resData.data === null) {
    //         setResMessage('No match found!');
    //       } else {
    //         setResMessage('Something Went Wrong!');
    //       }
    //       setSnackOpen(true);
    //     });
    // }
  };
  const handleAddClicked = (fields) => {
    if (
      fields.timeTableId.value !== '' &&
      fields.bellId.value !== '' &&
      fields.dayId.value !== ''
    ) {
      fetch(`${authCtx.baseURL}/api/timetablebells`, {
        method: 'POST',
        body: JSON.stringify({
          dayId: fields.dayId.value,
          bellId: fields.bellId.value,
          timeTableId: fields.timeTableId.value,
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
    fetch(`${authCtx.baseURL}/api/timetablebells/${id}`, {
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

  return (
    <Fragment>
      <div className={classes.container}>
        {tableShow && (
          <CustomTable
            idCalled={idCalled}
            reloadPage={(data) => setReload(data)}
            response={response}
            pageCount={pageData.count}
            pageNum={pageData.page}
            totalPages={pageData.totalPages}
            tableHead={tableHead}
            tableTitle='Time Table Bells List'
            showAdd={role === 'master'}
            showActions={role !== 'student'}
            showEdit={role === 'master'}
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

export default TimeTableBells;
