"use client";
import React from "react";
import { motion } from "framer-motion";
import WebDevHero from "../components/Webdev-components/WebDevHero";
import Domains from "../components/Webdev-components/Domains";
const page = () => {
  return (
    <>
      <WebDevHero></WebDevHero>
      <Domains></Domains>
    </>
  );
};

export default page;
