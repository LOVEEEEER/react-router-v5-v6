import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <h1>Users Layout</h1>
      <NavLink to="/">Main Page</NavLink>
      <Outlet />
    </>
  );
};

export default Users;
