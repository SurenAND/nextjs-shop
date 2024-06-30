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
  id:string
  userId: string;
  orderNumber: string;
  date: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  shippingName: string;
  shippingDescription: string;
  price: number;
  paymentName: string;
  paymentDescription: string;
  cartItems: cartItemType[];
  totalPrice: ()=>number;
};

