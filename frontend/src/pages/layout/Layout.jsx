import React from "react";
import { Outlet } from "react-router-dom";
import ToolBar from "./ToolBar";

const Layout =() =>{
    return(
    <>
    <div>
        <ToolBar/>
        {/* <Sides/>
        <Backdrop/> */}
    </div>
    <main>
        <Outlet></Outlet>
    </main>
    </>
    )
}

export default Layout;