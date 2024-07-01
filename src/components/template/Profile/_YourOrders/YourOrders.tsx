import { useGetOrdersByUserId } from "@/src/api/orders/orders.queries";
import { useUserContext } from "@/src/context/authContext";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState } from "react";
import { OrderDataType } from "@/src/api/orders/orders.type";
import { IconButton, Stack, Typography } from "@mui/material";
import { removeHyphens } from "@/src/lib/helper";
import UserOrderModal from "@/src/components/template/Profile/_YourOrders/_UserOrderModal/UserOrderModal";

const YourOrders = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [orderId, setOrderId] = useState("");

  const { state } = useUserContext();
  const { data, isLoading } = useGetOrdersByUserId(state.userId);

  isLoading && <div>Loading...</div>;

  const onButtonClick = (order: OrderDataType) => {
    setOrderId(String(order.id));
    handleOpen();
  };

  return (
    <Stack width="100%" height="100%" gap={2} p={3} sx={{ userSelect: "none" }}>
      {data &&
        data.map((item) => (
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
            {/* Order ID */}
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "0.9rem",
                }}
              >
                ID:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "0.9rem",
                  userSelect: "text",
                }}
              >
                {item.id}
              </Typography>
            </Stack>

            {/* Order Date */}
            <Stack>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "0.9rem" }}
              >
                Date:
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "0.9rem" }}
              >
                {new Date(item.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </Typography>
            </Stack>

            {/* Order Total Price */}
            <Stack>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "0.9rem" }}
              >
                Total Price:
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "0.9rem" }}
              >
                {String(item.totalPrice)} $
              </Typography>
            </Stack>

            {/* Order Shipping Name */}
            <Stack>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "0.9rem" }}
              >
                Shipping Name:
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "0.9rem" }}
              >
                {removeHyphens(item.shippingName)}
              </Typography>
            </Stack>

            {/* Order Status */}
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "500",
                borderRadius: 10,
                margin: "10px",
                padding: "5px 15px",
                textTransform: "uppercase",
                height: "50px",
                bgcolor:
                  item.status === "inprogress"
                    ? "purple"
                    : item.status === "completed"
                    ? "green"
                    : "red",
              }}
            >
              {item.status}
            </Stack>
            {/* Order Details Button */}
            <IconButton
              sx={{
                bgcolor: "#ece6f5",
                borderRadius: "8px",
                transition: "all .2s ease-in-out",
                color: "#5e35b0",
                "&:hover": { bgcolor: "#4527a1", color: "#fff" },
              }}
              onClick={() => onButtonClick(item)}
            >
              <DescriptionIcon />
            </IconButton>
          </Stack>
        ))}
      <UserOrderModal open={open} handleClose={handleClose} orderId={orderId} />
    </Stack>
  );
};

export default YourOrders;
