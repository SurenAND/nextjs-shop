import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { AuthReducerAction } from "@/src/types/enums";
import { AuthReducerActionType, AuthStateType } from "@/src/types/types";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { generate_token } from "@/src/lib/helper";

const expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 2);

const authInit = {
  isLogin: false,
  userName: "",
  role: "",
  userId: "",
};

function authReducer(
  state: AuthStateType,
  action: AuthReducerActionType
): AuthStateType {
  switch (action.type) {
    case AuthReducerAction.LOGIN:
      setCookie("role", action.payload.role, {
        expires: expireDate,
      });
      setCookie("userName", action.payload.userName, {
        expires: expireDate,
      });
      setCookie("token", generate_token(32), {
        expires: expireDate,
      });
      setCookie("id", action.payload.id, {
        expires: expireDate,
      });
      return {
        isLogin: true,
        userName: action.payload.userName,
        role: action.payload.role,
        userId: action.payload.id,
      };
    case AuthReducerAction.LOGOUT:
      deleteCookie("role");
      deleteCookie("userName");
      deleteCookie("token");
      deleteCookie("id");
      return {
        isLogin: false,
        userName: "",
        role: "",
        userId: "",
      };
    case AuthReducerAction.UPDATE_USER_NAME:
      setCookie("userName", action.payload.userName, {
        expires: expireDate,
      });
      return {
        ...state,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
}

export const AuthContext = createContext<{
  state: AuthStateType;
  dispatch: React.Dispatch<AuthReducerActionType>;
}>({
  state: authInit,
  dispatch: () => {},
});

export const useUserContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, authInit);

  useEffect(() => {
    const isLogin = getCookie("token") ?? false;
    const userName = getCookie("userName") ?? "";
    const role = getCookie("role") ?? "";
    const id = getCookie("id") ?? "";
    if (isLogin) {
      dispatch({
        type: AuthReducerAction.LOGIN,
        payload: {
          userName,
          role,
          id,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
