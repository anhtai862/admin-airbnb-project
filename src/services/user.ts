import { CONFIG_URL } from "enum/admin.enum";
import { IDELETE } from "interfaces/Delete-User";
import { IListUser } from "interfaces/List-User";
import { IUser } from "interfaces/User";
import axiosClient from "./axiosCLient";

const userAPI = {
  // add New User
  newUser: (data: IUser) => {
    return axiosClient.post<unknown, IUser>(CONFIG_URL.USER_URL, data);
  },
  getListUser: () => {
    return axiosClient.get<unknown, IListUser[]>(CONFIG_URL.USER_PAGINATION, {
      params: {
        limit: 3,
      },
    });
  },
  deleteUser: (userId: string) => {
    return axiosClient.delete<unknown, IUser>(`/users/${userId}`);
  },
};

export default userAPI;
