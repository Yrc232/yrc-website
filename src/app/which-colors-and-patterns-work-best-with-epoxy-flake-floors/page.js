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
    heading: "Why Epoxy Flake Floors?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy flake flooring is incredibly long-lasting and ideal for
              areas needing hard, durable surfaces like garages, basements, and
              outdoor regions. Its customizable nature sets it apart, allowing
              you to choose shades and styles matching any layout. The flakes,
              in numerous sizes, shapes, and colors, create a unique look while
              helping to cover dirt and scratches. This mixture of fashion and
              durability makes epoxy flake flooring a smart preference for
              aesthetics and capability.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Color Choices",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When selecting shades for epoxy flake flooring, remember the
              room’s motive. The colors you choose can change the complete vibe
              of the gap. Here are some color picks that work well:
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
        subheading: "Neutral Shades",
        paragraph: (
          <div>
            <p>
              Neutral colors, such as white, beige, and gray, are secure and
              famous. These colors make the room feel larger and brighter.
              Neutral-colored epoxy is regularly used in garages, basements, and
              application spaces. They create a simple and modern look without
              drawing excessive interest.
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
        subheading: "Earth Tones",
        paragraph: (
          <div>
            <p>
              Earth tones are an excellent option for a more natural and
              grounded feel. Brown, tan, and green flakes can give your space a
              warm and welcoming appearance. People often use earth colors in
              living areas or outdoor spaces to create a relaxing,
              nature-inspired look.
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
        subheading: "Bold Colors",
        paragraph: (
          <div>
            <p>
              If you want to make a difference, bold colors like blue, red, or
              black can be perfect. These colors add energy and excitement to a
              space. Bold-colored floors are ideal for rooms where you want a
              modern, eye-catching design. Remember that bold colors make a
              space feel smaller, so use them carefully.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Patterns to Consider",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Besides colors, the pattern of the flakes is another crucial
              aspect. The pattern affects both the look and function of the
              floor. Here are a few patterns that work best with epoxy flake
              floors
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
        subheading: "Random Spread",
        paragraph: (
          <div>
            <p>
              The most common pattern is a random spread, where flakes are
              scattered across the floor in no particular order, creating a
              natural and unplanned look. The random spread is great for hiding
              dirt and imperfections because the flakes break up the surface.
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
        subheading: "Full Broadcast",
        paragraph: (
          <div>
            <p>
              The flakes cover the entire floor evenly in a full broadcast
              pattern, creating a more uniform and polished look. This works
              well in spaces where you want a smooth and stable look, like a
              kitchen or a showroom.
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
        subheading: "Custom Designs",
        paragraph: (
          <div>
            <p>
              If you need to feature a personal contact, you can choose a
              customized solution to fulfill your requirements. You can arrange
              the flakes to create patterns like stripes or swirls. This
              customization is important and specially used for areas with the
              main role in any building, such as the entrance, guest room, or
              personal bedroom.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Epoxy Flake Flooring Colors",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The best epoxy flake flooring colors vary based on your space and
              style. Neutral shades create a clean, subtle look, while bold
              colors make a room pop. Earth tones bring warmth and invite
              comfort. Epoxy flake floors offer the flexibility to mix and match
              colors, allowing endless design possibilities. For an epoxy flake
              garage floor, neutral shades with a random spread pattern conceal
              dirt and stains, adding sleekness. Earth tones with custom
              patterns are perfect for cozy living rooms or outdoor spaces.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Exterior Epoxy Floor Paint with Flakes to Cover the Tile",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the significant matters about epoxy floors is their
              versatility. You can use them indoors or outdoors. Exterior epoxy
              floor paint with flakes is an excellent way to cover old and
              damaged tiles. It provides a clean, new look, including safety
              towards climate and wear. The flakes add texture and visual hobby,
              making the floor less slippery, so whether upgrading a patio,
              walkway, or pool deck, outside epoxy with flakes is a durable and
              fashionable choice.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Your Garage Floor Looking Worn and Dull?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Transform your space with our expert epoxy garage coating
              services. Say goodbye to cracks, stains, and dust, and welcome to
              a sleek, long-lasting, clean garage floor. Our customizable epoxy
              flake flooring not only enhances the look of your garage but also
              protects it for future years. Whether you want an easy, impartial
              look or a bold, desirable layout, we have covered it for you.
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
              "Which Colors and Patterns Work Best with Epoxy Flake Floors?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 23, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "3:10 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Which-Colors-and-Patterns-Work-Best-with-Epoxy-Flake-Floors.png"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Epoxy flake flooring is a popular preference for many homeowners and
            companies. It is long-lasting, easy to clean, and uniquely looks at
            any area. But the natural beauty of epoxy flake floors lies in the
            colors and styles you can choose. Picking the proper colors and
            patterns makes your floor stand out. This article shows the
            importance of color patterns for different places, like interior or
            exterior.
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
            Epoxy flake floors integrate fashion and durability, offering
            several color options: neutral shades for minimalism, bold colorings
            for impact, and earth tones for warmth. Patterns, including random
            spreads or full broadcasts, are uploaded to the layout. These
            customizable flooring shapes any space, from garages to outside
            patios, and are smooth to preserve. With long-lasting durability and
            a flexible look, this provides an excellent solution for creating
            unique, personalized floors.
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
