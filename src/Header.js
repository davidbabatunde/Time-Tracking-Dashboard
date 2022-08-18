import React from "react";

const Header = (props) => {
  return (
    <>
      <div
        className="relative block w-[80%] max-w-[320px] max-h-[200px] mb-[60px] mt-12
       xl:h-[475px] xl:w-[250px] xl:max-h-[900px] xl:max-w-[250px] xl:items-end xl:my-0 xl:flex flex-col xl:col-start-1 xl:col-end2"
      >
        <div
          className="relative top-3 flex flex-row items-center w-full h-[40%]
        rounded-2xl p-6 bg-indigo-600 xl:flex xl:flex-col xl:items-start xl:justify-around xl:h-full xl:m-0 xl:pb-9"
        >
          <img
            src={require("../images/image-jeremy.png")}
            className="w-14 h-14 rounded-[50%] border-2 border-gray-100 xl:w-20 xl:h-20"
            alt="A picture of Jeremy Robson"
          ></img>
          <div className="flex flex-col items-start w-full px-4 xl:px-0">
            <h2 className="text-gray-300">Report for</h2>
            <h1 className="text-2xl text-gray-200 xl:flex flex-col xl:text-4xl">
              Jeremy <span>Robson</span>
            </h1>
          </div>
        </div>
        <div
          className=" flex flex-row items-center w-full
        rounded-b-2xl p-6 pt-8 bg-mine text-paleblue justify-between
        xl:flex xl:flex-col xl:justify-around xl:gap-2 xl:items-start xl:px-6"
        >
          {" "}
          <button
            onClick={() => props.setTimeFrame("daily")}
            className={
              props.timeFrame === "daily" ? "text-white " : "hover:text-white"
            }
          >
            Daily
          </button>
          <button
            onClick={() => props.setTimeFrame("weekly")}
            className={
              props.timeFrame === "weekly" ? "text-white " : "hover:text-white"
            }
          >
            Weekly
          </button>
          <button
            onClick={() => props.setTimeFrame("monthly")}
            className={
              props.timeFrame === "monthly" ? "text-white " : "hover:text-white"
            }
          >
            Monthly
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
