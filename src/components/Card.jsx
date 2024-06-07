import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover, top1, top2}) => {
  return (
    <div className={`bg-zinc-800 ${width} hover:bg-[${hover}] p-5 rounded-xl min-h-[27.6rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{top1}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl w-72 font-medium mt-5">{top2}</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-[7.3vw] font-medium tracking-tight leading-none">
            Start a Project
            </h1>
            <button className="rounded-full py-[0.6vw] px-6 mt-5 border-[1px] border-zinc-50">
              Contact us
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-sm text-zinc-600 font-medium">
              Explore what drives our team.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
