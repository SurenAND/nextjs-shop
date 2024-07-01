import { OrderDataType } from "@/src/api/orders/orders.type";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addOrderApi,
  getOrderByIdApi,
  getOrdersApi,
  updateOrderApi,
} from "@/src/api/orders/orders.api";

export const useGetOrders = () => {
  return useQuery<OrderDataType>({
    queryKey: ["orders"],
    queryFn: () => getOrdersApi(),
    refetchOnMount: true,
  });
};

export const useGetOrderById = (orderId: string) => {
  return useQuery<OrderDataType>({
    queryKey: ["orders", "single", orderId],
    queryFn: () => getOrderByIdApi(orderId),
    refetchOnMount: "always",
    enabled: !!orderId,
  });
};

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newOrder: OrderDataType) => updateOrderApi(newOrder),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
};

export const useAddOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newOrder: OrderDataType) => addOrderApi(newOrder),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
};
