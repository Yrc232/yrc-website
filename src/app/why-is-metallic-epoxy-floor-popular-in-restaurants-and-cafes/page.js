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
    heading: "What Is Metallic Epoxy Flooring?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This flooring combines epoxy resin and metallic epoxy floors to
              create a high-performance coating. This flooring answer provides
              an easy, reflective stop that mimics the appearance of molten
              metal. Unlike conventional flooring alternatives, metal epoxy
              creates a dynamic, 3-dimensional impact because of its specific
              mixing manner. The result is a visually stunning ground this is as
              useful as it’s far attractive.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How do Metallic Epoxy Floors Compare to Other Flooring Options?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When choosing flooring for a restaurant or cafe, it’s vital to
              evaluate specific materials to find the great healthy. These steel
              epoxy floors stand out as compared to standard alternatives like
              tile, vinyl, and timber. Unlike tile, which may be susceptible to
              cracking and grout issues, steel epoxy flooring offers an unbroken
              floor that resists damage. Vinyl, whilst cost-powerful, often
              lacks the durability and visual enchantment of metallic epoxy.
              Wood floors, even though attractive, require normal upkeep and are
              vulnerable to staining and wear.
            </p>
            <p className="mt-2">
              In terms of overall performance, metallic epoxy floors are great
              proof against excessive-impact use and chemical spills, making
              them perfect for busy food provider environments. Their capacity
              to withstand heavy foot site visitors and common cleaning
              surpasses many different floor substances, offering lengthy-time
              period prices.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Installation Process and Timeframe",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The installation of a metallic epoxy garage floor includes several
              key steps, starting with surface instruction. The existing ground
              should be very well wiped clean and repaired to make certain right
              adhesion of the epoxy. This step is essential for accomplishing a
              smooth and sturdy finish. Next, a primer is implemented to
              beautify bonding, accompanied by the metallic epoxy coating.
            </p>
            <p className="mt-2">
              The utility method includes blending and pouring the epoxy,
              accompanied by the aid of troweling and spreading it to achieve an
              excellent layer. Finally, a topcoat is carried out to enhance
              sturdiness and shine. The complete setup system generally takes
              some days, depending on the dimensions of the location and
              environmental conditions. While the manner may additionally appear
              complicated, expert installers make certain an incredible end that
              meets the particular desires of eating places and cafes.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Environmental and Health Considerations",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              In addition to its aesthetic and practical benefits, metal epoxy
              flooring also addresses environmental and fitness worries. Epoxy
              flooring is low in volatile natural compounds (VOCs), which
              contributes to higher indoor air high-quality. This is especially
              crucial in areas wherein food is prepared and fed. By reducing the
              presence of harmful chemical substances, metallic epoxy flooring
              allows create healthier surroundings for each team of workers and
              customers.
            </p>
            <p className="mt-2">
              Furthermore, the durability of these approaches fewer
              replacements, and less waste through the years. Choosing a
              protracted-lasting floor choice like metallic epoxy aligns with
              environmentally aware practices by minimizing the need for
              frequent repairs or replacements. This sustainability element adds
              every other layer of enchantment for current, eco-aware
              organizations.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Durability and Maintenance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the number one motives metal epoxy floors are favored in
              restaurants and cafes is their terrific durability. These flooring
              are immune to scratches, stains, and heavy effects, which is
              important in high-site visitor areas. In a bustling cafe or
              restaurant, spills and foot site visitors are inevitable. Metallic
              epoxy floors face up to those challenges efficiently, making them
              a sensible desire.
            </p>
            <p className="mt-2">
              Maintenance is another strong in the shape of metal epoxy
              flooring. Unlike different substances that could require frequent
              refinishing or cleansing, it is easy to smooth. An easy mop and
              mild detergent are often enough to hold the ground looking
              satisfactory. This low-preservation function is in particular
              appealing to eating place owners who need to reduce downtime and
              protection prices.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Charming Look",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The Charming Look of metallic epoxy floors is a large draw for
              eating places and cafes. This flooring provides a sleek,
              modern-day look that complements the overall ambiance of an
              establishment. Epoxy contains metallic pigments that can be
              custom-designed. This pigment matches the color scheme and
              branding of the commercial entity. This customization provides a
              cohesive and fashionable appearance.
            </p>
            <p className="mt-2">
              Moreover, the reflective best of steel epoxy flooring could make
              areas seem large and brighter. This is particularly useful for
              smaller cafes or restaurants, in which maximizing the visible area
              is vital. The capacity to create precise styles and designs with
              metallic epoxy also allows for creativity in indoor design.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Cost-Effectiveness",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              While the preliminary setup value of metallic epoxy garage floors
              can be better than traditional flooring alternatives, their
              lengthy-term cost-effectiveness is noteworthy. The durability and
              coffee renovation necessities lessen the need for frequent
              maintenance or replacements. Over time, the investment in metal
              epoxy flooring can lead to good-sized financial savings in
              comparison to other flooring kinds that could be put out more
              quickly.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Versatility and Customization",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The metallic epoxy floor provides versatility in phrases of layout
              and application. They may be utilized in various settings within
              an eating place or cafe, together with dining regions, kitchens,
              and bars. The potential to customize the shade and finish of the
              floors ensures that it aligns with the desired aesthetic of the
              space. For restaurants and cafes aiming for a particular
              appearance or subject matter, metal epoxy floors provide a
              flexible solution.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Safety and Hygiene",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Safety and hygiene are top priorities in any meal carrier
              surroundings. Metallic epoxy floor complements protection by
              presenting a non-slip surface, lowering the danger of slips and
              falls. Additionally, the seamless nature of epoxy floors minimizes
              the presence of grout lines and joints where dirt and
              microorganisms can gather. This makes cleaning and maintaining
              high hygiene requirements easier.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Are You Searching for Metallic Floor Decoration?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Curious approximately how steel epoxy flooring can increase your
              eating place or cafe? Discover the perfect mixture of beauty and
              functionality with our professional decorative metallic floor
              coating services. We offer customized answers to suit your
              specific fashion and business needs.
            </p>
            <p className="mt-2">
              Ready to transform your area with a floor that combines durability
              and beauty?
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
              "Why is Metallic Epoxy Floor Popular in Restaurants and Cafes?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "July 29, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:47 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Why-is-Metallic-Epoxy-Floor-Popular-in-Restaurants-and-Cafes-1.jpg"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            In the competitive international of eating places and cafes,
            developing a long-lasting impact on clients is essential. One key
            aspect of this is the selection of floors. Recently, many eateries
            have turned to metallic epoxy floor for his or her precise
            combination of aesthetics and functionality. This article will find
            out why metal epoxy floors have become out to be a popular desire
            for these institutions and how it benefits both business owners and
            customers.
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
            Metal epoxy floors in restaurants and cafes earn their reputation
            for their durability, stunning look, cost-effectiveness, and
            versatility. These floors not only beautify the visible appeal of an
            establishment but also provide practical advantages that meet the
            demands of excessive-visitors environments. As greater corporations
            seek to create memorable reviews for their customers, metal epoxy
            flooring continues to be a pinnacle desire
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
