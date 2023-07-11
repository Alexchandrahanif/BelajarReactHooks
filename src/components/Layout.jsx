import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { kanan, kiri } from "../assets";
import { RightCircleTwoTone, LeftCircleTwoTone } from "@ant-design/icons";

export const Layout = () => {
  const [IsOpen, setIsOpen] = useState(false);

  function handeOpen() {
    setIsOpen(!IsOpen);
  }

  return (
    <div className="h-screen flex-row flex  w-full">
      <div
        className={` ${
          IsOpen ? `w-[61px]` : `w-[248px]`
        } min-h-full bg-slate-600 relative transition duration-300 ease-in-out `}
      >
        <Sidebar IsOpen={IsOpen} />
        <label htmlFor="toggle">
          <div className="h-7 w-7 flex justify-center items-center bg-slate-200 absolute top-4 -right-3 rounded-full">
            <div className="">
              {IsOpen ? (
                <RightCircleTwoTone style={{ fontSize: "32px" }} />
              ) : (
                <LeftCircleTwoTone style={{ fontSize: "32px" }} />
              )}
            </div>
          </div>
        </label>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={IsOpen}
          onChange={handeOpen}
          className="hidden"
        />
      </div>
      <div className="w-full bg-slate-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
