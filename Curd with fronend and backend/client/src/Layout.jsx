import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar - becomes top navigation on mobile */}
      <div className="lg:w-64 bg-white shadow-lg lg:min-h-screen">
        <div className="p-4 bg-blue-600">
          <h1 className="text-white text-xl font-bold text-center">Dashboard</h1>
        </div>
        <nav className="lg:mt-6">
          <ul className="flex flex-row flex-wrap lg:flex-col justify-center lg:justify-start">
            <li className="m-2 lg:mb-2 lg:mx-0">
              <Link
                to="/"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>
            <li className="m-2 lg:mb-2 lg:mx-0">
              <Link
                to="/insert"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Insert
              </Link>
            </li>
            <li className="m-2 lg:mb-2 lg:mx-0">
              <Link
                to="/display"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Display
              </Link>
            </li>
            <li className="m-2 lg:mb-2 lg:mx-0">
              <Link
                to="/search"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                Search
              </Link>
            </li>
            <li className="m-2 lg:mb-2 lg:mx-0">
              <Link
                to="/update"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Update
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Welcome to Dashboard</h2>
          </div>
        </header>
        <main className="flex-1 p-6 flex items-start justify-center">
          <div className=" ">
            <Outlet />
          </div>
        </main>
        <footer className="bg-white p-4 text-center text-gray-500 text-sm border-t mt-auto">
          <p>www.copyright.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;