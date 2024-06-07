import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-500">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "About", "News", "", "Careers"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[1px] h-7 bg-zinc-500"></span>
            ) : (
              <a key={index} className="text-sm flex items-center gap-1" href="#">
                {/* span tag ko apan width hight nahi de sakte isliye use class inline-block dena parta hai */}
                {/* && ka matlab agar condition true hai toh code aaye gaa warna nahi aaye ga */}
                {/* jab bhi aap style likhte hi 2 {} pass karo pahele wale me aap jsx likhte ho 2nd wale me aap object pass karte ho */}
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
