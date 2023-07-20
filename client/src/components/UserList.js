import React from "react";

const UserList = ({ userList, handleDelete }) => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">User List:</h2>
      <ul className="list-group">
        {userList.map((user, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              {user.name} - {user.email} - {user.message}
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
