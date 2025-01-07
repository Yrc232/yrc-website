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
    heading: "Keeps Things Looking New",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The commercial coating makes buildings and stuff look shiny and
              new. It protects against the sun, rain, and even hurricanes,
              stopping colors from fading and keeping everything looking great.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Stops Rust and Keeps Metal Safe",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Near the ocean, the salty air can make metal rusty. But,
              commercial coating stops that, keeping metal parts of buildings
              and equipment safe from rust. This is important in Tampa where the
              sea air is everywhere.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Makes Buildings Look Cool",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This coating isn’t just about protection; it also makes buildings
              look good. You can choose different colors and finishes, so your
              business can look just the way you want. There are even special
              coatings that stop graffiti, which helps keep walls clean and
              nice..
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Saves Money on Cooling",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Tampa gets hot, so keeping buildings cool is a big deal. Some
              coatings can reflect sunlight and make buildings cooler, which
              means you spend less money on air conditioning. This is good for
              the wallet and the planet.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Keeps People Safe",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Safety is super important, and commercial coating helps here too.
              Floors can get coatings that stop people from slipping, and there
              are even coatings that can slow down fires, giving people more
              time to get to safety.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Lasts a Long Time",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              These coatings are tough and last a long time, which means
              businesses don’t have to fix or replace things as often. This
              saves money and hassle in the long run.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Easy to Keep Clean",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Coated surfaces are easier to clean. Dirt and grime wash off
              easily, so buildings and stuff keep looking nice without too much
              work.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Can Be Custom Made",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Every business is different, and commercial roof coating
              contractors can be customized. Whether you need extra protection
              from the sun or something that stands up to lots of rain, you can
              get a coating that does exactly what you need.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Good for the Environment",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A lot of the best commercial epoxy floor coating are made to be
              friendly to the environment. They have low harmful chemicals and
              help buildings use less energy, which is good for everyone in
              Tampa.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Getting It Done Right",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2">
              For the best results, it’s important to have professionals apply
              the coating. They know how to do it right, so everything gets the
              best protection and looks great.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Keeping It in Top Shape",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              It’s a good idea to check the coating now and then to make sure
              it’s still doing its job. If there’s a little bit of damage,
              fixing it quickly can stop bigger problems later.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Shield Your Business with Premier Commercial Coating Services",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Do you want your business place in Tampa to stay strong against
              the sun, humidity, and salty air? Our Commercial Coating Services
              are here to help! We offer special protection that keeps your
              building looking good and tough against Tampa’s weather. Our team
              can make a plan just for your place, making sure it looks nice,
              saves energy, and lasts a long time. We have green options and the
              latest protective stuff to wrap your business in a protective
              layer that keeps its value high and makes it look its best. We are
              also providing commercial garage floor coating services at your
              doorstep.
            </p>
            <p className="mt-2">
              Don’t let the weather damage your important business place.
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
            {title || "How Does Commercial Coating Protect Surfaces in Tampa?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "February 21, 2024"}
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
            src="/images/How-Does-Commercial-Coating-Protect-Surfaces-in-Tampa-2.jpg"
            alt="How-Can-Pool-Deck-Repair-Enhance-Your-Outdoor-Living-Area-in-Tampa-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            In Tampa, where the sun shines bright and the weather can change a
            lot, it’s super important for businesses to protect their buildings
            and stuff. This is where something cool called commercial coating
            comes in. It’s like a superhero shield for buildings, equipment, and
            other things, keeping them safe from damage. This article will
            explore why commercial coating is awesome for Tampa’s unique weather
            and how it helps.
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
            Commercial coating offers a comprehensive solution for protecting,
            enhancing, and maintaining commercial properties in Tampa. With
            their ability to shield against harsh weather, resist corrosion,
            improve aesthetics, and contribute to safety and sustainability,
            these coatings are an indispensable investment for local businesses.
            By customizing solutions, ensuring professional application, and
            committing to regular maintenance, businesses can maximize the
            benefits of commercial coating, ensuring their property remains
            protected, attractive, and valuable for years to come. In a city
            that thrives on its dynamic commercial landscape, taking steps to
            protect your investment with commercial coatings is not just wise.
            It’s essential.
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
