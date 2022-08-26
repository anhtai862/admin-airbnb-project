import { CONFIG_URL } from "enum/admin.enum";
import { IDELETE } from "interfaces/Delete-User";
import { IListUser } from "interfaces/List-User";
import { IUser } from "interfaces/User";
import { useSearchParams } from "react-router-dom";
import axiosClient from "./axiosCLient";

const userAPI = {
  // add New User
  newUser: (data: IUser) => {
    return axiosClient.post<unknown, IUser>(CONFIG_URL.USER_URL, data);
  },
  getListUser: () => {
    return axiosClient.get<unknown, IListUser[]>(CONFIG_URL.USER_PAGINATION, {
      params: {
        limit: 9,
      },
    });
  },
  deleteUser: (userId: string) => {
    return axiosClient.delete<unknown, IUser>(`/users/${userId}`, {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4ZTcwOGVmZTE5MzAwMWMwYTVhNTAiLCJlbWFpbCI6ImtoYTl4MDE1OUBnbWFpbC5jb20iLCJ0eXBlIjoiQURNSU4iLCJpYXQiOjE2NjA1NTg1NDF9.O0riSfQpxuSHgtBE0khTu85j2zgXBZKlxRGmVbVQtJQ",
      },
    });
  },
};

export default userAPI;
