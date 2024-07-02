import { AuthReducerAction } from "./enums";

export type AuthStateType = {
  isLogin: boolean;
  userName: string;
  role: string;
  userId: string;
};

export type AuthReducerActionType =
  | {
      type: AuthReducerAction.LOGIN;
      payload: {
        userName: string;
        role: string;
        id: string;
      };
    }
  | {
      type: AuthReducerAction.LOGOUT;
    };
