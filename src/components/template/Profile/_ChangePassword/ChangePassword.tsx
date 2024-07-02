import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { FieldValues, useForm } from "react-hook-form";
import { useUserContext } from "@/src/context/authContext";
import { useGetUserById, useUpdateUser } from "@/src/api/auth/auth.queries";
import { useEffect } from "react";
import { UserDataType } from "@/src/api/auth/auth.type";

const ChangePassword = () => {
  const { register, handleSubmit, reset } = useForm();
  const { state } = useUserContext();
  const { data: userData } = useGetUserById(state.userId);
  const { mutate: updateUser } = useUpdateUser();

  useEffect(() => {
    if (userData) {
      reset({
        oldPassword: userData?.password,
        newPassword: "",
      });
    }
  }, [userData, reset]);

  const onSubmit = (data: FieldValues) => {
    updateUser({
      ...userData,
      id: state.userId,
      password: data.newPassword,
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
        <HttpsOutlinedIcon
          sx={{
            width: "100px",
            height: "100px",
            color: "primary.main",
            background:
              "linear-gradient(to bottom, rgba(116, 185, 255, 0.2) 10%, rgba(255, 255, 255, 1))",
            padding: "15px",
            borderRadius: "50%",
          }}
        />
        <Stack>
          <Typography variant="h1" fontSize="2rem" fontWeight={900} mt={1}>
            Change Password
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
            <InputLabel htmlFor="old-pass">
              Old Password <span>*</span>
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="old-pass"
              {...register("oldPassword")}
              type="password"
              required
            />
          </Stack>

          <Stack width="45%" m={1}>
            <InputLabel htmlFor="new-pass">
              New Password <span>*</span>
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              id="new-pass"
              {...register("newPassword")}
              type="password"
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

export default ChangePassword;
