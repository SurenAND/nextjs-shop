import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ChangePassword = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Typography
        variant="h1"
        fontSize="2rem"
        fontWeight={300}
        p="10px 20px"
        mt={1}
      >
        Change Password
      </Typography>

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
            name="old-pass"
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
            name="new-pass"
            type="password"
            required
          />
        </Stack>
      </Stack>

      <Button variant="contained" color="primary">
        Save Changes
      </Button>
    </Stack>
  );
};

export default ChangePassword;
