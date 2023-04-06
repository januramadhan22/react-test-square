import React from "react";

function Pagination({ page, setPage, limit, setLimit }) {
  return (
    <div className="w-full mt-14 px-3 py-2 rounded-lg bg-soft-grey flex justify-between items-center">
      <span className="text-base font-semibold leading-6 tracking-tighter text-secondary-grey">
        Showing {limit} Data Customers
      </span>
      <div>1</div>
    </div>
  );
}

export default Pagination;
