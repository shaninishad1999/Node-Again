import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // React Router v6 ke liye

const Update = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Navigation hook

  // Function to Fetch Data
  const loadData = async () => {
    try {
      let api = "http://localhost:9000/employees/display"; // Correct API endpoint
      const response = await axios.get(api);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Delete functionality: Sends DELETE request to backend
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        // Assuming your backend expects id in the URL
        await axios.delete(`http://localhost:9000/employees/delete/${id}`);
        // Refresh data after deletion
        loadData();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  // Edit functionality: Navigate to edit route with id
  const handleEdit = (id) => {
    // Navigates to the edit page. Ensure that the route '/edit/:id' exists in your router.
    navigate(`/edit/${id}`);
  };

  // Fetch Data on Component Mount
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Full Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Password</th>
            <th className="border border-gray-300 p-2">Action Button</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((employee, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{employee.fullname}</td>
                <td className="border border-gray-300 p-2">{employee.email}</td>
                <td className="border border-gray-300 p-2">{employee.phone}</td>
                <td className="border border-gray-300 p-2">{employee.password}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleDelete(employee._id)}
                    className="bg-red-500 px-4 text-white"
                  >
                    Delete
                  </button>
                  &nbsp;
                  <button
                    onClick={() => handleEdit(employee._id)}
                    className="bg-blue-500 px-4 text-white"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border border-gray-300 p-2 text-center">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Update;
