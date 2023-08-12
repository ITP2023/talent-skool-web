import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

const DeviceMockup = () => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <Image
          width={300}
          height={450}
          src="/app_home_screen.jpg"
          className="dark:hidden w-[272px] h-[572px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default function Testing({}) {
  return (
    <>
      <Navbar />
      <section className="absolute w-screen h-screen bg-black">
        <div
          id="wrapper"
          className="mt-28 flex flex-row justify-between w-full h-full"
        >
          <div className="mt-44 text-white w-1/2 p-4">
            <p className="text-5xl my-8">
              A community building{" "}
              <span className="text-primary">talented</span> people.
            </p>
            <div className="flex flex-row space-x-4">
              <button className="p-4 bg-black shadow-neon rounded-full flex flex-row gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  fontSize="24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                </svg>
                Download on the Google Play
              </button>
              <button className="p-4 bg-primary text-white rounded-full">
                Get Started by signing up
              </button>
            </div>
          </div>
          <DeviceMockup />
        </div>
      </section>
    </>
  );
}
