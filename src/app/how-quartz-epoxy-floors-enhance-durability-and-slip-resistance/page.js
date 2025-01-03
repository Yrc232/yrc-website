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
    heading: "What is Quartz Epoxy Flooring?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Before discussing the benefits, let’s first understand epoxy
              quartz flooring. It combines small quartz particles with epoxy
              resin to make a hard and stable layer that resists cracking. You
              can discover these floors in many settings, from the garage to the
              kitchen. Their shine and colorful options make them a great choice
              for style and function.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Enhanced Durability",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the main reasons people choose epoxy floors is their great
              durability. Unlike regular flooring, these floors can resist heavy
              loads. They also stand up well to impacts and scratches, making
              them best for high-visitor regions.
            </p>
            <p className="mt-2">
              Floors in busy areas, including factories or retail stores, can be
              affected by everyday abuse. Quartz epoxy, however, ensures that
              your floors will last longer. It resists damage from heavy
              equipment, foot traffic, and spills, saving money on repairs and
              replacements.
            </p>
            <p className="mt-2">
              Furthermore, these floors can endure extreme temperatures. They
              won’t crack or warp in hot or cold conditions, which is vital for
              areas with varying climates. Choosing quartz epoxy ensures a
              long-lasting surface that holds up under pressure.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Slip Resistance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Another vital characteristic of quartz epoxy flooring is its slip
              resistance. Safety is mandatory for any space, whether a home or
              an office. Slips and falls can result in serious injuries, but
              this flooring can reduce this threat.
            </p>
            <p className="mt-2">
              The texture of quartz adds a natural grip to the surface. When
              wet, these floors still provide grip. This feature is essential in
              areas like kitchens or bathrooms where daily spills occur. You can
              feel safe knowing that your floors will help prevent accidents.
            </p>
            <p className="mt-2">
              In addition to their safety features, these floors are easy to
              clean. Regular mopping and occasional waxing keep them looking
              fresh. The smooth surface resists dirt and grime, making
              maintenance simple. This ease of care adds to their appeal,
              especially for busy spaces.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Versatility",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy quartz flooring is not only long-lasting and slip-resistant
              but also very flexible. It can be used in numerous settings, from
              residential to business. The option of different colors and styles
              helps you to create your personalized design.
            </p>
            <p className="mt-2">
              A quartz epoxy floor can enhance the look of any room in the home.
              You can install them in living rooms, kitchens, or outdoor patios.
              The visual charm of decorative quartz epoxy flooring makes them
              popular for modern designs.
            </p>
            <p className="mt-2">
              These floors can create a professional photo in commercial areas.
              They are perfect for showrooms, retail stores, and offices. The
              bright and clean look of epoxy quartz floors can impress clients
              and customers alike.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Cost-Effective Solution",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              While some might view the upfront cost as excessive, quartz epoxy
              flooring is a cost-effective option in the long run. Its
              durability means fewer maintenance and replacements. Due to its
              easy maintenance, you can also decrease cleaning expenses.
              Moreover, the safety abilities reduce the risk of accidents. Fewer
              slips and falls can cause lower insurance prices for agencies.
              Thus, the investment in quartz epoxy flooring pays off over time.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Your Garage in Need of a Fresh, Durable Makeover?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Transform your garage with our expert epoxy garage coating
              services! Say goodbye to old, cracked floors and good day to a
              lovely, hard floor that could deal with anything. Our quartz epoxy
              floors now not only beautify the look of your space but also offer
              outstanding durability and slip resistance. Whether you use your
              garage for parking or as a workshop, our coatings are designed to
              fulfill your desires while ensuring protection and style.
            </p>
            <p className="mt-2">
              Are you geared up to raise your garage to the following degree?
            </p>
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
              "How Do Quartz Epoxy Floors Enhance Durability and Slip Resistance?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "October 1, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "6:33 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/quartz-epoxy-floors.png"
            alt="Epoxy Concrete Flooring"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Quartz epoxy floors are the top choice for both houses and offices
            because of their unique mixture of materials. This floor combines
            small quartz debris with strong epoxy to create a robust and
            attractive surface that takes a look at time. With numerous types
            and patterns available, quartz floors cater to diverse layout
            options. This article will explore how quartz flooring boosts
            durability and slip resistance, making it a sensible preference for
            any space. Discover the benefits of choosing quartz epoxy flooring
            for your subsequent project.
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
            In summary, quartz epoxy floors have a beautiful, durable, and
            strong surface, making them the best option for homes and offices.
            Their strong surface can handle heavy use while providing safety
            features that keep everyone safe. Whether in a home or business,
            quartz floor options add style and function. When considering
            flooring choices, consider how quartz epoxy can enhance your floors.
            They not only improve the look of your area but also create a safe
            environment for all
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
