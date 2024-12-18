"use client";
import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import ContactForm from "@/Components/Contact/ContactU";

const sections = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 274 159.898"
        viewBox="0 0 274 159.898"
        id="flooring"
      >
        <path
          d="M37.097,104.472c-6.495,2.339-9.864,9.501-7.524,15.996c1.836,5.096,6.639,8.268,11.761,8.267
        c1.406,0,2.837-0.239,4.236-0.743l53.667-19.333c3.736-1.346,6.61-4.387,7.744-8.192s0.391-7.924-2-11.095l-10.333-13.7
        l-23.364,3.376c-0.704,0.102-1.419,0.152-2.124,0.152c-1.194,0-2.361-0.146-3.483-0.422l9.133,12.109L37.097,104.472z"
        ></path>
        <rect width="42.5" height="16" x="99" y="134.231"></rect>
        <rect width="42.5" height="16" x="148.5" y="134.231"></rect>
        <rect
          width="42.5"
          height="16"
          x="197.167"
          y="127.231"
          transform="rotate(-8.069 218.464 135.274)"
        ></rect>
        <rect width="42.5" height="16" y="134.231"></rect>
        <rect width="42.5" height="16" x="49.5" y="134.231"></rect>
        <rect width="274" height="5" y="154.898"></rect>
        <path d="M70.954 76.77l34.109-4.928 13.059 47.063c1.535 5.534 6.562 9.162 12.038 9.161 1.106 0 2.231-.147 3.349-.458 6.652-1.846 10.549-8.734 8.703-15.387l-6.183-22.286-7.807-3.157c-2.937-1.187-5.2-3.716-6.056-6.766l-9.684-34.498c-.034.005-.068.005-.103.01l-45 6.5c-.474.068-.935.168-1.387.287l1.058-2.563 44.803-6.472-1.688-6.013c-.743-2.649-.411-5.429.937-7.828 1.347-2.398 3.548-4.129 6.196-4.873.912-.256 1.852-.386 2.792-.386 4.592 0 8.666 3.092 9.909 7.52l2.671 9.515c4.034-4.055 6.186-9.282 4.659-14.171-2.623-8.398-13.021-16.555-28.146-13.237C88.415 18.489 76.44 24.071 58.814 37.837c-12.123 11.049-7.793 21.333-2.926 29.098.809 1.291 1.565 2.446 2.316 3.444.063.115.12.232.186.345C60.888 74.971 65.781 77.515 70.954 76.77zM184.465 13.475C179.478 2.094 166.207-3.09 154.826 1.897c-11.383 4.988-16.565 18.258-11.577 29.639 4.575 10.441 16.115 15.658 26.778 12.602-.72-1.9-1.379-3.948-1.949-6.101-2.984-11.27-2.414-21.216 1.229-22.534-2.557 2.784-1.414 12.02 2.923 21.917 3.273 7.468 7.506 13.357 11.011 15.801 1.599 1.115 3.047 1.513 4.183 1.016 3.626-1.589 2.701-11.694-2.065-22.57-.163-.372-.334-.73-.502-1.094C186.908 25.237 186.941 19.124 184.465 13.475z"></path>
        <polygon points="156.814 102.952 161.827 108.304 167.744 102.762 160.252 99.732"></polygon>
        <path
          d="M184.024,87.513l8.457-7.921l6.38,6.812l8.029-7.521l-6.38-6.811l2.19-2.051l-5.013-5.352l-2.627,2.46l-11.393-2.165
        l-2.578,2.462l6.381,6.813l-10.646,9.972l4.873,1.971C182.548,86.528,183.321,86.984,184.024,87.513z"
        ></path>
        <path
          d="M174.834,103.148c0.982,0.397,1.998,0.585,2.996,0.585c3.164,0,6.16-1.89,7.42-5.003c1.656-4.096-0.322-8.759-4.418-10.416
        l-42.108-17.027l-10.938-38.968c-1.193-4.253-5.606-6.737-9.864-5.54c-4.254,1.194-6.734,5.61-5.54,9.864l12,42.75
        c0.669,2.385,2.406,4.326,4.703,5.255L174.834,103.148z"
        ></path>
      </svg>
    ),
    title:
      "Lasting Impressions: The Beauty and Resilience of Commercial Floor Coating in Tampa, Fl",
    description: (
      <div style={{ whiteSpace: "pre-line" }}>
        <div style={{ marginBottom: "1rem" }}>
        Skip the trouble of an unprotected concrete floor. Whether you’re looking for metallic epoxy to add visual appeal and durability to your warehouse or need a polyaspartic coating to spruce up your shop, we’ve got you covered. Our highly trained team of experts is ready to serve and ensure you receive first-class quality service in every interaction. We have perfected our process and use only the highest quality materials in your flooring projects.
        </div>

        <div style={{ marginBottom: "1rem" }}>
        When it comes to commercial coatings Tampa, Florida we specialize in dog kennels, kitchens, locker rooms, salons, showrooms, machine shops, retail stores, offices, convenience stores, shopping centers, warehouses, factories, and multi-unit real estate properties. With years of professional experience and highly skilled craftsmanship, we are able to provide unmatched Commercial Coating Tampa Florida. We Also Provide Patio Coating, Concrete Coating, Driveway Coating, Pool Deck Coating, Commercial Coating and Metal Floor Coating.
        </div>
      </div>
    ),
    imgSrc: "/images/commercial-coating.webp",
  },
];

const ServiceDetailPage = () => {
  return (
    <div>
      <div className="relative min-h-[60vh] bg-gradient-to-r from-green-500 to-black bg-center bg-no-repeat bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-5xl font-bold">
            

          Best Commercial Coating in Tampa, Florida
          </h1>

          <div className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow">
            <div className="flex gap-2 items-center mt-3">
              Services
              <FaLongArrowAltRight className="text-lg text-green-600" />
              Commercial Coating
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-gradient-to-r from-black via-black to-green-900 pt-16 pb-32 space-y-24">
        {sections.map((section, idx) => (
          <div key={section.id} className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8">
              {/* Use Flexbox for equal height alignment */}
              <div className="flex flex-col lg:flex-row items-stretch lg:gap-12">
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center px-6 lg:py-16">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
                    {section.icon}
                  </div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 text-lg text-gray-300">
                    {section.description}
                  </div>
                  <div className="mt-6 sm:mb-10 md:mb-0">
                    {" "}
                    {/* Adjusted bottom margin for small screens */}
                    <a
                      href="tel:+18136790367"
                      className="inline-flex rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-900 hover:ring-green-900"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center ">
                  <Image
                    src={section.imgSrc}
                    alt={section.title}
                    width={500}
                    height={375}
                    className="rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

export default ServiceDetailPage;
