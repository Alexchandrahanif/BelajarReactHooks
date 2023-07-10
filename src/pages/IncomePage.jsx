import React from "react";

const IncomePage = () => (
  <div className="w-full h-full p-5">
    {/* Header */}
    <div className="w-full h-[90px]  rounded-lg flex justify-between bg-slate-300 p-2 mb-5">
      <div className="w-1/2">
        <h2 className="text-TextDark font-poppins text-[18px] font-medium ">
          Hallo Alex Chandra Hanif 👋
        </h2>
        <h2 className="text-TextDark font-poppins font-bold text-4xl">
          Uang Masuk
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
    <div className="w-full h-[520px] bg-slate-300 rounded-lg p-5 overflow-y-scroll scrollbar">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="">
          <tr className="text-start">
            <th className="px-6 py-3 bg-gray-100 border-b">Header 1</th>
            <th className="px-6 py-3 bg-gray-100 border-b">Header 2</th>
            <th className="px-6 py-3 bg-gray-100 border-b">Header 3</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="px-6 py-4 border-b">Data 1</td>
            <td className="px-6 py-4 border-b">Data 2</td>
            <td className="px-6 py-4 border-b">Data 3</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 4</td>
            <td className="px-6 py-4 border-b">Data 5</td>
            <td className="px-6 py-4 border-b">Data 6</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 1</td>
            <td className="px-6 py-4 border-b">Data 2</td>
            <td className="px-6 py-4 border-b">Data 3</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 4</td>
            <td className="px-6 py-4 border-b">Data 5</td>
            <td className="px-6 py-4 border-b">Data 6</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 1</td>
            <td className="px-6 py-4 border-b">Data 2</td>
            <td className="px-6 py-4 border-b">Data 3</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 4</td>
            <td className="px-6 py-4 border-b">Data 5</td>
            <td className="px-6 py-4 border-b">Data 6</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 1</td>
            <td className="px-6 py-4 border-b">Data 2</td>
            <td className="px-6 py-4 border-b">Data 3</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 4</td>
            <td className="px-6 py-4 border-b">Data 5</td>
            <td className="px-6 py-4 border-b">Data 6</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 1</td>
            <td className="px-6 py-4 border-b">Data 2</td>
            <td className="px-6 py-4 border-b">Data 3</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b">Data 4</td>
            <td className="px-6 py-4 border-b">Data 5</td>
            <td className="px-6 py-4 border-b">Data 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default IncomePage;
