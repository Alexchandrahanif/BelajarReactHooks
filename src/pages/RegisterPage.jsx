import React, { useState } from "react";
import styles from "../style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("address", address);
      formData.append("phoneNumber", phoneNumber);
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/user/register",
        data: formData,
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Berhasil Login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response.data.message,
      });
      console.log(error);
    }
  };

  return (
    <section className={`${styles.padding} ${styles.flexCenter}`}>
      <div
        className={`p-5  w-full max-w-[500px] min-w-[450px] flex justify-center border-[1px] rounded-lg border-slate-800`}
      >
        <div className="min-w-[400px]">
          <h2 className="font-semibold mb-3">Register</h2>
          <form className="flex flex-col" onSubmit={handleOnSubmit}>
            {/* Username */}
            <input
              type="text"
              autoComplete="off"
              id="username"
              className="px-4 mb-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Email */}
            <input
              type="email"
              autoComplete="off"
              id="email"
              className="px-4 mb-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <input
              type="password"
              autoComplete="off"
              id="password"
              className="px-4 mb-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Phone Number */}
            <input
              type="text"
              autoComplete="off"
              id="phoneNumber"
              className="px-4 mb-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {/* Photo User */}
            {/* <input
              type="text"
              autoComplete="off"
              id="phoneNumber"
              className="px-4 mb-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            /> */}

            {/* Address */}
            <input
              type="text"
              autoComplete="off"
              id="address"
              className="px-4 mb-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            {/* Button Submit */}
            <button
              type="submit"
              className="px-4 py-2 mt-4   bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
