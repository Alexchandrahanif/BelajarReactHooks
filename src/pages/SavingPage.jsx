import React, { useEffect, useState } from "react";
import { Table, Input, InputNumber, Select } from "antd";
import ModalGroup from "../components/modal";
import Icons from "../library/icon";
import { useDispatch, useSelector } from "react-redux";
import {
  createSaving,
  fetchSaving,
  fetchSavingCategories,
} from "../redux/action/saving";

import { FetchUser } from "../redux/action/user";

const columns = [
  {
    title: "No",
    align: "center",
    width: 50,
    render: (data) => {
      return <div>{data?.SavingCategory.type}</div>;
    },
  },
  {
    title: "Tanggal",
    width: 100,
    align: "center",
    render: (data) => {
      const dateObj = new Date(data.createdAt);
      const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ][dateObj.getUTCDay()];
      const tanggal = dateObj.getUTCDate();
      const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ][dateObj.getUTCMonth()];
      const tahun = dateObj.getUTCFullYear();
      const hasilAkhir = `${hari}, ${tanggal}-${bulan}-${tahun}`;
      return <div>{hasilAkhir}</div>;
    },
  },
  {
    title: "Ketertangan",
    width: 180,
    align: "center",
    render: (data) => {
      return <div>{data?.notes}</div>;
    },
  },
  {
    title: "Total",
    width: 100,
    align: "center",
    render: (data) => {
      return <div>{data?.total}</div>;
    },
  },
  {
    title: "Kategori",
    width: 120,
    align: "center",
    render: (data) => {
      return <div>{data?.SavingCategory.type}</div>;
    },
  },
];

const SavingPage = () => {
  let dispatch = useDispatch();

  const [SavingCategoryId, setSavingCategoryId] = useState("");
  const [total, setTotal] = useState();
  const [purpose, setPurpose] = useState("");
  const [notes, setNotes] = useState("");

  let body = {
    total: total,
    purpose: purpose,
    notes: notes,
    SavingCategoryId: SavingCategoryId,
    UserId: localStorage.getItem("id"),
  };

  const { Savings } = useSelector((state) => state.SavingReducer);

  const { Category } = useSelector((state) => state.SavingReducer);

  const options =
    Category?.data?.map((el) => ({
      key: el.id,
      value: el.id,
      label: el.type,
    })) || [];

  useEffect(() => {
    dispatch(fetchSavingCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSaving());
  }, [dispatch]);

  const handleSubmitSaving = (body) => {
    dispatch(createSaving(body));
    setNotes("");
    setPurpose("");
    setTotal("");
    setSavingCategoryId(null);
  };

  return (
    <div className="w-full h-full p-5">
      {/* Header */}
      <div className="w-full h-[90px]  rounded-lg flex justify-between bg-slate-300 p-2 mb-5">
        <div className="w-1/2">
          <h2 className="text-TextDark font-poppins text-[18px] font-medium ">
            Hallo Alex Chandra Hanif 👋
          </h2>
          <h2 className="text-TextDark font-poppins font-bold text-4xl">
            Tabungan
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

      {/* MODAL */}
      <div className="w-full h-11 hover:animate-pulse">
        <ModalGroup
          onOk={() => handleSubmitSaving(body)}
          widths={350}
          trigger={
            <div className="absolute right-8">
              <Icons type="PlusCircleOutlined" style={{ fontSize: 25 }} />
            </div>
          }
          okText="Tambah"
          cancelText="Kembali"
          content={
            <>
              <div className="">
                <InputNumber
                  className="w-full mb-[10px]"
                  placeholder="Masukan Jumlah Tabungan"
                  value={total}
                  onChange={(value) => setTotal(value)}
                />
                <Input
                  placeholder="Masukkan Tujuan"
                  className="mb-[10px]"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                />
                <Input
                  placeholder="Masukkan Keterangan"
                  className="mb-[10px]"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <Select
                  className="w-full"
                  showSearch
                  onChange={(value) => setSavingCategoryId(value)}
                  placeholder="Pilih Kategori"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={options}
                />
              </div>
            </>
          }
        />
      </div>

      <div className="w-full bg-white h-[480px]">
        <Table
          showHeader={true}
          columns={columns}
          dataSource={Savings.data}
          scroll={{
            y: 430,
          }}
          bordered={true}
        />
      </div>
    </div>
  );
};
export default SavingPage;
