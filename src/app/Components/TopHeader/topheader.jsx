"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYelp,
  FaYoutube,
  FaTiktok,
  FaPinterest,
  FaGoogle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-[#0D772F] text-white py-2">
      <div className=" mx-auto flex justify-between items-center  sm:pr-0 md:pr-0  lg:pr-2">
        {/* Left side with phone and email */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center group cursor-pointer">
            <motion.div
              whileHover={{
                x: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
              className="pl-2 md:pl-0"
            >
              <FaPhoneAlt className="mr-1 text-white group-hover:text-white" />
            </motion.div>
            <a
              href="tel:+18136790367"
              className="text-sm group-hover:underline group-hover:text-[]"
            >
              (813) 679-0367
            </a>
          </div>
          <div className="flex items-center group cursor-pointer">
            <motion.div
              whileHover={{
                x: [0, -2, 2, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
            >
              <FaEnvelope className="mr-1 text-white group-hover:text-white" />
            </motion.div>
            <a
              href="mailto:sales@yrcflooring.com"
              className="text-sm group-hover:underline group-hover:text-[]"
            >
              sales@yrcflooring.com
            </a>
          </div>
        </div>

        {/* Right side with social icons */}
        <div className="hidden lg:flex space-x-4">
          <Link href="https://www.facebook.com/YRCcustomflooring/">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCRAQpoZJJoqpme15ny27UnQ">
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/yrccustomflooringllc/">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </Link>

          <Link href="https://www.google.com/search?q=YRC+Custom+Flooring,+LLC&stick=H4sIAAAAAAAA_-NgU1IxqDBKMTJMTEpMM0kxMDFMSUmzMqgwMUtKMjNKTkpKS06yTLJYxCoRGeSs4FxaXJKfq-CWk59flJmXrqPg4-MMAItEcTtDAAAA&hl=en-GB&mat=CTXjz_39b3ROElcBEKoLacICFrlG8nDVjBA6VV78MMQxEsbfPGy8t63S-DCex44gJ1YSogCvOYnCQeKMXoXpG1HM5LBHmaarnhs3dW40n4LJKzvyYalqkD7jQb8kwPiixW0&authuser=0">
            <FaGoogle className="hover:text-[yellow] cursor-pointer" />
          </Link>
          <Link href="https://www.yelp.com/user_details?userid=LZ0dM4kH-Vnu9yDP5taLyg">
            <FaYelp className="hover:text-red-500 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
