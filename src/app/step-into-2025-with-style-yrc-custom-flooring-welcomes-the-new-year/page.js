import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { list } from "postcss";

// Updated Data Structure
const defaultData = [
  {
    heading:
      "Why Choose YRC Custom Flooring in 2025?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Wide Variety of Flooring Options: Whether you prefer classic hardwood, contemporary vinyl, or sleek tile, YRC Custom Flooring has a diverse selection of materials that will meet your specific needs.",
          "Professional Installation: The installation process is just as important as the materials chosen. YRC Custom Flooring ensures a seamless and expert installation that guarantees your floors are both beautiful and functional.",
          "Durability and Style: Each flooring option is carefully selected for its durability and aesthetic appeal, ensuring that your investment not only looks good but holds up over time",
          "Customer-Centric Service: From consultation to installation, YRC Custom Flooring works closely with you to ensure the flooring you choose fits your vision and lifestyle. They provide personalized recommendations and detailed estimates to help you make the best choice for your space.",
          "Step into 2025 with floors that exude style, comfort, and longevity. Let YRC Custom Flooring help you make a statement in your home or business and set the stage for a stylish new year."

        ],
      },
    ],
  },
  
];

const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#0D772F] to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title ||
              "Step into 2025 with Style – YRC Custom Flooring Welcomes the New Year!"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 17, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "4:03 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/yrc-happy-new-year.jpg"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            As we enter 2025, there’s no better way to welcome the new year than
            by upgrading your home or office with a fresh, stylish flooring
            solution. Whether you’re looking to enhance the look and feel of
            your living space or create a lasting impression in a commercial
            setting, YRC Custom Flooring is here to help you step into the year
            with elegance and sophistication. With expert flooring installation
            and a wide range of options, YRC Custom Flooring is committed to
            helping you find the perfect flooring that suits both your style and
            budget.
          </p>
          <h2 className="mt-6 text-lg text-green-600"></h2>
          <p className="mt-6">
            A home or office is only as beautiful as its foundation—and in this
            case, the foundation is the flooring. YRC Custom Flooring
            understands the transformative power of flooring. A high-quality
            floor doesn’t just add style, but it also boosts the functionality
            and durability of a space. Whether you’re renovating an old home or
            building a brand new one, the right flooring is essential in making
            your space feel fresh and inviting.
          </p>
          <p className="mt-6">
            With the new year comes new possibilities, and there’s no better way
            to start fresh than by upgrading your floors. From hardwood to tile,
            carpet, or luxury vinyl, YRC Custom Flooring offers a wide array of
            flooring options that combine durability with beauty. Their expert
            team ensures precision during installation, leaving you with floors
            that not only look great but stand the test of time.
          </p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-green-600">
              {item.heading}
            </h2>

            {item.sections.map((section, secIndex) => (
              <div key={secIndex} className="mt-4">
                {section.subheading && (
                  <h3 className="text-xl font-semibold text-black mt-2">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraph && (
                  <div className="text-md text-black mt-2">
                    {section.paragraph}
                  </div>
                )}

                {section.image && (
                  <div className="my-4">
                    <img
                      src={section.image}
                      alt={section.subheading || item.heading}
                      className="w-3/4 max-w-md h-auto rounded-lg"
                    />
                  </div>
                )}

                {section.listItems && (
                  <ul className="list-disc list-inside text-black mt-2">
                    {section.listItems.map((listItem, liIndex) => (
                      <li key={liIndex} className="ml-4">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-8">
          <Link href="/contact-us">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-[#0D772F] hover:bg-black hover:text-[#0D772F] transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="mt-8">
          {/* <h2 className="text-2xl font-bold text-black">Conclusion</h2>
          <p className="text-md text-black mt-2">
            This Christmas, make your home shine with beautiful, high-quality
            flooring from YRC Custom Flooring, LLC. From custom hardwood and
            luxury vinyl plank to plush carpet and festive area rugs, our
            flooring options can help you create the perfect atmosphere for the
            holidays. Whether you’re looking to add warmth, style, or comfort to
            your home, we have the expertise and products to make your home
            truly shine this Christmas season. Deck your halls with style and
            comfort, and let YRC Custom Flooring be your partner in creating a
            festive, welcoming home that’s ready for all your holiday
            gatherings. Reach out today to get started on your flooring
            transformation, and let’s make this Christmas one to remember!
          </p> */}
          <p className="text-md text-black mt-2"></p>
        </div>
        {/* FAQs Section */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-800">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-green-600">
                {faq.question}
              </h3>
              <p className="text-md text-black mt-2">{faq.answer}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

// InfoItem Component for Header Icons
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 w-1/2 sm:w-1/4 md:w-auto mt-2 sm:mt-0">
    {icon}
    <span>{text}</span>
  </div>
);

export default Blog1;
