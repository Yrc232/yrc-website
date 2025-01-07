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
    heading: "Assessing Your Needs",
    sections: [
      {
        subheading: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Climate and Weather Conditions",
        paragraph: (
          <div>
            <p>
              Take into account the climatic conditions in your area,
              encompassing variations in temperature, degrees of humidity, and
              degree of exposure to sunshine. Choose a protective layer that is
              resistant to weathering and does not lose color, develop cracks,
              or peel off.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Traffic and Usage",
        paragraph: (
          <div>
            <p>
              Assess the frequency of use and the nature of activities that will
              occur on your pool deck coating. Select a coating that is capable
              of withstanding high volumes of pedestrian activity, exposure to
              pool chemicals, and the possibility of being scratched or worn
              down by furniture and toys.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Exploring Coating Options",
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
        subheading: "Concrete Coatings",
        paragraph: (
          <div>
            <p>
              These coatings are commonly selected for pool decks because of
              their robustness and adaptability. Acrylic, epoxy pool deck
              coatings, and polyurethane coatings are available as options, each
              providing varying degrees of protection and visual attractiveness.
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
        subheading: "Rubberized Coatings",
        paragraph: (
          <div>
            <p>
              These coatings offer a pliable and slip-resistant surface, making
              them well-suited for pool decks, particularly in locations where
              safety is of utmost importance. These coatings exhibit fracture
              resistance and can endure continuous exposure to water and
              sunshine.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Paver Sealers",
        paragraph: (
          <div>
            <p>
              For pool decks made of pavers or natural stone, it is advisable to
              use a paver sealer. This will improve the color, protect against
              stains, and prevent the growth of weeds between the stones. Select
              a sealer that is particularly designed for outdoor applications
              and provides UV protection.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Prioritizing Safety and Slip Resistance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
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
        subheading: "Non-Slip Additives",
        paragraph: (
          <div>
            <p>
              When searching for pool deck coatings, it is advisable to choose
              ones that have non-slip additives. These additives enhance
              traction and minimize the likelihood of slipping and falling,
              particularly when the surface is wet.
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
        subheading: "Texture and Finish",
        paragraph: (
          <div>
            <p>
              Choose coatings with a textured or matte surface that offer
              traction when walking without compromising on visual appeal.
              Refrain from using glossy coatings that may acquire a slippery
              texture when exposed to moisture.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Considering Aesthetics and Design",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Color Options",
        paragraph: (
          <div>
            <p>
              Choose a pool deck coating options that harmonizes with your
              outdoor design and increases the overall visual attractiveness of
              your pool area. Choose neutral tones to achieve a timeless look or
              use vivid hues to make a powerful and striking impression.
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
        subheading: "Decorative Finishes",
        paragraph: (
          <div>
            <p>
              Enhance the visual appeal of your rubber pool deck coating by
              considering decorative finishes such as stamped concrete,
              stenciled patterns, or unique designs. These finishes can
              replicate the appearance of genuine stone, tile, or wood while
              being significantly less expensive.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Budget and Maintenance Requirements",
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
    heading: "Initial Cost vs. Long-Term Value",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Take into account the initial expenses associated with installing
              the coating, as well as its long-term resilience and maintenance
              demands. Allocating resources to a superior coating initially
              might result in cost savings on future repairs and replacements.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Ease of Maintenance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Select a pool deck coating that is simple to clean and maintain,
              necessitating less exertion and cost to preserve its optimal
              appearance over time.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading:
      "Transform Your Tampa Oasis: Dive into Luxury with Our Pool Deck Coating Services!",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Are you prepared to convert your pool deck in Tampa into a
              beautiful oasis? Our pool deck coating services aim to improve
              safety, longevity, and design, assuring that your outdoor area
              becomes the object of envy in the community. To ensure that
              outdated or slippery surfaces do not diminish the quality of your
              poolside paradise, please call us now to arrange an appointment
              for a pool deck coating. This will allow you to experience a
              combination of beauty and practicality
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
            {title || "How Do I Select the Exact Pool Deck Coating?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "February 10, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "6:21 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/How-Do-I-Select-the-Exact-Pool-Deck-Coating-1.jpg"
            alt="How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            The pool deck serves as a vital component of your outdoor sanctuary,
            extending above an isolated relaxation area. Selecting the
            appropriate coating for your pool deck may improve safety,
            longevity, and visual appeal. This article will examine the key
            variables to consider when choosing an ideal pool deck coating that
            aligns with your requirements and aesthetic preferences.
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
            Selecting the appropriate pool deck coating is essential for
            creating a secure, practical, and attractive outdoor area. To choose
            the ideal coating for your pool deck and improve your outdoor living
            experience, carefully evaluate your requirements, examine several
            coating choices, prioritize safety and slide resistance, take into
            account beauty and design, and consider budget and maintenance
            demands. Explore the field of pool deck coatings and enhance your
            poolside home with a striking impact!
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
