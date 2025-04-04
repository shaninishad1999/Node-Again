import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/Update";
import EditData from "./pages/EditData";

import 'bootstrap/dist/css/bootstrap.min.css';
import Salary from "./pages/Salary";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="editdata/:id" element={<EditData/>}/>
            <Route path="/salary" element={<Salary/>}/>
            
          </Route>
        </Routes>      
      </BrowserRouter>
    </>
  )
}
export default App;