import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import api from "../api";

const UserPage = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const { userId } = useParams();
  const getUser = () => {
    const data = api.users.getUserById(userId);
    if (!data) {
      setError("Ошибка при получении пользователя");
      return;
    }
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  if (user) {
    return (
      <>
        <h1>User Page</h1>
        <ul className="user-control">
          <li>
            <NavLink to="/users">Users List Page</NavLink>
          </li>
          <li>
            <NavLink to={`/users/${userId}/edit`}>Edit this user</NavLink>
          </li>
        </ul>
        userId: {userId}
      </>
    );
  }
  if (error) {
    return <h3>Ошибка при получении пользователя</h3>;
  }
};

export default UserPage;
