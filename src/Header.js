import React from "react";

const Header = (props) => {
  return (
    <>
      <div
        className="relative block w-[80%] max-w-[320px] max-h-[200px] mb-4
       sm:h-full sm:w-[250px] sm:align-end"
      >
        <div
          className="relative top-3 flex flex-row items-center w-full h-full
        rounded-2xl p-6 bg-indigo-600 sm:flex sm:flex-col sm:items-start sm:h-full sm:m-0 sm:pb-9"
        >
          <img
            src={require("./image-jeremy.png")}
            className="w-14 h-14 rounded-[50%] m-0 border-4 border-gray-300s"
          ></img>
          <div className="flex flex-col items-start w-full px-4">
            <h2 className="text-gray-300">Report for</h2>
            <h1 className="text-2xl text-gray-200 sm:flex flex-col">
              Jeremy <span>Robson</span>
            </h1>
          </div>
        </div>
        <div
          className=" flex flex-row items-center w-full
        rounded-b-2xl p-6 pt-8 bg-mine text-paleblue justify-between
        sm:flex sm:flex-col sm:justify-around sm:gap-2 sm:items-start"
        >
          {" "}
          <button
            id="buttonD"
            onClick={() => props.setTimeFrame("daily")}
            className={
              props.timeFrame === "daily" ? "text-white " : "hover:text-white"
            }
          >
            Daily
          </button>
          <button
            id="buttonW"
            onClick={() => props.setTimeFrame("weekly")}
            className={
              props.timeFrame === "weekly" ? "text-white " : "hover:text-white"
            }
          >
            Weekly
          </button>
          <button
            id="buttonM"
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
