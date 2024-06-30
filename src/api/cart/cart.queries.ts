import { useMutation, useQuery, useQueryClient } from 'react-query';
import { clearUserCartApi, deleteCartApi,getCartByIdApi, updateCartApi } from './cart.api';
import { CartDataType } from './cart.type';


export const useGetCartById = (id:string) => {
  return useQuery<CartDataType[]>({
    queryKey: ['cart',"single",id],
    queryFn: () => getCartByIdApi(id),
  });
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteCartApi(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProductInCart: CartDataType) =>
      updateCartApi(newProductInCart),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
};






export const useClearCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => clearUserCartApi(userId),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
};
// export const useGetUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (userId: string) => getUserApi(userId),
//     onSuccess() {
//       queryClient.invalidateQueries({
//         queryKey: ["cart"],
//       });
//     },
//   });
// };
