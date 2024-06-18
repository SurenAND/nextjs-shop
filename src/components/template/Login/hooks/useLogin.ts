import { getUserData } from "../services/getData";
import { useMutation } from "react-query";
import { generate_token } from "@/src/lib/helper";
import { useUserContext } from "@/src/context/authContext";
import { useRouter } from "next/router";
import { AuthReducerAction } from "@/src/types/enums";
import { MainRoutes } from "@/src/constant/routes";
import { setCookie } from "cookies-next";

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
