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
    heading: "Understanding the Importance of Color Choice",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Color plays a vital role in putting the temper and capability of
              any space, which includes your garage. A carefully selected shade
              can enhance the visible appeal and even impact the perceived
              length of the location. For instance, lighter colors can make a
              small garage seem larger, while darker sun shades can deliver a
              greater intimate experience. Moreover, the proper color can help
              disguise dust and stains, decreasing the want for frequent
              cleaning.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Factors to Consider",
    sections: [
      {
        subheading: "",
        paragraph: <div></div>,
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Existing Decor and Theme",
        paragraph: (
          <div>
            <p>
              Your garage floor epoxy may also already have a selected theme or
              color scheme, in particular, if it’s part of a bigger domestic
              design. Matching or complementing these existing elements can
              create a cohesive look. For instance, if your house features a
              cutting-edge layout with neutral colors, opting for a graceful
              gray or white epoxy floor can hold that current charm.
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
        subheading: "Purpose of the Garage",
        paragraph: (
          <div>
            <p>
              Consider the way you normally use your epoxy floors for garages.
              Is it totally for parking cars, or does it double as a workshop or
              a pastime place? If your garage serves multiple purposes, a
              versatile color like beige or gray might be ideal. These colors
              are neutral and might paint properly with diverse tools, vehicles,
              and recreational devices.
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
        subheading: "Personal Preference",
        paragraph: (
          <div>
            <p>
              Your flavor matters significantly in this decision. Think about
              colors you experience and feel comfortable with, as you will be
              the one spending the most time on this space. Bold colors like
              purple or blue can add a vibrant touch in case you are looking to
              make a declaration. On the other hand, softer colors can create a
              chilled environment.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Popular Color Choices for Garage Floor Epoxy",
    sections: [
      {
        subheading: "",
        paragraph: <div></div>,
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Gray",
        paragraph: (
          <div>
            <p>
              Gray is one of the most popular alternatives for garage epoxy
              flooring due to its versatility and modern-day enchantment. It
              hides dust well and matches most garage decors. Whether you pick
              out a light or darkish color, gray gives an impartial backdrop
              that allows different elements within the garage to face out.
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
        subheading: "Beige",
        paragraph: (
          <div>
            <p>
              Beige offers a warm and inviting look. It’s top-notch for folks
              who decide upon a softer appearance in comparison to the
              commercial experience of grey. Beige additionally works nicely
              with numerous forms of garage uses, from car garages to workshop
              spaces.
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
        subheading: "Blue",
        paragraph: (
          <div>
            <p>
              For those looking to upload a dash of coloration, blue is an
              exquisite alternative. It’s calming and may supply your epoxy
              floors for garages with a unique, personalized touch. A light blue
              could make the distance sense ethereal, even as a darker navy can
              upload depth and sophistication.
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
        subheading: "Red",
        paragraph: (
          <div>
            <p>
              Red is bold and active, perfect for making an assertion. It’s a
              notable choice in case you need your Garage to stand out. Red
              epoxy garage floor coating also can create a high-strength
              environment, suitable for workshops or car enthusiasts
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Tips for Choosing the Right Shade",
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
        subheading: "Test Samples",
        paragraph: (
          <div>
            <p>
              Before committing to a shade, it’s clever to check a few samples.
              This assists you in visualizing how one-of-a-kind sunshades will
              appear in your garage epoxy flooring. Consider how the lighting
              fixtures in your Garage impact the advent of every color. Natural
              and synthetic mild can trade how a color looks at some point in
              the day.
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
        subheading: "Consider Long-Term Maintenance",
        paragraph: (
          <div>
            <p>
              Some colorings display dirt and stains greater than others. If you
              want to limit cleaning efforts, choose a color that hides
              imperfections nicely. Gray and beige are extremely good
              alternatives as they generally tend to mask dust and minor stains
              successfully.
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
        subheading: "Think About Future Changes",
        paragraph: (
          <div>
            <p>
              Your flavor may also be involved in the selection of epoxy garage
              floor coating. Choosing a versatile color that may adapt to
              distinctive styles and features can prevent future repainting.
              Neutral colorings like grey and beige are timeless and can without
              difficulty accommodate modifications in decor or use.
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
        subheading: "Are You Ready to Transform Your Garage?",
        paragraph: (
          <div>
            <p>
              Is your Garage floor looking dull and dead? It’s time to renovate
              it with our professional epoxy garage coating services. Transform
              your area with a stunning epoxy floor that combines durability
              with charm enchantment. Whether you prefer a swish gray, a warm
              beige, or an ambitious pink, we have got you protected. Let us
              assist you choose the suitable color and reap a Garage floor that
              no longer most effectively appears high-quality but additionally
              stands the check of time.
            </p>
            <p className="mt-2">
              Ready to raise your garage to the next stage?
            </p>
            <p className="mt-2">Contact us today to book your consultation!</p>
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
              "How to Select the Right Color for Your Garage Floor Epoxy?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "August 12, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "3:24 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Garage-Epoxy-1-1.jpg"
            alt="Epoxy Concrete Flooring"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Choosing the perfect color for your garage floor epoxy may be both
            thrilling and challenging. A properly chosen color can transform
            your garage from an unremarkable garage surround to a beautiful,
            useful area. With various options available, it’s critical to
            recollect factors like your garage reason, current decor, and
            private desire. This article will help you with these considerations
            to ensure you choose the right color for your garage floor epoxy.
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
            Selecting the proper color for your Garage floor epoxy is a critical
            step in growing a useful and visually attractive space. By thinking
            about factors along with present decor, garage use, and private
            preference, you could make an informed decision. Popular colorations
            like grey, beige, blue, and red each provide precise advantages, so
            take your time to test samples and think about long-term renovation
            and destiny modifications. With the right preference, your Garage
            can become a stylish, sensible extension of your home.
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
