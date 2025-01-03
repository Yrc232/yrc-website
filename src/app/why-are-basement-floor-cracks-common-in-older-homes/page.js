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
    heading: "Reasons for Crack Floor",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              There are different factors that can cause cracks in basements.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Shifting Soil: Soil moves over the years. The floor under your home may also settle, causing the concrete to shift and crack.",
          "Concrete Aging: Concrete ages and, through the years, shows put on, including cracks.",
          " Moisture Issues: Moisture often causes cracks. Water seeps into small gaps, increasing them over time.",
          "Temperature Changes: Temperature adjustments cause concrete to amplify and cut back, mainly to cracks.",
          "Understanding those motives lets you avoid worry and pay attention to high-quality answers.",
        ],
      },
    ],
  },
  {
    heading: "How Do You Repair Basement Floor Cracks?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              You’ve observed those cracks. So, how do you restore basement
              floor cracks? Many cracks can be constant without professional
              help. Here’s a short manual:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Clean the Area: Remove dust and debris from the crack.",
          "Use Epoxy or Concrete Filler: Use epoxy or concrete filler to restore the cracks inside the basement floor. This allows the crack to be sealed and prevents it from increasing.",
          " Clean out the Surface: After applying the filler, ease the floor into the mixture with the floor.",
          "If the crack widens or grows, seek advice from an expert to be safe.",
          ,
        ],
      },
    ],
  },
  {
    heading: "Why Older Homes Get More Basement Floor Cracks",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Older homes are charming and care-built, but their basements are
              prone to cracks. Why?
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Building Methods: Older construction techniques didn’t account for today’s standards, often causing cracks over the years.",
          "Natural Wear and Tear: Older basements undergo years of damage, making cracks much more likely.",
        ],
      },
    ],
  },
  {
    heading: "How Do You Seal A Crack in the Basement Floor?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Sealing cracks prevents similar damage. So, how do you seal
              basement floor cracks? Here’s an easy guide:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          " Assess the Crack: Before sealing, investigate it to make sure it’s not caused by a serious problem like basis settling.",
          "Choose the Right Seal: Many products are available for sealing basement cracks. Choose a waterproof seal to compete for humidity level problems.",
          "Apply Seal: The sealant is poured into the crack, smoothing it with a trowel.",
          "Sealing those cracks facilitates holding moisture out, reducing the danger of future harm.",
        ],
      },
    ],
  },
  {
    heading: "Should You Be Worried About Basement Floor Cracks?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Most basement floor cracks aren’t a prime difficulty. However,
              search for those symptoms that require professional help:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          " Wide Cracks: Cracks wider than ¼ inch ought to be inspected.",
          "Uneven Floors: If you word the floor shifting or becoming uneven, it can suggest a deeper problem.",
          "Persistent Moisture: If the crack allows water to enter often, it can cause greater trouble.",
          "Being proactive enables you to avoid bigger troubles. While small cracks are ordinary, some indicate structural issues.",
        ],
      },
    ],
  },
  {
    heading: "DIY vs. Professional Basement Floor Crack Repair",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Seeing a crack might make you wonder, “Can I fix this myself?”
              Often, the answer is sure. Here’s how to decide:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "  Small Cracks: Small cracks much less than ¼ inch wide are commonly used for a DIY restore.",
          "Water Seepage: If minor water seepage is minor, use a concrete sealant to hold moisture out.",
          "Large Cracks or Multiple Issues: If the cracks are enormous or expanding, or there are other issues, like bowing partitions, it’s time to call in a professional",
          "Hiring an expert can, once in a while, save future complications.",
        ],
      },
    ],
  },
  {
    heading: "Why Fix Cracks in the Basement Floor?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Why trouble solving basement floor cracks? It’s simply the
              basement. Here’s why it subjects:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "  Prevent Moisture Problems: Cracks can allow water to seep into your basement, leading to mold troubles.",
          "Protect Home Value: If you propose to promote, a cracked basement floor should turn away possible buyers.",
          "Avoid Bigger Problems: Small cracks grow. Fixing them early avoids larger, dearer problems.",
          "These easy fixes these days should prevent a variety of trouble and cash.",
        ],
      },
    ],
  },
  {
    heading: "When to Call a Professional for Basement Floor Crack Repair",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Not each crack desires an expert. But when do you need to name
              one?
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Growing Cracks: If a crack keeps getting bigger or seems quickly.",
          "Wide Cracks: Anything over a ¼ inch ought to be inspected.",
          "Signs of Foundation Issues: If different signs like sticking doors or windows are a gift, you need assistance.",
          "Professionals can thoroughly check the situation, providing you with peace of mind that your house is safe and steady.",
        ],
      },
    ],
  },
  {
    heading: "Preventing Cracks in the Basement Floor",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              You cannot constantly save your cracks, but you can lessen them.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          " Control Moisture: Ensure the right drainage around your property. Make sure gutters are clean and expand away from the residence.",
          "Seal the Floor: Sealing the floor saves moisture and prevents small cracks from spreading.",
          "Temperature Control: Keeping a constant temperature can help. Drastic temperature adjustments can cause the concrete to amplify or contract, leading to cracks",
          "These simple steps allow you to minimize the threat of destiny cracks and hold your basement in higher form.",
        ],
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
            {title || "Why Are Basement Floor Cracks Common in Older Homes?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 12, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "11:41 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Why-Are-Basement-Floor-Cracks-Common-in-Older-Homes.jpg"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Basement floor cracks can frustrate homeowners, especially in older
            houses. Are those cracks a bigger trouble or normal wear?
            Thankfully, maximum cracks are recoverable. This article explains
            the reasons for cracks in the basement floor. It also tells you how
            to handle them and hire experts.
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
            Basement floor cracks are common in older houses and are commonly
            insignificant. Understanding their causes helps save strain and
            money. Fixing basement floor cracks yourself or hiring an expert is
            sensible. It keeps your basement dry, maintains your home’s value,
            and prevents small problems from growing. A little protection these
            days keeps your antique home strong. Most basement cracks are simply
            fixable—nothing to lose sleep over.
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
