import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Collapse,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle,
  Box,
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';
import { Fragment, useState } from 'react';
import {
  DeleteRounded,
  EditRounded,
  AddCircle,
  CancelRounded,
  SearchRounded,
  ReplayRounded,
  GroupAddRounded,
} from '@material-ui/icons';

const camelize = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

const getPropertyValue = (object, dataToRetrieve) => {
  dataToRetrieve.split('.').forEach(function (token) {
    if (object) object = object[token];
  });
  return object;
};

const CustomTable = (props) => {
  const [open, setOpen] = useState('');
  const rowsPerPage = 10;
  const [addOpen, setAddOpen] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [addGroupOpen, setAddGroupOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChangePage = (event, newPage) => {
    props.loadData(newPage + 1);
  };

  return (
    <Paper elevation={8} style={{ width: '90%', borderRadius: '1rem' }}>
      <Toolbar
        style={{ backgroundColor: '#ebe9f5', borderRadius: '1rem 1rem 0 0' }}
      >
        <p>{props.tableTitle}</p>

        <div
          style={{ display: 'flex', marginLeft: 'auto', alignSelf: 'center' }}
        >
          {props.showSearch && (
            <TextField
              name='id'
              value={props.fields.id.value}
              onChange={props.onChange}
              placeholder='Get By ID'
              style={{ alignSelf: 'center' }}
              InputProps={{
                startAdornment: (
                  <IconButton
                    size='small'
                    style={{ alignSelf: 'center' }}
                    onClick={() => {
                      props.fields.id.value !== '' &&
                        props.handleGetById(props.fields.id.value);
                    }}
                  >
                    <SearchRounded />
                  </IconButton>
                ),
              }}
            />
          )}
          {props.showAddByGroup && (
            <IconButton
              color='primary'
              onClick={() => setAddGroupOpen(!addGroupOpen)}
            >
              {addGroupOpen ? <CancelRounded /> : <GroupAddRounded />}
            </IconButton>
          )}
          {props.showAdd && (
            <IconButton color='primary' onClick={() => setAddOpen(!addOpen)}>
              {addOpen ? <CancelRounded /> : <AddCircle />}
            </IconButton>
          )}
          {props.idCalled && (
            <IconButton color='primary' onClick={() => props.reloadPage(true)}>
              <ReplayRounded />
            </IconButton>
          )}
        </div>
      </Toolbar>
      {props.showAddByGroup && (
        <Collapse in={addGroupOpen}>
          <form
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Card
              variant='outlined'
              style={{
                margin: '0 0.5rem',
                marginBottom: '.5rem',
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Fragment>
                  {props.groupFields.map((row, index) => {
                    return (
                      <div
                        key={index}
                        style={{ display: 'flex', flexDirection: 'row' }}
                      >
                        {props.tableHead.map((rowIn, indexIn) => {
                          return (
                            rowIn.addField.includes('add') && (
                              <div key={indexIn}>
                                <TextField
                                  multiline={'multiline' in rowIn}
                                  value={row[camelize(rowIn.label)].value}
                                  error={row[camelize(rowIn.label)].error}
                                  helperText={row[camelize(rowIn.label)].helper}
                                  key={index}
                                  style={{ width: '7rem', margin: '1rem' }}
                                  placeholder={rowIn.label}
                                  name={camelize(rowIn.label)}
                                  onBlur={(event) =>
                                    props.onBlurGroup(event, index)
                                  }
                                  onChange={(event) =>
                                    props.onChangeGroup(event, index)
                                  }
                                />
                              </div>
                            )
                          );
                        })}
                      </div>
                    );
                  })}
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ marginLeft: 'auto', marginRight: '1rem' }}
                    onClick={() => {
                      props.handleAddGroup(props.groupFields);
                    }}
                  >
                    Add Group
                  </Button>
                  <div>
                    <IconButton
                      onClick={() => {
                        props.onSetFieldsGroup((prevState) => [
                          ...prevState,
                          props.initialFields,
                        ]);
                      }}
                    >
                      <AddCircle />
                    </IconButton>
                  </div>
                </Fragment>
              </CardContent>
            </Card>
          </form>
        </Collapse>
      )}
      {props.showAdd && (
        <Collapse in={addOpen}>
          <form
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Card
              variant='outlined'
              style={{
                margin: '.8rem 0.4rem',
              }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Fragment>
                  {props.tableHead.map(
                    (row, index) =>
                      row.addField.includes('add') && (
                        <TextField
                          multiline={'multiline' in row}
                          value={props.fields[camelize(row.label)].value}
                          error={props.fields[camelize(row.label)].error}
                          helperText={props.fields[camelize(row.label)].helper}
                          key={index}
                          style={{ width: '10rem', margin: '1rem' }}
                          placeholder={row.label}
                          name={camelize(row.label)}
                          onBlur={props.onBlur}
                          onChange={props.onChange}
                        />
                      )
                  )}
                  <Button
                    variant='contained'
                    color='primary'
                    style={{ marginLeft: 'auto', marginRight: '1rem' }}
                    onClick={() => {
                      props.handleAdd(props.fields);
                      props.onSetFields(props.initialFields);
                    }}
                  >
                    Add
                  </Button>
                </Fragment>
              </CardContent>
            </Card>
          </form>
        </Collapse>
      )}

      <Fragment>
        <TableContainer>
          <Divider style={{ backgroundColor: '#c4c4c4' }} />
          <Table>
            <TableHead style={{ backgroundColor: '#ebe9f5' }}>
              <TableRow>
                {props.tableHead.map(
                  (row, index) =>
                    row.addHeader && (
                      <TableCell key={index} align={row.align}>
                        {row.label}
                      </TableCell>
                    )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.response.length !== 0 ? (
                props.response.map((row, index) => {
                  return (
                    <Fragment key={index}>
                      <TableRow hover>
                        {props.tableHead.map((rowIn, indexIn) => {
                          return (
                            rowIn.addHeader &&
                            rowIn.label !== 'Actions' && (
                              <TableCell key={indexIn} align={rowIn.align}>
                                {(() => {
                                  if (rowIn.label === 'Master') {
                                    return (
                                      getPropertyValue(
                                        row[camelize(rowIn.secLabel)],
                                        rowIn.path === ''
                                          ? 'firstName'
                                          : rowIn.path + '.firstName'
                                      ) +
                                      ' ' +
                                      getPropertyValue(
                                        row[camelize(rowIn.secLabel)],
                                        rowIn.path === ''
                                          ? 'lastName'
                                          : rowIn.path + '.lastName'
                                      )
                                    );
                                  }
                                  if (
                                    rowIn.label === 'Day' ||
                                    rowIn.label === 'Bell'
                                  ) {
                                    return getPropertyValue(
                                      row[camelize(rowIn.label)],
                                      rowIn.path
                                    );
                                  }
                                  if (rowIn.label === 'Course') {
                                    return rowIn.secLabel
                                      ? `${getPropertyValue(
                                          row[camelize(rowIn.secLabel)][
                                            'course'
                                          ],
                                          'title'
                                        )} (${getPropertyValue(
                                          row[camelize(rowIn.secLabel)][
                                            'course'
                                          ],
                                          'unitsCount'
                                        )})
                                        `
                                      : `${getPropertyValue(
                                          row[camelize(rowIn.label)],
                                          'title'
                                        )} (${getPropertyValue(
                                          row[camelize(rowIn.label)],
                                          'unitsCount'
                                        )})
                                        `;
                                  }
                                  if (rowIn.label === 'Course Time') {
                                    if (rowIn.secLabel === 'Time Table') {
                                      return row[camelize(rowIn.secLabel)][
                                        'timeTableBellList'
                                      ].map((rowSec, indexSec) => {
                                        return (
                                          <Box display='flex' key={indexSec}>
                                            <Box m='auto'>
                                              {`${getPropertyValue(
                                                rowSec,
                                                'day.label'
                                              )} (${getPropertyValue(
                                                rowSec,
                                                'bell.label'
                                              )})
                                      `}
                                            </Box>
                                          </Box>
                                        );
                                      });
                                    } else {
                                      return row[camelize(rowIn.secLabel)].map(
                                        (rowSec, indexSec) => {
                                          return (
                                            <Box display='flex' key={indexSec}>
                                              <Box m='auto'>
                                                {`${getPropertyValue(
                                                  rowSec,
                                                  'day.label'
                                                )} (${getPropertyValue(
                                                  rowSec,
                                                  'bell.label'
                                                )})
                                              `}
                                              </Box>
                                            </Box>
                                          );
                                        }
                                      );
                                    }
                                  } else {
                                    return row[camelize(rowIn.label)];
                                  }
                                })()}
                              </TableCell>
                            )
                          );
                        })}
                        {props.showActions && (
                          <TableCell align='right'>
                            {props.showEdit && (
                              <IconButton
                                size='small'
                                onClick={() =>
                                  open === index ? setOpen('') : setOpen(index)
                                }
                              >
                                {index === open ? (
                                  <CancelRounded />
                                ) : (
                                  <EditRounded style={{ color: '#16a085' }} />
                                )}
                              </IconButton>
                            )}

                            <IconButton
                              color='secondary'
                              size='small'
                              onClick={() => {
                                setRowId(row.id);
                                setOpenDialog(true);
                              }}
                            >
                              <DeleteRounded style={{ color: '#e74c3c' }} />
                            </IconButton>
                          </TableCell>
                        )}
                      </TableRow>
                      {props.showActions && (
                        <TableRow>
                          <TableCell
                            style={{ paddingBottom: 0, paddingTop: 0 }}
                            colSpan={6}
                          >
                            <Collapse
                              in={index === open}
                              timeout='auto'
                              unmountOnExit
                            >
                              <form
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  flexWrap: 'wrap',
                                  justifyContent: 'center',
                                }}
                              >
                                <Card
                                  variant='outlined'
                                  style={{
                                    margin: '.8rem .4rem',
                                  }}
                                >
                                  <CardContent
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      flexWrap: 'wrap',
                                    }}
                                  >
                                    {props.tableHead.map(
                                      (rowSec, indexSec) =>
                                        rowSec.addField.includes('update') && (
                                          <TextField
                                            value={
                                              props.fields[
                                                camelize(rowSec.label)
                                              ].value
                                            }
                                            error={
                                              props.fields[
                                                camelize(rowSec.label)
                                              ].error
                                            }
                                            helperText={
                                              props.fields[
                                                camelize(rowSec.label)
                                              ].helper
                                            }
                                            key={indexSec}
                                            style={{
                                              width: '10rem',
                                              margin: '1rem',
                                            }}
                                            placeholder={rowSec.label}
                                            name={camelize(rowSec.label)}
                                            onBlur={props.onBlur}
                                            onChange={props.onChange}
                                          />
                                        )
                                    )}
                                    <Button
                                      variant='contained'
                                      color='primary'
                                      style={{
                                        marginLeft: 'auto',
                                        marginRight: '1rem',
                                      }}
                                      onClick={() => {
                                        props.handleUpdate(
                                          row.id,
                                          props.fields
                                        );
                                        props.onSetFields(props.initialFields);
                                      }}
                                    >
                                      Update
                                    </Button>
                                  </CardContent>
                                </Card>
                              </form>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      )}
                    </Fragment>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={6} style={{ textAlign: 'center' }}>
                    There is no data to be shown!
                  </TableCell>
                </TableRow>
              )}
              <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                transitionDuration={200}
              >
                <DialogTitle>{'Are you sure you want to delete?'}</DialogTitle>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)} color='primary'>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      props.handleDelete(rowId);
                      setOpenDialog(false);
                    }}
                    color='primary'
                    autoFocus
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component='div'
          labelRowsPerPage=''
          rowsPerPageOptions={[]}
          count={-1}
          rowsPerPage={rowsPerPage}
          page={props.pageData.page}
          onChangePage={handleChangePage}
          nextIconButtonProps={{
            disabled:
              props.pageData.totalPages === 0
                ? true
                : props.pageData.page + 1 === props.pageData.totalPages,
          }}
          labelDisplayedRows={() =>
            `Page ${
              props.pageData.totalPages === 0 ? 0 : props.pageData.page + 1
            } - ${props.pageData.totalPages}`
          }
        />
      </Fragment>
    </Paper>
  );
};

export default CustomTable;
