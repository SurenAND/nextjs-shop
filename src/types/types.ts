import { AuthReducerAction } from "@/src/types/enums";

export type AuthStateType = {
  isLogin: boolean;
  userName: string;
  role: string;
};

export type AuthReducerActionType =
  | {
      type: AuthReducerAction.LOGIN;
      payload: {
        userName: string;
        role: string;
      };
    }
  | {
      type: AuthReducerAction.LOGOUT;
    };
