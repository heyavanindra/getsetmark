"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WebDevHero = () => {
  const { scrollY } = useScroll(); // Get the scroll position

  // Move the background image at a different speed based on scroll position
  const y = useTransform(scrollY, [0, 300], [0, 100]); // Adjust range as needed

  return (
    <>
      <div>
        <div className="relative h-96 sm:h-[600px] lg:h-[60vm] max-w-full text-black overflow-hidden">
          {/* Motion div for parallax effect */}
          <motion.div
            style={{
              y, // Move the background up/down based on scroll position
            }}
            className="absolute top-0 left-0 right-0 bottom-0"
          >
            <img
              src={
                "https://img.freepik.com/free-photo/ideas-idea-vision-design-plan-objective-mission-concept_53876-167112.jpg?t=st=1727866905~exp=1727870505~hmac=1a8a53cb6d028ab269b61d04079031f735170e4573bda3ff129bd282b1ddcc0a&w=1060"
              }
              alt="Parallax Background"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="relative  z-10 px-3 py-9 md:p-24 w-full h-full text-white bg-black bg-opacity-85">
            <h1 className="mt-20 md:mt-36 text-4xl md:text-6xl font-bold">
              Web Development Services
            </h1>
            <h2 className=" text-xl lg:text-3xl font-light mt-5 ">
              e design and build industry-leading web-based products that bring
              value to your customers, delivered with compelling UX.
            </h2>
            <button className="mt-5 px-4 py-2 text-black backdrop-blur-sm border border-black rounded-xl hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
              Backdrop blur
            </button>
          </div>
        </div>
      </div>

      <div className="text-white font-mono lg:grid grid-cols-2 lg:">
        <div className="flex gap-y-3 lg:justify-center p-6 mt-28 grid-cols-1">
          <h2 className="text-xl">What are</h2>{" "}
          <h2 className="text-xl text-green-900 ml-3 lg:ml-3">
            web development services?
          </h2>
        </div>
        <div className=" mb-12 px-6 py-2 grid-cols-1 lg:p-6 lg:mt-28">
          <p>
            Web development encompasses a wide range of services, which include
            delivering websites or web apps, cybersecurity solutions, UX/UI
            design, eCommerce solutions, website architectures, QA testing,
            maintenance, consulting, and even a custom CMS.
          </p>
        </div>
      </div>
    </>
  );
};

export default WebDevHero;
