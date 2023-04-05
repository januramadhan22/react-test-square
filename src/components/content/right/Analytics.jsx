import React from "react";
import WaveVector from "../../../assets/wave_vector.png";

function Analytics() {
  return (
    <div className="relative max-w-[227px] h-[265px] bg-primary-blue rounded-lg p-4 flex flex-col justify-between items-start overflow-clip">
      <h3 className="relative z-10 max-w-[149px] text-xl font-semibold leading-[30px] text-white">
        See analytics of the Customer Clearly
      </h3>
      <button className="relative z-10 min-w-fit w-[119px] h-[45px] py-2 px-4 rounded-lg flex items-center justify-center gap-3 text-sm font-semibold leading-[21px] tracking-tighter text-white bg-white bg-opacity-20 overflow-clip">
        <div className="w-full h-full  bg-white bg-opacity-20 absolute top-0 left-0 rounded-lg blur-sm" />
        See Analytics
      </button>

      <img src={WaveVector} alt="Wave" className="absolute top-0 left-0 z-0" />
      <div className="absolute z-0 -right-44 -bottom-44 w-[323px] h-[323px] border border-iris-60 rounded-full" />
      <div className="absolute z-0 -right-52 -bottom-52 w-[323px] h-[323px] border border-white bg-iris-75 rounded-full" />
      <div className="absolute z-0 -right-60 -bottom-60 w-[323px] h-[323px] border border-[#F2F2F2] bg-iris-60 rounded-full" />
    </div>
  );
}

export default Analytics;
