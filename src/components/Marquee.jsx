import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ urls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{x: direction === "left" ? "0" : "-100%"}}
        animate={{x: direction === "left" ? "-100%" : "0"}}
        transition={{duration: 90, ease: "linear", repeat: Infinity}}
       className="flex flex-shrink-0 pr-20 items-center gap-20 py-7">
        {urls.map((url, i) => (
          <img className="w-28" key={i} src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{x: direction === "left" ? "0" : "-100%"}}
        animate={{x: direction === "left" ? "-100%" : "0"}}
        transition={{duration: 90, ease: "linear", repeat: Infinity}}
       className="flex flex-shrink-0 pr-20 items-center gap-20 py-7">
        {urls.map((url, i) => (
          <img className="w-28" key={i} src={url} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

// import React from 'react'

// const Marquee = ({urls}) => {
//   return (
//     <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
//         {urls.map((urls, index) => <img key={index} src={urls}/> )}
//     </div>
//   )
// }

// export default Marquee