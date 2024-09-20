import React from "react";
import { BackgroundLinescomp } from "@/app/components/ui/background-lines";

export function BackgroundLines() {
  return (
    <BackgroundLinescomp className="flex items-center h-screen justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        GetSetMark
      </h2>
      <p className="max-w-xl mx-auto relative top-12 md:top-0 text-lg md:text-2xl text-neutral-700 dark:text-neutral-400 text-center">
      With us, you are all set.<br/> Be ready to mark your brand's digital impact.
      </p>
    </BackgroundLinescomp>
  );
}
