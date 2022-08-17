import React, { useState } from "react";
import SearchUser from "./SearchUser";

import UserForm from "./UserForm";
import UserList from "./UserList";

const User = () => {
  const [searchUser, setSearchUser] = useState<string>("");

  return (
    <div className="container">
      <h1 className="text-center text-3xl "> User Management</h1>
      <UserForm />
      <SearchUser searchUser={searchUser} setSearchUser={setSearchUser} />
      <UserList searchUser={searchUser} />
    </div>
  );
};

export default User;
