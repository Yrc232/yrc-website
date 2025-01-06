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
    heading: "Elevating Aesthetic Appeal",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The visual impact of freshly resurfacing pool decks can be
              striking. There is a wide range of materials and finishes to
              choose from. Homeowners can customize the look to match their
              style and the home’s overall design.
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
        subheading: "Wide Range of Design Options",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Texture and Color Choices: Contemporary resurfacing procedures provide a wide range of textures and colors, enabling full customization. From natural stone looks to vibrant patterns, the possibilities are endless.",
          "Seamless Integration: A resurfaced pool deck can be designed to complement the existing landscaping and architectural style of your home. Creating a cohesive and attractive outdoor area.",
        ],
      },
    ],
  },
  {
    heading: "Enhancing Safety and Comfort",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A resurface pool deck isn’t just about aesthetics; it’s also about
              making the space safer and more comfortable for everyone to enjoy.
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
        subheading: "Improved Traction",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Slip-resistant Finishes: Many resurfacing options include slip-resistant coatings that reduce the risk of accidents around the pool, especially when wet.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Cooler Surfaces",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Heat-reflective Materials: Certain resurfacing materials are designed to reflect sunlight. Significantly reducing the surface temperature and making the deck more comfortable to walk on during hot days.",
        ],
      },
    ],
  },
  {
    heading: "Increasing Property Value",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Investing in the resurfacing of pool decks can enhance the overall
              value of your house. Ensuring its profitability in the long term.
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
        subheading: "Attractiveness to Potential Buyers",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Curb Appeal: A well-maintained and beautifully pool decking resurfacing can greatly enhance the property’s curb appeal. Additionally, attracting potential buyers and possibly increases the home’s market value.",
        ],
      },
    ],
  },
  {
    heading: "Long-Term Durability",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A resurfaced pool deck not only enhances its appearance but also
              increases its durability and simplifies maintenance. Furthermore,
              guarantees the longevity of the natural beauty of your outside
              area..
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
        subheading: "Protection Against the Elements",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Weather-resistant Coatings: High-quality resurfacing materials can protect the deck from weathering. UV damage, and chemical exposure, prolong the life of the pool area.",
        ],
      },
    ],
  },
  {
    heading: "Environmental Considerations",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2">
              Choosing the right materials and methods for resurfacing pool
              decks. It can also have environmental benefits. It contributes to
              a more sustainable home.
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
        subheading: "Eco-friendly Options",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Sustainable Materials: Many companies offer resurfacing options that use eco-friendly or recycled materials, reducing the environmental footprint of your renovation project.",
        ],
      },
    ],
  },
  {
    heading: "Maintenance and Upkeep",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A key advantage of concrete pool deck resurfacing is the reduction
              in long-term maintenance efforts and costs, ensuring your outdoor
              space remains beautiful with minimal upkeep.
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
        subheading: "Ease of Maintenance",
        paragraph: <div></div>,
        listItems: [
          "Low-maintenance Materials: Many of the modern resurfacing materials require little to no maintenance, saving you time and money on cleaning and repairs.",
          "Durability: High-quality resurfacing options are designed to withstand wear and tear, resist staining, and repel mold and mildew, keeping your pool deck looking new for years.",
        ],
      },
    ],
  },
  {
    heading: "Sustainable Practices",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Incorporating sustainable practices into resurfacing pool decks
              projects not only benefits the environment but also contributes to
              the health and safety of your outdoor living space.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Healthier Outdoor Environments",
    sections: [
      {
        subheading: "",
        paragraph: <div></div>,
        listItems: [
          "Non-toxic Materials: Selecting non-toxic, VOC-free materials for your pool deck ensures a safer environment for your family and pets to enjoy.",
          "Heat Reduction: Opting for heat-reflective materials can lower the temperature of your pool deck, making it more comfortable during hot summer months and reducing the heat island effect in your backyard.",
        ],
      },
    ],
  },
  {
    heading: "Making the Decision",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Choosing to resurfacing pool decks is a substantial investment in
              both the monetary worth of your house and the quality of your
              outdoor activities. Understanding the benefits and considering
              your options carefully can help you make an informed decision that
              aligns with your budget, style preferences, and long-term goals
              for your home.
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
        subheading: "Consultation with Professionals",
        paragraph: <div></div>,
        listItems: [
          "Expert Advice: Consulting with professional contractors who specialize in resurfacing pool decks can provide valuable insights into the best materials and methods for your specific project.",
          "Custom Solutions: Professionals can offer tailored solutions that consider the unique aspects of your pool area, ensuring a successful transformation that meets your expectations.",
        ],
      },
    ],
  },
  {
    heading: "Ready to Elevate Your Pool Deck to Resort-Quality Splendor?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Elevate the appearance of your pool area with our Pool Deck
              Coating Services. Imagine stepping out to a beautifully resurfaced
              deck that not only dazzles the eye but also offers unparalleled
              durability and comfort underfoot. Our expert team specializes in
              turning your existing pool deck into a luxurious one. Inviting
              space that becomes the centerpiece of your outdoor living. With a
              wide array of finishes and textures to choose from, we tailor our
              services to fit your vision and lifestyle, ensuring your pool deck
              is as stunning as it is enduring.{" "}
            </p>
            <p className="mt-2">
              Are you ready to dive into the pool deck transformation of your
              dreams?
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
              "How Can Pool Deck Resurfacing Improve Your Home’s Beauty?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "March 26, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:54 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/How-Can-Pool-Deck-Resurfacing-Improve-Your-Homes-Beauty-2.jpg"
            alt="How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Transforming your home’s outdoor space to enhance its beauty and
            functionality can significantly increase its value and your
            enjoyment of it. An often neglected element of outdoor beauty is the
            pool deck. Resurfacing pool decks is not just about maintenance;
            it’s a creative opportunity to rejuvenate your home’s beauty and
            charm. This article will explore how this process can make a
            profound difference.
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
            Resurfacing pool decks is a powerful way to improve your home’s
            beauty, offering both aesthetic and functional benefits. By
            selecting the right materials and design, you can create a safer,
            more comfortable, and incredibly stylish pool area that enhances the
            overall appeal of your outdoor living space. Additionally, the
            increased durability and potential environmental benefits make pool
            deck resurfacing a smart choice for any homeowner looking to elevate
            their property. Whether you’re preparing to sell or simply want to
            enjoy your oasis to the fullest. A beautifully resurfaced pool deck
            can make all the difference.
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
