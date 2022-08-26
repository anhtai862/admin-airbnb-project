import { IDELETE } from "interfaces/Delete-User";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteUser } from "slices/delete-user";
import { getListUser } from "slices/list-user";
import { AppDispatch, RootState } from "store";
import UserItem from "./UserItem";

type props = {
  searchUser: string;
};

const UserList = (props: props) => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.list_user
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getListUser());
  }, []);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="flex flex-col mt-10  ">
      <table className="table-fixed bg-white   text-center h-96">
        <thead>
          <tr>
            <th>Họ và Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>

            <th>Address</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => {
            return (
              user.name?.includes(props.searchUser) && (
                <UserItem key={user._id} user={user} />
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
