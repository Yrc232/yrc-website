import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaLocationArrow,
  FaYelp,
} from "react-icons/fa";

const FooterU = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 ">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col sm:items-start items-center space-y-4 md:w-1/3">
          <div className="flex flex-col sm:items-start items-center">
           <a href="/">
            <img
              src="/images/logo-yrc.webp" // Replace with the actual path to your logo
              alt="Yrc Logo"
              className="w-40 h-auto" // Adjust width and height as needed
            /></a>
          </div>

          <div className="flex space-x-4 text-white text-xl ">
          <a
              href="https://www.facebook.com/YRCcustomflooring/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D772F]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/yrccustomflooringllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D772F]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.yelp.com/user_details?userid=LZ0dM4kH-Vnu9yDP5taLyg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D772F]"
            >
              <FaYelp />
            </a>
            <a
              href="https://www.google.com/search?q=YRC+Custom+Flooring,+LLC&stick=H4sIAAAAAAAA_-NgU1IxqDBKMTJMTEpMM0kxMDFMSUmzMqgwMUtKMjNKTkpKS06yTLJYxCoRGeSs4FxaXJKfq-CWk59flJmXrqPg4-MMAItEcTtDAAAA&hl=en-GB&mat=CTXjz_39b3ROElcBEKoLacICFrlG8nDVjBA6VV78MMQxEsbfPGy8t63S-DCex44gJ1YSogCvOYnCQeKMXoXpG1HM5LBHmaarnhs3dW40n4LJKzvyYalqkD7jQb8kwPiixW0&authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D772F]"
            >
              <FaGoogle />
            </a>
            <a
              href="https://www.youtube.com/channel/UCRAQpoZJJoqpme15ny27UnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0D772F]"
            >
              <FaYoutube />
            </a>
           
          </div>
        </div>

        {/* Pages, Services, and Business Info Sections */}
        <div className="flex flex-col sm:flex-row items-start justify-between w-full md:w-2/3 space-y-8 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col sm:items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-[#0D772F]">
              Pages
            </h4>
            <a href="/" className="hover:text-[#0D772F]">
              Home
            </a>
            <a href="/about-us" className="hover:text-[#0D772F]">
              About
            </a>
            <a href="/services" className="hover:text-[#0D772F]">
              Services
            </a>
           
            <a href="/gallery" className="hover:text-[#0D772F]">
              Portfolio
            </a>
            <a href="/contact-us" className="hover:text-[#0D772F]">
              Contact Us
            </a>
           
           
          </div>

          <div className="flex flex-col items-start sm:items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-[#0D772F]">
              Services
            </h4>
            <a href="/patio-coating" className="hover:text-[#0D772F]">
            Patio Coating
            </a>
            <a href="/garage-coating" className="hover:text-[#0D772F]">
            Garage Coating
            </a>
            <a href="/concrete-coating" className="hover:text-[#0D772F]">
            Concrete Coating
            </a>
            <a href="/driveway-coating" className="hover:text-[#0D772F]">
            Driveway Coating
            </a>
            <a href="/pool-deck-coating" className="hover:text-[#0D772F]">
            Pool Deck Coating
            </a>
            <a href="/commercial-coating" className="hover:text-[#0D772F]">
            Commercial Coating
            </a>
            <a href="/epoxy-garage-coating" className="hover:text-[#0D772F]">
            Epoxy Flooring Tampa,FL
            </a>
            <a href="/decorative-metallic-floor" className="hover:text-[#0D772F]">
            Decorative Metallic Floor
            </a>
            <a href="/polyaspartic-garage-coating" className="hover:text-[#0D772F]">
            Polyaspartic Garage Coating
            </a>
           
           
          </div>

          <div className="flex flex-col sm:items-start items-start  space-y-2">
            <h4 className="font-semibold text-white uppercase tracking-wide pb-1 border-b border-dotted border-[#0D772F]">
              Business Info
            </h4>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#0D772F]" />
              <a href="tel:+18136790367">
              <span>(813) 679-0367</span></a>
            </div>
            <div className="flex items-center space-x-2">
              
              <FaEnvelope className="text-[#0D772F]" />
              <a href="mailto:sales@yrcflooring.com">
              <span>sales@yrcflooring.com</span>
              </a>
             
            </div>
            <div className="flex items-center space-x-2">
              
             <FaLocationArrow className="text-[#0D772F]" />
              <a href="">
              <span>Tampa, FL</span>
              </a> 
             
            </div>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar with Centered Purple Line */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-[#0D772F] pt-4 text-center text-sm text-white">
        <p> © YRC Custom Flooring  2024</p>
      </div>
    </footer>
  );
};

export default FooterU;
