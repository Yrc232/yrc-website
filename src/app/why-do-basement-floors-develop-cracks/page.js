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
    heading: "Understanding Basement Floor Cracks",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [],
      },
    ],
  },
  {
    heading: "Types of Basement Floor Cracks",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Hairline cracks are thin, superficial cracks that often appear shortly after the concrete has been poured. These are usually not a cause for concern but can be a precursor to more serious issues if not monitored.",
          "Settlement cracks occur when the ground beneath the basement floor settles unevenly. This can cause significant stress on the concrete, leading to larger, more problematic cracks.",
          " Structural cracks are the most serious type of basement floor cracks. These cracks can indicate underlying issues with the foundation of your home and require immediate attention.",

          ,
        ],
      },
    ],
  },
  {
    heading: "Causes of Basement Floor Cracks",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "As concrete dries and hardens, it can shrink slightly. This shrinkage can cause small cracks to appear, particularly if the concrete mix was too wet or if the curing process was rushed.",
          "The soil beneath your home can shift and settle over time. This movement can create voids under the basement floor, leading to cracks as the concrete tries to adjust to the changing ground beneath it.",
          "Water pressure from the ground can push against the basement floor, causing cracks to form. This is especially common in areas with high water tables or poor drainage systems.",
          "If the basement floor was not constructed properly, it is more likely to develop cracks. This includes issues like inadequate reinforcement, improper curing, and poor-quality concrete mix.",
          "It’s important to recognize when a crack is more than just an aesthetic problem. Look for signs like widening cracks, uneven floors, or water seepage. These can indicate more serious issues that need professional attention.",
        ],
      },
    ],
  },
  {
    heading: "How to Fix Basement Floor Cracks",
    sections: [
      {
        subheading: "Assessing the Severity of Cracks",
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
        subheading: "DIY or Professional Help?",
        paragraph: (
          <div>
            <p>
              Not all cracks are created equal. Some can be easily repaired with
              DIY methods, while others require the expertise of a professional.
              Assessing the severity of the cracks is the first step in deciding
              how to proceed.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "DIY Repair Methods",
    sections: [
      {
        subheading: "Using Epoxy or Polyurethane Injections",
        paragraph: (
          <div>
            <p>
              For minor cracks, epoxy or polyurethane injections can be an
              effective solution. These materials are injected into the crack,
              where they expand and harden, sealing the crack and preventing
              further damage
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
        subheading: "Concrete Patching",
        paragraph: (
          <div>
            <p>
              Larger cracks may require concrete patching. This involves
              cleaning out the crack and filling it with a concrete mix designed
              for repairs. It’s important to follow the manufacturer’s
              instructions for the best results.
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
        subheading: "Preventive Measures",
        paragraph: (
          <div>
            <p>
              Preventing future cracks is just as important as repairing
              existing ones. This can include measures like maintaining proper
              drainage around your home and ensuring consistent moisture levels
              in the soil.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Professional Repair Options",
    sections: [
      {
        subheading: "Underpinning",
        paragraph: (
          <div>
            <p>
              If the cracks are due to foundation issues, underpinning may be
              necessary. This involves strengthening the foundation by extending
              it deeper into the ground, providing more stability.
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
        subheading: "Slab Jacking",
        paragraph: (
          <div>
            <p>
              Slab jacking is a technique used to lift a sunken basement floor.
              This is done by injecting a mixture of sand, cement, and other
              materials under the floor, raising it back to its original level.
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
        subheading: "Comprehensive Waterproofing",
        paragraph: (
          <div>
            <p>
              Waterproofing your basement can help prevent cracks caused by
              hydrostatic pressure. This can include installing a sump pump,
              improving drainage, and applying waterproof coatings to the
              basement walls and floor.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Preventing Future Basement Floor Cracks",
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
        subheading: "Proper Drainage Solutions",
        paragraph: (
          <div>
            <p>
              Ensuring that water is directed away from your home’s foundation
              is crucial in preventing basement floor cracks. This can include
              installing gutters, downspouts, and French drains
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
        subheading: "Maintaining Consistent Moisture Levels",
        paragraph: (
          <div>
            <p>
              Keeping the soil around your home at a consistent moisture level
              can help prevent soil settling and shrinkage. This can be achieved
              through proper landscaping and irrigation practices.
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
        subheading: "Regular Inspections and Maintenance",
        paragraph: (
          <div>
            <p>
              Regularly inspecting your basement floor for signs of cracks and
              addressing any issues promptly can help prevent more serious
              problems down the line. Routine maintenance, such as sealing small
              cracks and ensuring proper drainage, is key to a healthy basement
              floor.
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
              "Why Do Basement Floors Develop Cracks and How Can I Fix Them?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "June 28, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "11:41 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Basement-Floors-Develop-Cracks-1.jpg"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Basement floors are the unsung heroes of our homes, providing a
            solid foundation for everything above them. But what happens when
            these sturdy surfaces start showing signs of wear and tear? Cracks
            in basement floors are a common issue that can cause a lot of stress
            for homeowners. Whether you’re worried about the structural
            integrity of your home or just tired of seeing those unsightly
            lines, understanding why these cracks appear and how to fix them is
            crucial.
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
            Cracks in your basement floor can be a headache, but understanding
            why they happen and how to fix them can make a world of difference.
            From minor hairline cracks to more serious structural issues, there
            are solutions available to address every type of crack. By taking
            proactive steps to repair and prevent cracks, you can ensure the
            longevity and stability of your basement floor.
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
