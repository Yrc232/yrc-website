"use client";
import React from "react";
import { motion } from "framer-motion";
//About-us

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 1 } },
  };

  const secondaryImageVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <div
      className="relative bg-white py-16 px-8"
      style={{
        background: "linear-gradient(-45deg, #FFFFFF 50%, #177534 50%)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto relative z-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          {/* Main Image */}
          <motion.div
            className="w-56 h-64 md:w-64 md:h-72 rounded-lg overflow-hidden shadow-lg translate-y-6 " // Moves image down
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src="/images/house-yrc-about.webp"
              alt="House Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            className="w-56 h-56 md:w-64 md:h-64 rounded-lg shadow-lg -mt-10 -ml-8 md:-mt-[-7.5rem] md:-ml-16 overflow-hidden translate-y-6" // Moves image down
            initial="hidden"
            animate="visible"
            variants={secondaryImageVariants}
          >
            <img
              src="/images/pool.webp"
              alt="Mission Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-sm font-semibold text-white uppercase mb-2">
            About Us
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          <span style={{ color: '#ffffff' }}>Transform</span> Your Home with Stunning <span style={{ color: '#ffffff' }}>Flooring</span> Options
          </h2>
          <p className="text-black leading-relaxed mb-4">
            YRC Custom Flooring is in the business of delivering unparalleled
            commercial and residential floor Coating Contracter in tampa. Here
            your urge to get aesthetic living with classy coated floors will be
            sufficed because we are offering a perfect blend of perfection and
            professionalism in the floor and decor business. We are a team of
            highly trained service providers with years of professional
            experience and highly skilled craftsmanship which are committed to
            bringing class and posh into your home and workplace because we care
            about you. We are committed to delivering a perfect blend of class
            and substance.
          </p>
          <p className="text-black leading-relaxed mb-4">
            Find out more about one of the best flooring in Florida. Our proud
            services and work can be seen in the service and look-book sections,
            respectively.
          </p>
          <a
            href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services"
            className=" md:inline-block bg-[#0D772F] text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-600 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
