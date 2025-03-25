import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/Update";
import EditData from "./pages/EditData";
import Layout from "./Layout";


const App = () => {
  return (
    <Router>
      <div className="flex">
       
        <div className="flex-1 ">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/display" element={<Display />} />
              <Route path="/search" element={<Search />} />
              <Route path="/update" element={<Update />} />
              <Route path="/edit" element={<EditData />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
