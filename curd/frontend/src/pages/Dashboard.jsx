import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get values from localStorage on component mount
    setUsername(localStorage.getItem("username") || "Guest");
    setEmail(localStorage.getItem("email") || "Not provided");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
