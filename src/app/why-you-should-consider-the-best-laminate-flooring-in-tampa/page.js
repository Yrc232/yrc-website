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
    heading: "Cost-Effectiveness",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When compared to hardwood or tile, laminate floors are greater
              budget-friendly. It affords the appearance of natural timber or
              stone at a fraction of the price. For example, gray laminate
              floors can mimic the arrival of highly-priced hardwood, giving you
              a stylish look without the high price tag. Black laminate flooring
              offers a swish, modern-day aesthetic that is frequently greater
              cost than genuine black wood.
            </p>
            <p className="mt-2">
              This price-effectiveness extends beyond the preliminary buy.
              Laminate floors are straightforward to put in, which reduces labor
              expenses. Many alternatives feature a click-on-lock setup gadget,
              permitting owners to deal with the setup themselves.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Durability and Longevity",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Best laminate flooring are known for their durability. It is
              designed to resist heavy foot web page site visitors and face up
              to scratches, stains, and dents. This makes it great for
              immoderate web page traffic regions like hallways and living
              rooms. Unlike conventional wooden floors, laminate does not warp
              or swell with moisture, it truly is particularly beneficial in
              Tampa’s humid weather.
            </p>
            <p className="mt-2">
              Additionally, laminate floors regularly come with a warranty,
              assuring you of their sturdiness. Brands supplying high-quality
              laminate floors typically provide warranties of 15 to twenty-five
              years, reflecting their self-notion of the product’s sturdiness.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Variety of Styles and Designs",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the main blessings of laminate flooring is the variety of
              patterns available. Whether you decide upon the conventional look
              of wood or the present-day enchantment of stone, there’s a
              laminate choice for you. Grey laminate flooring can add a
              modern-day touch to any room, at the same time as black laminate
              flooring offers a formidable announcement.
            </p>
            <p className="mt-2">
              Additionally, laminate tile floors are a choice that combines the
              appearance of tiles with the advantages of laminate. This
              versatility in layout allows house owners to suit their flooring
              with their home’s decor seamlessly.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Easy Maintenance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Maintaining the best laminate flooring is easy. Unlike hardwood,
              which requires periodic refinishing, laminate only wishes regular
              sweeping and coffee mopping to hold it looking fine. This ease of
              protection is especially useful for busy households or for folks
              who choose a low-preservation flooring answer.
            </p>
            <p className="mt-2">
              Moreover, laminate floors resist staining, making it suitable for
              houses with pets or children. Spills and stains may be without
              difficulty wiped away without leaving permanent marks.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Installation Process",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The installation of laminate floors is much less complex compared
              to different floor kinds. Many laminate merchandise come with a
              consumer-pleasant setup gadget that does not require glue or
              nails. This allows for a quicker and more efficient installation
              technique.
            </p>
            <p className="mt-2">
              For those who opt for a DIY setup, the process is usually
              hassle-free. However, professional installation services are also
              available for those who prefer to leave the work to the experts.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Environmental Considerations",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Modern laminate tile flooring is often synthetic with
              environmental issues in mind. Many manufacturers use recycled
              materials to make their products. This makes them a more
              eco-friendly option than traditional wood flooring.
            </p>
            <p className="mt-2">
              Additionally, laminate floors do not require using harmful
              chemical compounds during their manufacturing. This contributes to
              healthier indoor surroundings, reducing the effect on each of your
              own home and the planet.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Resale Value",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Investing in laminate tile flooring can beautify the resale fee of
              your own home. Potential consumers regularly respect the classy
              attraction and durability of laminate, which can make your private
              home greater attractive in the marketplace.
            </p>
            <p className="mt-2">
              High-stop laminate options, together with those mimicking herbal
              timber or stone, can add enormous cost to your property. This
              makes laminate floors no longer best a realistic choice but
              additionally a smart investment for Destiny.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Your Home Ready for a Flooring Upgrade?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Discover the advantages of the exceptional laminate floors to be
              had in Tampa. Our choice of super laminate options offers style,
              sturdiness, and affordability, all in one. Whether you pick a
              swish grey laminate, an ambitious black laminate, or flexible
              laminate tile flooring, we’ve got the right answer for your house.
            </p>
            <p className="mt-2">
              Contact us these days to schedule a consultation and see how our
              ornamental metal ground services can remodel your space.
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
              "Why You Should Consider the Best Laminate Flooring in Tampa?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "July 22, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:47 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Why-You-Should-Consider-the-Best-Laminate-Flooring-in-Tampa-1.webp"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            When it involves flooring alternatives, the best laminate flooring
            stands proud for its combination of sturdiness, style, and
            affordability. In Tampa’s diverse weather, laminate floors offer a
            practical and attractive solution for any domestic. Whether you are
            looking for the sleek look of gray laminate floors. The bold
            appearance of black laminate, or the versatility of laminate tile
            floors, caters to a variety of tastes and needs. This article will
            guide you about the benefits and effectiveness of all these
            laminations.
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
            Choosing the best laminate flooring for your Tampa domestic brings
            several blessings, inclusive of sturdiness, affordability, and
            fashion versatility. Whether choosing smooth grey laminate, placing
            black laminate, or stylish laminate flooring, you advantage of a
            value-effective answer that complements your own home’s appearance
            and sturdiness. With its ease of protection and cutting-edge
            designs, laminate flooring is clever funding for each aesthetic
            attraction and practicality. Embrace the blessings of laminate and
            increase your properties indoors with an elegant, long-lasting
            preference.
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
