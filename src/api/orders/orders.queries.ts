import { useMutation, useQuery, useQueryClient } from "react-query";
import { getOrdersApi, updateOrderApi } from "./orders.api";
import { OrderDataType } from "./orders.type";

export const useGetOrders = () => {
  return useQuery<OrderDataType>({
    queryKey: ["orders"],
    queryFn: () => getOrdersApi(),
    refetchOnMount: true,
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
