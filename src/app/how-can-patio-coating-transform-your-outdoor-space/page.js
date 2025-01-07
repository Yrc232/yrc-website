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
    heading: "The Essence of Patio Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Before we delve into the transformative effects, let’s understand the essence of patio coating. It is like a protective layer for your patio, giving it a tough and good-looking finish. It shields against the weather and wear, boosting the overall appearance of your outdoor area.
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
        subheading: "Renew and Revitalize Worn Surfaces",
        paragraph:(
          <div>
            <p>
            Is your patio showing signs of wear and tear? Patio coating acts as a rejuvenating agent, breathing new life into worn surfaces. Cracks, stains, and faded areas can be seamlessly transformed, giving your patio a refreshed and revitalized appearance. Say goodbye to the worn-out look and welcome a patio that looks as good as new.
            </p>
          </div>
        )
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Endless Style and Color Options",
        paragraph: (
          <div>
            <p>
            Patio coating is not just about protection, it’s a style statement. With a myriad of color and style options, you have the freedom to choose a coating that complements your home’s architecture and your taste. Whether you prefer the timeless elegance of neutral tones or want to make a bold statement with vibrant colors, patio coating offers endless possibilities for customization.
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
        subheading: "Slip-Resistance for Safety",
        paragraph: (
          <div>
            <p>
            You get to play with colors and styles, choosing a coating that matches your home’s style and your preferences. Whether you’re into classic neutral tones or bold vibrant colors, patio coating opens up endless options for personalization. Whether it’s wet weather or a poolside gathering, a slip-resistant patio surface adds an extra layer of security.
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
        subheading: "Seamless Repairs for a Flawless Finish",
        paragraph: (
          <div>
            <p>
            Over time, even the most well-maintained patio may require repairs. Patio coating allows for seamless repairs, ensuring that any imperfections are addressed without compromising the overall aesthetics. This ease of repair contributes to the longevity and resilience of your outdoor space.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How Patio Coating Works Its Magic",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Now that you understand the benefits, let’s embark on the transformative journey of concrete patio coating and witness how it works its magic to elevate your outdoor space:
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
        subheading: "Surface Preparation",
        paragraph: (
          <div>
            <p>
            The journey begins with thorough surface preparation. The existing patio surface is cleaned, repaired, and prepped to ensure optimal adhesion for the coating. This step lays the foundation for a smooth and flawless finish.
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
        subheading: "Application of Primer",
        paragraph: (
          <div>
            <p className="mt-2">
            We apply a high-quality primer to the prepared surface, serving as a bonding agent to create a strong connection between the existing patio material and the upcoming coating application.
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
        subheading: "Customized Color and Style Selection",
        paragraph: (
          <div>
            <p>You get to play with colors and styles, choosing a coating that matches your home’s style and your preferences. Whether you’re into classic neutral tones or bold vibrant colors, patio coating opens up endless options for personalization.</p>
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
        subheading: "Meticulous Application of Patio Coating",
        paragraph: (
          <div>
            <p>
            The chosen patio coating is meticulously applied to the surface. Professional applicators ensure an even and consistent layer, paying attention to every detail. This step not only enhances the aesthetic appeal but also introduces the protective properties of the coating.
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
        subheading: "Curing and Drying Process",
        paragraph: (
          <div>
            <p>
            Once the coating is applied, a curing and drying process follows. This allows the patio coating to bond with the surface, creating a resilient and long-lasting finish. The curing process is essential for achieving the desired durability and performance.
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
        subheading: "Final Inspection and Touch-Ups",
        paragraph: (
          <div>
            <p>
            A final inspection ensures that we have applied the patio coating to perfection. We address any necessary touch-ups, leaving you with a flawlessly transformed outdoor space ready for your enjoyment..
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "What to Expect For Your Transformed Outdoor Oasis",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            As you step onto your newly coated patio, the transformation becomes evident. Here’s what you can expect from your newly transformed outdoor oasis:
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
        subheading: "Aesthetic Elegance",
        paragraph: (
          <div>
            <p>
            The first thing you’ll notice is the aesthetic elegance that patio coating brings to your outdoor space. The surface is no longer marred by cracks or stains; instead, it exudes a polished and sophisticated charm.
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
        subheading: "Comfortable and Safe Enjoyment",
        paragraph: (
          <div>
            <p>
            With slip-resistant properties, your patio becomes a safer space for enjoyment. Whether you’re hosting a barbecue, lounging with a book, or having a poolside gathering, the enhanced safety ensures that you can relish every moment without worry.
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
        subheading: "Minimal Maintenance Requirements",
        paragraph: (
          <div>
            <p>
            Designed for low-maintenance living, patio coating is the solution. The durable finish minimizes the need for constant upkeep, allowing you to spend more time enjoying your outdoor space and less time on maintenance tasks.
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
        subheading: "Seamless Repairs for Continued Beauty",
        paragraph: (
          <div>
            <p>
            Should the need arise, seamless repairs ensure that your patio maintains its flawless appearance. The ability to address any imperfections without disrupting the overall aesthetics is a testament to the versatility and practicality of patio coating.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Embrace the Magic of Patio Coating Today!",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Transform your outdoor space into a sanctuary of style and durability with our premium patio coating services. Click below to schedule your consultation and witness the magic of a revitalized patio.
            </p>
            <p className="mt-2">Elevate Your Outdoor Living!</p>
            <p className="mt-2">Schedule Your Consultation Here</p>
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
            {title || "How can patio coating transform your outdoor space?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 20, 2023"}
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
            src="/images/How-can-patio-coating-transform-your-outdoor-space-2.jpg"
            alt="How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Think of your outdoor space as a retreat an extension of your home
            where you relax, socialize, and connect with nature. Picture a patio
            that not only adds to the beauty but transforms the whole outdoor
            experience. This is where the magic of patio coating comes into
            play. Now we’ll explore how patio coating can breathe new life into
            your outdoor space, turning it into a haven of style, durability,
            and comfort.
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
          As you embark on the journey of patio coating, envision the outdoor retreat that awaits you. Step into a world where your patio is a seamless extension of your home, a place where style meets durability, and where every moment spent outdoors becomes a celebration of the artistry of outdoor living. Elevate your outdoor oasis with the magic of epoxy patio coating, and embrace a transformed space that reflects your unique style and enhances your connection with the great outdoors.
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
