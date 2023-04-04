import React from "react";
import Square from "../assets/square_logo.png";
import { TbCategory2, TbReportAnalytics } from "react-icons/tb";
import { TiBatteryFull } from "react-icons/ti";
import {
  HiUsers,
  HiOutlineShoppingCart,
  HiOutlineLogout,
} from "react-icons/hi";
import { BiDish, BiUser, BiCandles } from "react-icons/bi";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineLocalShipping } from "react-icons/md";

function Sidebar() {
  const menu = [
    "Dashboard",
    "Stock",
    "Customer",
    "Restaurant",
    "Design",
    "Report",
    "Role & Admin",
    "Settings",
  ];
  const integration = ["Stock", "Supply"];

  return (
    <section className="w-20 lg:w-[200px] h-full p-6 border-r flex flex-col justify-between bg-white group hover:w-[200px] transition-all ease-out duration-200">
      {/* Top Content */}
      <div className="space-y-6">
        {/* Logo */}
        <div className="h-[35px] flex items-start lg:items-baseline justify-center lg:justify-start gap-1.5 text-[28px] font-[661] leading-[34.98px] text-primary-blue group-hover:items-baseline group-hover:justify-start transition-all ease-in duration-200">
          <img src={Square} alt="Square Logo" />
          <span className="hidden lg:block group-hover:block transition-all ease-in duration-200">
            Square
          </span>
        </div>
        {/* Menu */}
        <div className="flex flex-col items-center lg:items-start text-left gap-3 group-hover:items-start">
          <p className="text-secondary-grey text-[10px] leading-[20px] tracking-widest">
            Menu
          </p>
          {menu?.map((item, index) => (
            <button
              key={index}
              className="relative text-secondary-grey w-full h-[34px] py-2 flex items-center justify-center lg:justify-between hover:text-primary-blue group-hover:justify-between transition-all ease-out"
            >
              <span className="text-sm leading-[21px] tracking-tighter font-semibold flex items-center gap-3">
                {item === "Dashboard" ? (
                  <TbCategory2 />
                ) : item === "Stock" ? (
                  <TiBatteryFull />
                ) : item === "Customer" ? (
                  <HiUsers />
                ) : item === "Restaurant" ? (
                  <BiDish />
                ) : item === "Design" ? (
                  <SiMaterialdesignicons />
                ) : item === "Report" ? (
                  <TbReportAnalytics />
                ) : item === "Role & Admin" ? (
                  <BiUser />
                ) : (
                  <BiCandles />
                )}
                <p className="hidden lg:block group-hover:block transition-all ease-in duration-200">
                  {item}
                </p>
              </span>
              {item === "Dashboard" && (
                <span className="absolute top-2 right-1 w-2 h-2 lg:w-[18px] lg:h-[18px] rounded-full bg-gradient-to-r from-soft-orange to-secondary-orange text-[0px] lg:text-[10px] font-semibold leading-[15px] tracking-tighter text-white lg:flex justify-center items-center group-hover:w-[18px] group-hover:h-[18px] group-hover:text-[10px] group-hover:flex">
                  4
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center lg:items-start text-left gap-3 group-hover:items-start">
          <p className="w-full text-secondary-grey text-[10px] leading-[20px] tracking-widest truncate">
            Integration
          </p>
          {integration?.map((item, index) => (
            <button
              key={index}
              className="text-secondary-grey w-full h-[34px] py-2 flex items-center justify-center lg:justify-between hover:text-primary-blue group-hover:justify-between transition-all ease-out"
            >
              <span className="text-sm leading-[21px] tracking-tighter font-semibold flex items-center gap-3">
                {item === "Stock" ? (
                  <HiOutlineShoppingCart />
                ) : (
                  <MdOutlineLocalShipping />
                )}
                <p className="hidden lg:block group-hover:block transition-all ease-in duration-200">
                  {item}
                </p>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Content */}
      <div className="pt-6 flex flex-col items-center gap-6 border-t">
        <div className="w-full flex justify-center items-center gap-3">
          <div className="w-7 h-7 lg:w-[36px] lg:h-[36px] rounded-full bg-slate-300 group-hover:w-[36px] group-hover:h-[36px]" />
          <div className="hidden lg:block group-hover:block transition-all ease-in duration-200">
            <h3 className="text-sm font-semibold text-primary-black">
              Savannah N
            </h3>
            <p className="text-[10px] font-[400] text-secondary-grey">
              Food Quality Manager
            </p>
          </div>
        </div>
        <button className="w-full h-[34px] p-[8px] flex items-center justify-center gap-[8px] rounded-md bg-soft-red font-semibold text-primary-red ">
          <HiOutlineLogout />{" "}
          <span className="hidden lg:block group-hover:block transition-all ease-in duration-200">
            Logout
          </span>
        </button>
      </div>
    </section>
  );
}

export default Sidebar;
