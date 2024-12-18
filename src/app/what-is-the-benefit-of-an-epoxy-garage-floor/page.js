import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

// Updated Data Structure
const defaultData = [
  {
    heading: "A sleek, Contemporary Look",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy flooring provides a sleek appearance for your garage with a
              professional, modern touch. It provides a stunning shine that
              gives the illusion of a larger, more orderly garage. Unlike bare
              concrete, the smooth surface of an epoxy coating can easily
              reflect more light. This reflective ability leads to a brighter
              garage, with less need for added lighting fixtures. Enhanced
              lighting in the garage improves safety, making it easier to
              complete projects.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Superior Durability and Wear Resistance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Another benefit of a garage epoxy floor is its superior durability
              and wear resistance. Concrete can suffer damage from heavy cars,
              chemicals, and regular use, but epoxy protects. When applied,
              epoxy flooring forms a hard, durable surface that withstands heavy
              impacts. The chemical-resistant nature makes epoxy garage floors
              best for individuals who store chemicals in garages. It also
              guards against wear and tear opposition, giving your garage floor
              a longer, better lifespan.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Stain and Spill Resistance",
    sections: [
      {
        paragraph:
          "Garage floor epoxy also resists stains, spills, and cracks, ensuring easier cleanup. No one enjoys scrubbing stubborn oil stains off a concrete surface—epoxy flooring solves this. The epoxy coating forms a non-porous layer, keeping oil, antifreeze, and spills on the surface. Garage epoxy floors make cleaning quick, as spills wipe away with little effort. A well-maintained epoxy floor keeps your garage looking cleaner and neater throughout the year.",
      },
    ],
  },
  ,
  {
    heading: "Improved Safety",
    sections: [
      {
        paragraph:
          "When considering renovating your garage floors, it is important to prioritize safety. Epoxy creates a non-slip surface and enhances the area’s safety. Anti-slip additives can be added to epoxy coatings to make wet areas safer. Moisture, whether from car leaks or wet shoes, can make garages dangerous—epoxy helps reduce hazards. A garage epoxy floor looks attractive and promotes a safer environment for your family.",
      },
    ],
  },
  {
    heading: "Ideal Workspace for DIY Projects",
    sections: [
      {
        paragraph:
          "Why an epoxy garage floor? It turns a basic garage into an ideal workspace. Those who enjoy DIY projects benefit from epoxy’s ability to resist damage and provide comfort. The epoxy flooring reduces dust created from concrete, improving the quality of air indoors. Also, the surface feels comfortable underfoot, making it better for hours spent standing while working. Garage floor epoxy offers both if you want a practical solution that combines beauty and utility.",

        image: "",
      },
    ],
  },
  {
    heading: "Adds Value to Your Home",
    sections: [
      {
        paragraph:
          "Another great advantage of choosing epoxy flooring is the value it adds to your home. If you plan to sell your property, an epoxy garage floor might help appeal to shoppers quickly. Homeowners search for residences that aren’t only captivating to the eye. Epoxy storage floors enhance the storage space, making it stand out compared to other houses on the market. Additionally, having a well-maintained epoxy garage floor positively affects the entire property.",

        image: "",
      },
    ],
  },
  {
    heading: "Affordable and Efficient Installation",
    sections: [
      {
        paragraph:
          "Many people worry about the time and cost required to install new flooring. Fortunately, garage epoxy floor coatings offer an affordable and efficient installation process. Compared to other flooring types, epoxy requires minimal application time and is fully cured. With professional installation, you can quickly have a beautiful garage epoxy floor ready for use. Plus, epoxy floors demand less maintenance, saving you time and money.",

        image: "",
      },
    ],
  },
  {
    heading: "Customizable Aesthetics",
    sections: [
      {
        paragraph:
          "Aesthetics are often overlooked when considering garage upgrades, but epoxy changes that. You can personalize your epoxy garage floor with many color and design options available. You can match it to your home’s color palette or choose unique colors to stand out. The finished look beautifies the garage and allows you to express your style. No more gray, dull concrete—with epoxy flooring, your garage can be transformed into an elegant space.",

        image: "",
      },
    ],
  },
  {
    heading: "Versatility, Maintenance, and Appearance",
    sections: [
      {
        paragraph:
          "Why should you epoxy your garage floor? It’s simple: versatility, ease of maintenance, and appearance. Epoxy works great in all garage settings, regardless of how the garage is used. The low maintenance aspect saves you from dealing with chipped or cracked concrete in the future. A garage epoxy floor ensures you have an attractive, practical area to use every day. The combined benefits make epoxy a smart investment for homeowners wanting more from their garages.",

        image: "",
      },
    ],
  },
  {
    heading: "Chemical Resistance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy garage floors provide better chemical resistance than
              traditional flooring options such as tiles. Tile or wood flooring
              may crack, stain, or become damaged from repeated chemical
              exposure. Epoxy, however, holds up well to oil, cleaners, and
              other chemical substances without harm. That strength makes epoxy
              flooring suitable for safely storing garden products, paints, and
              automotive liquids. It provides reliability where other flooring
              types often fall short over time.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Easy Routine Maintenance",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              If you value efficiency and cleanliness, epoxy flooring simplifies
              routine cleaning and maintenance. With concrete, cracks and pores
              collect dirt that takes extra effort to remove thoroughly. Epoxy’s
              smooth floor prevents particles from sticking, making sweeping and
              mopping a breeze. Routine preservation is as easy as cleaning the
              ground occasionally to get rid of dust and particles. Choosing
              floor epoxy provides peace of mind, including a tidy, organized
              area.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Dust-Free and Low-Maintenance Environment",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy’s ability to provide a dust-free, stain-resistant,
              low-maintenance environment is valuable. Bare concrete floors
              produce dust, creating messes and triggering allergies in those
              sensitive. Epoxy acts as a sealant, effectively controlling the
              dust and preventing it from accumulating. This helps maintain a
              healthy environment, making the garage less of a hassle to keep
              clean. Moreover, the sealed surface keeps dirt and debris from
              penetrating, offering consistent performance.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Transform Your Garage Space",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Why choose a garage epoxy floor instead of leaving the concrete
              bare? Concrete may be practical, but it lacks the comfort, shine,
              and resistance that epoxy provides. Epoxy transforms a bland
              garage into something more functional, welcoming, and suited to
              your needs. With numerous options, epoxy can add a unique flair to
              your flooring. Epoxy offers better versatility for whatever your
              garage purpose—whether it’s storage, work, or a home gym.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Ready to transform your garage?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Contact YRC Custom Flooring Tampa, FL, today to learn more about
              our epoxy flooring solutions. Let us help you create a stunning,
              durable, easy-to-maintain garage floor that impresses you.
              Schedule your consultation now and take the first step towards
              enhancing your garage space.
            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
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
            {title || "What is the Benefit of an Epoxy Garage Floor?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 21, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:04 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Epoxy-Garage-Floor-Hero.webp"
            alt="Polished Concrete"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Epoxy coating for garage flooring provides flexible and appealing
            safety for concrete surfaces. Many homeowners select it due to its
            durability and cleanliness of their garage floors. Whether facing
            chemical spills or heavy equipment, garage floor epoxy proves to be
            efficient. Selecting epoxy coating for your garage creates
            functionality and a welcoming atmosphere. Let’s explore the numerous
            advantages of having a garage epoxy floor.
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
            Epoxy garage floors provide many advantages, including enhanced
            looks, greater strength, and increased safety. It transforms a basic
            concrete floor into a neat, well-lit, and practical area suitable
            for any purpose. Epoxy is the perfect option for any homeowner due
            to its minimal upkeep, ability to resist chemicals, and range of
            customization choices. Consider investing in epoxy flooring to make
            your garage both functional and aesthetically pleasing.
          </p>
          <p className="text-md text-black mt-2"></p>
        </div>
        {/* FAQs Section */}
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
