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
    heading: "Overview of Patio Resurfacing",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Patio resurfacing involves the application of new materials or
              coatings over your existing patio to repair damage, improve
              appearance, and extend its life. This process can vary in duration
              based on several factors.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Size of the Patio: Greater-sized patios necessitate additional time for prepping, applying, and allowing the material to harden.",
          "Condition of Existing Surface: The amount of repair work needed can affect the project timeline.",
          "Type of Resurfacing Material: Different materials and finishes require varying amounts of time to apply and cure.",
        ],
      },
    ],
  },
  {
    heading: "Typical Duration of Patio Resurfacing",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Patio concrete resurfacing in Tampa usually takes anywhere from a
              few days to a week to complete. However, this timeline can be
              broken down into several key stages.
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
    heading: "",
    sections: [
      {
        subheading: "Preparation Stage",
        paragraph: "",
        listItems: [
          "Duration: 1-2 days",
          "Activities: Cleaning the existing surface, repairing cracks or damages, and preparing the area for the application of new materials.",
        ],
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "Application Stage",
        paragraph: "",
        listItems: [
          "Duration: 1-3 days, depending on the complexity and the type of resurfacing material.",
          "Details: This stage involves the actual application of the new surface material, whether it’s a concrete overlay, decorative stencil, or a Floor coating system.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Curing Stage",
        paragraph: "",

        image: "",
        listItems: [
          "Duration: 24 hours to several days",
          "Explanation: The curing time varies significantly depending on the material used. Some coatings might be ready for light foot traffic within a day, while others, like concrete overlays, may require several days to cure fully.",
        ],
      },
    ],
  },
  {
    heading: "Extending the Life of Your Resurfaced Patio",
    sections: [
      {
        paragraph:
          "To maximize the investment in your patio resurfacing project, consider the following tips:",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Regular Maintenance",
        paragraph: "",

        image: "",
        listItems: [
          "Routine Cleaning: Keeping your patio clean from debris and dirt can prevent wear and tear.",
          "Sealant Reapplication: Periodically reapplying sealant can protect the surface from UV rays and moisture.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Choosing Durable Materials",
        paragraph: "",

        image: "",
        listItems: [
          "Quality Over Cost: Investing in high-quality epoxy patio resurfacing materials can extend the life of your patio, even in the challenging Tampa climate.",
        ],
      },
    ],
  },
  {
    heading: "Planning Your Project",
    sections: [
      {
        paragraph:
          "When planning for patio resurfacing in Tampa, consider the seasonal weather patterns. The best time for such projects is during dry, cooler months to avoid delays due to rain or excessive heat, which can affect the curing process.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Working with Professionals",
        paragraph: (
          <div>
            <p>
              Hiring experienced professionals can ensure the project is
              completed efficiently and to a high standard. Experts can provide
              an accurate timeline, based on their assessment of your specific
              patio and chosen materials.
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
    heading: "Long-term Care and Maintenance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ensuring your newly resurfaced patio remains in top condition
              requires ongoing care. Here are some suggestions to preserve both
              the pleasing look and practicality of it.
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
        subheading: "Regular Cleaning",
        paragraph: (
          <div>
            <p>
              Simple Measures: Regular sweeping and occasional washing can
              prevent dirt accumulation and staining. Utilize mild cleaning
              solutions to prevent surface damage.
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
        subheading: "Protective Measures",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Furniture Pads: Use protective pads under patio furniture to prevent scratches and wear on the resurface cement patio.",
          "Rug Use: Consider placing outdoor rugs in high-traffic areas to reduce direct wear on the surface.",
        ],
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Professional Inspections",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Routine Checks: Regularly scheduling a professional inspection of your patio can assist detect any concerns in advance, preventing them from escalating into major problems and allowing for timely repairs and upkeep.",
        ],
      },
    ],
  },
  {
    heading: "Dreaming of a Patio That Captures the Essence of Outdoor Living?",
    sections: [
      {
        subheading: "Professional Inspections",
        paragraph: (
          <div>
            <p>
              Enhance the aesthetic appeal and durable quality of your outdoor
              area by utilizing our outstanding Patio Coating Services. Envision
              stepping onto a patio that not only showcases your distinctive
              taste but also endures the challenges posed by the outdoors over
              time. From sleek, modern finishes to classic, textured looks, we
              customize our services to meet your vision and lifestyle needs.
              Our team of professionals is dedicated to converting your patio
              into a beautiful and practical refuge for both rest and enjoyment.
            </p>
            <p className="mt-2">
              Ready to turn your dream patio into a reality and enjoy the
              ultimate outdoor living experience?
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
              "What Is the Typical Duration of Patio Resurfacing in Tampa?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "April 2, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:04 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/What-Is-the-Typical-Duration-of-Patio-Resurfacing-in-Tampa-2.jpg"
            alt="Polished Concrete"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Resurfacing patios in Tampa, or any location, may rejuvenate outdoor
            spaces, converting them into appealing areas for leisure and
            socializing. But, one of the common questions homeowners have is
            about the duration of the patio resurfacing process. This article
            will examine the chronological sequence and assist in developing
            more effective plans and establishing practical anticipations for
            the renovation of your outdoor living area.
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
            The typical duration of a patio resurfacing project in Tampa can
            range from a few days to about a week, influenced by the patio’s
            size, condition, and the materials used. Proper planning and working
            with seasoned professionals can streamline the process.
            Additionally, ensuring minimal disruption and a beautifully
            transformed patio space. Regular maintenance and the choice of
            durable materials are key to enjoying your resurfaced patio for
            years to come. Additionally, making it a worthwhile investment in
            your home’s outdoor living areas.
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
