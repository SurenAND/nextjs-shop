import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { nextButtonLabels, steps } from '../Cart';
import { useGetUserById, useUpdateUser } from '@/src/api/auth/auth.queries';

import { useUserContext } from '@/src/context/authContext';
import useCheckoutStore from '../store/usecheckoutStore';
import { generate_token } from '@/src/lib/helper';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const SpecificationsTemplate: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();
  const { mutate: UpdateUser } = useUpdateUser();
  const { state } = useUserContext();
  
  const { data: userData } = useGetUserById(state.userId);


  const { personalInfo, setPersonalInfo, activeStep, setActiveStep } =
    useCheckoutStore();

  const [firstName, setFirstName] = React.useState(
    personalInfo.firstName || userData?.firstName || ''
  );
  const [lastName, setLastName] = React.useState(
    personalInfo.lastName || userData?.lastName || ''
  );
  const [email, setEmail] = React.useState(
    personalInfo.email || userData?.email || ''
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    personalInfo.phoneNumber || userData?.phoneNumber || 0
  );
  const [address, setAddress] = React.useState(
    personalInfo.address || userData?.address || ''
  );
  const [userId, setIdUser] = React.useState(
    personalInfo.userId || userData?.id
  );

  React.useEffect(() => {
    setPersonalInfo({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      userId,
      date: new Date().toISOString(),
      orderNumber: generate_token(5),
    });
  }, [
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    userId,
    setPersonalInfo,
  ]);

  const onSubmit: SubmitHandler<FormData> = (dataValue) => {
    const newTextValue = { ...userData, ...dataValue };

    UpdateUser(newTextValue);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            {...register('firstName', {
              required: 'First Name is required',
            })}
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoFocus
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            value={lastName}
            id="lastName"
            label="Last Name"
            {...register('lastName', { required: 'Last Name is required' })}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            value={phoneNumber}
            id="phoneNumber"
            label="PhoneNumber"
            {...register('phoneNumber', {
              required: 'PhoneNumber is required',
            })}
            onChange={(e) => setPhoneNumber(e.target.value)}
            autoComplete="phoneNumber"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            value={email}
            id="email"
            label="Email Address"
            {...register('email', { required: 'Email is required' })}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="address"
            value={address}
            label="Address"
            {...register('address', { required: 'Address is required' })}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="address"
            error={!!errors.address}
            helperText={errors.address?.message}
          />
        </Grid>
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
        <Button
          endIcon={<ArrowForwardIosIcon />}
          variant="contained"
          type="submit"
        >
          {activeStep === steps.length - 1
            ? 'Finish'
            : nextButtonLabels[activeStep]}
        </Button>
      </Box>
    </Box>
  );
};

export default SpecificationsTemplate;
