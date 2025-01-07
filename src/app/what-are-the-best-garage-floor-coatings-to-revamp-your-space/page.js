import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

// Updated Data Structure
const defaultData = [
  {
    heading: "Epoxy Floor Coatings",
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
        subheading: "Overview",
        paragraph: (
          <div>
            <p>
              Epoxy floor coatings are often favored for garage floor coatings
              due to their exceptional durability, adaptability, and aesthetic
              appeal. These coatings comprise a blend of resin and hardener
              that, when applied to the concrete floor, provide a durable and
              continuous surface.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits",
    sections: [
      {
        subheading: "",
        paragraph:
          "Superb durability and exceptional resistance to stains, chemicals, and abrasions. We offer a diverse selection of colors and finishes, including solid hues, metallic shades, and ornamental flakes. Simple to clean and upkeep, rendering them well-suited for heavily used spaces such as garages.",
      },
    ],
  },
  ,
  {
    heading: "Considerations",
    sections: [
      {
        subheading: "",
        paragraph:
          "Thorough surface preparation is crucial for achieving a successful application of epoxy coating. Periodic reapplication may be necessary to sustain the look and performance of epoxy coatings.",
      },
    ],
  },
  {
    heading: "Polyurea Floor Coatings",
    sections: [
      {
        subheading: "",
        paragraph: "",

        image: "",
      },
    ],
  },
  {
    heading: "Overview",
    sections: [
      {
        paragraph:
          "Polyurea garage floor coatings have comparable characteristics to epoxy coatings, while also providing superior flexibility and impact resistance. These coatings undergo rapid curing, enabling expedited installation and minimizing downtime.",

        image: "",
      },
    ],
  },
  {
    heading: "Advantages",
    sections: [
      {
        subheading: "",
        paragraph:
          "Unparalleled toughness and resilience against abrasions, collisions, and harsh chemicals. The rapid curing time allows for same-day installation, minimizing disordering to your daily activities. The UV stability of the product guarantees that the color and finish will remain intact for a significant period, even when exposed to outside garage environments.",

        image: "",
      },
    ],
  },
  {
    heading: "Considerations",
    sections: [
      {
        subheading: "",
        paragraph:
          "Polyurea coatings are typically pricier than epoxy alternatives because of their superior characteristics. It is preferable to have a expert install the product to guarantee correct application and maximum efficacy.",

        image: "",
      },
    ],
  },
  {
    heading: "Polyaspartic Floor Coatings",
    sections: [
      {
        paragraph: "",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Overview",
        paragraph: (
          <div>
            <p>
              Polyaspartic floor coatings have comparable advantages to polyurea
              coatings, such as expedited cure periods and exceptional
              resilience. These coatings are commonly used in commercial and
              industrial settings but are increasingly being embraced in private
              garages due to their exceptional performance.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
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
        subheading: "Advantages",
        paragraph: (
          <div>
            <p>
              Rapid drying periods enable the garage to be installed and used on
              the same day. Remarkable durability against abrasions, collisions,
              chemicals, and UV exposure. Offered in a diverse range of hues and
              treatments, including transparent coatings that enhance the
              inherent allure of concrete.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
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
        subheading: "Considerations",
        paragraph: (
          <div>
            <p>
              Professional installation may be necessary for polyaspartic
              coatings due to their rapid curing properties and particular
              application methods. Greater initial expense in comparison to
              conventional epoxy finishes
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Concrete Stains and Sealers",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
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
        subheading: "Overview",
        paragraph: (
          <div>
            <p className="mt-2">
              Concrete stains and sealers provide a more authentic and
              traditional appearance in contrast to epoxy and polyurea garage
              floor coatings. These compounds deeply infiltrate the concrete
              surface to intensify its color and shield it from stains,
              dampness, and abrasion.
            </p>
            <p className="mt-2"></p>
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
        subheading: "Advantages",
        paragraph: (
          <div>
            <p className="mt-2">
              Enhances the inherent variances in concrete to create a typical
              and customized appearance. Provides resistance to stains, oil
              spills, and the penetration of moisture.
            </p>
            <p className="mt-2">
              Minimal upkeep is needed, with occasional application of sealer to
              sustain function.
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
        subheading: "Considerations",
        paragraph: (
          <div>
            <p className="mt-2">
              The available color choices are more restricted in comparison to
              epoxy and polyurea coatings. Regular reapplication of sealer may
              be necessary to retain both the aesthetic appeal and protective
              qualities.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Rubber Floor Tiles",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
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
        subheading: "Overview",
        paragraph: (
          <div>
            <p className="mt-2">
              Rubber floor tiles provide a practical and cost-effective
              substitute for conventional garage floor coatings. These tiles are
              easy to place and provide a comfortable, non-slip surface for your
              garage.
            </p>
            <p className="mt-2"></p>
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
        subheading: "Advantages",
        paragraph: (
          <div>
            <p className="mt-2">
              Rapid and effortless do-it-yourself installation, devoid of any
              necessity for specialized equipment or adhesives. Superb
              durability and exceptional resistance to impacts, chemicals, and
              moisture. A padded surface offers relief from weariness and
              diminishes noise and vibrations.
            </p>
            <p className="mt-2"></p>
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
        subheading: "Considerations",
        paragraph: (
          <div>
            <p className="mt-2">
              The range of design options is limited compared to coatings,
              providing a smaller selection of colors and textures. Periodic
              cleaning and maintenance may be necessary to avoid the collection
              of dirt and debris.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading:
      "Revitalize Your Garage: Transform with our Premier Coating Services Now!",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p className="mt-2">
              Are you prepared to convert your garage into an impressive and
              long-lasting area that showcases your style and personality? Our
              team of specialists focuses on providing high-quality garage floor
              coatings that improve the appearance, usefulness, and durability
              of your garage. Do not accept a dull and unstimulating floor.
              Experience the formidable capabilities of our expertly applied
              garage floor coatings! Contact us immediately and allow us to
              engage you in realizing your ideal garage.
            </p>
            <p className="mt-2"></p>
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
              "What Are the Best Garage Floor Coatings to Revamp Your Space?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 30, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "6:06 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/What-Are-the-Best-Garage-Floor-Coatings-to-Revamp-Your-Space-1.jpg"
            alt="What-Are-the-Best-Garage-Floor-Coatings-to-Revamp-Your-Space"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Applying a metallic epoxy coating to your floor can transform a
            plain surface into a stunning, gleaming work of art. The unique
            blend of metallic pigments with epoxy resin creates a floor that’s
            not just visually appealing but also durable and resistant to wear.
            However, achieving that perfect finish requires thorough
            preparation. Here’s what you need to do before applying a metallic
            epoxy coating to ensure a successful application and breathtaking
            results.
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
            If you want to create a space that meets your needs and increases
            the value of your home, you need to choose the right garage floor
            coatings. There are a few best garage floor coatings choice
            accessible to fit each carport, depending upon your preferences.
            These options include epoxy garage floor coatings for durability,
            polyurea for speedy drying, poly aspartic for adaptability, dyes and
            sealers for a natural look, and rubber tiles for convenience. When
            choosing a coating for your garage floor, take into account your
            budget, charming look, and performance needs. By doing so, you may
            enjoy the advantages of a rejuvenated area for an extended period.
          </p>
          <p className="text-md text-black mt-2"></p>
        </div>
        {/* FAQs Section */}
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
