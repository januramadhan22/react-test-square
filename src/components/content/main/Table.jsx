import React from "react";
import { RxCaretSort } from "react-icons/rx";
import { CiSearch, CiEdit } from "react-icons/ci";
import { FiShield } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";

import { getDataCustomers } from "../../../utils/customerDatas";

function Table() {
  const tableHead = [
    "Customer Name",
    "Level",
    "Favorite Menu",
    "Total Transaction",
    "Action",
  ];

  const datas = [
    {
      id: 1,
      name: "Odis Rhinehart",
      level: "Warga",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 2,
      name: "Kris Roher",
      level: "Warga",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 3,
      name: "Serenity Fisher",
      level: "Juragan",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 4,
      name: "Brooklyn Warren",
      level: "Sultan",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 5,
      name: "Franco Delort",
      level: "Juragan",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 6,
      name: "Saul Geoghegan",
      level: "Juragan",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 7,
      name: "Alfredo Vetrovs",
      level: "Juragan",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 8,
      name: "Cristofer Vetrovs",
      level: "Konglomerat",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 9,
      name: "Calvin Steward",
      level: "Konglomerat",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
    {
      id: 10,
      name: "Calvin Steward",
      level: "Konglomerat",
      favorite: "Chicken & Ribs Combo",
      transaction: 194700,
    },
  ];

  return (
    <table class="w-full table-fixed border-collapse m-0">
      <thead className="w-full bg-soft-grey text-secondary-grey mb-3">
        <tr>
          {tableHead?.map((list, index) => (
            <th
              key={index}
              className="w-[189px] text-sm font-medium leading-[21px] p-[10px] text-left relative "
            >
              {list}
              {list !== "Action" && (
                <RxCaretSort className="cursor-pointer text-base absolute right-3 top-3" />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-3">
        {datas?.map((data) => (
          <tr
            key={data.id}
            className="text-sm font-semibold leading-[21px] tracking-tighter text-primary-black"
          >
            <td className="px-[10px] py-[14px]">{data.name}</td>
            <td
              className={`px-[10px] py-[14px] bg-clip-text bg-gradient-to-r ${
                data.level === "Warga"
                  ? "from-soft-orange to-secondary-orange text-transparent"
                  : data.level === "Juragan"
                  ? "from-soft-blue to-secondary-blue text-transparent"
                  : data.level === "Sultan"
                  ? "from-soft-green to-secondary-green text-transparent"
                  : "from-soft-purple to-secondary-purple text-transparent"
              }`}
            >
              <span
                className={`px-6 py-2 rounded ${
                  data.level === "Warga"
                    ? "bg-soft-orange bg-opacity-5"
                    : data.level === "Juragan"
                    ? "bg-soft-blue bg-opacity-5"
                    : data.level === "Sultan"
                    ? "bg-soft-green bg-opacity-5"
                    : "bg-soft-purple bg-opacity-5"
                }`}
              >
                {data.level}
              </span>
            </td>
            <td className="px-[10px] py-[14px]">{data.favorite}</td>
            <td className="px-[10px] py-[14px]">IDR {data.transaction}</td>
            <td className="px-[10px] py-[14px] flex items-center gap-1">
              <button className="max-w-[90px] max-h-[29px] py-1 px-3 rounded bg-soft-grey flex items-center gap-[10px]">
                <span className="relative">
                  <FiShield className="text-xs" />
                  <CiSearch className="text-[6px] font-bold z-10 text-secondary-grey absolute right-0 bottom-0 stroke-2 stroke-secondary-grey bg-white rounded-full" />
                </span>
                Detail
              </button>
              <button className="max-w-[36px] max-h-[29px] h-[29px] py-1 px-3 rounded bg-soft-grey flex items-center gap-[10px]">
                <CiEdit className="text-xs stroke-[1.5px] stroke-primary-grey" />
              </button>
              <button className="max-w-[36px] max-h-[29px] h-[29px] py-1 px-3 rounded bg-soft-red flex items-center gap-[10px]">
                <HiOutlineTrash className="text-xs stroke-[1.5px] stroke-secondary-red" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
