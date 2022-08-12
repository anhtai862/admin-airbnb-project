import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "slices/list-user";
import { AppDispatch, RootState } from "store";

const UserList = () => {
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
  console.log("data", data);
  console.log("error", error);

  return (
    <div className="flex flex-col mt-10  ">
      <table className="table-fixed  bg-yellow-300 text-center h-96">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ Và Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.birthday}</td>

                <td>
                  <button className="bg-green-400 mt-1 px-3 py-2 border shadow-sm rounded-md">
                    Update
                  </button>
                  <button className="bg-red-600 mt-1 px-3 py-2 border shadow-sm rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
