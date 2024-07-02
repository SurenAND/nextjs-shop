type cartItemType = {
  id: string;
  productImage: string;
  productName: string;
  productPrice: number;
  productQty: number;
  productTotalPrice: number;
  qty: number;
};

export type OrderDataType = {
  id: string;
  userId: string;
  orderNumber: string;
  date: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  shippingName: string;
  shippingDescription: string;
  shippingCost: number;
  paymentName: string;
  paymentDescription: string;
  status?: string;
  cartItems: cartItemType[];
  totalPrice: number | (() => number);
};
