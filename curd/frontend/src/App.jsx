import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/Update";
import EditData from "./pages/EditData";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard";
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
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>      
      </BrowserRouter>
    </>
  )
}
export default App;