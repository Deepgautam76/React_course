import React from "react";

const Shimmerui = () => {
  const arr = new Array(40).fill(0);
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap m-auto p-2  border-b-1 w-9/12">
          <button className="m-1 py-2 px-3 cursor-pointer bg-gray-400 border-0 rounded-xl hover:bg-gray-500">
            Top Restaurant
          </button>
          <button className="m-1 py-2 px-3 cursor-pointer bg-gray-400 border-0 rounded-xl hover:bg-gray-500">
            Reset filter
          </button>
          <input
            type="text"
            className="m-1 mx-3 py-2 px-3 cursor-pointer border-2 rounded-2xl"
          />
          <button className="m-1 mx-3 py-2 px-3 cursor-pointer bg-blue-700 font-bold rounded-2xl hover:bg-blue-800">
            Search
          </button>
        </div>
        <div className="container flex w-9/12 m-auto p-2 flex-wrap">
          {arr.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex m-3 w-3xs rounded-2xl overflow-hidden shadow-lg bg-gray-400 h-56 "
              >
                <div className="relative"></div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold"></h2>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-green-600 text-lg font-bold"></span>
                    <span className="text-gray-500 text-sm"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shimmerui;
