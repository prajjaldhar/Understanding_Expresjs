// src/App.js
import React, { useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

// Set the base URL for Axios requests
axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userList, setUserList] = useState([]);

  // Fetch all data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      console.log(response.data);
      setUserList(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useState(() => {
    fetchData();
  }, [userList]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/data", formData);
      fetchData();
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  // Handle data deletion
  const handleDelete = async (index) => {
    try {
      await axios.delete(`/api/data/${userList[index]._id}`);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <UserForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <UserList userList={userList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
