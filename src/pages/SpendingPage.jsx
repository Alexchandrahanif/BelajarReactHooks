import React, { useState } from "react";

import { Table } from "antd";
const columns = [
  {
    title: "No",
    dataIndex: "no",
    align: "center",
    width: 50,
  },
  {
    title: "Tanggal",
    dataIndex: "name",
    width: 150,
    align: "center",
  },
  {
    title: "Ketertangan",
    dataIndex: "name",
    width: 250,
    align: "center",
  },
  {
    title: "Total",
    dataIndex: "name",
    width: 150,
    align: "center",
  },
  {
    title: "Kategori",
    dataIndex: "age",
    width: 200,
    align: "center",
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    no: i + 1,
    name: `Edward King ${i + 1}`,
    age: 32,
    address: `London, Park Lane no. ${i + 1}`,
  });
}

const SpendingPage = () => {
  return (
    <div className="w-full h-full p-5">
      {/* Header */}
      <div className="w-full h-[90px]  rounded-lg flex justify-between bg-slate-300 p-2 mb-5 dark:bg-slate-800">
        <div className="w-1/2">
          <h2 className="text-TextDark font-poppins text-[18px] font-medium ">
            Hallo Alex Chandra Hanif 👋
          </h2>
          <h2 className="text-TextDark font-poppins font-bold text-4xl">
            Uang Keluar
          </h2>
        </div>
        <div className="w-1/2 flex justify-center flex-col  ">
          <input
            type="text"
            placeholder="Masukkan Kategori"
            className="h-[30px] w-4/5  rounded-md focus:border-sky-500 p-2"
          />
        </div>
      </div>

      {/* Tabel */}
      <Table
        showHeader={true}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{
          y: 380,
        }}
        bordered={true}
      />
    </div>
  );
};

export default SpendingPage;
