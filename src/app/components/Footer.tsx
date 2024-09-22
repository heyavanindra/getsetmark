import React from "react";
import { Input } from "@/components/ui/input";
import ItemContainer from "./propsItem/ItemContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 ">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
          <h1
            className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5'
          >
            <span className="text-teal-400">lorem </span>ipsum, dolor sit amet consectetur adipisicing elite.
          </h1>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            {/* <Input
              type="Email"
              placeholder="Email"
              className="rounded mb-4 lg:mb-0 lg:flex-1"
            /> */}
          <a href="tel:+917068055152">
           <button className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Book A Call
              </span>
            </button></a>
          </div>
        </div>
        <ItemContainer>

        </ItemContainer>
      </footer>
    </>
  );
};

export default Footer;
