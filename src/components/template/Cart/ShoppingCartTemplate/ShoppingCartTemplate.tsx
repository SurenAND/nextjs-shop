import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import {
  useDeleteCart,
  useGetCartById,
  useUpdateCart,
} from '@/src/api/cart/cart.queries';
import { CartDataType } from '@/src/api/cart/cart.type';
import { useGetProductById } from '@/src/api/product/product.queries';
import { useUserContext } from '@/src/context/authContext';
import useCheckoutStore from '../store/usecheckoutStore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { nextButtonLabels, steps } from '../Cart';

function ShoppingCartTemplate() {
  const { activeStep, setActiveStep, setShoppingCartInfo } = useCheckoutStore();
  const [totalPrice, setTotalPrice] = useState(0);
  const { mutate: updateMutate } = useUpdateCart();
  const [loading, setLoading] = useState(true);
  const { state } = useUserContext();
  const { data, refetch } = useGetCartById(state.userId);
  const [productId, setProductId] = useState('');
 

  const { data: productData } = useGetProductById(productId);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const fetchPromises = data.map(async (product) => {
          setProductId(product.id);
        await refetch();
return product.id
        });
        fetchPromises.map((item) => {
          item.then((res) => console.log(res));
        });
        const a = await Promise.all(fetchPromises);

        setLoading(false);

        const calculatedTotalPrice = data.reduce(
          (result, product) => result + product.price * product.qty,
          0
        );
        setTotalPrice(calculatedTotalPrice);

        const cartInfo = data.map((product) => ({
          productName: product.name,
          productImage: product.image,
          productPrice: product.price,
          productQty: product.qty,
          productTotalPrice: product.price * product.qty,
          id: productData?.id,
          qty: productData?.qty,
        }));

        setShoppingCartInfo(cartInfo);
      }
    };

    fetchData(); // Call fetchData function

    // Dependency array: specify dependencies that useEffect should watch for changes
  }, [data, setShoppingCartInfo, refetch, productData]); // Add dependencies as needed

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { mutate } = useDeleteCart();

  const handleRemove = (id: string) => {
    mutate(id);
  };

  const handleAddQuantity = (productInCart: CartDataType) => {
    if (productData?.qty && productInCart.qty < productData?.qty) {
      const newProduct = { ...productInCart, qty: productInCart.qty + 1 };
      updateMutate(newProduct);
      setTotalPrice((old) => old + newProduct.price);
    }
  };

  const handleRemoveQuantity = (productInCart: CartDataType) => {
    const newQty = productInCart.qty - 1;
    if (newQty === 0) {
      handleRemove(productInCart.id);
    } else {
      const newProduct = { ...productInCart, qty: newQty };
      updateMutate(newProduct);
      setTotalPrice((old) => old - newProduct.price);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {loading ? (
          <Box>Loading...</Box>
        ) : data && data.length > 0 ? (
          data.map((product: CartDataType) => (
            <Grid item xs={12} key={product.id}>
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 2,
                  border: 1,
                  boxShadow: 5,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image={product.image}
                  alt={product.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <CardContent>
                    <Typography component="div" variant="h5">
                      {product.name}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      component="div"
                    >
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 2 }}
                  >
                    <IconButton onClick={() => handleRemoveQuantity(product)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 2 }}>{product.qty}</Typography>
                    <IconButton onClick={() => handleAddQuantity(product)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemove(product.id)}
                >
                  Delete
                </Button>
              </Card>
            </Grid>
          ))
        ) : (
          <Box>No products in the cart.</Box>
        )}
      </Grid>

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
        <Typography variant="h6">Total: ${totalPrice}</Typography>
        <Button
          endIcon={<ArrowForwardIosIcon />}
          variant="contained"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1
            ? 'Finish'
            : nextButtonLabels[activeStep]}
        </Button>
      </Box>
    </Box>
  );
}

export default ShoppingCartTemplate;
