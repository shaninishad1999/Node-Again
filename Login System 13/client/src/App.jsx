import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
const App = () => {
  return (
    <div>

<BrowserRouter>
<Routes>

  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='home' element={<Home/>}/>
  <Route path='login' element={<Login/>}/>
  <Route path='registration' element={<Registration/>}/>

    
  </Route>
</Routes>

</BrowserRouter>


    </div>
  )
}

export default App