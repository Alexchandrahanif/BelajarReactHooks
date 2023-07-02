import React, { useState } from "react";
import styles from "../style";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

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
    </section>
  );
};

export default HomePage;
