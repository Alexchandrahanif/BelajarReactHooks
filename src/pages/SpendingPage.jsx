import React, { Fragment, useState } from "react";
import Modal from "../components/modal";

const SpendingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <Fragment>
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

        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="h-[40px] w-[40px] rounded-full bg-PrimaryBright2 mb-2 hover:opacity-90 hover:animate-pulse  transition duration-300"
          >
            <h2 className="text-white font-poppins text-2xl">+</h2>
          </button>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal2(true)}
            className="h-[40px] w-[40px] rounded-full bg-PrimaryBright2 mb-2 hover:opacity-90 hover:animate-pulse  transition duration-300"
          >
            <h2 className="text-white font-poppins text-2xl">?</h2>
          </button>
        </div>
        {/* Tabel */}
        <div className="w-full h-[470px] bg-slate-300 rounded-lg p-5 overflow-y-scroll scrollbar">
          <table className="min-w-full bg-white border border-gray-300 ">
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
      <Modal Isvisible={showModal} onClose={() => setShowModal(false)}>
        <h1>Tambah</h1>
      </Modal>
      <Modal Isvisible={showModal2} onClose={() => setShowModal2(false)}>
        <h1>Edit</h1>
      </Modal>
    </Fragment>
  );
};

export default SpendingPage;
