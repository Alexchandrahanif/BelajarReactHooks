import React, { useEffect, useState } from "react";
import { Navlink } from "../constants";
import { Link } from "react-router-dom";
import { logout } from "../assets";
import Swal from "sweetalert2";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";

const Sidebar = ({ IsOpen }) => {
  const [isActive, setIsActive] = useState(0);

  const handleActive = (id) => {
    setIsActive(id);
  };

  const [isToggleChecked, setIsToggleChecked] = useState(false);

  const handleToggleChange = () => {
    setIsToggleChecked(!isToggleChecked);
    const html = document.querySelector("html");
    if (!isToggleChecked) {
      html.classList.add("dark");
      localStorage.setItem("darkmode", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkmode", "light");
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Apakah Kamu Ingin Keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire("Terimakasih!", "Jangan Lupa Datang Lagi.", "success");
      }
    });
  };

  return (
    <div className="flex flex-col w-full bg-PrimaryBright1 ">
      {/* Logo */}
      <div className="h-[60px] flex justify-evenly items-center border-b-[1px] border-slate-300 ">
        <h2 className="font-poppins text-white font-extrabold text-4xl">B</h2>
        <h2
          className={`font-poppins text-white text-lg ${
            IsOpen ? `hidden` : `flex`
          } font-medium`}
        >
          Budged Buddy
        </h2>
      </div>

      {/* Bagian atas */}
      <div className="h-[450px] p-3">
        {Navlink.map((nav, index) => (
          <Link
            to={`/${nav.link}`}
            key={nav.id}
            onClick={() => handleActive(nav.id)}
            className={`w-full h-[30px]  my-3 flex  rounded-md group ${
              isActive == index ? `bg-PrimaryDark` : null
            } p-1  `}
          >
            <div
              className={`w-[50px] h-full flex items-center ${
                IsOpen == true ? `flex justify-center` : ``
              } `}
            >
              <img src={nav.icon} alt="" className="h-[25px] w-[25px] " />
            </div>
            <div
              className={`w-full h-full   flex justify-start  ${
                IsOpen == true ? `hidden` : "block"
              }`}
            >
              <p className="text-black font-normal font-poppins group: ">
                {nav.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bawah */}
      <div className="bg-PrimaryBright1 h-[158px] p-3">
        {/* Logout */}
        <button className="w-full h-[30px] my-3 flex" onClick={handleLogout}>
          <div className="w-[50px] h-full">
            <img src={logout} alt="logout" className="h-[30px] w-[30px] " />
          </div>
          <div
            className={`w-full h-full   ${
              IsOpen == true ? "hidden" : ""
            } flex justify-start items-center`}
          >
            <p>Logout</p>
          </div>
        </button>

        {/* Toogle Dark Mode */}
        <div className="w-full h-[30px] my-3 flex">
          <div className="w-[50px] h-full flex items-center">
            {/* <label htmlFor="tuggle">
              <div className="w-10 h-5 bg-slate-50 rounded-xl flex items-center p-1 cursor-pointer">
                <div
                  className={`w-4 h-4 bg-slate-800 rounded-full  tuggle-circle ${
                    isToggleChecked ? "ml-4" : ""
                  } `}
                ></div>
              </div> */}
            {/* </label> */}
            {/* <input
              type="checkbox"
              id="tuggle"
              className="hidden"
              checked={isToggleChecked}
              onChange={handleToggleChange}
            /> */}
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={handleToggleChange}
              style={{
                border: "1px solid black",
              }}
            />
          </div>
          <div
            className={`w-full h-full ${
              IsOpen == true ? "hidden" : "flex items-center"
            } ml-3 `}
          >
            <p>Dark Mode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
