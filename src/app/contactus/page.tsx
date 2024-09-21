import React from "react";
import { Input } from "@/components/ui/input";
import { Spotlight } from "../components/ui/Spotlight";

const Contact = () => {
  return (
    <>
   
      <div className="min-h-screen flex items-center justify-center overflow-y-auto mt-32 lg:mt-20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"></Spotlight>
        <div className="w-full max-w-[900px] text-white p-6  rounded-lg shadow-lg">
          <div className="w-auto md:w-[800px] flex flex-col">
            <div className="mb-6">
              <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-2 relative z-20 font-bold tracking-tight">Contact</h3>
            </div>
            <div className="mb-6 text-xl text-center">
              <p className="text-gray-600 font-serif">Some context intro stuff</p>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-7 text-black md:grid grid-cols-2 gap-6">
              <div>
                <p className="py-3 text-white text-2xl">Name</p>
                <Input type="text" className="border border-white text-slate-500" placeholder="Enter Your Name"/>
              </div>
              <div>
                <p className="py-3 text-white text-2xl">Topic</p>
                <Input type="text" className="border border-white text-slate-500" placeholder="Enter Your Name"/>
              </div>
            </div>
            <div className="mt-7">
              <p className="py-3 text-white text-2xl">Email</p>
              <Input type="text" className="border border-white text-slate-500" placeholder="Enter Your Name"/>
            </div>
            <div className="mt-7">
              <p className="py-3 text-white text-2xl">Message</p>
              <textarea
                placeholder="Message"
                className="h-[100px] pl-4 w-full border bg-black border-white text-slate-500"
              />
            </div>
            <div className="py-4 text-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Submit
        </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
