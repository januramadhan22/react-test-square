import React from "react";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { paginationRange } from "../../../utils/paginationRange";

function Pagination({ page, limit, totalPage, siblings, onChangePage }) {
  let paginations = paginationRange(totalPage, page, limit, siblings);

  return (
    <div className="w-full mt-14 px-3 py-2 rounded-lg bg-soft-grey flex justify-between items-center">
      <span className="text-base font-semibold leading-6 tracking-tighter text-secondary-grey">
        Showing {limit} Data Customers
      </span>
      <div className="flex text-sm leading-[21px] tracking-tighter">
        {page !== 1 ? (
          <button
            onClick={() => onChangePage("Previous")}
            className="py-2 px-4 flex items-center gap-3 font-semibold text-primary-grey hover:text-primary-black transition-all ease-in duration-200"
          >
            <HiOutlineArrowNarrowLeft className="text-base" /> Previous
          </button>
        ) : null}
        {paginations?.map((value, index) => (
          <button
            key={index}
            onClick={() => onChangePage(value)}
            className={`py-2 px-4 rounded ${
              value === page
                ? "bg-white font-bold text-primary-black shadow-md"
                : "font-semibold text-primary-grey hover:text-primary-black transition-all ease-in duration-200"
            }`}
          >
            {value}
          </button>
        ))}
        {page !== totalPage ? (
          <button
            onClick={() => onChangePage("Next")}
            className="py-2 px-4 flex items-center gap-3 font-semibold text-primary-grey hover:text-primary-black transition-all ease-in duration-200"
          >
            Next <HiOutlineArrowNarrowRight className="text-base" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Pagination;
