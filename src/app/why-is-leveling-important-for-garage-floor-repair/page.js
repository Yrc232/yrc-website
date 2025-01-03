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
    heading: "Understanding Garage Floor Issues",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Garage floors can cause many problems over the years due to wear
              and tear. Cracks, dips, and choppy surfaces regularly appear as
              the seasons change. These troubles can cause critical safety
              dangers for homeowners and their households. An uneven floor could
              make it difficult to use your garage efficiently and safely. A
              poorly leveled floor can cause water to pool in specific regions
              and create harm. If left untreated, it could even cause mold to
              increase over time.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of Leveling",
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
        subheading: "Enhanced Safety",
        paragraph: (
          <div>
            <p>
              Leveling eliminates choppy surfaces, which can cause journeys and
              falls in the garage area. A flat garage floor ensures the safety
              of all who use the space daily. It protects both people and pets
              from injuries that could arise. You can walk confidently into your
              garage when the floor is even. A safe environment encourages you
              to use your garage for various tasks and activities.
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
        subheading: "Improved Stability",
        paragraph: (
          <div>
            <p>
              A level floor provides a stable base for vehicles, tools, and
              other important equipment. This stability prevents damage to the
              floor and the items stored in the garage. A flat surface can also
              help your car park better without rolling off to the side. It
              keeps everything in place and reduces stress on your items and
              vehicles. You can trust that your stored items will remain secure
              and undamaged over time
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
        subheading: "Better Drainage",
        paragraph: (
          <div>
            <p>
              Leveling allows for proper drainage of water and spills that may
              occur in the garage. A flat floor prevents pooling, leading to
              water damage and mold increase over time. When water can flow
              freely throughout the floor, it minimizes troubles associated with
              leaks and moisture buildup. This helps hold the garage dry and in
              appropriate form for years. Adequate drainage enables you to keep
              accessible and safe surroundings for your garage area.
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
        subheading: "Increased Aesthetic Appeal",
        paragraph: (
          <div>
            <p>
              A smooth, level floor looks more attractive and organized in any
              garage. It complements the overall look of the space, making it a
              more friendly region in which to work. An even floor gives your
              garage a clean and neat look that you may be happy with. It may
              increase your property’s value by improving its typical
              enchantment and appeal. A nicely maintained garage creates a
              tremendous effect on guests and potential buyers.
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
        subheading: "Longer-lasting Coatings",
        paragraph: (
          <div>
            <p>
              Proper leveling is important for successfully applying epoxy
              coatings in your garage. A well-organized floor ensures that the
              garage floor epoxy adheres nicely to the floor, extending the
              lifespan and effectiveness of the epoxy layer. An even base also
              helps the coating resist wear and tear, keeping your garage
              looking great. A durable finish protects your investment and
              enhances the utility of your garage.
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
        subheading: "Leveling and Epoxy Coatings",
        paragraph: (
          <div>
            <p>
              Leveling is also vital when using epoxy coatings for garage floor
              repair. Epoxy garage floor coatings require a surface finish for
              proper adhesion and long-lasting results. Choppy surfaces can
              cause the coating to peel or crack, making maintenance expensive.
              Garage epoxy flooring appears fine when applied on a flat,
              well-organized floor. When used correctly, epoxy coatings can last
              many years without major issues. They also protect against spills,
              stains, and regular wear and tear.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Steps in the Leveling Process",
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
          "Inspect the entire garage floor for issues before starting work.",
          "Check all corners and edges to find problems quickly.",
          "Look for cracks, pits, and any uneven areas that need fixing",
          "Use a self-leveling compound to fill low spots as needed",
          "This compound spreads evenly across the floor’s surface for a smooth finish.",
          "Ensure the surface is completely dry before applying any coating or finish.",
          "Follow the product instructions closely to get the best results.",
          "Avoid common mistakes by taking your time with each step.",
          "Choose a quality garage floor epoxy to complete the repair process.",
          "This helps seal and protect your floor from future damage and wear.",
        ],
      },
    ],
  },
  {
    heading: "Protect Your Garage Floor with Our Quality Epoxy Coatings",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Transform your garage with our epoxy garage coating services. Our
              expert team ensures a smooth, durable finish. Protect your floor
              from spills, stains, and damage. Enjoy a clean and vibrant area
              for years yet to come. Do not wait! Contact us today for budget
              evaluation, and let us help you elevate your garage. Experience
              the difference with our top-notch epoxy solutions. Call now to get
              started on your garage upgrade!
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
            {title || "Why Is Leveling Important for Garage Floor Repair?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "October 14, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:43 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Leveling-Important-for-Garage-Floor-Repair.jpg"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Garage floor repair is essential for maintaining your space and its
            cost. Many homeowners forget the importance of proper leveling of
            their garages. Leveling plays an essential role in ensuring
            durability and universal functionality. It can save time and money
            in the long run. A flat garage floor can help effectively guide your
            cars, tools, and other gadgets. Keeping your garage floor level
            enhances usability and decreases dangers for everyone. Now, we will
            learn it in detail, see its benefits, and see the best way to
            implement it.
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
            In conclusion, leveling is crucial for successful garage floor
            repair and maintenance. It ensures safety, enhances look, and
            supports effective coatings for your garage space. Prioritize
            leveling to achieve successful garage floor repairs every time you
            undertake this task. Taking the time to level your floor will
            ultimately pay off for functionality and safety. A well-maintained
            garage space improves safety and function for your daily activities
            and tasks.
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
