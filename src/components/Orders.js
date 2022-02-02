import React, { useEffect, useState } from 'react';

import {
  Box,
  TableBody,
  TableContainer,
  TableFooter,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TablePagination,
  Typography,
} from '@material-ui/core';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paypal from '../assets/images/Paypal.png';
import Visa from '../assets/images/VISA.png';
import { ReactComponent as Trustly } from '../assets/images/Trustly.svg';
import Amex from '../assets/images/AMEX.png';
import { ReactComponent as Qliro } from '../assets/images/Qliro.svg';
import { ReactComponent as Flag } from '../assets/images/Flag.svg';
import { ReactComponent as Svenska } from '../assets/images/Svenska.svg';
import { ReactComponent as Uk } from '../assets/images/uk.svg';
import { ReactComponent as Norska } from '../assets/images/Norska.svg';
import { ReactComponent as CornerDownRight } from '../assets/images/corner-down-right.svg';
import TablePaginationActions from './TablePageActions';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Orders = ({ allOrders }) => {
  const classes = useStyles();
  const [tabledata, setTableData] = useState([]);
  const [name, setName] = useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tabledata.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    if (allOrders) {
      const { orders, name } = allOrders;
      setTableData(orders);
      setName(name);
    }
  }, [allOrders]);

  const OrderNumber = ({ type }) => {
    let color_type;
    if (type === 'Online') {
      color_type = 'grey';
    } else if (type === 'Manual') {
      color_type = 'orange';
    } else {
      color_type = 'black';
    }

    return (
      <div className={'rotate_verticle ' + color_type}>
        {type}
        <Flag className={'rotate_horizontal'} />
      </div>
    );
  };
  const Country = ({ country, store }) => {
    let flag;
    if (country === 'Sweden') {
      flag = <Svenska />;
    } else if (country === 'United Kingdom') {
      flag = <Uk />;
    } else {
      flag = <Norska />;
    }
    return (
      <div className="orders_table_flag">
        <span> {flag} </span>

        {store}
      </div>
    );
  };
  const PaymentMethod = ({ payment_type, payment_method }) => {
    let paymentType = null;
    if (
      payment_type === 'Paypal' ||
      payment_type === 'American Express' ||
      payment_type === 'Visa'
    ) {
      paymentType =
        payment_type === 'Paypal'
          ? Paypal
          : payment_type === 'Visa'
          ? Visa
          : Amex;
      paymentType = <img src={paymentType} alt={payment_method} />;
    } else if (payment_type === 'Qliro') {
      paymentType = <Qliro />;
    } else if (payment_type === 'Trustly') {
      paymentType = <Trustly />;
    }
    return (
      <div className="orders_table_payment">
        <span className="orders_table_payment_type"> {paymentType}</span>

        {payment_method}
      </div>
    );
  };
  const PaymentStatus = ({ payment_status }) => {
    let statusColor = null;
    if (payment_status === 'Paid') {
      statusColor = 'green';
    } else if (payment_status === 'Failed') {
      statusColor = 'red';
    } else {
      statusColor = 'orange';
    }
    return (
      <div className="orders_table_payment_status">
        <span className={statusColor}></span>
        {payment_status}
      </div>
    );
  };

  return (
    <Box className="orders_table">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography className="orders_table_name" variant="h4">
          {name && name}'s Orders
        </Typography>
        <Box className="orders_table_help">
          <InfoOutlinedIcon className="orders_table_help_icon" />{' '}
          <span className="orders_table_help_text"> Help</span>
        </Box>
      </Box>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="orders_table_type"></StyledTableCell>
              <StyledTableCell align="left">Order Number</StyledTableCell>
              <StyledTableCell align="left">Created</StyledTableCell>
              <StyledTableCell align="left">Store</StyledTableCell>
              <StyledTableCell align="left">Payment Method</StyledTableCell>
              <StyledTableCell align="left">Payment Status</StyledTableCell>
              <StyledTableCell align="left">Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? tabledata.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tabledata
            ).map((row) => (
              <StyledTableRow key={row.id} className="orders_table_row">
                <StyledTableCell align="left" className="orders_table_type">
                  <OrderNumber type={row.type} />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div className="orders_table_text_number">
                    {row.order_number}
                    {<CornerDownRight />}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="left">{row.created}</StyledTableCell>
                <StyledTableCell align="left">
                  <Country country={row.country} store={row.store} />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <PaymentMethod
                    payment_method={row.payment_method}
                    payment_type={row.payment_type}
                  />
                </StyledTableCell>
                <StyledTableCell align="left">
                  <PaymentStatus payment_status={row.payment_status} />
                </StyledTableCell>
                <StyledTableCell align="left" className="orders_table_amount">
                  {row.amount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[]}
                colSpan={7}
                count={tabledata.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
