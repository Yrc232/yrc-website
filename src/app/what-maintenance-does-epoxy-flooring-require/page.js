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
    heading: "An Introduction to Epoxy Flooring",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Before discussing upkeep, let us briefly address the reasons why epoxy flooring is a highly desirable choice.
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
        subheading: "Durability",
        paragraph: (
          <div>
            <p>
            Epoxy flooring is broadly recognized for its exceptional strength, making it profoundly safe from scratches, harm, and chemical spills. Its solid characteristics make it a perfect option for locations with a part of foot activity.
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
        subheading: "Aesthetic Appeal",
        paragraph:
          "It offers a wide range of colors and finishes, which contribute to a refined and shiny appearance in both residential and business settings.",
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "Easy Maintenance",
        paragraph:
          "A striking good thing about epoxy flooring is its comparatively low maintenance requests. Nevertheless, careful maintenance is crucial to maintain its perfect state.",
      },
    ],
  },
  {
    heading: "Methodologies for Keeping up Epoxy Flooring",
    sections: [
      {
        subheading: "",
       

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading:"Routine Maintenance",
        paragraph:
          "The basic component of maintaining epoxy flooring is standard cleaning. Regularly clean or vacuum the floor to remove tidiness and earth. To achieve a more careful cleaning, utilize a brush with fine bristles or a wipe with a gentle, soft cleaning solution.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Avoid Harsh Cleaners",
        paragraph:
          "Although epoxy is durable, it is recommended to avoid the use of strong chemicals and harsh cleaning. Choose pH-neutral and soft cleansers to maintain the strength of the epoxy surface.",

        image: "",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Immediate Spill Cleanup",
        paragraph:
          "The chemical resistance of epoxy is a significant benefit, however, it is important to quickly address spills to avoid potential harm. To preserve the floor’s perfect state, use a gentle cloth or mop to remove any liquid.",

        image: "",
        
      },
    ],
  },
  {
    heading: "Minimize Scratches",
    sections: [
      {
        paragraph:
          "Although epoxy is resistant to scratches, adopting preventive measures can effectively prolong its durability. To decrease the risk of scratches, it is advisable to place felt pads under the legs of the furniture and refrain from pulling heavy things over the floor.",

        image: "",
        
      },
    ],
  },
  {
    heading: "Routine Inspections",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Regularly examine your epoxy flooring for any indications of damage or harm. To avoid the decline of the floor’s general appearance, swiftly address any concerns that arise to prevent them from spreading.
            </p>
            <p className="mt-2">
              Ready to elevate your garage from ordinary to extraordinary?
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Avoid Extreme Temperatures",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            It is sensitive to the effects of extreme temperatures. Prevent subjecting it to extreme temperatures, whether hot or cold, since this may result in potential harm. Utilize floor mats in regions that experience temperature variations.
            </p>
            <p className="mt-2">
             
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Reapply Sealant as Needed",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Over time, the epoxy sealant may degrade. Regularly inspect the sealant’s state and reapply it as necessary to maintain the protective coating while keeping the floor’s shine.
            </p>
            <p className="mt-2">
             
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of Proactive Maintenance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Engaging in proactive epoxy flooring maintenance provides many advantages by dedicating time and effort:
            </p>
            <p className="mt-2">
             
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
        subheading: "Extended Lifespan",
        paragraph: (
          <div>
            <p>
            Consistently providing proper maintenance and diligent care will substantially increase the life of your epoxy flooring, ensuring a durable and durable investment
            </p>
            <p className="mt-2">
             
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
        subheading: "Preserved Aesthetics",
        paragraph: (
          <div>
            <p>
            By using maintenance measures, you can uphold the visual attractiveness of your epoxy flooring, ensuring its continued freshness and vibrancy
            </p>
            <p className="mt-2">
             
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
        subheading: "Cost Reductions",
        paragraph: (
          <div>
            <p>
            Implementing proactive maintenance practices decreases the chance of significant repairs or replacements, resulting in possible overtime cost savings.
            </p>
            <p className="mt-2">
             
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Enhance Your Environment with Epoxy Flooring",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Are you prepared to witness the timeless beauty of epoxy flooring? Elevate your environment with our proficient installation services and unlock the strategies for simple maintenance. Reach out to us now to schedule a consultation, where our expert staff will assist you in finding a flooring solution that combines durability and a pleasing appearance. Enhance your environment with the permanent charm of epoxy flooring.
            </p>
            <p className="mt-2">
            Start on the initial stage of a durable and attractive investment!
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
            {title || "What Maintenance Does Epoxy Flooring Require?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 25, 2023"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:04 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/What-Maintenance-Does-Epoxy-Flooring-Require-1.jpg"
            alt="Polished Concrete"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Epoxy flooring has created significant popularity among consumers as
            well as companies due to its exceptional reliability, flexibility,
            and visual attractiveness. For those who have already invested in
            epoxy flooring or are contemplating doing so, it is essential to
            comprehend the maintenance obligations to guarantee its durability
            and ongoing aesthetic appeal. This article will provide a detailed
            examination of flooring maintenance, offering helpful tips to ensure
            the lasting clean appearance of your floors.
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
          The maintenance of epoxy flooring is an easy yet important part of making its strength and beauty appeal. By combining these strategies into your regular practice, you can experience the advantages of epoxy flooring for an extended period.
          </p>
          <p className="text-md text-black mt-2">
          It is important to keep in mind that taking even a small amount of care can have a significant impact on preserving the attractiveness and effectiveness of your epoxy floors. To ensure a durable flooring option, it is crucial to understand and follow the maintenance needs when considering its installation in your space.
          </p>
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
