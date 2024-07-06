import React from "react";

const Testhome = () => {
  return (
    <div>
      <div></div>
      <div className="w-100 flex justify-around">
        <div className="ml-[100px] mt-[30px] leading-[150px]">
          <h1 className="text-[170px] mb-0 font-bold">Food</h1>
          <h1 className="text-[170px] mt-0 font-bold">Mood</h1>
          <h1 className="text-[20px] mt-[-30px]">
            The fastest way to find the best food around
            <span className="text-orange font-bold"> your </span>
          </h1>
          <div className="flex gap-2">
            <div className="h-[130px] bg-[#E8E8F4] w-[150px] p-5 flex flex-col rounded-lg leading-4 text-center font-bold">
              <img className="h-[80px]" src="images/star.png" />
              <p className="text-black p-1">
                Rate restants <br />
              </p>
            </div>
            <div className="h-[130px] bg-[#E8E8F4] w-[150px] p-5 flex flex-col rounded-lg leading-4 text-center font-bold">
              <img className="h-[80px]" src="images/soup.png" />
              <p className="text-black p-1">
                Try food <br />
              </p>
            </div>
            <div className="h-[130px] bg-[#E8E8F4] w-[150px] p-5 flex flex-col rounded-lg leading-4 text-center font-bold">
              <img className="h-[80px]" src="images/online-order.png" />
              <p className="text-black p-1">
                Try food <br />
              </p>
            </div>
          </div>
        </div>

        <div className="h-[100%] w-[100%] flex items-center justify-center">
          <img
            src="images/juicy-classic-burger-splash-nn7jo3c5lgwzgze6.png"
            className="w-[70%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testhome;
