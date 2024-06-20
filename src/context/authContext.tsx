import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { AuthReducerAction } from "../types/enums";
import { AuthReducerActionType, AuthStateType } from "../types/types";
import { getCookie } from "cookies-next";

const authInit = {
  isLogin: false,
  userName: "",
  role: "",
};

function authReducer(
  state: AuthStateType,
  action: AuthReducerActionType
): AuthStateType {
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
    const isLogin = getCookie("token");
    const userName = getCookie("userName");
    const role = getCookie("role");

    dispatch({
      type: AuthReducerAction.SET_USER,
      payload: {
        isLogin: !!isLogin,
        userName: userName ? userName : "",
        role: role ? role : "",
      },
    });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
