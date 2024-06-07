import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      vid: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      live: true,
      case: false,
      title: "arqitel",
      color: "#5355EE",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    },
    {
      vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      live: true,
      case: false,
      title: "Cula",
      color: "#4A576B",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      vid: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
      live: true,
      case: false,
      title: "Layout Land",
      color: "#1626F3",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
    {
      vid: "https://cdn.refokus.com/website/jungle-4-3-.webm",
      live: true,
      case: false,
      title: "TTR",
      color: "#3E4365",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    },
    {
      vid: "https://cdn.refokus.com/website/Intenseye_project_video_4_3.webm",
      live: true,
      case: false,
      title: "Maniv",
      color: "#2DCB76",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    },
    {
      vid: "https://cdn.refokus.com/website/Candid/Candid%20Health%204_3_H.264.webm",
      live: true,
      case: false,
      title: "Singularity",
      color: "#4C20CF",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm",
      live: true,
      case: true,
      title: "Like Magic",
      color: "#4730C6",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/weglot.webm",
      live: true,
      case: false,
      title: "Silvr",
      color: "#FF7548",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/summon.webm",
      live: true,
      case: true,
      title: "Rainfall",
      color: "#FF7548",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
      live: true,
      case: false,
      title: "Intenseye",
      color: "#4149F1",
      description:
        "A brand new website for Intenseye just before their $64M Series.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/remind.webm",
      live: true,
      case: true,
      title: "Remind",
      color: "#FB4F1A",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/rainfall.webm",
      live: true,
      case: true,
      title: "Summon",
      color: "#3D77E9",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
    },
    {
      vid: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
      live: true,
      case: true,
      title: "Jungle",
      color: "#5858EC",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
    },
    {
      vid: "https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4",
      live: true,
      case: false,
      title: "Candid Health",
      color: "#6457E6",
      description:
        "A complete redesign of a health-startup website, followed by cutting edge development.",
    },
    {
      vid: "https://cdn.refokus.com/Singularity%20Promo%204_3%202024.webm",
      live: true,
      case: true,
      title: "Yahoo!",
      color: "#6457E6",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
    },
    {
      vid: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      live: true,
      case: false,
      title: "YIR 2022",
      color: "#5D4EFF",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
    },
    {
      vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      live: true,
      case: false,
      title: "YIR 2021",
      color: "#382865",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/rocketchat.webm",
      live: true,
      case: false,
      title: "Showcase",
      color: "#FE9F2E",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/yahoo.webm",
      live: true,
      case: false,
      title: "Weglot",
      color: "#24412F",
      description:
        "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
    },
    {
      vid: "https://cdn.refokus.com/website/2022/videos/yearinreview.webm",
      live: true,
      case: false,
      title: "RocketChat",
      color: "#FF4747",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
    },
  ];

  const [vidTop, setVidTop] = useState(0);
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 17);
    setVidTop(val * 23);
  };

  // pointer-events-none is the class used to make it sort of transparent

  return (
    <div className="mt-32 relative">
      <div className="h-6"></div>
      {products.map((elem, index) => (
        <Product key={index} mover={mover} count={index} val={elem} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          animate={{ y: pos + `rem` }}
          // transition={{ease: [0.76, 0, 0.24, 1], duration: .6}}
          initial={{ y: pos, x: "-50%" }}
          className="window w-[32rem] h-[23rem] overflow-hidden bg-white absolute left-[42%]  rounded-xl overflow-hidden"
        >
          {products.map((elem, index) => {
            return (<motion.div transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} animate={{y: -vidTop +`rem`}} className="w-full h-full bg-white">
            <video className="h-full w-full object-cover"
              muted
              autoPlay
              loop src={elem.vid}></video>
          </motion.div>)})}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

// ===============================================================================

// import React, { useState } from "react";
// import Product from "./Product";
// import { motion } from "framer-motion";

// const Products = () => {
//   const products = [
//     {
//       vid: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
//       live: true,
//       case: false,
//       title: "arqitel",
//       color: "#5355EE",
//       description:
//         "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
//       live: true,
//       case: false,
//       title: "Cula",
//       color: "#4A576B",
//       description:
//         "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
//       live: true,
//       case: false,
//       title: "Layout Land",
//       color: "#1626F3",
//       description:
//         "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/jungle-4-3-.webm",
//       live: true,
//       case: false,
//       title: "TTR",
//       color: "#3E4365",
//       description:
//         "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/Intenseye_project_video_4_3.webm",
//       live: true,
//       case: false,
//       title: "Maniv",
//       color: "#2DCB76",
//       description:
//         "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/Candid/Candid%20Health%204_3_H.264.webm",
//       live: true,
//       case: false,
//       title: "Singularity",
//       color: "#4C20CF",
//       description:
//         "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm",
//       live: true,
//       case: true,
//       title: "Like Magic",
//       color: "#4730C6",
//       description:
//         "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/weglot.webm",
//       live: true,
//       case: false,
//       title: "Silvr",
//       color: "#FF7548",
//       description:
//         "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/summon.webm",
//       live: true,
//       case: true,
//       title: "Rainfall",
//       color: "#FF7548",
//       description:
//         "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
//       live: true,
//       case: false,
//       title: "Intenseye",
//       color: "#4149F1",
//       description:
//         "A brand new website for Intenseye just before their $64M Series.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/remind.webm",
//       live: true,
//       case: true,
//       title: "Remind",
//       color: "#FB4F1A",
//       description:
//         "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/rainfall.webm",
//       live: true,
//       case: true,
//       title: "Summon",
//       color: "#3D77E9",
//       description:
//         "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
//     },
//     {
//       vid: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
//       live: true,
//       case: true,
//       title: "Jungle",
//       color: "#5858EC",
//       description:
//         "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
//     },
//     {
//       vid: "https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4",
//       live: true,
//       case: false,
//       title: "Candid Health",
//       color: "#6457E6",
//       description:
//         "A complete redesign of a health-startup website, followed by cutting edge development.",
//     },
//     {
//       vid: "https://cdn.refokus.com/Singularity%20Promo%204_3%202024.webm",
//       live: true,
//       case: true,
//       title: "Yahoo!",
//       color: "#6457E6",
//       description:
//         "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
//       live: true,
//       case: false,
//       title: "YIR 2022",
//       color: "#5D4EFF",
//       description:
//         "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
//       live: true,
//       case: false,
//       title: "YIR 2021",
//       color: "#382865",
//       description:
//         "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/rocketchat.webm",
//       live: true,
//       case: false,
//       title: "Showcase",
//       color: "#FE9F2E",
//       description:
//         "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/yahoo.webm",
//       live: true,
//       case: false,
//       title: "Weglot",
//       color: "#24412F",
//       description:
//         "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
//     },
//     {
//       vid: "https://cdn.refokus.com/website/2022/videos/yearinreview.webm",
//       live: true,
//       case: false,
//       title: "RocketChat",
//       color: "#FF4747",
//       description:
//         "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
//     },
//   ];

//   const [pos, setPos] = useState(0);
//   const mover = (val) => {
//     setPos(val * 23);
//   };

//   // pointer-events-none is the class used to make it sort of transparent

//   return (
//     <div className="mt-32 relative">
//       {/* <div className="h-6"></div> */}
//       {products.map((elem, index) => (
//         <Product key={index} mover={mover} count={index} val={elem} />
//       ))}
//       <div className="w-full h-full absolute top-0 pointer-events-none">
//         <motion.div
//           animate={{ y: pos + `rem` }}
//           // transition={{ease: [0.76, 0, 0.24, 1], duration: .6}}
//           initial={{ y: pos, x: "-50%" }}
//           className="window w-[32rem] h-[23rem] overflow-hidden bg-white absolute left-[42%]  rounded-xl overflow-hidden"
//         >
//           {/* <motion.div transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-100"></motion.div>
//           <motion.div transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-200"></motion.div>
//           <motion.div transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-300"></motion.div>
//           <motion.div transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} animate={{y: -pos+`rem`}} className="w-full h-full bg-sky-400"></motion.div> */}
//           {products.map((elem, index) => {
//             return (<motion.div transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} animate={{y: -pos+`rem`}} className="w-full h-full bg-white">
//             <video className="h-full w-full object-cover"
//               muted
//               autoPlay
//               loop src={elem.vid}></video>
//           </motion.div>)})}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Products;
