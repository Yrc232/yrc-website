"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ topRef }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      ref={topRef}
      className="mt-0 relative"
      style={{
        background: "linear-gradient(135deg, #177534 50%, #FFFFFF 50%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Video Section */}
        <div className="relative md:order-2  pt-0 rounded-lg">
          <video
            className="w-full h-auto max-h-[475px] rounded-lg"
            src="/images/yrc-home-video.mp4"
            autoPlay
            muted
            loop
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="px-4 md:order-1 bg-[#177534] md:bg-transparent py-8 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="font-russo text-2xl md:text-4xl text-white mb-4"
            variants={itemVariants}
          >
            YRC Custom{" "}
            <span className="font-petit text-white text-4xl md:text-5xl font-bold">
              Flooring
            </span>{" "}
            Tampa
          </motion.h2>
          <motion.p
            className="font-inter text-lg text-white leading-relaxed font-bold mt-2"
            variants={itemVariants}
          >
            Floor Coating CompanyTampa, Florida | Floor Coating Contractor
            Tampa, Florida
          </motion.p>
          <motion.p
            className="font-inter text-base text-white leading-relaxed mt-2"
            variants={itemVariants}
          >
            Live an aesthetic experience with Tampa floor coating company that
            endure for centuries. YRC Custom Flooring in Tampa is bringing class
            and posh to your floors with skilled craftsmanship and dedication.
            We offer a vast selection of high-quality material to suit your
            unique style and needs.
          </motion.p>
          <motion.div className="mt-6" variants={itemVariants}>
            <Link href="/services">
              <button
                type="button"
                className=" mt-2 flex items-center justify-center gap-2 w-auto px-3 py-1 text-base font-semibold text-[#0D772F] bg-white border border-transparent rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Our Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
