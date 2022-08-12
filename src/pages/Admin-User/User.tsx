import React from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

const User = () => {
  return (
    <div className="container">
      <h1 className="text-center text-3xl "> User Management</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default User;
