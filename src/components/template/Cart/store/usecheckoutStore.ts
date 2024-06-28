import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  CheckoutState,
  PaymentOptionsInfo,
  PersonalInfo,
  ShippingInfo,
  ShoppingCartItem,
} from '@/components/template/Cart/store/type.store';

const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set) => ({
      activeStep: 0,
      setActiveStep: (activeStep: number) => set({ activeStep }),
      shoppingCartInfo: [],
      setShoppingCartInfo: (info: ShoppingCartItem[]) =>
        set({ shoppingCartInfo: info }),
      personalInfo: {
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: 0,
        address: '',
      },
      setPersonalInfo: (info: PersonalInfo) => set({ personalInfo: info }),
      shippingInfo: {
        priceSelected: 0,
        selected: 0,
        shippingTitle: '',
        shippingDescription: '',
      },
      setShippingInfo: (info: ShippingInfo) => set({ shippingInfo: info }),
      paymentOptionsInfo: {
        selected: 0,
        paymentOptionTitle: '',
        paymentOptionDescription: '',
      },
      setPaymentOptionsInfo: (info: PaymentOptionsInfo) =>
        set({ paymentOptionsInfo: info }),
    }),
    { name: 'checkout-storage' }
  )
);

export default useCheckoutStore;
