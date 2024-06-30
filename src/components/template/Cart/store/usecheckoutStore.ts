import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  CheckoutState,
  PaymentOptionsInfo,
  PersonalInfo,
  ShippingInfo,
  ShoppingCartItem,
} from '@/components/template/Cart/store/type.store';


const initialState: CheckoutState = {
  activeStep: 0,
  shoppingCartInfo: [],
  personalInfo: {
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    address: '',
    date: new Date().toISOString(),
    orderNumber:''
  },
  shippingInfo: {
    priceSelected: 0,
    selected: 0,
    shippingTitle: '',
    shippingDescription: '',
  },
  paymentOptionsInfo: {
    selected: 0,
    paymentOptionTitle: '',
    paymentOptionDescription: '',
  },
  setActiveStep: () => {},
  setShoppingCartInfo: () => {},
  setPersonalInfo: () => {},
  setShippingInfo: () => {},
  setPaymentOptionsInfo: () => {},
  reset: () => {},
};

const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      ...initialState,
      setActiveStep: (activeStep: number) => set({ activeStep }),
      setShoppingCartInfo: (info: ShoppingCartItem[]) =>
        set({ shoppingCartInfo: info }),
      setPersonalInfo: (info: PersonalInfo) => set({ personalInfo: info }),
      setShippingInfo: (info: ShippingInfo) => set({ shippingInfo: info }),
      setPaymentOptionsInfo: (info: PaymentOptionsInfo) =>
        set({ paymentOptionsInfo: info }),
      reset: () => set({ ...initialState }),  // متد ریست وضعیت
    }),
    { name: 'checkout-storage' }
  )
);

export default useCheckoutStore;
