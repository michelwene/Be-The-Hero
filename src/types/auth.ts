export interface IPayloadSignIn {
  email?: string;
  password?: string;
}

export interface IUserData {
  accessToken: string;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  uf: string;
}
