"use client";
import React from "react";
import {
  FaStar,
  FaGem,
  FaTools,
  FaLayerGroup,
  FaHandshake,
} from "react-icons/fa";

const ChooseUsU = () => {
  return (
    <div
      className="relative bg-cover bg-center text-black py-16 px-4 inset-0 bg-white"
      style={{ backgroundImage: "url('/images/flooring-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-white opacity-90"></div>{" "}
      {/* Light overlay */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Section Title */}
        <h4 className="text-sm text-[#0D772F] uppercase mb-2 font-bold">
          Benefits
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose YRC Custom Flooring?
        </h2>
        <p className="text-[#0D772F] mb-10">
          YRC Custom Flooring is committed to transforming your space with
          high-quality materials, expert craftsmanship, and personalized
          service. Our proficient team brings your flooring vision to life,
          ensuring enduring beauty and durability. Trust us for premium
          flooring solutions tailored to your needs.
        </p>

        {/* Benefits Grid with Custom Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {/* Top Row - Three Cards */}
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#0D772F] text-2xl mr-4 w-8 flex-shrink-0">
              <FaStar />
            </div>
            <p className="font-semibold text-left">Enduring Quality</p>
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#0D772F] text-2xl mr-4 w-8 flex-shrink-0">
              <FaGem />
            </div>
            <p className="font-semibold text-left">Elevate Your Space</p>
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#0D772F] text-2xl mr-4 w-8 flex-shrink-0">
              <FaTools />
            </div>
            <p className="font-semibold text-left">Proficient Team</p>
          </div>
        </div>

        {/* Centered Bottom Row - Two Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#0D772F] text-2xl mr-4 w-8 flex-shrink-0">
              <FaLayerGroup />
            </div>
            <p className="font-semibold text-left">Diverse Flooring Options</p>
          </div>
          <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg w-64">
            <div className="text-[#0D772F] text-2xl mr-4 w-8 flex-shrink-0">
              <FaHandshake />
            </div>
            <p className="font-semibold text-left">Customer-Centric Approach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsU;
