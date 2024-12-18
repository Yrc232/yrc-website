"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:flex md:space-x-12">
      {/* Form Section */}
      <div className="md:w-1/2">
        <h4 className="text-sm font-semibold text-[#0D772F] uppercase mb-2">
          Contact
        </h4>
        <h2 className="text-3xl font-bold mb-2">Get In Touch Today</h2>
        <p className="text-gray-700 mb-4">
          Transform your space with YRC Custom Flooring. Let’s create stunning, durable floors tailored to your needs. Contact us today to bring your vision to life!
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div className="md:flex md:space-x-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-green-300 p-2 rounded-md outline-none focus:border-[#0D772F]"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border border-green-300 p-2 rounded-md outline-none focus:border-[#0D772F]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-green-300 p-2 rounded-md outline-none focus:border-[#0D772F]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 ">Select Services</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Patio Coating"
                  className="mr-2 accent-[#0D772F]"
                />
                Patio Coating
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Garage Coating"
                  className="mr-2 accent-[#0D772F]"
                />
                Garage Coating
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Concrete Coating"
                  className="mr-2 accent-[#0D772F]"
                />
                Concrete Coating
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Driveway Coating"
                  className="mr-2 accent-[#0D772F]"
                />
                Driveway Coating
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Pool Deck Coating"
                  className="mr-2 accent-[#0D772F]"
                />
                Pool Deck Coating
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Commercial Coating"
                  className="mr-2 accent-[#0D772F]"
                />
                Commercial Coating
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value="Epoxy Flooring Tampa, FL"
                  className="mr-2 accent-[#0D772F]"
                />
                Epoxy Flooring Tampa, FL
              </label>
            
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Additional Information</label>
            <textarea
              placeholder="Provide any additional details about your project"
              className="w-full border border-green-300 p-2 rounded-md outline-none focus:border-[#0D772F] h-24"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[#0D772F] text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Send Your Enquiry
          </button>
        </form>
      </div>

      {/* Map and Info Section */}
      <div className="md:w-1/2 mt-12 md:mt-0">
        <div className="mt-8">
          <h4 className="font-semibold">Operating Hours:</h4>
          <p>Monday - Saturday: 8:00am - 8:00pm</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="mt-6">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617386.2860808433!2d-83.804601!3d27.698638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d21abaf4d041ddf%3A0x46bb62cbbfcb9b8!2sYRC%20Custom%20Flooring%2C%20LLC!5e0!3m2!1sen!2s!4v1734385255067!5m2!1sen!2s"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            title="YRC Custom Flooring Location"
            className="rounded-lg shadow-md border border-gray-300"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
