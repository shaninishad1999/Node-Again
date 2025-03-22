import React from 'react'
import TopMenu from './components/TopMenu'
import {Outlet} from "react-router-dom"
import Footer from './components/Footer'
const Layout = () => {
  return (
    <div>

<TopMenu/>
<Outlet/>
<Footer/>

    </div>
  )
}

export default Layout