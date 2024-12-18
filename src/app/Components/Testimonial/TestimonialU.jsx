// Testimonials.jsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rachael Harrison",
    review:
      "We just got our floor done today and it looks amazing! They did such a great job! I highly recommend them and will be telling neighbors and friends to use them if they’re looking for epoxy flooring in the garage or getting their pool deck done. 10 stars!",
  },
  {
    name: "Marguerita Santiago",
    review:
      "Ralph's Company YRC Custom Flooring were God sent. Ralph and his crew did a beautiful job on my garage floor. They were very honest and respectful and I will recommend them to everyone! I only wish I had taken some before pictures to show the huge transformation! Thank you Ralph and wishes for much success!",
  },
  {
    name: "John Guzman",
    review:
      "YRC Custom Flooring is meticulous with their work, very professional and accommodating. I would highly recommend this company.",
  },
  {
    name: "Sean Harrison",
    review:
      "Absolutely stunning garage epoxy floor. We called and within the week they ready to roll and installation took about a day…but it completely transformed the garage! Highly recommend to anyone looking for ANYTHING to do with custom floors. Perfect attention to detail and just honestly and very nice company to work with. I would give them 10 stars if I could 🤘🏼",
  },
  {
    name: "Christene Rivera",
    review:
      "Highly recommended! Excellent work!Thank you, Ralph, for fixing our pool deck! It's so nice to be able to enjoy the pool again!",
  },
  {
    name: "Nikki C",
    review:
      "YRC made a promise and they delivered. Very pleased with my patio, I’ve received many compliments from family and friends. Excellent customer service, extremely professional, polite and intense attention to finish details. Highly recommend.",
  },
];

const TestimonialsU = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Display three testimonials at a time
  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div
      className="relative bg-[] text-white py-16 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #177534 50%, #FFFFFF  50%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        {/* Section Title with Background Label */}
        <div className="text-left w-full max-w-[960px]">
          <div className="text-xs font-semibold tracking-widest uppercase bg-[#0D772F]  inline-block px-3 py-1 mb-4">
            Testimonials · 5 Star Rated
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left text-black">
            What Our Clients Say
          </h2>
          <p className="text-black mb-10 text-left">
            Our clients are our pride, and their words mean the world to us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="flex justify-center space-x-4">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-6 rounded-lg shadow-lg w-80 h-60 flex flex-col justify-between"
            >
              <div className="flex justify-left mb-2">
                <div className="text-[#FFD700]">★★★★★</div>
              </div>
              <p className="text-gray-300 mb-4 overflow-hidden text-ellipsis">
                {testimonial.review}
              </p>
              <p className="font-semibold text-white">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
        <a
          href="https://www.google.com/maps/place/YRC+Custom+Flooring,+LLC/@27.698638,-83.804601,7z/data=!3m1!4b1!4m6!3m5!1s0x2d21abaf4d041ddf:0x46bb62cbbfcb9b8!8m2!3d27.698638!4d-83.804601!16s%2Fg%2F11t4zbl88k?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          className="flex items-center justify-center bg-white text-[#0D772F] px-4 py-2 rounded-md hover:bg-white hover:text-green-600 transition-colors mt-8"
        >
          <img
            src="/images/google-icon-yrc.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Google Reviews
        </a>
      </div>
    </div>
  );
};

export default TestimonialsU;
