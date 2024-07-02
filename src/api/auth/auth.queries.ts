import { MainRoutes } from "@/src/constant/routes";
import { useUserContext } from "@/src/context/authContext";
import { AuthReducerAction } from "@/src/types/enums";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UserDataType } from "@/src/api/auth/auth.type";
import {
  createUserApi,
  deleteUserApi,
  getUserApi,
  getUserByIdApi,
  getUsersApi,
  updateUserApi,
} from "@/src/api/auth/auth.api";

export const useLogin = (email: string, password: string) => {
  const router = useRouter();
  const { dispatch } = useUserContext();
  return useMutation({
    mutationFn: () => getUserApi(email, password),
    onSuccess(data) {
      if (data.length > 0) {
        dispatch({
          type: AuthReducerAction.LOGIN,
          payload: { ...data[0] },
        });
        router.push(MainRoutes.HOME);
      }
    },
  });
};

export const useSignUp = () => {
  const router = useRouter();
  const { dispatch } = useUserContext();
  return useMutation({
    mutationFn: (newUser: UserDataType) => createUserApi(newUser!),
    onSuccess(data) {
      dispatch({
        type: AuthReducerAction.LOGIN,
        payload: { ...data },
      });
      router.push(MainRoutes.HOME);
    },
  });
};

export const useGetUserById = (id: string) => {
  return useQuery<UserDataType>({
    queryKey: ["users", "single", id],
    queryFn: () => getUserByIdApi(id),
    refetchOnMount: true,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteUserApi(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};

export const useGetUsers = () => {
  return useQuery<UserDataType>({
    queryKey: ["users"],
    queryFn: () => getUsersApi(),
    refetchOnMount: true,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newUser: UserDataType) => updateUserApi(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
};
