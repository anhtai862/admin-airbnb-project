import { IListUser } from "interfaces/List-User";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteUser } from "slices/delete-user";
import { getListUser } from "slices/list-user";

import { AppDispatch, RootState } from "store";

type Props = {
  user: IListUser;
};

const UserItem = (user: Props) => {
  const props = user;

  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.delete_user
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async (userId: any) => {
    await dispatch(deleteUser(userId));
    dispatch(getListUser());
  };

  return (
    <>
      <tr>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.address}</td>

        <td>
          <button className="bg-green-400 mt-1 px-3 py-2 border shadow-sm rounded-md">
            Update
          </button>
          <button
            className="bg-red-600 mt-1 px-3 py-2 border shadow-sm rounded-md"
            onClick={() => handleDelete(props.user._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserItem;
