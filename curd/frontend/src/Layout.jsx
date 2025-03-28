import {Link, Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link> |
          <Link to="insert">Insert</Link> |
          <Link to="display">Display</Link> |
          <Link to="search">Search</Link> |
          <Link to="update"> Update | </Link> 
          <Link to="signup"> SignUp  | </Link> 
          <Link to="login"> login </Link> 
         <hr />
         <Outlet />
         <hr />
         www.mycompany.com all right reserved. 2025
        </>
    )
}
export default Layout;
