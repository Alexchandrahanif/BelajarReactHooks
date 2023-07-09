import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FetchUserById } from "../redux/action/user";

const DetailPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const { User } = useSelector((state) => state.UserReducer);
  let { id } = useParams();

  useEffect(() => {
    dispatch(FetchUserById(id));
  }, []);

  return (
    <div className="flex flex-col p-6">
      <div className="mb-5">
        <ul>
          <li>Nama : {User.data?.username}</li>
          <li>Email :{User.data?.email} </li>
          <li>address :{User.data?.address} </li>
          <li>phoneNumber :{User.data?.phoneNumber} </li>
        </ul>
      </div>
      <div>
        <button
          className="w-[80px] h-[30px] bg-sky-600 border border-slate-400 rounded-md"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
