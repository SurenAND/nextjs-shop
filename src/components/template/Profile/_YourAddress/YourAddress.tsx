import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const YourAddress = () => {
  const [show, setShow] = useState(false);

  const savedAddress = [
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
    },
    {
      AddressLine1: "AddressLine5",
      AddressLine2: "AddressLine6",
      AddressLine3: "AddressLine7",
    },
    {
      AddressLine1: "AddressLine8",
      AddressLine2: "AddressLine9",
      AddressLine3: "AddressLine10",
    },
  ];

  return (
    <Stack width="100%" alignItems="center" height="75vh">
      {!show && (
        <Typography
          variant="h1"
          fontSize="2rem"
          fontWeight={300}
          p="10px 20px"
          mt={1}
        >
          Your Address
        </Typography>
      )}
      {!show && (
        <Stack flexDirection="row" flexWrap="wrap" width="100%">
          {savedAddress.map((item, index) => {
            return (
              <Stack
                key={index}
                flexDirection="row"
                flexWrap="wrap"
                height="auto"
                width="45%"
                p={1}
                border="1px solid #d0d0d0"
                borderRadius={1}
                m={1}
                position="relative"
                minHeight="100px"
                gap={1}
              >
                <Typography variant="body2">{item.AddressLine1}</Typography>,
                <Typography variant="body2">{item.AddressLine2}</Typography>,
                <Typography variant="body2">{item.AddressLine3}</Typography>
                <Box
                  sx={{
                    bgcolor: "#c32f34",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    p: 1,
                    width: "40px",
                    height: "40px",
                    position: "absolute",
                    top: "-10px",
                    right: "-2px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon />
                </Box>
              </Stack>
            );
          })}
        </Stack>
      )}

      {!show && (
        <Box
          sx={{
            width: "70px",
            height: "70px",
            bgcolor: "green",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setShow(true)}
        >
          <AddIcon />
        </Box>
      )}
      {show && (
        <Stack width="100%" p={2} alignItems="center">
          <Typography
            variant="h1"
            fontSize="2rem"
            fontWeight={300}
            p="10px 20px"
            mt={1}
            textAlign="center"
          >
            Add New Address
          </Typography>
          <Stack
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            width="100%"
            p="10px 20px"
          >
            <Stack width="45%" m={1}>
              <InputLabel htmlFor="postal-code">Postal Code</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="postal-code"
                name="postal-code"
                type="text"
                required
              />
            </Stack>

            <Stack width="45%" m={1}>
              <InputLabel htmlFor="address-line-1">Address Line 1</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="address-line-1"
                name="address-line-1"
                type="text"
                required
              />
            </Stack>

            <Stack width="45%" m={1}>
              <InputLabel htmlFor="address-line-2">Address Line 2</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="address-line-2"
                name="address-line-2"
                type="text"
                required
              />
            </Stack>

            <Stack width="45%" m={1}>
              <InputLabel htmlFor="address-line-3">Address Line 3</InputLabel>
              <TextField
                variant="outlined"
                fullWidth
                id="address-line-3"
                name="address-line-3"
                type="text"
                required
              />
            </Stack>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px" }}
            onClick={() => setShow(false)}
          >
            Save
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default YourAddress;
