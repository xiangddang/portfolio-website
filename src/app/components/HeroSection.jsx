"use client";
import React from "react";
import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const downloadCV = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m Frances Xiang
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-3xl mb-6 lg:text-xl">
          Computer Science Student in Northeastern University, Full Stack Web Developer, and a quick learner.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 via-primary-500 hover:bg-slate-800 text-white mt-3" onClick={downloadCV}>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, scale: 0.5}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="lg:w-[400px] relative">
            <Image
              src="/images/avatar.jpg"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
