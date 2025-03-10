import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="home">Home</Link> | 
        <Link to="insert">Insert</Link> | 
        <Link to="display">Display</Link>
        <Link to="search">Search</Link>
      </nav>
      <hr />
      <Outlet />
      <footer>
        www.mycompany.com &copy; All rights reserved. 2025
      </footer>
    </div>
  );
};

export default Layout;
