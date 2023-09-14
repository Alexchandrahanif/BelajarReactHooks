import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[17%] h-screen">
        <Sidebar />
      </div>
      <div className="w-[83%] h-screen bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
