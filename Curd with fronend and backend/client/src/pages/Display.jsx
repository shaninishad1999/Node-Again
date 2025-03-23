import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [data, setData] = useState([]);

  // Function to Fetch Data
  const loadData = async () => {
   
      let api = "http://localhost:9000/employees/display"; // ✅ Correct API for fetching employees
      const response = await axios.get(api);
      setData(response.data);
 
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
            <th className="border border-gray-300 p-2">Confirm Password</th>
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
                <td className="border border-gray-300 p-2">{employee.confirmPassword}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border border-gray-300 p-2 text-center">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
