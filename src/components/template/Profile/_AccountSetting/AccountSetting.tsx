import { useGetUserById, useUpdateUser } from "@/src/api/auth/auth.queries";
import { UserDataType } from "@/src/api/auth/auth.type";
import { useUserContext } from "@/src/context/authContext";
import { AuthReducerAction } from "@/src/types/enums";
import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const AccountSettings = () => {
  const { register, handleSubmit, reset } = useForm();
  const { state, dispatch } = useUserContext();
  const { data: userData } = useGetUserById(state.userId);
  const { mutate: updateUser } = useUpdateUser();

  useEffect(() => {
    if (userData) {
      reset({
        userName: userData?.userName,
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        phoneNumber: userData?.phoneNumber,
        email: userData?.email,
      });
    }
  }, [userData, reset]);

  const onSubmit = (data: FieldValues) => {
    const formData = data as UserDataType;
    updateUser({
      ...userData,
      id: state.userId,
      userName: formData.userName,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
    });
    dispatch({
      type: AuthReducerAction.UPDATE_USER_NAME,
      payload: { userName: formData.userName! },
    });
  };

  return (
    <Stack width="100%" alignItems="center" height="75vh" p={5} gap={8}>
      <Stack
        width="100%"
        flexDirection="row"
        gap={2}
        sx={{
          background:
            "linear-gradient(to bottom, rgba(116, 185, 255, 0.2) 10%, rgba(255, 255, 255, 1))",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <ShieldOutlinedIcon
          sx={{
            width: "100px",
            height: "100px",
            color: "primary.main",
            background:
              "linear-gradient(to bottom, rgba(116, 185, 255, 0.2) 10%, rgba(255, 255, 255, 1))",
            padding: "10px",
            borderRadius: "50%",
          }}
        />
        <Stack>
          <Typography variant="h1" fontSize="2rem" fontWeight={900} mt={1}>
            Personal Information
          </Typography>
          <Typography variant="body1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit, Sapiente,
            perspiciatis? Impedit fugit dolorem corrupti ullam consectetur.
          </Typography>
        </Stack>
      </Stack>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          width="100%"
          p="10px 20px"
        >
          <Stack width="45%" m={1}>
            <InputLabel htmlFor="userName">User Name *</InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="userName"
              {...register("userName")}
              required
            />
          </Stack>

          <Stack width="45%" m={1}>
            <InputLabel htmlFor="firstName">First Name *</InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="firstName"
              {...register("firstName")}
              required
            />
          </Stack>

          <Stack width="45%" m={1}>
            <InputLabel htmlFor="lastName">Last Name *</InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="lastName"
              {...register("lastName")}
              required
            />
          </Stack>

          <Stack width="45%" m={1}>
            <InputLabel htmlFor="phone">Phone/Mobile *</InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="phone"
              {...register("phoneNumber")}
              required
            />
          </Stack>

          <Stack width="45%" m={1}>
            <InputLabel htmlFor="email">Email *</InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              {...register("email")}
              type="email"
              required
            />
          </Stack>
        </Stack>

        <Button variant="contained" color="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </Stack>
  );
};

export default AccountSettings;
