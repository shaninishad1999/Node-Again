import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Insert from './pages/Insert';
import Display from './pages/Display';
import Search from './pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default Route */}
          <Route path="home" element={<Home />} />
          <Route path="insert" element={<Insert />} />
          <Route path="display" element={<Display />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Handle unknown routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
