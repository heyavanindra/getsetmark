import React from "react";
import { CardHoverEffect } from "./CardHoverEffect";

const WhyChooseUs = () => {
  return (
    <div className=" bg-slate-900 h-auto">
      <div className="h-40 flex justify-center items-center  ">
        <h1 className=" relative text-center text-2xl md:text-4xl lg:text-8xl  ">
          Why Choose Us
        </h1>
      </div>
      <div className="">
        <CardHoverEffect></CardHoverEffect>
      </div>
    </div>
  );
};

export default WhyChooseUs;
