import React from "react";

const CardM = (props) => {
  return (
    <div className="w-[320px] h-[180px] block">
      <div className="w-full h-[30%] rounded-t-2xl bg-work max-w-sm"></div>
      <div
        className="relative bottom-4 flex flex-col justify-around gap-1 w-full
      rounded-2xl p-6 bg-mine"
      >
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-bold text-white">{props.bleh.title}</h2>
          <p className="text-gray-400 ">icon later</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-3xl text-gray-100">
            {props.bleh.timeframes.monthly.current}hrs
          </h3>
          <p className="text-gray-400 text-right">
            Last Month - {props.bleh.timeframes.monthly.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardM;
