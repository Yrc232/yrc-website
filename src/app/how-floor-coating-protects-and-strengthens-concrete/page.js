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
    heading: "What is Floor Coating?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The coating is a defensive layer applied over concrete surfaces.
              It can be made from many materials, such as epoxy, polyurethane,
              and polyaspartic. Each kind has its benefits, making it
              appropriate for exceptional environments.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "The Importance of Floor Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Concrete flooring can be effortlessly broken. Water can seep in,
              causing cracks. Chemicals can stain or eat away at the surface.
              Heavy equipment can make marks and dents. By applying the coating,
              you make a shield for your concrete. It helps prevent damage and
              keeps your floors looking new.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of Floor Coating",
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
        subheading: "Protection from Moisture",
        paragraph: (
          <div>
            <p>
              Moisture can be a massive problem for concrete, leading to mildew
              increase and structural harm. A suitable floor coating acts as a
              barrier in opposition to water, helping maintain your concrete dry
              and safe. Basement ground coating is sizeable in areas susceptible
              to flooding or water damage. It keeps your basement looking clean
              and prevents issues.
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
        subheading: "Resistance to Chemicals",
        paragraph: (
          <div>
            <p>
              Many workplaces use chemicals that could damage concrete surfaces.
              Acidic materials can rust and eat away at the concrete through the
              years. An exquisite coating allows guard in opposition to those
              harmful chemical compounds. This safety is crucial in places like
              garages, warehouses, and factories, where spills appear regularly.
              Choosing the proper floor coating now not only shields your
              concrete but also saves you cash by decreasing the need for upkeep
              and replacements. Investing in a durable coating can extend the
              life of your floors and keep them looking brilliant.
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
        subheading: "Enhanced Durability",
        paragraph: (
          <div>
            <p>
              This coating adds a layer of strength to the concrete. It can
              withstand heavy visitors and effects, making it best for
              high-foot-traffic and car-visitors commercial spaces. The coating
              allows the integrity of the concrete to be maintained. This
              durability means less repairs and a longer lifespan for your
              floors.
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
        subheading: "Improved Safety",
        paragraph: (
          <div>
            <p>
              Slippery flooring can cause accidents. Many ground coatings have
              anti-slip properties, which help reduce the danger of slips and
              falls. This feature is mainly beneficial in homes, warehouses, and
              industrial regions. Safety should always be a priority, and floor
              coating helps ensure it.
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
        subheading: "Aesthetic Appeal",
        paragraph: (
          <div>
            <p>
              A well-covered ground looks extraordinary. It can liven up any
              space and provide it with a clean look. You can select from
              various colors and finishes to match your style. This aesthetic
              improvement can also increase the cost of your house.
            </p>
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
              Applying ground coating includes several steps. Here’s a brief
              assessment
            </p>
          </div>
        ),
        listItems: [
          "Surface Preparation: The concrete must be clean and loose from debris. This can additionally encompass grinding or shot blasting to create a smooth surface.",
          " Repairing Cracks: Any existing cracks or damages need repair. This ensures a solid base for the coating.",
          " Applying the Coating: The coating is applied evenly, usually in multiple layers. Each layer needs time to cure properly.",
          "Finishing Touches: After curing, any additional treatments, like anti-slip additives, can be added.",
          " Curing: The final layer needs time to heal before use. This ensures that the coating bonds well with the concrete.",
        ],
      },
    ],
  },
  {
    heading: "Fun Facts About Floor Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Epoxy floor coatings are recognized for their excessive gloss finish. This makes spaces seem significant and brighter.",
          " Polyaspartic coatings treatment is much quicker than other sorts. They can be used for only a few hours.",
          " Many ground coatings can be carried out at low temperatures, making them versatile for 12 months of spherical use.",
        ],
      },
    ],
  },
  {
    heading: "Ready for a Fresh, Strong Floor?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Is your concrete looking worn or damaged? Do not let cracks and
              stains wreck its appeal. Our concrete coating services are here to
              give your floors the strength and shine they want. We provide
              first-rate coatings for floors that protect against wear and tear,
              moisture, and chemical materials. Transform your area and enhance
              its enchantment with our expert services.Ready to revitalize your
              concrete and raise your home’s value?
            </p>
          </div>
        ),
      },
    ],
  },
];
const faqsData = [
  {     question: "How Long Does Ground Coating Last?",
     answer:
       "The lifespan of ground coatings can vary. Generally, they last 5 to 15 years, depending on the type and utilization.",
   },
   {
     question: "Can I Apply Floor Coating Myself?",
     answer:
       "While DIY is possible, the professional application gives better results. Proper surface preparation is key.",
   },   {
     question: "Is Floor Coating Safe For Pets And Children?",
     answer:
       "Yes, most floor coatings are safe once cured. Always check product specifications for safety information.",
   },
  //  {
  //    question: "Can I Remove Swirl Marks by Hand?",
  //    answer:
  //      "Yes, removing swirls by using a hand is possible with a mark remover and a microfiber fabric. This approach requires greater effort and endurance as compared to machine polishing. Apply the remover in small sections, lightly work it into the paint, and buff the location until clean.",
  //  },
  //  {
  //    question: "How to Buff Without Swirl Marks?",
  //    answer:
  //      "To buff without growing marks, use a smooth, tender microfiber cloth or a buffing pad. Apply light, and even pressure, and use an again-and-forth or side-to-side motion instead of circular moves. Ensure the floor is clean and avoid excessive stress to save you new blemishes.",
  //  },
 ];
const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#0D772F] to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title || "How Floor Coating Protects and Strengthens Concrete?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "October 11, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "9:31 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/How-Floor-Coating-Protects-and-Strengthens-Concrete.png"
            alt="Epoxy Concrete Flooring"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Concrete is a strong fabric that could be put down over the years.
            It’s frequently exposed to diverse elements, including chemical
            compounds, water, and heavy machinery. This is where floor coating
            is available. This protects and strengthens concrete, extending its
            lifespan and enhancing its look. This article explores how to do
            coating and why it is a good investment.
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
            Floor coating plays an essential role in protecting and
            strengthening concrete. It guards against moisture, chemical
            substances, and heavy put on. There’s a solution for every need,
            with basement floor coating and floor-to-wall coating. Investing in
            ground coating complements safety and strength and boosts your
            area’s visual appeal. Whether for a home or commercial enterprise,
            floor coating is the best choice for preserving concrete and
            ensuring it lasts for future years.
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
