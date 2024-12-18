"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2, // Further reduced duration for faster transitions
        when: "beforeChildren",
        staggerChildren: 0.1, // Further reduced stagger duration for quicker sequence
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }, // Further reduced duration
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }, // Further reduced duration
    },
  };
  return (
    <div>
      <section className="relative bg-white">
        <motion.div
          className="z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div className="lg:pr-8" variants={containerVariants}>
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <motion.h1
                className="text-2xl font-bold text-gray-900 sm:text-4xl lg:text-2xl mb-4"
                variants={headingVariants}
              >
                Services
              </motion.h1>

              <motion.h2
                className="text-2xl font-bold text-gray-900 sm:text-1xl lg:text-2xl leading-tight"
                variants={textVariants}
              >
                What We Provide
              </motion.h2>

              <motion.p
                className="mt-6 text-base font-normal leading-7 text-gray-900"
                variants={textVariants}
              >
               Here you can explore our esteemed floor decor services that signify the perfect blend of perfection and crème craftsmanship
              </motion.p>
              <motion.div
                className="pt-6 flex justify-start"
                variants={textVariants}
              >
              <a
            href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services"
            className=" md:inline-block bg-[#0D772F] text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-600 transition-colors"
          >
            View All
          </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
          <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <motion.div
              className="flex justify-start w-full gap-6 pb-8 overflow-x-auto snap-x"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              {/* Card 1 */}
              <motion.div
                className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                variants={textVariants}
              >
                <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <a
                    href="/patio-coating"
                    title=""
                    className="flex shrink-0 aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                      src="/images/tampa-flooring-1.webp"
                      alt="thumbnail-1"
                    />
                  </a>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <a href="/patio-coating" title="">
                      <p className="text-lg font-bold text-gray-900">
                      Patio Coating
                      </p>
                      <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      Outdoor patios are exposed to influences such as heat, weather and traffic
                      </p>
                    </a>
                  </div>
                  <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#0D772F]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 ">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="/patio-coating" title="">
                           Read More
                          </a>
                        </p>
                        <span className="text-sm font-medium text-gray-900">
                          •
                        </span>
                        <p className="text-sm font-medium text-gray-900">
                         
                        </p>
                      </div>
                      <a href="/patio-coating" title="" className="" role="button">
                        <svg
                          className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <line x1="17" y1="7" x2="7" y2="17"></line>
                          <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Card 2 */}
              <motion.div
                className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6 "
                variants={textVariants}
              >
                <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <Link
                    href="/garage-coating"
                    title=""
                    className="flex shrink-0 aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                      src="/images/floor-decor-tampa.webp"
                      alt="homepage-propertyCleanUp"
                    />
                  </Link>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <Link href="/garage-coating" title="">
                      <p className="text-lg font-bold text-gray-900">
                      Garage Coating
                      </p>
                      <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      Polyurea-polyaspartic coating protects your garage surface for years
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#0D772F]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          <Link href="/garage-coating" title="">
                            Read More
                          </Link>
                        </p>
                        <span className="text-sm font-medium text-gray-900">
                          •
                        </span>
                        <p className="text-sm font-medium text-gray-900">
                        
                        </p>
                      </div>
                      <Link href="/garage-coating" title="" className="" role="button">
                        <svg
                          className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <line x1="17" y1="7" x2="7" y2="17"></line>
                          <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Card 3 */}
              <motion.div
                className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                variants={textVariants}
              >
                <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                  <Link
                    href="/concrete-coating"
                    title=""
                    className="flex shrink-0 aspect-w-4 aspect-h-3"
                  >
                    <img
                      className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                      src="/images/flooring-in-tampa-fl.webp"
                      alt="concrete-coating"
                    />
                  </Link>
                  <div className="flex-1 px-4 py-5 sm:p-6">
                    <Link href="/concrete-coating" title="">
                      <p className="text-lg font-bold text-gray-900">
                      Concrete Coating
                      </p>
                      <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      Concrete coatings are a cost-effective renovation project that can
                      </p>
                    </Link>
                  </div>
                  <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-[#0D772F]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-gray-900">
                          <Link href="/concrete-coating" title="">
                            Read More
                          </Link>
                        </p>
                        <span className="text-sm font-medium text-gray-900">
                          •
                        </span>
                        <p className="text-sm font-medium text-gray-900">
                        
                        </p>
                      </div>
                      <Link href="/concrete-coating" title="" className="" role="button">
                        <svg
                          className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <line x1="17" y1="7" x2="7" y2="17"></line>
                          <polyline points="8 7 17 7 17 16"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Add more cards here */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
