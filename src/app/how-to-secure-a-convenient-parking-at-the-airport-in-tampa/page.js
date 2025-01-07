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
    heading: "Plan Ahead",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Effective air terminal stopping depends on cautious planning.
              Abstain from postponing. Research the different stopping decisions
              presented at Tampa Global Air terminal (TPA) and select the one
              that best accommodates your necessities.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Choosing Between On-Site and Off-Site Parking",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When examining parking alternatives at Tampa International
              Airport, you will probably encounter both on-site and off-site
              possibilities. Each option possesses distinct benefits, and your
              choice may be influenced by considerations such as ease, financial
              resources, and individual preferences.
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
        subheading: "On-Site Parking",
        paragraph: (
          <div>
            <p>
              Accessibility to the terminal buildings is provided by on-site
              parking, which is conveniently located within the airport
              premises. Below are a few crucial factors to take into account
              regarding on-site parking:
            </p>
          </div>
        ),
        listItems: [
          "Convenience: Having on-site parking is highly advantageous, particularly for brief journeys. By parking near the terminal, you can minimize the duration and exertion needed to reach your gate.",
          "Security: It is a top priority at airports, and on-site parking is typically closely controlled with CCTV cameras and workers present. This might offer reassurance regarding the security of your automobile.",
          "Convenient Access: The availability of on-site parking enables immediate entry into airport facilities, facilitating seamless navigation within the terminal without requiring any further means of transportation.",
        ],
      },
    ],
  },
  {
    heading: "Off-Site Parking",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Off-site parking, provided by private companies, offers an
              alternative with potential cost savings and additional services.
              Allow me to provide you with the essential information:
            </p>
          </div>
        ),
        listItems: [
          "Economical: Off-site parking offers a more cost-effective option, particularly for longer durations of travel and long-term parking at Tampa Airport. Several off-site facilities provide affordable rates and discounts, rendering it an appealing choice for travelers who are mindful of their budget for economy parking at Tampa Airport.",
          "Shuttle Services: Free shuttle services are often offered by most off-site parking facilities for transportation to and from the airport parking in Tampa. The shuttles adhere to a consistent timetable, guaranteeing prompt transportation for passengers.",
          "Reservation Options: Numerous off-site parking providers provide the convenience of pre-booking your parking space. This can be especially advantageous during periods of high travel volume when parking spaces may be highly sought after.",
          "Supplementary Services: Certain external businesses provide additional amenities such as automobile detailing, oil maintenance, or even pet boarding. If you desire additional amenities outside parking, this could be an attractive choice.",
        ],
      },
    ],
  },
  {
    heading: "Reserve Your Spot",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              It’s best to make a reservation in advance to guarantee a parking
              spot, especially during peak travel times. Various stopping
              organizations, whether situated in the vicinity or somewhere else,
              give the comfort of web-based booking, guaranteeing a saved
              parking spot upon your appearance.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Use Parking Apps",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Various parking applications offer current information about
              parking availability, pricing, and shuttle services. Employ these
              applications to optimize your parking experience and make educated
              decisions on parking locations.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Explore Valet Parking",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A few air terminals, like Tampa Global, have valet-stopping
              administrations for improved comfort. Notwithstanding the greater
              expense, valet leaving offers the comfort of having the option to
              leave your vehicle at the entry of the terminal, bringing about
              significant investment reserve funds.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Consider Hotel Parking Packages",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Several hotels in nearby to Tampa International Airport provide
              parking options designed for travelers. Choosing a hotel with a
              parking package the night before your early morning flight can
              offer a cost-effective and simple answer.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Take Advantage of Loyalty Programs",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              If you travel regularly from Tampa, it is advisable to participate
              in loyalty programs provided by parking facilities. These programs
              frequently offer discounts, awards, or points that can be
              exchanged for future parking..
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Check for Discounts and Coupons",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2">
              Before confirming your parking reservations, conduct a thorough
              search for any available discounts and coupons. Several parking
              companies provide promotions, particularly when you make a
              reservation online or through designated portals.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Be Mindful of Security",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Give priority to the security of your car. Select parking
              facilities that possess strong security measures, including
              well-illuminated spaces, video monitoring, and on-site personnel.
              This guarantees a sense of peace during your journey.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Review Parking Policies",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Before choosing a parking alternative, thoroughly examine the
              policies of the selected facility. Take note of the cancellation
              procedures, grace periods, and any supplementary charges.
              Collecting this information will enable you to make well-informed
              judgments and prevent unexpected occurrences
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Arrive Early",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Dispense an adequate measure of time to leave your vehicle and
              explore through the air terminal. Arriving early not only lessens
              stress but also serves as a backup in case your chosen parking
              option experiences problems or delays.
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
              "How to Secure a Convenient Parking at the Airport in Tampa"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 24, 2024"}
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
            src="/images/How-to-Secure-a-Convenient-Parking-at-the-Airport-in-Tampa-2.jpg"
            alt="How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Traveling can be an outright exhilarating campaign, yet the common
            parts of arriving at the air terminal and finding a fitting stop can
            periodically be an irritation. While withdrawing from Tampa, it is
            essential to get simple and bother-free stopping to guarantee a
            consistent start to your excursion. You will be able to prioritize
            your vacation without having to worry about your car thanks to the
            practical advice in this article, which will show you how to find
            safe and convenient parking at Tampa International Airport.
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
            Guaranteeing advantageous stopping at the Tampa air terminal is
            fundamental for an agreeable outing. You may be able to fully
            immerse yourself in the anticipation of your upcoming excursion by
            ensuring a smooth parking experience through strategic planning,
            thorough investigation of numerous options, and efficient use of the
            tools at your disposal. It is essential to select the most suitable
            parking option based on your travel requirements, whether it be
            on-site parking, off-site alternatives, or valet services, to ensure
            a stress-free start to your trip from Tampa. Enjoy your journey
            without incident!
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
