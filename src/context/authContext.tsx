import { ReactNode, createContext, useContext, useReducer } from "react";
import { AuthReducerAction } from "../types/enums";
import { getCookie } from "cookies-next";

type AuthState = {
  isLogin: boolean;
  userName: string;
  role: string;
};

const isLogin = getCookie("token");
const userName = getCookie("userName");
const userRole = getCookie("role");

const authInit = {
  isLogin: isLogin ? true : false,
  userName: userName ? userName : "",
  role: userRole ? userRole : "",
};

function authReducer(
  state: AuthState,
  action: { type: string; payload: any }
): AuthState {
  switch (action.type) {
    case AuthReducerAction.SET_USER:
      return {
        isLogin: action.payload.isLogin,
        userName: action.payload.userName,
        role: action.payload.role,
      };
    case AuthReducerAction.LOGOUT:
      return {
        isLogin: action.payload.isLogin,
        userName: action.payload.userName,
        role: action.payload.role,
      };
    default:
      return state;
  }
}

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<{ type: string; payload: any }>;
}>({
  state: authInit,
  dispatch: () => {},
});

export const useUserContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, authInit);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
