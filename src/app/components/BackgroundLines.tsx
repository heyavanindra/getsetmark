"use client"
import React from "react";
import { motion } from "framer-motion";
import { BackgroundLinescomp } from "@/app/components/ui/background-lines";

export function BackgroundLines() {
  return (
    <BackgroundLinescomp className="flex items-center h-screen justify-center w-full flex-col px-4">
      <motion.h2 className="bg-clip-text  text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
      variants={{
        hidden:{opacity:0,y:30},
        visible:{opacity:1,y:0}
      }}
      initial='hidden'
      animate="visible"
      transition={{duration:0.5, delay:0.25}}>
        GetSetMark
      </motion.h2>
      <motion.p className="max-w-xl mx-auto relative top-12 md:top-0 text-lg md:text-2xl text-neutral-700 dark:text-neutral-400 text-center"
      variants={{
        hidden:{opacity:0,y:30},
        visible:{opacity:1,y:0}
      }}
      initial='hidden'
      animate="visible"
      transition={{duration:0.5, delay:0.25}}>
      With us, you are all set.<br/> Be ready to mark your brand's digital impact.
      </motion.p>
    </BackgroundLinescomp>
  );
}
