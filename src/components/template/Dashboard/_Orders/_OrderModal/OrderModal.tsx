import { useGetOrderById } from "@/src/api/orders/orders.queries";
import { Box, Divider, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "80%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

export default function OrderModal({
  open,
  handleClose,
  orderId,
}: {
  open: boolean;
  handleClose: () => void;
  orderId: string;
}) {
  const { data } = useGetOrderById(orderId);
  return (
    <>
      {data && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Stack gap={6}>
              {/* Order Information */}
              <Stack flexDirection="row" justifyContent="space-around">
                <Typography variant="h6">
                  Order Number: {data?.orderNumber}
                </Typography>
                <Typography variant="h6">Status: {data?.status}</Typography>
                <Stack>
                  <Typography variant="h6">
                    Date:{" "}
                    {new Date(data?.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </Typography>
                </Stack>
              </Stack>
              <Divider />
              {/* Shipping and Payment Information */}
              <Stack flexDirection="row" justifyContent="space-evenly">
                {/* Shipping Information */}
                <Stack justifyContent="center" gap={2}>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    sx={{
                      textDecoration: "underline",
                    }}
                  >
                    Shipping Information
                  </Typography>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    Shipping Name:{" "}
                    <Typography variant="body1">
                      {data?.shippingName}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    Shipping Description:{" "}
                    <Typography variant="body1">
                      {data?.shippingDescription}
                    </Typography>
                  </Typography>
                </Stack>
                {/* Payment Information */}
                <Stack justifyContent="center" gap={2}>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    sx={{
                      textDecoration: "underline",
                    }}
                  >
                    Payment Information
                  </Typography>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    Payment Method:{" "}
                    <Typography variant="body1">{data?.paymentName}</Typography>
                  </Typography>
                  <Typography
                    variant="h6"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    Payment Description:{" "}
                    <Typography variant="body1">
                      {data?.paymentDescription}
                    </Typography>
                  </Typography>
                </Stack>
              </Stack>
              {/* User Information */}
              <Stack gap={3}>
                <Typography
                  variant="h5"
                  textAlign="center"
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  User Information
                </Typography>
                <Stack
                  flexDirection="row"
                  justifyContent="space-around"
                  flexWrap="wrap"
                  gap={2}
                >
                  <Typography
                    variant="body1"
                    fontSize="1.2rem"
                    fontWeight={500}
                  >
                    Name: {data?.firstName} {data?.lastName}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="1.2rem"
                    fontWeight={500}
                  >
                    Phone Number: {data?.phoneNumber}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="1.2rem"
                    fontWeight={500}
                  >
                    Address: {data?.address}
                  </Typography>
                </Stack>
              </Stack>
              {/* Order Items */}
              <Stack gap={3}>
                <Typography
                  variant="h5"
                  textAlign="center"
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  Order Items
                </Typography>
                <Stack gap={2}>
                  {data?.cartItems.map((item) => (
                    <Stack
                      key={item.id}
                      sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        width: "100%",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        padding: "25px",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        src={item.productImage}
                        alt={item.productName}
                        width={100}
                        height={100}
                        style={{
                          borderRadius: "10px",
                          objectFit: "cover",
                        }}
                      />
                      <Typography variant="h6">
                        Product Name: {item.productName}
                      </Typography>
                      <Typography variant="h6">
                        Order Quantity: {item.productQty}
                      </Typography>
                      <Typography variant="h6">
                        Total Price: {item?.productTotalPrice}
                      </Typography>
                    </Stack>
                  ))}
                  <Typography variant="h6" alignSelf="end">
                    Total Price: {String(data?.totalPrice)}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      )}
    </>
  );
}
