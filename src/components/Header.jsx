import React, { useState } from "react";

function Header() {
  const [customer, setCustomer] = useState(true);
  const [promo, setPromo] = useState(false);
  const [voucher, setVoucher] = useState(false);
  const nav = ["Customer", "Promo", "Voucher"];

  const toggleNav = (item) => {
    if (item === "Customer") {
      setCustomer(true);
      setPromo(false);
      setVoucher(false);
    } else if (item === "Promo") {
      setCustomer(false);
      setPromo(true);
      setVoucher(false);
    } else {
      setCustomer(false);
      setPromo(false);
      setVoucher(true);
    }
  };

  return (
    <div className="w-full border-b flex items-end justify-between gap-10">
      <div className="pb-4 w-1/2">
        <h2 className="text-2xl font-bold leading-[36px] text-primary-black">
          Customer
        </h2>
        <p className="text-sm leading-[28px] tracking-widest text-secondary-grey">
          You can manage and organize your customer and other things here
        </p>
      </div>
      <nav className="w-1/2">
        {nav?.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleNav(item)}
            className={`w-1/3 h-[45px] border-b-2 text-xs font-semibold tracking-tighter leading-[21px] hover:text-primary-blue hover:font-bold ${
              customer && item === "Customer"
                ? "border-primary-blue text-primary-blue"
                : promo && item === "Promo"
                ? "border-primary-blue text-primary-blue"
                : voucher && item === "Voucher"
                ? "border-primary-blue text-primary-blue"
                : "text-secondary-grey"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Header;
