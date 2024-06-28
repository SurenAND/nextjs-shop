import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { nextButtonLabels, steps } from '../Cart';
import useCheckoutStore from '../store/usecheckoutStore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useAddOrder } from '@/src/api/orders/orders.queries';
import { generate_token } from '@/src/lib/helper';
import {
  useGetProductById,
  useUpdateProduct,
} from '@/src/api/product/product.queries';
import { useEffect, useState } from 'react';

const ReviewOrderTemplate = () => {
  const { mutate: addOrder } = useAddOrder();
  const { mutate: updateProduct } = useUpdateProduct();
  const {
    activeStep,
    setActiveStep,
    personalInfo,
    paymentOptionsInfo,
    shippingInfo,
    shoppingCartInfo,
  } = useCheckoutStore();
  // const [productId, setProductId] = useState('');
  // const {
  //   data: productData,
  //   isLoading,
  //   refetch,
  // } = useGetProductById(productId);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPromises = shoppingCartInfo?.map(async (product) => {
        await refetch();
        setProductId(product.id);
      });

      await Promise.all(fetchPromises);
    };

    fetchData();
  }, [shoppingCartInfo, refetch]);

  const specifications = {
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    phoneNumber: personalInfo.phoneNumber,
    address: personalInfo.address,
  };

  const shipping = {
    id: shippingInfo.selected,
    name: shippingInfo.shippingTitle,
    description: shippingInfo.shippingDescription,
    price: shippingInfo.priceSelected,
  };

  const payment = {
    id: paymentOptionsInfo.selected,
    name: paymentOptionsInfo.paymentOptionTitle,
    description: paymentOptionsInfo.paymentOptionDescription,
  };
  const getTotalPrice = () => {
    return (
      shoppingCartInfo.reduce(
        (total, item) => total + item.productPrice * item.productQty,
        0
      ) + shipping.price
    );
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handOrder = () => {
    const orderData = {
      userId: personalInfo.userId,
      orderNumber: generate_token(5),
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      phoneNumber: personalInfo.phoneNumber,
      address: personalInfo.address,
      shippingName: shippingInfo.shippingTitle,
      shippingDescription: shippingInfo.shippingDescription,
      price: shippingInfo.priceSelected,
      paymentName: paymentOptionsInfo.paymentOptionTitle,
      paymentDescription: paymentOptionsInfo.paymentOptionDescription,
      cartItems: shoppingCartInfo,
      totalPrice: getTotalPrice(),
      date: new Date().toISOString(),
    };

   

    // updateProduct({ ...product, qty: product.qty - product.productQty });


    shoppingCartInfo.map((product)=>{

      console.log({ ...productData, qty: product.qty - product.productQty });
    })
    addOrder(orderData);

    setActiveStep(activeStep + 1);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#e0f7fa', minHeight: '100vh' }}>
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 4, backgroundColor: '#ffffff' }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ mb: 4, color: '#00796b' }}
        >
          Invoice Preview
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Grid container alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
              <ShoppingCartIcon sx={{ color: '#004d40', mr: 1 }} />
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ color: '#004d40' }}>
                Shopping Cart
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {shoppingCartInfo.map((item) => (
              <Grid item xs={12} key={item.productId}>
                <Card sx={{ display: 'flex', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50 }}
                    image={item.productImage}
                    alt={item.productName}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      ml: 2,
                    }}
                  >
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="body1">
                        {item.productName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        {item.productQty} x ${item.productPrice}
                      </Typography>
                    </CardContent>
                    <Typography variant="body2" sx={{ mr: 2 }}>
                      ${item.productQty * item.productPrice}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 2 }} />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Grid container alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
              <InfoIcon sx={{ color: 'red', mr: 1 }} />
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ color: '#004d40' }}>
                Specifications
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {Object.keys(specifications).map((key) => (
              <Grid item xs={12} sm={6} key={key}>
                <Typography variant="body1">
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                  {specifications[key]}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 2 }} />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Grid container alignItems="center" sx={{ mb: 2 }}>
            <Grid item sx={{ px: 1 }}>
              {shippingInfo.selected === 1 ? (
                <LocalShippingIcon fontSize="large" />
              ) : shippingInfo.selected === 2 ? (
                <AirplanemodeActiveIcon fontSize="large" />
              ) : shippingInfo.selected === 3 ? (
                <DirectionsBoatIcon fontSize="large" />
              ) : shippingInfo.selected === 4 ? (
                <TwoWheelerIcon fontSize="large" />
              ) : (
                ''
              )}
            </Grid>

            <Grid item>
              <Typography variant="h5" sx={{ color: '#004d40' }}>
                Shipping
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">Method: {shipping.name}</Typography>
          <Typography variant="body1">
            Description: {shipping.description}
          </Typography>
          <Typography variant="body1">Price: ${shipping.price}</Typography>
          <Divider sx={{ my: 2 }} />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Grid container alignItems="center" sx={{ mb: 2 }}>
            <Grid item sx={{ px: 1 }}>
              {payment.id === 1 ? (
                <CreditCardIcon fontSize="large" />
              ) : payment.id === 2 ? (
                <AccountBalanceIcon fontSize="large" />
              ) : payment.id === 3 ? (
                <PaymentIcon fontSize="large" />
              ) : payment.id === 4 ? (
                <LocalAtmIcon fontSize="large" />
              ) : (
                ''
              )}
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ color: '#004d40' }}>
                Payment
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">Method: {payment.name}</Typography>
          <Typography variant="body1">
            Description: {payment.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Grid container alignItems="center" sx={{ mb: 2 }}>
            <Grid item>
              <CheckCircleIcon sx={{ color: '#004d40', mr: 1 }} />
            </Grid>
            <Grid item>
              <Typography variant="h5" sx={{ color: '#004d40' }}>
                Total Price
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h6">${getTotalPrice()}</Typography>
        </Box>
      </Paper>
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
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          startIcon={<ArrowBackIosNewIcon />}
        >
          {activeStep === 0
            ? 'Back'
            : activeStep === 1
            ? 'Go to Cart'
            : ` ${nextButtonLabels[activeStep - 2]}`}
        </Button>
        <Button
          endIcon={<ArrowForwardIosIcon />}
          variant="contained"
          onClick={handOrder}
        >
          {activeStep === steps.length - 1
            ? 'Invoice '
            : nextButtonLabels[activeStep]}
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewOrderTemplate;
