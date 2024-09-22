"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    Message: "",
  });
  const router = useRouter();
  async function submit() {
    console.log(process.env.NEXT_PUBLIC_URI);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URI}/api/contact-us`,
        user
      );
      console.log(response);
      if (response.data && response.data.success === true) {
        try {
          router.push("/thank-you-page");
        } catch (error) {
          console.log("error in redirect");
        }
      } else {
        alert("enter correct credentials");
      }
    } catch (error) {
      console.log("error happend very big");
    }
  }

  return (
    <>
      <BackgroundBeams></BackgroundBeams>
      <div className="min-h-screen flex items-center justify-center overflow-y-auto mt-12 lg:mt-20 relative">
        <div className="w-full max-w-[900px] text-white p-6  rounded-lg shadow-lg">
          <div className="w-auto md:w-[800px] flex flex-col">
            <div className="mb-6">
              <h3 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-2 relative z-20 font-bold tracking-tight">
                Contact
              </h3>
            </div>
            <div className="mb-6 text-xl text-center">
              <p className="text-gray-600 font-serif">
                Some context intro stuff
              </p>
              {JSON.stringify(user)}
            </div>
          </div>
          <div className="w-full">
            <div className="mt-7 text-black md:grid grid-cols-2 gap-6">
              <div>
                <p className="py-3 text-white text-2xl">Name</p>
                <Input
                  type="text"
                  className="border-2 border-gray-800  text-slate-500 rounded-xl"
                  placeholder="Enter Your Name"
                  required
                  onChange={(e) => {
                    setUser({
                      ...user,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <p className="py-3 text-white text-2xl">Phone Number</p>
                <Input
                  type="text"
                  className="border-2 border-gray-800 text-slate-500 rounded-xl"
                  placeholder="Enter Your Phone Number"
                  required
                  onChange={(e) => {
                    setUser({
                      ...user,
                      phone: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="mt-2">
              <p className="py-3 text-white text-2xl">Email</p>
              <Input
                type="text"
                className="border-2 border-gray-800 text-slate-500 rounded-xl"
                placeholder="Enter Your Email"
                required
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-2">
              <p className="py-3 text-white text-2xl">Message</p>
              <textarea
                placeholder="Message"
                className="h-[100px] pl-4 w-full border-2 border-gray-800 bg-black text-slate-500 rounded-xl"
                onChange={(e) => {
                  setUser({
                    ...user,
                    Message: e.target.value,
                  });
                }}
              />
            </div>
            <div className="py-4 text-center">
              <button
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
                onClick={submit}
              >
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
