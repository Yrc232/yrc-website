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
              First, durability and strength stand out as key benefits of this
              flooring. An epoxy concrete ground can withstand heavy foot
              visitors with top-notch ease. This ground form is likewise proof
              against wear and tear over the years. Its difficult floor ensures
              it lasts a few years without harm or flaws.
            </p>
            <p className="mt-2">
              Epoxy floors perform properly under stress, making them best for
              busy regions. They can handle heavy systems and machinery without
              damage. Many businesses and homes use epoxy floors for their
              long-lasting features. This durability makes them a top choice for
              many buyers
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
              Second, easy maintenance is another major advantage of choosing
              epoxy flooring. Cleaning an epoxy floor takes minimal time and
              effort each week. Regularly sweeping and mopping help maintain the
              surface’s look of cleanliness. Spots and spills can be easily
              removed without specific cleaning products and tools.
            </p>
            <p className="mt-2">
              Many homeowners discover that maintaining an epoxy floor is easy.
              A clean quick-up is all that is required following a spill. Many
              users appreciate the low effort required for upkeep. This
              convenience helps busy families and workers keep their floors
              neat.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Aesthetic Appeal",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Third, the aesthetic appeal makes epoxy flooring very popular
              among buyers. Homeowners can easily choose from various designs
              and colors. A metallic epoxy floor adds a stunning shine and depth
              to any space. The marble epoxy floor offers elegance and beauty
              for a more classic look.
            </p>
            <p className="mt-2">
              The extensive variety of options permits everyone to discover
              their ideal style. Many owners prioritize customizing their floors
              to fit their tastes. Epoxy flooring enhances the look of homes and
              companies alike. A beautiful floor can improve the complete sense
              of any room.
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
              Fourth, cost-effectiveness is vital for many buyers when choosing
              flooring. While the initial cost may seem high, savings come later
              on. An epoxy floor lasts longer than other flooring types,
              reducing long-term replacement costs. Its low maintenance needs
              also save busy owners money over time.
            </p>
            <p className="mt-2">
              This long-lasting option means fewer expenses in the future. Many
              people find that investing in epoxy flooring is wise. Its strength
              and durability stand out from other choices, making epoxy floors a
              smart choice for any buyer.
            </p>
          </div>
        ),
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
              Fifth, chemical resistance is another major benefit that buyers
              appreciate. Many industries use epoxy floors to resist harmful
              spills. Oil, grease, and chemicals will not damage the surface
              easily or quickly. This resistance makes epoxy floors a smart
              choice for garages and workshops
            </p>
            <p className="mt-2">
              Many users do not need to worry about stains. The tough surface
              protects against many everyday spills and messes, and users often
              praise the flooring for its resilience in harsh conditions.
              Choosing epoxy flooring protects your investment and enhances your
              space.
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
              Next, the installation process is quick and simple for most users.
              Many homeowners can complete the job easily within just one day.
              Professional installers also work quickly and efficiently to
              finish projects fast. This fast process means less disruption to
              your daily life and routine.
            </p>
            <p className="mt-2">
              A quick installation allows you to enjoy your new floor sooner.
              Many buyers appreciate how easy it is to start using their space.
              Less time spent on installation means more time enjoying the
              results. This efficiency makes epoxy floors a favorite among many
              buyers.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Environmental Benefits",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy flooring is an eco-friendly choice for many houses and
              corporations. It has low VOC emissions, making it safe for indoor
              air. This means fewer harmful fumes for your family or workers.
              Many epoxy products are also made from recycled materials.
              Choosing an epoxy floor helps reduce waste and support green
              practices. This flooring option promotes a healthy and safe
              environment. Overall, epoxy floors offer great value without
              harming the planet
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Versatility of Use",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Epoxy floors are very versatile and can fit many spaces. They work
              well in homes, garages, and commercial areas. You can easily use
              epoxy flooring in warehouses and factories. Its strength makes it
              ideal for high-traffic zones and heavy use. Many people choose
              epoxy for their basements or outdoor areas. This flooring option
              adapts well to various styles and needs. You can customize your
              epoxy floor to suit any space perfectly.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Protect and Beautify Your Concrete with Our Premium Coatings",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ready to enhance your space with our concrete coating services?
              Contact us now for a quote! Our team will provide fast,
              top-quality service. Enjoy a strong and beautiful floor today.
              Don’t wait—transform your concrete with our expert help! Call us
              to learn more about our services.
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
            {title || "What Are the Main Benefits of Epoxy Concrete Flooring?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 4, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "8:40 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Epoxy-Concrete-Flooring.jpg"
            alt="Epoxy Concrete Flooring"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Epoxy concrete flooring is a general choice for many houses and
            groups. It offers power, beauty, and ease of use. Many people love
            its durability and low maintenance needs. This type of ground stands
            up well to wear and tear. Various patterns, colorations, and
            finishes are available. Options include stunning metallic and
            elegant marble designs. Choosing an epoxy concrete floor adds value
            to any space. Let’s explore the main benefits of epoxy concrete
            flooring in detail.
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
            In conclusion, epoxy concrete flooring provides many valuable
            benefits for users. The durability, easy maintenance, and aesthetic
            enchantment attract many buyers. Investing in an epoxy concrete
            ground is a smart preference for any area. Enjoy the strength and
            splendor of this flooring with confidence for years yet to come.
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
