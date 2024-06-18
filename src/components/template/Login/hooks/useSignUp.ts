import { useRouter } from "next/router";
import { User } from "./types";
import { useUserContext } from "@/src/context/authContext";
import { useMutation } from "react-query";
import { postUserData } from "../services/postData";
import { setCookie } from "cookies-next";
import { AuthReducerAction } from "@/src/types/enums";
import { MainRoutes } from "@/src/constant/routes";

const expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 2);
// milliseconds * seconds * minutes * hours * days * months

export const useSignUp = () => {
  const router = useRouter();
  const { dispatch } = useUserContext();
  return useMutation({
    mutationFn: (newUser: User) => postUserData(newUser!),
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
