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
    heading: "Understanding Epoxy Patio Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy is a resin that, when mixed with a hardening agent, creates
              a strong and durable connection. Epoxy coatings boast resilience
              and versatility, making them suitable for a wide range of
              surfaces, including concrete patio epoxy coatings
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
        subheading: "Composition",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Resin and Hardener: The two components of epoxy mix together to create a hard, durable surface that adheres well to concrete.",
          "Protective Qualities: Once cured, epoxy forms a protective layer that resists wear, making it ideal for high-traffic areas.",
        ],
      },
    ],
  },
  {
    heading: "Benefits of Epoxy Coating for Patios",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy coating for patio offers several advantages that make it an
              attractive option for patio surfaces.
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
        subheading: "Durability",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Wear and Tear: Epoxy coatings can withstand the rigors of outdoor use, resisting damage from furniture, foot traffic, and even vehicles.",
          "Longevity: With proper installation and maintenance, an epoxy patio can last for many years without the need for frequent resurfacing.",
        ],
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
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Versatile Finishes: Epoxy comes in a variety of colors and textures, allowing for customization to fit any design aesthetic.",
          "Glossy Finish: The reflective quality of epoxy can brighten outdoor spaces and make them appear larger.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Resistance to Elements",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Weatherproof: Epoxy coatings exhibit high resistance to precipitation, ultraviolet radiation, and temperature variations, rendering them appropriate for outdoor settings.",
          "Stain Resistance: You can easily wipe away spills and stains, keeping the patio looking clean and new.",
        ],
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
              The success of an epoxy patio coating largely depends on the
              preparation and application process.
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
        subheading: "Surface Preparation",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Cleaning: It is imperative to carefully cleanse the concrete surface to eliminate grime, grease, and any already present coatings.",
          "Repairing Cracks: You should repair any cracks or damage in the concrete before applying the epoxy to ensure a smooth, uniform finish.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Application",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Professional Installation: While it’s possible to apply epoxy as a DIY project, professional installation is recommended to ensure optimal durability and appearance.",
        ],
      },
    ],
  },
  {
    heading: "Maintenance and Care",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2">
              Maintaining a patio epoxy coating is straightforward, contributing
              to its appeal as a low-maintenance option.
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
        subheading: "Easy Cleaning",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Routine Maintenance: Epoxy surfaces can be easily swept and mopped, requiring no special cleaning agents.",
          "Spot Treatment: Stains and spills can be quickly addressed without leaving permanent marks.",
        ],
      },
    ],
  },
  {
    sections: [
      {
        heading: "UV Protection",
        subheading: "",
        paragraph: (
          <div>
            <p>.</p>
          </div>
        ),
        listItems: [
          "Sun Exposure: Extended exposure to sunlight might result in the gradual yellowing of certain epoxy coatings. Selecting a UV-resistant formula can help maintain the color and finish.",
        ],
      },
    ],
  },
  {
    heading: "Considerations and Limitations",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            It is important to consider a few factors while epoxy coatings offer
            numerous benefits.
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Cost",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Initial Investment: The upfront cost of epoxy coating can be higher than other patio finishing options, but its durability often results in long-term savings.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Temperature Sensitivity",
        paragraph: <div></div>,
        listItems: [
          "Curing Conditions: Epoxy needs specific conditions to cure properly. Severe temperatures can impact the process of curing and the resulting results.",
          ,
        ],
      },
    ],
  },
  {
    heading:
      "Ready to Transform Your Patio and Garage into Functional Masterpieces?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Enhance the attractiveness and practicality of your home by
              utilizing our outstanding Patio Coating and Epoxy Garage Coating
              Services. Imagine a durable, stunning patio where memories are
              made and a sleek, resistant garage floor that withstands the test
              of time. Our expert team combines quality materials with
              impeccable craftsmanship to deliver surfaces that are not only
              visually appealing but also enduringly practical. Say goodbye to
              the mundane and hello to the exceptional. Allow us to assist you
              in creating a memorable impact on your residence.
            </p>
            <p className="mt-2">
              Are you prepared to enhance your living spaces with coatings that
              offer beauty, durability, and easy maintenance?
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
            {title || "Is Epoxy Patio Coating a Durable Option for Concrete?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "March 21, 2024"}
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
            src="/images/Is-Epoxy-Patio-Coating-a-Durable-Option-for-Concrete-2.jpg"
            alt="Is-Epoxy-Patio-Coating-a-Durable-Option-for-Concrete-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            When it comes to choosing a finishing touch for concrete patios,
            homeowners often seek solutions that blend durability with aesthetic
            appeal. Epoxy patio coating has been a favored option for
            individuals seeking to improve their outside areas. But is it a
            durable option for concrete? This article will explore the world of
            epoxy coatings and explore their suitability for patio applications.
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
            Epoxy patio coating is indeed a durable option for concrete
            surfaces, offering a blend of resilience, beauty, and ease of
            maintenance that few other finishes can match. Its ability to
            withstand wear, resist the elements, and transform the look of
            outdoor spaces makes it a compelling choice for homeowners looking
            to upgrade their patios. While the initial investment and need for
            professional installation may be considerations, the long-term
            benefits of a stunning, durable patio surface can outweigh these
            factors. Whether you’re revamping an old patio or finishing a new
            one, the epoxy coating provides a durable, attractive solution that
            can enhance your outdoor living experience for years to come.
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
