import React from "react";
import { Outlet} from 'react-router-dom'
import { Navbar, Footer } from "../Components";

const SharedLayout = ()=>{
return(
    <Outlet>
     <Navbar/>
    <Footer/>
    </Outlet>
   
)
}

export default SharedLayout
