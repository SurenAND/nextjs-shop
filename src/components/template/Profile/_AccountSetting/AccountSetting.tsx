import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AccountSettings = () => {
  return (
    <Stack width="100%" alignItems="center">
      <Typography
        variant="h1"
        fontSize="2rem"
        fontWeight={300}
        p="10px 20px"
        mt={1}
      >
        Personal Information
      </Typography>

      <Stack
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
        width="100%"
        p="10px 20px"
      >
        <Stack width="45%" m={1}>
          <InputLabel htmlFor="name">Your Name *</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            id="name"
            name="name"
            required
          />
        </Stack>

        <Stack width="45%" m={1}>
          <InputLabel htmlFor="phone">Phone/Mobile *</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            id="phone"
            name="phone"
            required
          />
        </Stack>

        <Stack width="45%" m={1}>
          <InputLabel htmlFor="email">Email *</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            name="email"
            type="email"
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

export default AccountSettings;
