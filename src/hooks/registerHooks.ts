import { useRouter } from "next/router";
import { useUserContext } from "../context/authContext";
import { useMutation } from "react-query";
import { getUserData, postUserData } from "../services/registerApi";
import { setCookie } from "cookies-next";
import { generate_token } from "../lib/helper";
import { AuthReducerAction } from "../types/enums";
import { MainRoutes } from "../constant/routes";
import { UserDataType } from "../types/types";

const expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 2);
// milliseconds * seconds * minutes * hours * days * months

export const useLogin = (email: string, password: string) => {
  const router = useRouter();
  const { dispatch } = useUserContext();
  return useMutation({
    mutationFn: () => getUserData(email, password),
    onSuccess(data) {
      if (data.length > 0) {
        setCookie("role", data[0].role, {
          expires: expireDate,
        });
        setCookie("userName", data[0].userName, {
          expires: expireDate,
        });
        setCookie("token", generate_token(32), {
          expires: expireDate,
        });
        dispatch({
          type: AuthReducerAction.SET_USER,
          payload: { ...data[0], isLogin: true },
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
    mutationFn: (newUser: UserDataType) => postUserData(newUser!),
    onSuccess(data) {
      setCookie("role", data.role, { expires: expireDate });
      setCookie("userName", data.userName, { expires: expireDate });
      setCookie("token", data.id, { expires: expireDate });
      dispatch({
        type: AuthReducerAction.SET_USER,
        payload: { ...data, isLogin: true },
      });
      router.push(MainRoutes.HOME);
    },
  });
};
