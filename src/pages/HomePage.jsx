import React, { useEffect, useState } from "react";
import styles from "../style";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../redux/action/user";
import { keluar, masuk, rupiah, tabungan } from "../assets";

const HomePage = () => {
  return (
    <div className="h-full w-full p-5 bg-slate-100 dark:bg-slate-600">
      <div className="w-full h-[70px]  rounded-lg">
        <h2 className="text-TextDark font-poppins text-[18px] font-medium ">
          Hallo Alex Chandra Hanif 👋
        </h2>
        <h2 className="text-TextDark font-poppins font-bold text-4xl">
          Dashboard
        </h2>
      </div>

      <div className="flex flex-row justify-between my-5">
        <div className="w-[23%] bg-white shadow-xl h-[90px] rounded-lg p-3 flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[17px]">Saldo</h3>
            <p className="font-poppins font-normal mt-1">Rp.1000.000</p>
          </div>
          <div>
            <img src={rupiah} alt="rupiah" className="w-14 h-14" />
          </div>
        </div>
        <div className="w-[23%] bg-white shadow-xl h-[90px] rounded-lg p-3 flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[17px]">
              Uang Masuk
            </h3>
            <p className="font-poppins font-normal mt-1">Rp.1000.000</p>
          </div>
          <div>
            <img src={masuk} alt="rupiah" className="w-10 h-10" />
          </div>
        </div>
        <div className="w-[23%] bg-white shadow-xl h-[90px] rounded-lg p-3 flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[17px]">
              Uang Keluar
            </h3>
            <p className="font-poppins font-normal mt-1">Rp.1000.000</p>
          </div>
          <div>
            <img src={keluar} alt="rupiah" className="w-10 h-10" />
          </div>
        </div>
        <div className="w-[23%] bg-white shadow-xl h-[90px] rounded-lg p-3 flex justify-between">
          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[17px]">Tabungan</h3>
            <p className="font-poppins font-normal mt-1">Rp.1000.000</p>
          </div>
          <div>
            <img src={tabungan} alt="rupiah" className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div className="flex sm:flex-row flex-col justify-between">
        <div className="w-[32%] h-[420px] bg-slate-100 shadow-xl border-[1px] border-slate-200 rounded-lg p-2">
          <div className="w-full h-9 mb-2 flex justify-center items-center">
            <h1 className="font-poppins font-medium">Uang Masuk</h1>
          </div>
          <div className="w-full h-[350px]  overflow-y-scroll scrollbar">
            <div className="flex flex-col p-2">
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juni 2023</p>
                <p>Gajian</p>
                <p>Rp.15.000.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juli 2023</p>
                <p>Gajian</p>
                <p>Rp.15.000.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[32%] h-[420px] bg-slate-100 shadow-xl border-[1px] border-slate-200 rounded-lg p-2">
          <div className="w-full h-9 mb-2 flex justify-center items-center">
            <h1 className="font-poppins font-medium">Uang Keluar</h1>
          </div>
          <div className="w-full h-[350px]  overflow-y-scroll scrollbar">
            <div className="flex flex-col p-2">
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>12 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>18 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>19 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>19 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[32%] h-[420px] bg-slate-100 shadow-xl border-[1px] border-slate-200 rounded-lg p-2">
          <div className="w-full h-9 mb-2 flex justify-center items-center">
            <h1 className="font-poppins font-medium">Tabungan</h1>
          </div>
          <div className="w-full h-[350px]  overflow-y-scroll scrollbar">
            <div className="flex flex-col p-2">
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
              <div className="w-full h-[30px] bg-slate-100 my-2 border-b-[1px] border-slate-400 flex justify-between">
                <p>2 Juni 2023</p>
                <p>Uang makan</p>
                <p>Rp.15.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
