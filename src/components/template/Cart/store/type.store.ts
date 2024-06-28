export interface ShoppingCartItem {
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productQty: number;
  qty:number
}

export interface PersonalInfo {
  userId: string|undefined;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number|string;
  address: string;
}

export interface ShippingInfo {
  shippingTitle: string;
  shippingDescription: string;
  priceSelected: number;
  selected: number;
}

export interface PaymentOptionsInfo {
  selected: number;
  paymentOptionTitle: string;
  paymentOptionDescription: string;
}

export interface CheckoutState {
  activeStep: number;
  setActiveStep: (step: number) => void;
  shoppingCartInfo: ShoppingCartItem[];
  setShoppingCartInfo: (info: ShoppingCartItem[]) => void;
  personalInfo: PersonalInfo;
  setPersonalInfo: (info: PersonalInfo) => void;
  shippingInfo: ShippingInfo;
  setShippingInfo: (info: ShippingInfo) => void;
  paymentOptionsInfo: PaymentOptionsInfo;
  setPaymentOptionsInfo: (info: PaymentOptionsInfo) => void;
}
