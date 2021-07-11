import { Fragment, useContext, useState } from 'react';
import AuthContext from '../../../store/auth-context';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import CustomTable from '../../UI/Table';
import CustomSnackBar from '../../UI/SnackBar';
import useValidation from '../../../hooks/use-validation';

let response;

const tableHead = [
  { label: 'ID', align: 'left', addField: [''], addHeader: true },
  {
    label: 'First Name',
    align: 'center',
    addField: ['add', 'update'],
    addHeader: true,
  },
  {
    label: 'Last Name',
    align: 'center',
    addField: ['add', 'update'],
    addHeader: true,
  },
  {
    label: 'Code',
    align: 'center',
    addField: ['add', 'update'],
    addHeader: true,
  },
  {
    label: 'Role',
    align: 'center',
    addField: ['add', 'update'],
    addHeader: true,
  },
  {
    label: 'Password',
    align: 'center',
    addField: ['add', 'update'],
    addHeader: false,
  },
  {
    label: 'Actions',
    align: 'right',
    addField: [],
    addHeader: true,
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
    width: '90%',
  },
  inner: {
    width: '250px',
  },
}));

const INIT_FIELDS = {
  id: {
    value: '',
    error: false,
    helper: '',
    type: 'numerical',
  },
  lastName: {
    value: '',
    error: false,
    helper: '',
  },
  firstName: {
    value: '',
    error: false,
    helper: '',
  },
  password: {
    value: '',
    error: false,
    helper: '',
  },
  code: {
    value: '',
    error: false,
    helper: '',
    type: 'numerical',
  },
  role: {
    value: '',
    error: false,
    helper: '',
  },
};

const Users = () => {
  const authCtx = useContext(AuthContext);
  const role = authCtx.userRole.toLowerCase();
  const [idCalled, setIdCalled] = useState(false);
  const [pageData, setPageData] = useState({
    count: '',
    page: '',
    totalPages: '',
  });
  const [tableShow, setTableShow] = useState(false);
  const [reload, setReload] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [resMessage, setResMessage] = useState('');
  const [fields, setFields] = useState(INIT_FIELDS);
  const [groupFields, setGroupFields] = useState([INIT_FIELDS]);
  const classes = useStyles();

  const { handleOnChange, handleValidation } = useValidation(fields, setFields);
  const {
    handleOnChange: handleOnChangeGroup,
    handleValidation: handleValidationGroup,
  } = useValidation(groupFields, setGroupFields);

  useEffect(() => {
    if (!tableShow) {
      handleGetUsers(1);
    } else if (tableShow && reload) {
      handleGetUsers(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, fields]);

  const handleGetUsers = (page) => {
    fetch(`${authCtx.baseURL}/api/Users?page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.data != null) {
          setPageData({
            count: resData.data.list.length,
            totalPages: resData.data.totalPage,
            page: resData.data.page - 1,
          });
          response = resData.data.list;
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
    fetch(`${authCtx.baseURL}/api/Users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.status === 'success') {
          setResMessage('Successfully Deleted!');
          setReload(true);
        } else {
          setResMessage('Something Went Wrong!');
        }
        setSnackOpen(true);
      });
  };

  const handleUpdateClicked = (itemId, fields) => {
    const { id, ...rest } = fields;
    if (Object.values(rest).every((item) => item.value !== '')) {
      fetch(`${authCtx.baseURL}/api/Users/${itemId}`, {
        method: 'PUT',
        body: JSON.stringify({
          firstName: fields.firstName.value,
          lastName: fields.lastName.value,
          password: fields.password.value,
          role: fields.role.value,
          code: fields.code.value,
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
    const { id, ...rest } = fields;
    if (Object.values(rest).every((item) => item.value !== '')) {
      fetch(`${authCtx.baseURL}/api/Users/Add`, {
        method: 'POST',
        body: JSON.stringify({
          lastName: fields.lastName.value,
          firstName: fields.firstName.value,
          password: fields.password.value,
          code: fields.code.value,
          role: fields.role.value.toUpperCase(),
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

  const handleAddGroupClicked = (fields) => {
    fetch(`${authCtx.baseURL}/api/Users/AddList`, {
      method: 'POST',
      body: JSON.stringify(
        fields.map((item) => ({
          lastName: item.lastName.value,
          firstName: item.firstName.value,
          password: item.password.value,
          code: item.code.value,
          role: item.role.value.toUpperCase(),
        }))
      ),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.status === 'success') {
          setResMessage('Successfully Added!');
          setGroupFields([INIT_FIELDS]);
          setReload(true);
        } else {
          setResMessage('Something Went Wrong!');
        }
        setSnackOpen(true);
      });
  };

  const handleById = (id) => {
    fetch(`${authCtx.baseURL}/api/Users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authCtx.token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.data != null) {
          setPageData({
            count: 1,
            totalPages: 0,
            page: 0,
          });
          response = [resData.data];

          setTableShow(false);
          setTableShow(true);
          setIdCalled(true);
        } else {
          setResMessage('Not Found!');
          setSnackOpen(true);
        }
      });
  };

  const loadData = (newPage) => {
    handleGetUsers(newPage);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        {tableShow && (
          // <Fragment key={fields}>
          <CustomTable
            idCalled={idCalled}
            reloadPage={(data) => setReload(data)}
            response={response}
            pageData={pageData}
            loadData={loadData}
            tableHead={tableHead}
            tableTitle='Users List'
            showAdd={role === 'admin'}
            showActions={role === 'admin'}
            showEdit
            showSearch
            showAddByGroup
            fields={fields}
            groupFields={groupFields}
            initialFields={INIT_FIELDS}
            handleDelete={handleDeleteClicked}
            handleAdd={handleAddClicked}
            handleAddGroup={handleAddGroupClicked}
            handleUpdate={handleUpdateClicked}
            handleGetById={handleById}
            onSetFields={setFields}
            onSetFieldsGroup={(data) => setGroupFields(data)}
            onChange={handleOnChange}
            onBlur={handleValidation}
            onChangeGroup={handleOnChangeGroup}
            onBlurGroup={handleValidationGroup}
          />
          // </Fragment>
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

export default Users;
