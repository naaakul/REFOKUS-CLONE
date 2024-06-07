import React from "react";
import Button from "./Button";

const Product = ({ val, mover, count}) => {

  const {color} = val;

  // console.log(val.color)
  return (
    <div onMouseEnter={()=>{mover(count)}} className={`flex items-center product w-full py-20 h-[17rem] text-white hover:bg-[${color}] hover:h-[20rem] duration-500 ease-expo`}>
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5 btn opacity-0 duration-300 ease-expo">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// =========================================================================

// import React from "react";
// import Button from "./Button";

// const Product = ({ val, mover, count}) => {
//   // console.log(val.color)
//   return (
//     <div onMouseEnter={()=>{mover(count)}} className={`flex items-center product w-full py-20 h-[23rem] text-white hover:bg-[${val.color}] hover:h-[26rem] duration-500 ease-expo`}>
//       <div className="w-10/12 mx-auto flex items-center justify-between">
//         <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
//         <div className="dets w-1/3">
//           <p className="mb-10">{val.description}</p>
//           <div className="flex items-center gap-5 btn opacity-0 duration-300 ease-expo">
//             {val.live && <Button title="Live Website" />}
//             {val.case && <Button title="Case Study" />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
