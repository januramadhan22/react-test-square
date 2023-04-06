import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  HiOutlineFilter,
  HiOutlinePrinter,
  HiOutlinePlus,
} from "react-icons/hi";
import { TbRefresh } from "react-icons/tb";

import BannerBackground from "../../../assets/banner_background.png";

function Banner() {
  return (
    <div className="relative w-full p-3 rounded-lg bg-primary-blue flex flex-col items-start gap-4 overflow-clip">
      <img
        src={BannerBackground}
        alt="Banner"
        className="absolute right-0 top-0 z-0"
      />
      <div className="relative z-10 max-w-[341px] text-white ">
        <h2 className="text-xl font-bold leading-[30px]">Customer</h2>
        <p className="text-xs leading-6">
          On this menu you will be able to create, edit, and also delete the
          customer. Also you can manage it easily.
        </p>
      </div>
      <div className="relative z-10 w-full flex items-center justify-between gap-4">
        <button className="min-w-fit w-[186px] h-[45px] py-2 px-4 rounded-lg flex items-center justify-center gap-3 text-sm font-semibold leading-[21px] tracking-tighter text-white bg-white bg-opacity-20">
          <HiOutlinePlus /> Add New Customer
        </button>
        <div className="w-fit max-h-[45px] py-2 pl-4 pr-2 rounded-lg flex items-center justify-center gap-4 bg-white ">
          <CiSearch className="text-base text-secondary-grey" />
          <input
            type="text"
            placeholder="Search Customer"
            className="w-[275px] text-xs font-medium leading-[18px] focus:outline-none bg-transparent"
          />
          <button className="w-fit max-h-[37px] py-2 px-4 rounded-lg text-sm font-semibold leading-[21px] tracking-tighter bg-primary-blue text-white">
            Search
          </button>
        </div>
        <button className="relative min-w-fit w-[94px] h-[45px] py-2 px-4 rounded-lg flex items-center justify-center gap-3 text-sm font-semibold leading-[21px] tracking-tighter text-white bg-white bg-opacity-20 overflow-clip">
          <div className="w-full h-full  bg-white bg-opacity-20 absolute top-0 left-0 rounded-lg blur-sm" />
          <HiOutlineFilter className="text-base" />
          Filter
        </button>
        <button className="relative min-w-fit w-[112px] h-[45px] py-2 px-4 rounded-lg flex items-center justify-center gap-3 text-sm font-semibold leading-[21px] tracking-tighter text-white bg-white bg-opacity-20 overflow-clip">
          <div className="w-full h-full  bg-white bg-opacity-20 absolute top-0 left-0 rounded-lg blur-sm" />
          <TbRefresh className="text-base" />
          Refresh
        </button>
        <button className="relative min-w-fit w-[48px] h-[45px] py-2 px-4 rounded-lg flex items-center justify-center gap-3 font-semibold leading-[21px] tracking-tighter text-white bg-white bg-opacity-20 overflow-clip">
          <div className="w-full h-full  bg-white bg-opacity-20 absolute top-0 left-0 rounded-lg blur-sm" />
          <HiOutlinePrinter className="text-base" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
