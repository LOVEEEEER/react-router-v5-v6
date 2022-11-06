import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import api from "../api";

const UsersList = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    const data = api.users.fetchAll();
    setUsers(data);
  };
  if (users) {
    return (
      <>
        <h1>Users List Page</h1>
        <ul className="users-list">
          {users.map((user) => (
            <li className="users-item" key={user.id}>
              <NavLink to={`/users/${user.id}/profile`}>{user.name}</NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default UsersList;
