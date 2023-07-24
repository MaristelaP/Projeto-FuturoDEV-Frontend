import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const VisualizarNavbar = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default VisualizarNavbar;