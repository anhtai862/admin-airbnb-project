export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: number;
  birthday?: string;
  address?: string;
  type?: string;
  avatar?: string;
  ticktets?: [];
}
