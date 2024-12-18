"use client";
import useEmail from "@/hooks/useEmail";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { sendEmail, loading } = useEmail();

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);

    const templateParams = {
      customer_name: data?.name,
      customer_email: data?.email,
      contact_number: data?.mobile,
      services: data?.services?.join(","),
      additional_info: data?.additionalInfo,
    };

    await sendEmail(
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_OWNER_TEMPLATE_ID
    );

    reset();
    toast.success("Your query saved successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:flex md:space-x-12">
      {/* Form Section */}
      <div className="md:w-1/2">
        <h4 className="text-sm font-semibold text-[#0D772F] uppercase mb-2">
          Contact
        </h4>
        <h2 className="text-3xl font-bold mb-2">Get In Touch Today</h2>
        <p className="text-gray-700 mb-4">
          Transform your space with YRC Custom Flooring. Let’s create stunning,
          durable floors tailored to your needs. Contact us today to bring your
          vision to life!
        </p>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex md:space-x-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-green-300"
                } p-2 rounded-md outline-none focus:border-[#0D772F]`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
                className={`w-full border ${
                  errors.mobile ? "border-red-500" : "border-green-300"
                } p-2 rounded-md outline-none focus:border-[#0D772F]`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-green-300"
              } p-2 rounded-md outline-none focus:border-[#0D772F]`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Select Services</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Patio Coating",
                "Garage Coating",
                "Concrete Coating",
                "Driveway Coating",
                "Pool Deck Coating",
                "Commercial Coating",
                "Epoxy Flooring Tampa, FL",
              ].map((service) => (
                <label className="flex items-center" key={service}>
                  <input
                    type="checkbox"
                    {...register("services")}
                    value={service}
                    className="mr-2 accent-[#0D772F]"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Additional Information
            </label>
            <textarea
              placeholder="Provide any additional details about your project"
              {...register("additionalInfo")}
              className="w-full border border-green-300 p-2 rounded-md outline-none focus:border-[#0D772F] h-24"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
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
