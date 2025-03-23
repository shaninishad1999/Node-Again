import React, { useState } from "react";
import axios from "axios";
const Insert = () => {
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput((prestate) => ({
      ...prestate,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    if (input.password != input.confirmPassword) {
      alert("password not match");
    } else {
      console.log(input);
    }
    let api = "http://localhost:9000/employees/registration";
    const response = await axios.post(api, input);
    console.log(response.data);
  };

  return (
    <div className="flex justify-center items-start  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md  max-w-7xl">
        <h1 className="text-2xl font-bold text-center mb-4">
          Insert Employee Data
        </h1>
        <form className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-orange-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-orange-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-orange-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-orange-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:ring focus:ring-orange-300"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Insert;
