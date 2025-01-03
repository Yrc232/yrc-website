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
    heading: "Popular Uses of Hardwood Flooring of White Oak",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Living Rooms",
        paragraph: (
          <div>
            <p>
              Many homeowners use white oak hardwood flooring in living rooms.
              The warm tones create a very cozy feel for family gatherings. It
              looks great with various furniture styles and colors. White oak
              adds charm and warmth, making the space inviting. Guests often
              feel welcome in homes with this lovely flooring. Its strong nature
              also holds up against daily use and wear. Homeowners enjoy its
              ability to blend with any theme or design.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Bedrooms",
        paragraph: (
          <div>
            <p>
              In bedrooms, white oak adds a touch of elegance and charm. Its
              natural look promotes a calm and serene space, making it a perfect
              choice for restful areas. The wood’s soft hues create a peaceful
              and cozy retreat. Many choose white oak to match their decor and
              furniture. The strong surface is great for active homes with kids
              and pets. Its beauty shines in light, enhancing the overall room
              vibe.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Dining Areas",
        paragraph: (
          <div>
            <p>
              White oak’s durability and easy upkeep benefit dining areas. It
              can handle spills and foot traffic without damage. Families enjoy
              its beauty during meals and gatherings. The rich colors and grain
              add a touch of class to meals. White oak makes every meal feel
              special and elegant. Many families gather and create memories on
              these lovely floors. This wood pairs well with tables and chairs,
              enhancing the dining experience.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of White Oak Hardwood Flooring",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Durability",
        paragraph: (
          <div>
            <p>
              One major benefit of white oak hardwood floors is their powerful
              nature. This type of wood is known for its hard surface and long
              life. It can withstand daily use and wear. Its solid structure
              resists dents and scratches from toys and pets. Homeowners find
              that it remains beautiful for many years. It offers peace of mind,
              knowing the floor can endure heavy foot traffic. This quality
              makes white oak a popular choice for families.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Aesthetic Appeal",
        paragraph: (
          <div>
            <p>
              Another great advantage is the look of hardwood floors and white
              oak. The natural grain patterns create a stunning view in any
              room. White oak’s warm shades blend well with many home styles.
              Its unique texture gives depth and character to the space.
              Homeowners appreciate how it complements their existing decor and
              furniture. The forever style of white oak adds value to every
              home. Its charm makes it a favorite among designers and homeowners
              alike.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Resilience",
        paragraph: (
          <div>
            <p>
              Its strong nature makes it a smart choice for busy homes. Many
              homeowners find that white oak holds up well over time. This wood
              does not warp or bend easily under pressure. Its long-lasting
              nature guarantees it will stay sensible and appealing for many
              years. White oak is ideal for families with children, pets, and
              busy places
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Cost-Effectiveness",
        paragraph: (
          <div>
            <p>
              There can be concerns about the cost of white oak hardwood
              flooring. Even if the installation cost is higher, it is helpful
              in the long run. Installing high-quality floors saves you from
              costly repairs and replacements. This enduring choice is worth the
              cost. Homeowners save money in the long run by choosing this
              durable wood. Its low maintenance needs also reduce costs over
              time. Many find that the value gained outweighs the initial
              expense
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Installation Process",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Installing white oak hardwood flooring can be done in a few steps.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "First, prepare the subfloor by cleaning and leveling it. Ensure the area is dry to prevent issues later.",
          "Lay the planks in the desired pattern for a clean look.",
          "Staggering the seams helps create a natural flow and adds strength.",
          " Finally, finish the floor with a suitable sealant for added protection. This allows the beauty and durability of the timber to be preserved.",
          "Proper installation guarantees the floors will look amazing in the future.",
        ],
      },
    ],
  },
  {
    heading: "How to Clean White Oak Hardwood Floors?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Homeowners regularly ask for a way to clean white, very hardwood
              flooring. Start by sweeping or vacuuming often to remove the dust
              and dirt. This prevents scratches and maintains the surface
              searching, which is notable. Use a wet mop with a gentle cleaner
              designed for hardwood floors. Avoid using an excessive amount of
              water that may harm the wood. Be sure to dry the area after
              cleaning to save you from moisture damage. Regular upkeep keeps
              white very fresh and new for longer.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Hire Professionals",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Sometimes, hiring professionals for installation and care is a
              smart move. Experts can ensure the job is done right and
              efficiently. They also help with tricky repairs and maintenance
              tasks. Professionals have the right tools and skills for quality
              work. They know how to handle the unique aspects of white oak
              flooring. Homeowners can enjoy peace of mind after knowing their
              project is in good hands. This investment in professional help
              often pays off with excellent results
            </p>
            <p className="mt-2">
              If you need professional help, you can contact us.
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
              "Why Hardwood Flooring White Oak is a Top Choice for Homeowners"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "October 21, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:55 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Hardwood-Floorin.jpg"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Homeowners want great flooring options for their residing spaces.
            Choosing the proper flooring makes a large distinction in any home.
            Among many options, white oak hardwood flooring is a notable one.
            This material offers unique benefits that appeal to many homeowners.
            White oak combines beauty and strength, making it ideal for
            families. Many love its look and feel, which suits various styles.
            Its long life also helps, as homeowners want flooring that lasts.
            This post will explore why white oak is a top choice.
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
            White oak hardwood flooring is a great option for residential
            buildings. Its power, beauty, and shine make it a top choice. With
            proper care, this flooring can enhance any space for years.
            Homeowners should consider white oak for their next flooring
            project. The benefits and look of this wood truly make it unique.
            Choosing white oak can transform any home into a welcoming and
            elegant space.
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
