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
    heading: "Enhances Safety",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the primary benefits of concrete pool deck repair is
              improved safety. Cracks, uneven surfaces, or loose tiles can pose
              tripping hazards and increase the risk of accidents around the
              pool area. Expert repair services may resolve these problems by
              fixing or changing defective sections, guaranteeing a smooth and
              secure pool deck surface for your family and visitors.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Improves General Beauty",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Pool deck repair can breathe new life into your outdoor living
              space by restoring its aesthetic appeal. Whether your pool deck
              has faded due to sun exposure or developed unsightly cracks and
              stains, professional repair techniques such as resurfacing or
              sealing can rejuvenate the surface. Boosting the pool deck not
              only improves the look but also increases the value of your house
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Extends the Lifespan of the Pool Deck",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Performing routine maintenance and repair tasks can greatly extend
              the durability of your pool deck. Timely resolution of small
              issues reduces their growth and the potential need for more
              extensive repairs or replacements. Investing in pool deck crack
              repair as part of your home maintenance routine ensures that your
              pool area remains functional and attractive for years to come.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Improves Functionality",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Regularly maintaining your pool deck improves the functionality of
              your outdoor living area. Repairing or replacing damaged areas can
              create a smoother surface for walking, lounging, and entertaining
              by the pool. Additionally, proper repair work can address drainage
              issues, preventing water accumulation and minimizing the risk of
              mold or mildew growth.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Increases Property Value",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A clean and attractive pool deck has the potential to improve the
              whole value of your house. Potential homebuyers often consider
              outdoor spaces, including pool areas, when evaluating a property.
              Repairing your pool deck by a professional boosts the way it looks
              and increases its popularity among potential purchasers,
              ultimately resulting in a greater resale value for your home.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Customizable Design Options",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              It provides the chance to personalize the layout of your outdoor
              area based on your preferences. Whether you prefer a textured
              surface for better grip, decorative overlays, or a specific color
              scheme to compliment your landscaping, professional repair
              services can accommodate your design vision. Customizable options
              allow you to personalize your pool deck and create a unique
              outdoor oasis.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Eco-Friendly Solutions",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Several pool deck renovation solutions provide sustainable choices
              that effectively reduce the impact on the environment. For
              example, using recycled materials for resurfacing or choosing
              water-based sealers reduces carbon footprint and supports
              sustainable practices. Eco-friendly repair solutions align with
              Tampa’s commitment to environmental conservation and contribute to
              a greener community.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Cost-Effective Investment",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Pool deck repair is a cost-effective investment in maintaining
              your outdoor living space. Addressing minor issues early on
              prevents more significant problems that require expensive repairs
              or complete replacement of the pool deck. Performing routine
              maintenance and repair tasks can be affordable in the long term as
              it helps maintain the overall stability of your pool area.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Your Pool Deck in Need of a Makeover?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Transform your poolside oasis with our premium Pool Deck Coating
              Services in Tampa. Is your pool deck showing signs of wear and
              tear? Our specialized coatings can rejuvenate the surface,
              providing enhanced durability and aesthetics. Ready to revitalize
              your outdoor living space? Contact us now to schedule professional
              pool deck coating services and give your pool area a stunning new
              look. Let us help you create a beautiful and durable pool deck
              that enhances your outdoor experience.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
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
              "How Can Pool Deck Repair Enhance Your Outdoor Living Area in Tampa?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "April 24, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "3:24 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2.jpg"
            alt="How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            A properly maintained pool deck can significantly increase the
            appeal and functionality of your outdoor living space in Tampa. Over
            time, pool decks may develop cracks, stains, or other signs of wear
            due to exposure to the elements and regular use. Investing in pool
            deck repair not only restores the attractiveness of your pool area
            but also improves safety and longevity. The goal of this article is
            to explore how pool deck repair can transform your outdoor living
            space and elevate your poolside experience in Tampa.
          </p>
          <h2 className="mt-6 text-lg text-green-600"></h2>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
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
          <h2 className="text-2xl font-bold text-black">Conclusion</h2>
          <p className="text-md text-black mt-2">
            Pool deck repair plays a crucial role in improving your outdoor
            living space in Tampa by enhancing safety, restoring aesthetics, and
            extending the lifespan of your pool deck. From functional upgrades
            to customizable design options, investing in professional repair
            services ensures that your pool area remains a focal point of
            enjoyment and relaxation for years to come.
          </p>
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
