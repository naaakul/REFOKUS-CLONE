import React from "react";
import { RiH6 } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-20 py-6">
      <div className="flex justify-between text-zinc-600 items-center gap-10 text-sm">
        {[
          "Privacy Policy",
          "Cookie Policy",
          "Impressum",
          "Terms",
          "Webflow Agency",
        ].map((item, index) => <h6 key={index} >{item}</h6> )}
      </div>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
    </div>
  );
};

export default Footer;
