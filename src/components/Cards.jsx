import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen px-20 mx-auto flex gap-[0.2vw] pt-20">
        <Card width={"basis-1/3"} start={false} para={true} hover={"#3E3E46"} top1={"Up Next: News"} top2={"Insights and behind the scenes"}/>
        <Card width={"basis-2/3"} start={true} para={false} hover={"#7443FF"} top1={"Get In Touch"} top2={"Let’s get to it, together."}/>
      </div>
    </div>
  );
};

export default Cards;
