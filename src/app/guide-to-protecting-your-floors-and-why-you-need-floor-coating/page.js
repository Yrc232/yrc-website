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
    heading: "A Shield for Your Surfaces",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A specialized protective layer could connect to various sorts of
              flooring materials to defend them from harm, stains, and
              disintegration. Whether you’ve got hardwood, concrete, tile, or
              epoxy floors, the right floor coating can give an extra barrier
              against the components, extending the life of your floors and
              reducing the requirement for visit repairs or replacements
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Why Do You Need Floor Coating?",
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
        subheading: "Enhanced Durability:",
        paragraph: (
          <div>
            <p>
              It acts as a shield, giving an extra layer of protection against
              scratches, scuffs, and other forms of wear. This upgraded strength
              is especially valuable in high-traffic ranges inclined to heavy
              use..
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
        subheading: "Stain Resistance",
        paragraph: (
          <div>
            <p>
              Spills and stains are inevitable in any space, but floor coating
              makes a barrier that makes it easier to clean and prevents
              substances from penetrating the flooring material. Typically
              especially beneficial in kitchens, dining areas, and commercial
              spaces where spills are common.
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
        subheading: "Chemical Resistance",
        paragraph: (
          <div>
            <p>
              Certain flooring materials are susceptible to damage from
              chemicals found in cleaning items or other substances. It offers
              chemical resistance, shielding your floors from potential hurt and
              protecting their unique appearance.
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
        subheading: "UV Protection",
        paragraph: (
          <div>
            <p>
              Over time, presentation to daylight can cause blurring and
              discoloration of floors. Floor coating with UV security makes a
              difference in relieving the effect of daylight, protecting the
              vibrant colors, and finishing your floors.
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
        subheading: "Easy Maintenance",
        paragraph: (
          <div>
            <p>
              It simplifies upkeep by making a smooth, easy-to-clean surface.
              Normal cleaning gets to be more proficient, and the requirement
              for broad support schedules is significantly reduced.
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
        subheading: "Aesthetic Enhancement",
        paragraph: (
          <div>
            <p className="mt-2">
              Beyond protection, it can upgrade the stylish request of your
              floors. It is accessible in different finishes, including shiny,
              matte, or satin, allowing you to customize the see of your space
              while protecting the basic flooring material.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Choosing the Right Shield for Your Floors",
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
        subheading: "Epoxy Coating",
        paragraph: (
          <div>
            <p>
              The epoxy coating may be a popular choice for concrete floors. It
              forms a consistent, reflexive surface that’s highly durable and
              safe from chemicals, making it appropriate for garages, basements,
              and commercial spaces..
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Polyurethane Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyurethane coating gives a solid finish with excellent abrasion
              resistance. It is commonly utilized on hardwood floors, offering
              security against scratches and wear while enhancing the
              characteristic excellence of the wood.
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
        subheading: "Acrylic Coating",
        paragraph: (
          <div>
            <p>
              Acrylic coatings offer flexibility and can connect to different
              flooring materials. They have a reputation for their fast drying
              time, UV resistance, and ease of application. People frequently
              choose Acrylic coatings for decorative finishes.
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
        subheading: "Polyaspartic Coating",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings are a fast-curing choice reasonable for both
              indoor and open-air applications. They give a high level of
              assurance against scraped areas, chemicals, and UV exposure.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "The Application Process",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The application of floor coating requires accuracy and the ability
              to realize optimal results. There may be a common overview of the
              process:
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
            <p>
              Before applying the coating, the floor must be completely cleaned
              and arranged. This may include cleaning, repairing breaks or
              defects, and guaranteeing a smooth surface..
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
        subheading: "Primer Application",
        paragraph: (
          <div>
            <p>
              A primer may be connected to an upgraded attachment between the
              floor and the coating. This step is significant for ensuring a
              consistent and long-lasting finish.
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
        subheading: "Coating Application",
        paragraph: (
          <div>
            <p>
              The chosen floor coating is connected in layers, ensuring total
              scope and consistency. The sort of coating will decide the number
              of layers required for effective protection.
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
        subheading: "Final Inspection",
        paragraph: (
          <div>
            <p>
              Once the coating is completely cured, a last assessment is
              conducted to guarantee that the application is faultless, and the
              floor is prepared for use.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "A Wise Investment in Long-Term Protection",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              While the upfront cost of floor coating could seem like an
              investment, it is basic to see it as a key choice for long-term
              assurance and upkeep cost savings. Consider the following factors:
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
        subheading: "Reduced Maintenance Expenses",
        paragraph: (
          <div>
            <p>
              A secured and easy-to-clean surface significantly reduces the
              ongoing upkeep costs for your floors. Regular cleaning becomes
              more effective, and it minimizes the need for extensive repairs.
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
        subheading: "Extended Floor Lifespan",
        paragraph: (
          <div>
            <p>
              The included durability and protection given by floor coating
              contribute to the expanded life expectancy of your floors. This
              implies fewer replacements and a more sustainable, cost-effective
              arrangement in the long run.
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
        subheading: "Expertise",
        paragraph: (
          <div>
            <p>
              Professionals have the information and experience to assess the
              particular needs of your floors and select the right coating for
              ideal protection.
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
        subheading: "Quality Materials",
        paragraph: (
          <div>
            <p>
              Professional services use high-quality coatings which will not be
              readily accessible for DIY applications. This ensures a durable
              and long-lasting finish.
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
        subheading: "Efficiency",
        paragraph: (
          <div>
            <p>
              Professional application is regularly more productive, with
              prepared technicians completing the method promptly. This
              minimizes disturbances to your everyday routine.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Elevate Your Space with Floor Coating Excellence",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ready to elevate your floors and protect them with the
              transformative power of floor coating? Click below to explore
              professional services and discover how this strategic investment
              can enhance durability, resist stains, and preserve the beauty of
              your floors for years to come. Transform your living or commercial
              space with the excellence of epoxy floor coating today.
            </p>
            <p className="mt-2">
              Transform Your Floors with Professional Coating
            </p>
            <p>[Explore Floor Coating Services]</p>
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
              "The Ultimate Guide to Protecting Your Floors and Why You Need Floor Coating"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 2, 2024"}
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
            src="/images/Guide-to-Protecting-Your-Floors-and-Why-You-Need-Floor-Coating-1.jpg"
            alt="How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Your floors serve as the foundation of your living space, reflecting
            your style and contributing to the general stylish of your home or
            business. Be that as it may, day-by-day wear and tear, spills, and
            foot activity can take a toll on indeed the strong flooring
            materials. A capable solution designed to not as it were secure but
            to upgrade the life span and appearance of your floors. Now we are
            going investigate the significance of floor coating, the various
            types available, and why investing in this protective layer may be a
            smart choice for protecting the beauty of your floors.
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
            Investing in floor coating doesn’t just offer protection, it
            strategically decides for long-term support savings, extends floor
            lifespan, and conserves your property’s value. With different types
            of coatings available and the expertise of proficient application
            services, you’ll elevate your floors to new heights of resilience
            and visual appeal.
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
