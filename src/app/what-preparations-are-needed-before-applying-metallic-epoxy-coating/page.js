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
    heading: "Assess the Floor Condition",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The first step in preparing for a metallic epoxy coating is to
              thoroughly assess the condition of the floor. Look for cracks,
              chips, and other damage. These imperfections need to be repaired
              before you start the epoxy application process. Not addressing
              these issues can result in an uneven finish and may even cause the
              coating to fail.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Clean the Surface",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              For epoxy to adhere properly, the floor must be clean and free of
              any contaminants, such as oil, grease, or dust. Start with a
              thorough sweeping or vacuuming of the area. Then, use a degreaser
              or a suitable cleaning solution to remove any stains or oily
              residues. Lastly, thoroughly cleanse the floor using fresh water
              and let it dry fully. Remember, moisture is the enemy of a
              successful epoxy application, so ensure the floor is entirely
              moisture-free.
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
    heading: "Prepare the Surface",
    sections: [
      {
        subheading: "",
        paragraph:
          "The epoxy coating requires a slightly porous and rough surface to adhere correctly. This usually means grinding the concrete floor with a diamond grinder or shot-blasting it to create the right texture. This process also removes any remaining contaminants and provides a fresh surface for the epoxy to bond to.",
      },
    ],
  },
  ,
  {
    heading: "Check for Moisture",
    sections: [
      {
        subheading: "",
        paragraph:
          "Concrete floors can hold moisture, which can interfere with the epoxy application. Before proceeding, it’s crucial to check the floor for moisture. You can achieve this by affixing a plastic sheet to the floor and allowing it to remain undisturbed for 24 hours. If there’s condensation on the plastic when you remove it, your floor has moisture issues that need to be addressed before applying the epoxy.",
      },
    ],
  },
  {
    heading: "Plan Your Design",
    sections: [
      {
        subheading: "",
        paragraph:
          "One of the appealing aspects of a metallic epoxy floor coating kit is the ability to create unique designs and patterns. Before mixing your epoxy, plan out the design you want to achieve. Consider where you’ll blend different colors or how you’ll use techniques like air blowing to create effects in the epoxy. Having a clear plan will make the application process smoother and ensure you achieve the desired finish",

        image: "",
      },
    ],
  },
  {
    heading: "Mix the Epoxy",
    sections: [
      {
        paragraph:
          "Once the floor is prepared, and you have your design in mind, it’s time to mix the epoxy. Follow the manufacturer’s instructions carefully. Incorrect mixing can lead to a poor finish or even cause the epoxy not to set correctly. Most metallic epoxy systems have a specific working time, so mix only what you can use within that timeframe.",

        image: "",
      },
    ],
  },
  {
    heading: "Temperature and Humidity Control",
    sections: [
      {
        subheading: "",
        paragraph:
          "The environment plays a crucial role in the successful application of a metallic epoxy coating. Epoxy resin reacts to temperature and humidity, affecting its curing time and the final appearance. Ideally, the room temperature should be between 60°F to 75°F (15°C to 24°C), with humidity levels below 60%. Conditions outside of these ranges can lead to issues such as bubbles in the finish or improper curing. Ensure the space is well-ventilated yet free from drafts that could introduce dust or debris into the wet epoxy.",

        image: "",
      },
    ],
  },
  {
    heading: "Equip Yourself with the Right Tools",
    sections: [
      {
        subheading: "",
        paragraph:
          "It is crucial to have the appropriate tools readily available to ensure a seamless application procedure. Essential tools and materials include:",

        image: "",
        listItems: [
          "A high-quality roller designed for epoxy application, ensuring an even coat without shedding fibers.",
          "A squeegee for spreading the epoxy evenly across the floor.",
          "Utilize stirring implements and receptacles to prepare the epoxy mixture following the guidelines provided by the manufacturer.",
          "Spiked shoes that allow you to walk over the epoxy as you apply it, enabling you to reach all areas of the floor without leaving marks",
          "Decorative chips or pigments, if desired, to customize the appearance of your floor further.",
        ],
      },
    ],
  },
  {
    heading: "Safety Precautions",
    sections: [
      {
        paragraph:
          "Working with epoxy resins requires caution due to the chemicals involved. Safety measures include:",

        image: "",
        listItems: [
          "To prevent the absorption of fumes and protect your skin from epoxy exposure, it is advisable to utilize protective equipment such as gloves, goggles, and a respirator mask.",
          "Ensuring the room is well-ventilated to disperse fumes.",
          "Reading and following all safety instructions provided by the epoxy manufacturer.",
        ],
      },
    ],
  },
  {
    heading: "Transform Your Garage with Professional Epoxy Coating Services",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Is your garage floor exhibiting indications of deterioration, or
              do you simply desire a new, impressive appearance for your area?
              Our Epoxy Garage Coating services are here to revolutionize your
              garage, turning it into a durable, sleek, and easy-to-clean area
              that extends beyond mere storage or parking. Saying goodbye to
              blemishes, fractures, and lackluster concrete flooring. Adopt a
              superior, expert epoxy coating that not only improves the look of
              your garage but also increases the value of your home. With a wide
              range of colors and finishes, including the luxurious metal epoxy
              floor coating, customizing your space to reflect your style has
              never been easier.
            </p>
            <p className="mt-2">
              Ready to elevate your garage from ordinary to extraordinary?
            </p>
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
            {title ||
              "What Preparations Are Needed Before Applying Metallic Epoxy Coating?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "February 28, 2024"}
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
            src="/images/What-Preparations-Are-Needed-Before-Applying-Metallic-Epoxy-Coating-2.jpg"
            alt="Polished Concrete"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Applying a metallic epoxy coating to your floor can transform a
            plain surface into a stunning, gleaming work of art. The unique
            blend of metallic pigments with epoxy resin creates a floor that’s
            not just visually appealing but also durable and resistant to wear.
            However, achieving that perfect finish requires thorough
            preparation. Here’s what you need to do before applying a metallic
            epoxy coating to ensure a successful application and breathtaking
            results.
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
            Properly preparing for a metallic epoxy coating necessitates
            meticulous attention to detail and strategic preparation. Each
            stage, from evaluating and fixing the floor to guaranteeing its
            cleanliness, dryness, and appropriate priming, is essential for
            attaining a perfect outcome. While applying a metallic epoxy floor
            coating can be a DIY project, consider hiring professionals if
            you’re unsure about any part of the process. With the right
            preparation, your metallic epoxy floor will not only look stunning
            but also stand up to the demands of everyday use.
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
