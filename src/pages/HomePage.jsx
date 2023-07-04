import React, { useEffect, useState } from "react";
import styles from "../style";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../redux/action/user";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Users } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(FetchUser());
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Apakah Anda Ingin Keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire("Berhasil", "Jangan Lupa Datang Lagi", "success");
        navigate("/login");
      }
    });
  };
  // if (Users.data === undefined) {
  //   return <h1>Loading</h1>;
  // }
  return (
    <section>
      <div className={styles.padding}>
        <h3>Berhasil Login</h3>
        <button
          onClick={handleLogout}
          className="h-[40px] w-[120px] font-poppins font-light border-1 border-slate-800 rounded-lg bg-sky-700 text-white hover:opacity-80 active:opacity-90"
        >
          Logout
        </button>
      </div>
      <div className="bg-sky-900">
        {Users.data?.map((item) => {
          <p key={item.id}>{item.username}</p>;
        })}

        {/* {JSON.stringify(Users)} */}
      </div>
    </section>
  );
};

export default HomePage;
