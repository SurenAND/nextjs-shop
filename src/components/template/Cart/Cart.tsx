import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import ShoppingCartTemplate from './ShoppingCartTemplate/ShoppingCartTemplate';
import SpecificationsTemplate from './SpecificationsTemplate/SpecificationsTemplate';
import ShippingTemplate from './ShippingTemplate/ShippingTemplate';
import PaymentTemplate from './PaymentTemplate/PaymentTemplate';
import ReviewOrderTemplate from './ReviewOrderTemplate/ReviewOrderTemplate';
import useCheckoutStore from './store/usecheckoutStore';
import OrderDetails from './Invoice/Invoice';

export const steps = [
  'Cart',
  'Specifications',
  'Shipping',
  'payment',
  'Invoice Preview',
];

export const nextButtonLabels = [
  'Go to Specifications',
  'Go to Shipping',
  'Go to Payment',
  'Go Invoice Preview',
  'Finish',
];

function CartTemplate() {
    
  const { activeStep, setActiveStep } = useCheckoutStore();

  const [skipped] = useState(new Set<number>());

  const isStepSkipped = (activeStep: number) => {
    return skipped.has(activeStep);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (
        <ShoppingCartTemplate />
      ) : activeStep === 1 ? (
        <SpecificationsTemplate />
      ) : activeStep === 2 ? (
        <ShippingTemplate />
      ) : activeStep === 3 ? (
        <PaymentTemplate />
      ) : activeStep === 4 ? (
        <ReviewOrderTemplate />
      ) : (
        <OrderDetails />
      )}
    </Box>
  );
}

export default CartTemplate;
