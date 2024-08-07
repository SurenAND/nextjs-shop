import { AuthReducerAction } from "@/src/types/enums";

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
    }
  | {
      type: AuthReducerAction.UPDATE_USER_NAME;
      payload: {
        userName: string;
      };
    };
