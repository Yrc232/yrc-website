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
    heading: "Understanding Polyurea Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This is a new technology of coating outsides that was released in
              the 1980s. It is a thermoset. The reaction between a resin
              collection and an isocyanate component forms it. The result is a
              fairly long-lasting and flexible coating that may be carried out
              on diverse floors. Its fast effecting time makes it the best
              choice for many applications. Additionally, it effectively resists
              water, chemicals, and abrasion. This is especially important in
              areas like Tampa, where extreme weather conditions are common
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of Polyurea Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the main reasons people in Tampa prefer Polyurea floor
              coating is its incredible strength.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Polyurea can withstand enormous placement and tear, making it satisfactory for excessive-traveler areas and industrial enterprise environments.",
          "It is exceedingly protective against UV rays, which is particularly vital in Tampa, in which the sun may be unforgiving.",
          "Polyurea maintains its color and integrity for years, unlike specialty coatings that can fade or degrade under constant sun exposure.Polyurea garage floor coating",
          "Polyurea is immune to an extensive sort of chemical substances, which include oils, solvents, and fuels.",
          "Polyurea’s ability to resist chemical damage means that floors coated with it require less maintenance.",
          "This is also beneficial in money and time-saving.",
          "As a result, it is an excellent choice for garages, industrial floors, and areas where there is a risk of chemical spills.",
        ],
      },
    ],
  },
  {
    heading: "Comparative Analysis",
    sections: [
      {
        subheading: "",
        paragraph: <div></div>,
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Epoxy Coating",
        paragraph: <div></div>,
        listItems: [
          "Takes longer to cure.",
          "Disadvantage for time-sensitive projects",
          "Risk of cracking under pressure or temperature changes.",
          "It can work in harsh environmental conditions.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Polyurea",
        paragraph: (
          <div>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "It is a rapid solution.",
          "Ideal for quicker project completion.",
          "Remains flexible, adapting to the surface without cracking.",
          "Superior chemical resistance, making it reliable for industrial use.",
        ],
      },
    ],
  },
  {
    heading: "Polyurea in Industrial Applications",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyurea coating has come to be a go-to solution for shielding
              floors and different floors in Tampa’s industrial area. Its rapid
              curing time processes minimal downtime, which is essential in
              business environments wherein time is money. Polyurea’s ability to
              withstand heavy loads, foot traffic, and chemical exposure makes
              it ideal for warehouses. It is also perfect for factories and
              other business centers where durability is essential.
            </p>
            <p className="mt-2">
              On the one hand, other coatings require multiple layers or seams.
              It is another benefit of industrial coating polyurea settings is
              its smooth application. Polyurea can be applied as a continuous
              coating. This removes the risk of weak points where damage can
              occur. This seamless application adds an extra layer of
              protection. It ensures that the coated surface remains intact and
              functional for the next many years.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Why Tampa Residents Choose Polyurea for Residential Use?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Although Polyurea is often associated with industrial
              applications, it is also gaining popularity among Tampa
              homeowners. The same trends that make Polyurea quality for
              business use strength, flexibility, and chemical resistance are
              also precious in residential settings. Homeowners in Tampa
              increasingly choose polyurea garage floor coatings for protection
              against oil stains and water damage. They also appreciate its
              durability against normal wear and tear.
            </p>
            <p className="mt-2">
              Additionally, polyurea’s quick cure time allows homeowners to
              resume garage activities much sooner than with other coatings.
              This convenience, combined with its long-lasting protection, makes
              polyurea a smart investment for those looking to increase the
              value and functionality of their home
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Environmental Impact of Polyurea Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              In nowadays world, the environmental impact of materials and
              coatings is a developing problem. Polyurea sticks out in this
              regard as well. Unlike some other coatings that release harmful
              VOCs (volatile organic compounds) during use, polyurea floor
              coatings have low VOCs. This makes it a great option for the
              environment. This is in particular essential in Tampa, wherein air
              nice and environmental sustainability are increasingly more
              prioritized.
            </p>
            <p className="mt-2">
              Polyuria is highly durable. Floors coated with it require much
              less frequent application. This reduces the overall consumption of
              resources and materials. In the long term, it decreases the
              environmental effects. As a result, Polyurea is an excellent
              choice for environmentally conscious clients and organizations in
              Tampa.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Polyurea’s Role in Tampa’s Climate",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Tampa’s weather is characterized by way of excessive humidity,
              extreme sun, and unexpected storms. These conditions can play a
              role in homes and floors, making the selection of coating even
              more important. Polyurea’s moisture resistance presents a
              significant advantage in Tampa. High humidity levels can lead to
              mildew and mold growth on less durable coatings. However, Polyurea
              creates a waterproof barrier. This barrier prevents moisture from
              penetrating the floor, protecting both the coating and the
              underlying material. In addition to moisture resistance,
              Polyurea’s UV resistance is every other cause this is properly
              suitable for Tampa’s climate. Intense sun exposure can cause many
              coatings to crack, fade, or degrade over time.
            </p>
            <p className="mt-2">
              polyurea ideal for outdoor applications, such as driveways,
              patios, and pool decks, where exposure to the elements is
              unavoidable.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Are You Searching for the Services of Coating?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Is your garage floor suffering to keep up with the desires of each
              day’s existence? It’s time to give it the protection and
              durability it deserves. Our exclusive garage floor coating service
              creates a pristine, long-lasting surface that resists heavy use
              while looking exceptional. Whether you’re aiming to enhance your
              house or improve your workspace, our coating service offers an
              appropriate solution.
            </p>
            <p className="mt-2">
              Don’t let your garage floor fall briefly take the first step
              closer to a higher-included region in recent times!
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
              "What Sets Polyurea Coating Apart from Other Coatings in Tampa?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "August 26, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "7:47 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Polyurea-Coating.png"
            alt="Polyurea-Coating"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            The climate regularly assesses the strength of materials, so finding
            the proper defensive coating is important in Tampa. Whether for
            residential, enterprise, or business programs, coatings play an
            important role in improving the strength and look of floors. Among
            the forms of options available, Polyurea coating sticks out as a
            complicated choice. Known for its superb durability, flexibility,
            and resistance to environmental elements. Polyurea has gained
            recognition in Tampa for its ability to resolve the specific
            challenges of the locals. This article explores what makes polyurea
            coats apart from unusual coatings. Additionally, their capabilities,
            benefits, and why it’s a pass-through solution for the public in
            Tampa.
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
            Polyurea coating has validated itself to be an advanced preference
            for a huge style of programs in Tampa. Whether for industrial
            enterprise, residential, or commercial use, Polyurea offers
            unequaled durability, flexibility, and resistance to environmental
            elements. Polyurea’s ability to withstand Tampa’s unique weather
            conditions is a significant advantage. Combined with its quick cure
            time and chemical resistance, it proves to be a worthwhile
            investment. This makes it ideal for anyone looking to protect and
            increase their wealth. As more people in Tampa recognize these
            benefits, polyuria is likely to grow in popularity. It has set a new
            standard for protection coatings in the region
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
