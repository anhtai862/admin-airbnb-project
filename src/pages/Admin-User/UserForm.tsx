import { IUser } from "interfaces/User";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "slices/user";
import { AppDispatch } from "store";

const UserForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [addUser, setAddUser] = useState<IUser>({});

  const handleRegister = () => {
    dispatch(addNewUser(addUser));
  };

  const onChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    setAddUser({ ...addUser, [name]: target.value });
  };
  return (
    <form className="">
      <div className="grid grid-rows-3 grid-flow-col gap-6 items-center text-center ml-96 mr-96 mt-16">
        <div className="form-group">
          <label className="mr-5">Họ và Tên</label>
          <input
            type="text"
            className="mt-1 px-3 py-2 border shadow-sm rounded-md  border-slate-300"
            onChange={onChangeText}
            name="name"
          />
        </div>
        <div className="form-group">
          <label className="mr-5">Email</label>
          <input
            type="text"
            className="mt-1 px-3 py-2 border shadow-sm rounded-md  border-slate-300"
            onChange={onChangeText}
            name="email"
          />
        </div>
        <div className="form-group">
          <label className="mr-5">Mật Khẩu</label>
          <input
            type="password"
            className="mt-1 px-3 py-2 border shadow-sm rounded-md  border-slate-300"
            onChange={onChangeText}
            name="password"
          />
        </div>
        <div className="form-group">
          <label className="mr-5">Số Điện Thoại</label>
          <input
            type="text"
            className="mt-1 px-3 py-2 border shadow-sm rounded-md  border-slate-300"
            onChange={onChangeText}
            name="phone"
          />
        </div>
        <div className="form-group">
          <label className="mr-5">Ngày Sinh</label>
          <input
            type="text"
            className="mt-1 px-3 py-2 border shadow-sm rounded-md  border-slate-300"
            onChange={onChangeText}
            name="birthday"
          />
        </div>
        <div className="form-group">
          <label className="mr-5">Địa Chỉ</label>
          <input
            type="text"
            className="mt-1 px-3 py-2 border shadow-sm rounded-md  border-slate-300"
            onChange={onChangeText}
            name="address"
          />
        </div>
        <button
          className="bg-sky-400 mt-1 px-3 py-2 border shadow-sm rounded-md"
          onClick={handleRegister}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default UserForm;
