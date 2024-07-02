import { MainRoutes } from "@/src/constant/routes";
import { useUserContext } from "@/src/context/authContext";
import { generate_token } from "@/src/lib/helper";
import { AuthReducerAction } from "@/src/types/enums";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { UserDataType } from "./auth.type";
import {
  createUserApi,
  getUserApi,
  getUsersApi,
  updateUserApi,
} from "./auth.api";

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
        router.back();
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
      router.back();
    },
  });
};

export const useGetUsers = () => {
  return useQuery<UserDataType>({
    queryKey: ["users"],
    queryFn: () => getUsersApi(),
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
