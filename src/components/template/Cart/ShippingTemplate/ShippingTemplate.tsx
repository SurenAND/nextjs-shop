import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import useCheckoutStore from '../store/usecheckoutStore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { nextButtonLabels, steps } from '../Cart';
import { useState, useEffect } from 'react';
import { ReactNode } from 'react';
const shippingOptions = [
  {
    id: 1,
    name: 'Standard Shipping',
    description: 'Delivery in 5-7 business days',
    icon: <LocalShippingIcon fontSize="large" />,
    price: 5,
  },
  {
    id: 2,
    name: 'Express Shipping',
    description: 'Delivery in 2-3 business days',
    icon: <AirplanemodeActiveIcon fontSize="large" />,
    price: 15,
  },
  {
    id: 3,
    name: 'Overnight Shipping',
    description: 'Next day delivery',
    icon: <DirectionsBoatIcon fontSize="large" />,
    price: 25,
  },
  {
    id: 4,
    name: 'Same Day Delivery',
    description: 'Delivery within the same day',
    icon: <TwoWheelerIcon fontSize="large" />,
    price: 35,
  },
];

interface StyledCardProps {
  selected: boolean;
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, selected }) => ({
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
  transform: selected ? 'scale(1.05)' : 'scale(1) ',
  border: selected ? `2px solid ${theme.palette.primary.main}` : 'none',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const SelectButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  background: `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: '#fff',
  '&:hover': {
    background: `linear-gradient(145deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
  },
}));

const ShippingTemplate: React.FC = () => {
  const { shippingInfo, setShippingInfo, activeStep, setActiveStep } =
    useCheckoutStore();
  const [selectedOption, setSelectedOption] = useState<number>(
    shippingInfo.selected
  );

  const [shippingPrice, setShippingPrice] = useState<number>(
    shippingInfo.priceSelected
  );
  const [shippingTitle, setShippingTitle] = useState<string>(
    shippingInfo.shippingTitle
  );
  const [shippingDescription, setShippingDescription] = useState<string>(
    shippingInfo.shippingDescription
  );
  const [shippingIcon, setShippingIcon] = useState<React.JSX.Element | null>(
    shippingInfo.shippingIcon
  );
  const [error, setError] = React.useState<string>('');
  useEffect(() => {
    setShippingInfo({
      selected: selectedOption,
      priceSelected: shippingPrice,
      shippingTitle: shippingTitle,
      shippingDescription: shippingDescription,
      shippingIcon: shippingIcon,
    });
  }, [
    selectedOption,
    shippingPrice,
    shippingTitle,
    shippingDescription,
    shippingIcon,
    setShippingInfo,
  ]);

  const handleSelect = (id: number) => {
    setSelectedOption(id);
    const selectedShippingOption = shippingOptions.find(
      (option) => option.id === id
    );
    if (selectedShippingOption) {
      setShippingPrice(selectedShippingOption.price);
      setShippingTitle(selectedShippingOption.name);
      setShippingDescription(selectedShippingOption.description);
      setShippingIcon(selectedShippingOption.icon);
      setError('');
    }
  };

  const handleNext = () => {
    if (selectedOption) {
      setActiveStep(activeStep + 1);
    } else {
      setError('Please select a Shipping option before proceeding.');
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
          Shipping Options
        </Typography>
        <Grid container spacing={12}>
          {shippingOptions.map((option) => (
            <Grid item xs={12} md={6} key={option.id}>
              <StyledCard selected={selectedOption === option.id}>
                <CardContent sx={{ textAlign: 'center', padding: '24px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: '#00796b',
                    }}
                  >
                    {option.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ mb: 1, color: '#004d40' }}
                  >
                    {option.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#004d40' }}>
                    {option.description}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: '#004d40' }}>
                    ${option.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: 'center', paddingBottom: '16px' }}
                >
                  <SelectButton
                    variant="contained"
                    onClick={() => handleSelect(option.id)}
                    sx={{ mt: 2 }}
                  >
                    {selectedOption === option.id ? 'Selected' : 'Select'}
                  </SelectButton>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        {error && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ mt: 2 }}
          >
            {error}
          </Typography>
        )}
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
          onClick={handleNext}
        >
          {activeStep === steps.length - 1
            ? 'Finish'
            : nextButtonLabels[activeStep]}
        </Button>
      </Box>
    </Box>
  );
};

export default ShippingTemplate;
