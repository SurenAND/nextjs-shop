import React, { useRef } from 'react';
import useCheckoutStore from '../store/usecheckoutStore';
import { nextButtonLabels, steps } from '../Cart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useReactToPrint } from 'react-to-print';
const useStyles = makeStyles((theme) => ({
  card: {
    margin: '20px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  table: {
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#3f51b5', // theme.palette.primary.main
  },
  tableHeaderCell: {
    color: '#ffffff', // theme.palette.common.white
    fontWeight: 'bold',
  },
  productImage: {
    width: '50px',
    height: '50px',
  },
  title: {
    marginBottom: '20px',
  },
}));

const OrderDetails = () => {
  const { reset } = useCheckoutStore();
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { activeStep ,shoppingCartInfo,personalInfo,paymentOptionsInfo,shippingInfo} = useCheckoutStore();
  const classes = useStyles();
  const handleReset = () => {
    reset();
  };



  const totalPrice=shoppingCartInfo.reduce(
    (total, item) => total + item.productPrice * item.productQty,
    0
  ) + shippingInfo.priceSelected

  return (
    <Card className={classes.card}>
      <CardContent ref={componentRef}>
        <Typography variant="h4" component="div" className={classes.title}>
          Order Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6">Personal Information</Typography>
            <Typography variant="body1">
              <strong>Order ID:</strong> {personalInfo.orderNumber}
            </Typography>
            <Typography variant="body1">
              <strong>First Name:</strong> {personalInfo.firstName}
            </Typography>
            <Typography variant="body1">
              <strong>Last Name:</strong> {personalInfo.lastName}
            </Typography>
            <Typography variant="body1">
              <strong>Phone Number:</strong> {personalInfo.phoneNumber}
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> {personalInfo.address}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Shipping and Payment</Typography>
            <Typography variant="body1">
              <strong>Shipping Name:</strong> {shippingInfo.shippingTitle}
            </Typography>
            <Typography variant="body1">
              <strong>Shipping Description:</strong>{' '}
              {shippingInfo.shippingDescription}
            </Typography>
            <Typography variant="body1">
              <strong>Price:</strong> $ {shippingInfo.priceSelected}
            </Typography>
            <Typography variant="body1">
              <strong>Payment Name:</strong> {paymentOptionsInfo.paymentOptionTitle}
            </Typography>
            <Typography variant="body1">
              <strong>Payment Description:</strong>{' '}
              {paymentOptionsInfo.paymentOptionDescription}
            </Typography>
            <Typography variant="body1">
              <strong>Total Price:</strong> $ {totalPrice}
            </Typography>
            <Typography variant="body1">
              <strong>Date:</strong> {personalInfo.date}
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          component="div"
          className={classes.title}
          style={{ marginTop: '20px' }}
        >
          Cart Items
        </Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  Product Image
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Product Name
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Product Price
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Quantity
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Total Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCartInfo.map((item) => (
                <TableRow key={item.productId}>
                  <TableCell>
                    <Avatar
                      variant="rounded"
                      src={item.productImage}
                      alt={item.productName}
                      className={classes.productImage}
                    />
                  </TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.productPrice}</TableCell>
                  <TableCell>{item.productQty}</TableCell>
                  <TableCell>{item.productTotalPrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      {activeStep === steps.length && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            pt: 2,
            pl: 4,
            pr: 4,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button variant="contained" href="/" onClick={handleReset}>
            {activeStep === steps.length
              ? 'Go To Home'
              : nextButtonLabels[activeStep]}
          </Button>
          <Button variant="contained" onClick={handlePrint}>
            {activeStep === steps.length
              ? 'Print'
              : nextButtonLabels[activeStep]}
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default OrderDetails;
