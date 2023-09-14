import React, { useEffect, useRef, useState } from "react";
import Pie from "../components/utils/Pie";
import LineChart from "../components/utils/LineChart";

const HomePage = () => {
  return (
    <div className="w-full h-full p-5">
      <div className="w-full bg-slate-400">
        <p className="text-black text-3xl">Dashboard</p>
        <p className="text-TextLight">
          Selamat datang kembali, {localStorage.getItem("username")}
        </p>
      </div>
      <div className="w-[200px] h-[200px]">
        <Pie />
      </div>
    </div>
  );
};

export default HomePage;
