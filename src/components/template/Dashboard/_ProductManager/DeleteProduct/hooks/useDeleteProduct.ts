import { useMutation, useQueryClient } from "react-query";
import { deleteData } from "../services/deleteData";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteData(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
};
