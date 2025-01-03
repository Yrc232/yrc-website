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
    heading: "Durability and Strength",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Paver Stones can easily survive difficult weather conditions such
              as peak summer or winter and extreme storms. This thing makes them
              the best and most cost-effective option. This makes paver stones
              ideal for those seeking affordable, low-care, and durable yard
              floor ideas.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Variety of Styles",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Many people are drawn to the range of styles paver stones offer
              when looking for yard patio floor ideas. Pavers come in various
              colors, shapes, and designs. These different options allow owners
              to design their yards according to their choice. Whether you want
              a rustic look or a modern design, there’s a paver stone style to
              match.
            </p>
            <p className="mt-2">
              For example, you can choose from classic square or rectangle
              shapes for a clean look. Mix and match different sizes and colors
              to create a unique pattern. This flexibility helps owners achieve
              a custom look for their yard space. You can create beautiful
              designs that stand out, making your patio a special part of your
              home.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Easy Installation",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When considering patio flooring ideas, the ease of installation is
              something many owners value. Paver stones are relatively simple to
              install compared to other flooring materials. You don’t need heavy
              tools or machinery. A basic set of tools will usually suffice.
              Some people even choose to install paver stones on their own. This
              makes them a good option for DIY enthusiasts
            </p>
            <p className="mt-2">
              The stones can be laid on various types of ground. Whether you
              have dirt, sand, or gravel, paver stones can be placed over it.
              This makes them a flexible option for a range of patio projects.
              The easy installation process is one reason owners keep them in
              mind when looking for practical floor ideas.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Low Care",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Paver stones also require little care, which is another reason
              people prefer them. Once installed, they don’t require much
              attention. Unlike wood, which needs sealing or staining, or
              concrete, which may crack over time, paver stones hold up well
              independently.
            </p>
            <p className="mt-2">
              Cleaning them is also easy. A simple sweep or wash with a garden
              hose can keep them looking good for years. Plus, as mentioned
              earlier, if one stone gets damaged, it is easy to replace. You do
              not need to tear up the floor to fix a single issue. This feature
              makes paver stones a practical and stress-free option for
              long-term use.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Cost-Effective",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When owners seek cheap patio floor ideas, paver stones often come
              up. Though they can be more luxurious than some materials upfront,
              they offer significant long-term value. Their durability requires
              fewer repairs and replacements over time, saving you cash.
            </p>
            <p className="mt-2">
              Moreover, because you can replace unmarried stones, you can avoid
              the higher expenses of repairing massive sections of flooring.
              Also, if you install the paver stones yourself, you save even more
              by avoiding labor costs. These factors make paver stones a cheap
              choice for creating a beautiful patio floor.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Design Flexibility",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Another reason people like using paver stones is their design
              flexibility. With their different designs and colors, paver stones
              can maintain a unique look. Paver stones can meet your needs
              whether you want a formal look or a casual setting. Many owners
              enjoy blending shades and shapes to create a design that matches
              their home’s style. The ability to tailor the look makes paver
              stones a key player in any list of patio ideas.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Your Patio Looking Worn Out?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Is your patio floor starting to show its age? Do not let cracks or
              fades ruin the look of your yard. Our expert patio coating
              services can refresh and protect your patio, giving it a swish,
              long-lasting finish. With our splendid materials and brief
              service, you can spend time on your new, advanced patio.
            </p>
            <p className="mt-2">
              Ready to boost your outdoor space with a durable, stylish coating?
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
            {title || "Why Do People Like to Use Paver Stones for Patio Floors?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "September 13, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "2:21 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/patio-floor-.png"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Many owners love to enhance their yard spaces. One popular way to do
            that is by improving their patio flooring. When it comes to patio
            floor ideas, paver stones always become the first and highest
            priority choice. These are flexible and beautiful and add style to
            any space. This article will explain why people like to use paver
            stones for their flooring and maintain an attractive yard
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
            Paver stones continue to be a top choice for patio floors. They
            offer durability, various styles, and smooth installation. These are
            additionally good for the environment and cost-effective. Whether
            trying to find patio floor ideas or exploring new yard ideas, paver
            stones can be a smart and stylish solution. From the practical
            benefits to their design flexibility, it’s no surprise that owners
            love them. Adding paver stones to your floor ensures your yard space
            is beautiful and built to last.
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
