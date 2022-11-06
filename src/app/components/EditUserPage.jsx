import React from "react";
import { NavLink, useParams } from "react-router-dom";

const EditUserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>Edit User Page</h1>
      <ul className="edit-list">
        <li>
          <NavLink to={`/users/${userId}/profile`}>User profile Page</NavLink>
        </li>
        <li>
          <NavLink to={`/users/${Number(userId) + 1}/profile`}>
            Another User
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">Users List Page</NavLink>
        </li>
      </ul>
    </>
  );
};

export default EditUserPage;
