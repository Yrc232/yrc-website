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
    heading: "Enhanced Durability",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Applying a concrete pool deck coating significantly increases its
              durability and duration. The coating functions as a defensive
              barrier that safeguards the underlying concrete against severe
              weather conditions, ultraviolet (UV) radiation, water harm, and
              chemical spills. This helps prevent cracks, erosion, and fading
              over time, ensuring that your pool deck retains its structural
              integrity and appearance for years.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Slip Resistance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The highest priority in a pool area is ensuring safety, where
              surfaces can become slippery when wet. Concrete pool deck coating
              is designed to provide excellent traction underfoot, even when
              exposed to water. The inclusion of a slip-resistant feature
              reduces the possibility of slips and falls, so creating a safer
              atmosphere for both family members and guests to enjoy on your
              pool deck.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Versatility in Design",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              An important benefit of using concrete coatings pool decks is
              their ability to be easily customized in terms of design. There is
              a diverse selection of colors, patterns, textures, and finishes
              available for you to personalize the appearance of your pool deck.
              A concrete coating offers the opportunity to establish the
              specific look you desire for your outdoor space, whether it be a
              natural stone appearance, artistic patterns, or a modern single
              hue.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "UV Protection",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Concrete surfaces may suffer fading and deterioration as a result
              of exposure to sunlight. An exemplary concrete coating
              incorporates UV-resistant characteristics that effectively reduce
              color fading and surface deterioration resulting from lengthy
              exposure to sunlight. This UV protection not only maintains the
              attractiveness of your pool deck but also enhances its general
              resilience.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Low Maintenance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Maintaining a swimming pool concrete deck coatings can be
              challenging, but a concrete coating minimizes maintenance
              requirements. The smooth and sealed surface of the coating makes
              it easier to clean and resistant to stains from pool chemicals,
              oils, and dirt. Routine maintenance typically involves regular
              cleaning with water and mild soap, making it a hassle-free option
              for busy homeowners.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Cost-Effective Solution",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Investing in a concrete coating for pool deck is a cost-effective
              solution compared to more extensive renovations or replacements.
              The upfront cost of applying a coating is relatively affordable.
              especially considering the long-term benefits of increased
              durability and reduced maintenance. By extending the lifespan of
              your pool deck, a concrete coating offers excellent value for
              money over time.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Quick Installation and Cure Time",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Professional installers can install concrete pool deck coating
              efficiently and with minimal disruption to your daily routine.
              They are trained to prepare the surface, apply the coating, and
              allow it to cure within a relatively short timeframe. This means
              you can start enjoying your revamped pool deck sooner rather than
              later, without prolonged construction or downtime.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Choosing the Right Concrete Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When selecting a concrete coating for your pool deck, consider the
              following factors:
            </p>
          </div>
        ),
        listItems: [
          "Type of Coating: Choose between acrylic, epoxy, or polyurea coatings based on your specific needs and budget.",
          "Surface Preparation: Ensure the concrete surface is properly cleaned, repaired, and prepared before applying the coating for optimal adhesion and performance.",
          "Professional Installation: Hire experienced professionals with expertise in concrete coatings to achieve the best results and maximize the benefits of your investment.",
        ],
      },
    ],
  },
  {
    heading: "Transform Your Pool Deck with Expert Concrete Coating Services",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Does your pool deck require renovation? Discover the
              transformative benefits of our concrete coating services for pool
              decks. From enhanced safety and durability to stunning aesthetics
              and reduced maintenance, our pool deck coatings offer unmatched
              quality and performance. Let us revitalize your outdoor space with
              a custom coating solution tailored to your style and preferences.
              Ready to elevate your pool area? Contact us today to schedule a
              consultation and book your pool deck transformation!
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
            {title ||
              "The Top Benefits of Using Concrete Coating for Your Pool Deck"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "April 30, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "6:35 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/The-Top-Benefits-of-Using-Concrete-Coating-for-Your-Pool-Deck-2.jpg"
            alt="Polyaspartic-Floor-Coating"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            A concrete pool deck coating offers numerous benefits for homeowners
            looking to increase the beauty, safety, and durability of their
            outdoor living space. From improved resilience to customizable
            designs. My goal for this article is to explain the seven compelling
            benefits of choosing a professional concrete coating for pool deck .
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
            Choosing a concrete pool deck coating offers a multitude of benefits
            that enhance both the beauty and efficiency of your exterior space.
            From increased durability and friction value to customizable designs
            and minimum maintenance requirements. A concrete coating transforms
            your pool deck into a safer, more attractive, and longer-lasting
            feature of your home. When considering a concrete coating,
            prioritize quality materials. Professional installation, and
            personalized design options to maximize the value and enjoyment of
            your pool area. With the right concrete coating, you can create a
            beautiful and resilient pool deck. That enhances your outdoor living
            experience for years to come.
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
