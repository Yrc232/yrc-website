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
    heading: "What is Epoxy Driveway Coating?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Driveway epoxy coating is a shielding layer implemented in
              driveways to enhance their stability and look. It includes a resin
              and hardener that, even as blended, creates a chemical response
              leading to a hard, durable surface. This coating now not only
              correctly improves the driveway’s appearance but additionally
              offers a strong barrier in competition with environmental
              elements.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Composition of Epoxy Driveway Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This driveway coating is made by mixing epoxy resin with a
              hardener. The resin is the necessary essential part that binds the
              coating to the driveway floor, even as the hardener allows it to
              cope with and solidify the combination. This mixture finally
              results in an excessive-performance coating that is very flexible.
            </p>
            <p className="mt-2">
              Epoxy resin appears for its peak mark adhesion homes. They create
              a strong bond with concrete surfaces, ensuring that the coating
              stays in the region even under heavy strain.
            </p>
            <p className="mt-2">
              Hardeners play an important feature in a curing manner. They
              assist the epoxy resin to set well, growing a hard, durable end
              that can withstand damage from chemical substances, oils, and
              climate factors.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of This Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy driveway coatings offer numerous blessings that contribute
              to their prolonged-lasting nature:
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
        subheading: "Durability",
        paragraph: (
          <div>
            <p>
              One of the primary reasons epoxy coatings are strict is their
              resistance to abrasion and impact. The hardened floor can address
              the load of vehicles and foot traffic without displaying symptoms
              and signs and symptoms of damage.
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
        subheading: "Weather Resistance",
        paragraph: (
          <div>
            <p>
              Epoxy coatings are specifically proof of climate-related damage.
              They can withstand excessive temperatures, UV rays, and moisture,
              stopping problems like cracking and peeling.
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
        subheading: "Chemical Resistance",
        paragraph: (
          <div>
            <p>
              Epoxy driveway coatings face up to stains and damage from
              chemicals collectively with oil and gas. This feature is
              particularly beneficial for driveways uncovered to car fluids.
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
        subheading: "Ease of Maintenance",
        paragraph: (
          <div>
            <p>
              Maintaining an epoxy-covered driveway is especially simple.
              Regular cleaning with a slight detergent and water can preserve it
              searching smoothly. Additionally, the coating’s resistance to
              stains method that spills and dust are clean to smooth.
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
        subheading: "Attractive Look",
        paragraph: (
          <div>
            <p>
              Epoxy coatings are available in several shades and finishes,
              allowing house owners to pick out a glance that enhances their
              property. The smooth give-up can also enhance the general look of
              the driveway
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Application Process",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The software manner for driveway epoxy coating is crucial to its
              strength and effectiveness. Proper exercise and alertness make
              certain that the coating adheres properly and performs as
              predicted.
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
        subheading: "Surface Preparation",
        paragraph: (
          <div>
            <p>
              The driveway surface needs to be easy, dry, and freed from any
              cracks or damage in advance rather than making use of the epoxy
              coating. This step regularly includes cleansing the surface very
              well, repairing any cracks, and etching the concrete to improve
              adhesion
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
        subheading: "Priming",
        paragraph: (
          <div>
            <p>
              Applying a primer coat is critical to beautifying the adhesion of
              the epoxy to the concrete floor. The primer allows to sealing of
              the ground and creates a higher bond for the epoxy coating.
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
        subheading: "Mixing and Application",
        paragraph: (
          <div>
            <p>
              The epoxy resin and hardener should be jumbled together to
              appropriate proportions to ensure the right curing. Once blended,
              the epoxy is applied to the driveway using a curler or brush. It’s
              essential to apply the coating lightly and keep away from growing
              thick spots.
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
        subheading: "Curing",
        paragraph: (
          <div>
            <p>
              After application, the epoxy coat driveway needs time to be
              treated completely. This procedure can take numerous hours to
              days, depending on the product used and environmental conditions.
              Proper curing is important for achieving the favored durability
              and performance
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Common Issues and Solutions",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Despite its many blessings, epoxy driveway coating can on occasion
              face issues. Understanding those issues and their solutions can
              help maintain the coating’s durability.
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
        subheading: "Peeling and Bubbling",
        paragraph: (
          <div>
            <p>
              These issues can arise if the surface is not properly prepared or
              if the epoxy change into carried out too thickly. To prevent this,
              ensure the floor is straightforward and nicely etched, and
              exercise the epoxy in thin, even layers.
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
        subheading: "Color Fading",
        paragraph: (
          <div>
            <p>
              Over time, the exposure of UV rays can encourage the epoxy coating
              to vanish. Choosing a notable, UV-resistant epoxy can assist
              mitigate this trouble.
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
        subheading: "Cracking",
        paragraph: (
          <div>
            <p>
              Cracking can manifest if the concrete beneath the coating shifts
              or settles. Regular inspection and properly timed repair of any
              underlying troubles can save you this hassle.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Why Choose Epoxy Driveway Coating?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy driveway coating is a fantastic desire for those searching
              for a long-term and attractive solution for their driveways. Its
              aggregate power, resistance to climate and chemical compounds, and
              simplicity of protection make it a complicated choice compared to
              special coatings. Whether you need to decorate the arrival of your
              driveway or make certain it’s tough, epoxy flooring provide a
              dependable and effective solution.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Your Driveway Ready for a Durable Makeover?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Transform your driveway with our professional epoxy driveway
              coating services. Our expert group guarantees a smooth,
              prolonged-lasting give-up that could cope with heavy site
              visitors, harsh weather, and ordinary put and tear. With superb
              materials and precise software, we supply a coating that not only
              complements the beauty of your driveway but also extends its
              lifespan.
            </p>
            <p className="mt-2">
              Want a driveway that is fashionable and flexible?
            </p>
            <p className="mt-2">
              Contact us now to resolve the problems of coating and enjoy a
              ground that is constructed to last!
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
              "What Makes Epoxy Driveway Coating Durable and Long-lasting?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "August 20, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "2:49 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Epoxy-Driveway-Coating-1.jpg"
            alt="Polyurea-Coating"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Epoxy driveway coating is a popular choice for house owners looking
            for stability and an attractive finish for their driveways. It
            provides a strong surface that can easily face hard and fast weather
            conditions, such as heavy site visitors, and numerous different
            stresses. Understanding why epoxy coatings are so flexible includes
            examining their composition, application method, and upkeep
            necessities. This article will explore those factors in detail,
            highlighting what makes epoxy coating a top desire for those looking
            to enhance the strength and charm of their driveways..
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
            Epoxy driveway coating is well-known for its strongest and
            longest-lasting properties because of its strong composition and
            application technique. Its resistance to environmental factors,
            chemical damage, and regular wear and tear make it a well-known
            desire amongst homeowners. With the proper coaching and
            preservation, epoxy coatings can notably enhance the lifespan and
            look of your driveway.
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
