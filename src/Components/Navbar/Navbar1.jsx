"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items with custom paths
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
   
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <div className="bg-gray-200 w-full">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-black shadow-lg border w-full"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-3 md:py-4 mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/images/logo-yrc.webp"
                alt="Logo"
                className="h-12 object-contain"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black md:hidden focus:outline-none p-2 w-10 h-10 rounded-lg hover:bg-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto mt-4 md:mt-0`}
            id="navbar-default"
          >
            <ul className="font-bold flex flex-col md:flex-row md:space-x-8  bg-white md:bg-transparent p-4 md:p-0 border md:border-0 border-gray-700 rounded-lg md:rounded-none">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 text-black hover:text-[#0D772F] ${
                      item.label === "Home" ? "text-[#0D772F]" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Button */}
          <a
            href="/contact-us"
            className="hidden md:inline-block bg-[#0D772F] text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
