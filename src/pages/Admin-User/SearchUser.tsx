import React, { Component, createRef, useRef, useState } from "react";
import { IUser } from "interfaces/User";
import { getListUser } from "slices/list-user";
type props = {
  searchUser: string;
  setSearchUser(value: string): void;
};
const SearchUser = (props: props) => {
  const handleSearch = (event: any) => {
    props.setSearchUser(event.target.value);
  };
  return (
    <div className="flex justify-center mr-[-20px] mt-5">
      <input
        type="text"
        className="form-control mt-1 px-3 py-2 border shadow-sm rounded-md  border-slate-300 w-[430]"
        placeholder="Search Email"
        onChange={handleSearch}
      />
      <button className="bg-green-400 mt-1 px-3 py-2 border shadow-sm rounded-md ml-5">
        Search
      </button>
    </div>
  );
};
export default SearchUser;
