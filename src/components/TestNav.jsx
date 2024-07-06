import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
const TestNav = () => {
  return (
    <div>
      <div className="w-100 h-20 flex items-center justify-around">
        <div>
          <img
            src="images/bitesLogo-Photoroom.png"
            className="h-[150px] w-[150px] bg-white"
          />
        </div>
        <div>
          <ul className="flex gap-9 text-lg cursor-pointer">
            <li className="font-bold">Home</li>
            <li>Menue</li>
            <li>Contact us</li>
            <li>More</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-lightgray rounded-[10px] overflow-hidden relative">
            <input
              type="search"
              className="p-2 pl-4 bg-lightgray border-none outline-none w-[300px] "
              placeholder="Search for item..."
            />
            <div className="bg-[#F55B25] p-2 absolute right-0 h-[100%] flex items-center">
              <FaSearch className="text-white" />
            </div>
          </div>
          <div className=" mr-4 ml-5 h-100 bg-orange p-2 flex flex-row justify-center items-center">
            <FaUser className="text-lightgray" />
            <p className="text-white font-bold ml-2"> Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestNav;
