import styles from "../style";
import { login } from "../assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LoginPage = () => {
  // Import untuk mendapatkan UseNavigate
  const navigate = useNavigate();

  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/user/login",
        data: { password, email },
      });

      localStorage.setItem("authorization", data.data.authorization);
      localStorage.setItem("id", data.data.id);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Berhasil Login",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response.data.message,
      });
    }
  };

  return (
    <section className={`${styles.paddingY} flex justify-center `}>
      <div className="w-ful max-w-[450px] p-16 min-w-[400px] border-2 border-slate-500 rounded-lg">
        <h2 className={`font-semibold font-poppins text-[34px] mb-4`}>Login</h2>

        <form onSubmit={handleOnSubmit} method="post" className="flex flex-col">
          {/* Email */}
          <label
            htmlFor="email"
            className="text-lg font-medium font-poppins text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="text-lg mt-4 font-poppins font-medium text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button Submit */}
          <button
            type="submit"
            className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="flex justify-center">
          <button className="w-[90px] h-[30px] font-light rounded-lg font-poppins text-white  bg-sky-600 mt-4 hover:text-slate-300">
            <Link to={`/register`}>Register</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
