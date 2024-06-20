export type FormDataType = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type AuthStateType = {
  isLogin: boolean;
  userName: string;
  role: string;
};

export type AuthReducerActionType = {
  type: string;
  payload: {
    isLogin: boolean;
    userName: string;
    role: string;
  };
};

export type ProductDataType = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export type CategoriesDataType = {
  id: number;
  title: string;
  image: string;
  categoryName: string;
};

export type UserDataType = {
  id: string;
  email: string;
  userName: string;
  password: string;
  role: string;
};
