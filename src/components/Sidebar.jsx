import React, { useState } from "react";
import { Navlink } from "../constants";

const Sidebar = ({ IsOpen }) => {
  const [isActive, setIsActive] = useState(0);

  const handleActive = (id) => {
    setIsActive(id);
  };

  const [isToggleChecked, setIsToggleChecked] = useState(false);

  const handleToggleChange = () => {
    setIsToggleChecked(!isToggleChecked);
    const html = document.querySelector("html");
    !isToggleChecked
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="bg-PrimaryBright1 h-[60px] flex justify-evenly items-center border-b-[1px] border-slate-300 ">
        <h2 className="font-poppins text-white font-extrabold text-4xl">B</h2>
        <h2
          className={`font-poppins text-white text-lg ${
            IsOpen ? `hidden` : `flex`
          } font-medium`}
        >
          Budged Buddy
        </h2>
      </div>
      <div className="bg-PrimaryBright1 h-[450px] p-3">
        {Navlink.map((nav, index) => (
          <button
            key={nav.id}
            onClick={() => handleActive(nav.id)}
            className={`w-full h-[30px]  my-3 flex  rounded-md group ${
              isActive == index ? `bg-PrimaryDark` : null
            } p-1 `}
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
              <p className="text-black font-normal font-poppins ">{nav.name}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="bg-PrimaryBright1 h-[158px] p-3">
        <button className="w-full h-[30px] my-3 flex">
          <div className="w-[50px] h-full bg-slate-200 ">Logo</div>
          <div
            className={`w-full h-full bg-slate-300  ${
              IsOpen == true ? "hidden" : "block"
            }`}
          >
            {" "}
            Logout
          </div>
        </button>
        <div className="w-full h-[30px] my-3 flex">
          <div className="w-[50px] h-full flex items-center">
            <label htmlFor="tuggle">
              <div className="w-10 h-5 bg-slate-50 rounded-xl flex items-center p-1 cursor-pointer">
                <div
                  className={`w-4 h-4 bg-slate-800 rounded-full  tuggle-circle ${
                    isToggleChecked ? "ml-4" : ""
                  } `}
                ></div>
              </div>
            </label>
            <input
              type="checkbox"
              id="tuggle"
              className="hidden"
              checked={isToggleChecked}
              onChange={handleToggleChange}
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
