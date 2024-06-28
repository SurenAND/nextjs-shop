import React from 'react';
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
import { useGetOrders } from '@/src/api/orders/orders.queries';

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
  const { data, isLoading, error } = useGetOrders();
  const classes = useStyles();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error fetching order details</Typography>;
  }

  if (!data || !data.length) {
    return <Typography>No order data available</Typography>;
  }

  const orderData = data[0]; 


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="div" className={classes.title}>
          Order Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6">Personal Information</Typography>
            <Typography variant="body1">
              <strong>Order ID:</strong> {orderData.orderNumber}
            </Typography>
            <Typography variant="body1">
              <strong>First Name:</strong> {orderData.firstName}
            </Typography>
            <Typography variant="body1">
              <strong>Last Name:</strong> {orderData.lastName}
            </Typography>
            <Typography variant="body1">
              <strong>Phone Number:</strong> {orderData.phoneNumber}
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> {orderData.address}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Shipping and Payment</Typography>
            <Typography variant="body1">
              <strong>Shipping Name:</strong> {orderData.shippingName}
            </Typography>
            <Typography variant="body1">
              <strong>Shipping Description:</strong> {orderData.shippingDescription}
            </Typography>
            <Typography variant="body1">
              <strong>Price:</strong> {orderData.price}
            </Typography>
            <Typography variant="body1">
              <strong>Payment Name:</strong> {orderData.paymentName}
            </Typography>
            <Typography variant="body1">
              <strong>Payment Description:</strong> {orderData.paymentDescription}
            </Typography>
            <Typography variant="body1">
              <strong>Total Price:</strong> {orderData.totalPrice}
            </Typography>
            <Typography variant="body1">
              <strong>Date:</strong> {orderData.date}
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
                <TableCell className={classes.tableHeaderCell}>Product Image</TableCell>
                <TableCell className={classes.tableHeaderCell}>Product Name</TableCell>
                <TableCell className={classes.tableHeaderCell}>Product Price</TableCell>
                <TableCell className={classes.tableHeaderCell}>Quantity</TableCell>
                <TableCell className={classes.tableHeaderCell}>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.cartItems.map((item) => (
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
    </Card>
  );
};

export default OrderDetails;
