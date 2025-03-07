import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        
        <Link to="home">Home</Link> |
        <Link to="insert">Insert</Link> |
        <Link to="Display">Display</Link> |
      
<hr>
<Outlet/>

</hr>



        </div>
  )
}

export default Layout