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
    heading: "Advantages of Concrete Coating for Outdoor Surfaces",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Durability and Protection: Coating concrete has several advantages, including enhanced durability and protection. Outdoor surfaces are subject to a range of environmental factors, such as sunlight, precipitation, snow, and temperature changes. A quality concrete coating can protect against weathering, UV rays, and moisture, preventing cracks, chips, and other damage.",
          "Enhanced Aesthetics: Concrete coatings offer a range of options in terms of colors, patterns, and textures, enabling you to personalize the appearance of your outdoor surfaces. This versatility means you can choose a finish that complements your home’s exterior and landscaping, enhancing the overall curb appeal.",
          "Safety Features: Certain concrete coatings offer slip-resistant textures, making them ideal for pool decks, patios, and other areas where safety is a concern. This feature is particularly important in wet conditions, helping to prevent slips and falls.",
          "Low Maintenance: Coated concrete surfaces exhibit enhanced ease of cleaning and maintenance in comparison to uncoated concrete. The sealer acts as a barrier that hinders the entry of dirt, filth, and stains into the surface, so facilitating the maintenance of your outdoor areas in perfect condition.",
          "Cost-Effectiveness: Although the initial cost of applying a concrete coating may be higher compared to keeping the concrete bare, the potential long-term savings are substantial. Coated surfaces require less maintenance, have a longer lifespan, and can save money on repairs and replacements.",
        ],
      },
    ],
  },
  {
    heading: "Considerations for Outdoor Concrete Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
          </div>
        ),
        listItems: [
          "Getting Ready: The concrete needs to be clean and in good shape. Sometimes, you might have to fix it up a bit before putting the coating on.",
          "Pick the Right Stuff: Use a floor coating that’s meant for the outside and can handle your weather. Asking someone who knows a lot about it can help you choose the best one.",
          "When to Do It: Make sure the weather is just right – not too wet or too hot – so the coating dries nicely and sticks well.",
          "Get Help or Do It Yourself?: Putting the coating on can be tricky, so having someone who knows how to do it might be better than trying it yourself. They have the right tools and know-how to make it last a long time.",
        ],
      },
    ],
  },
  {
    heading: "Durability Against Weather Conditions",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the primary benefits of concrete epoxy coating for outdoor
              surfaces is its resilience against various weather conditions.
              Manufacturers design high-quality concrete coatings to withstand
              extreme temperatures, UV radiation from the sun, rain, and even
              snow. The durability of these materials makes them highly suitable
              for patios, driveways, and pool decks that face constant exposure
              to the elements throughout the year.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Protection Against Stains and Damage",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Outdoor surfaces are subject to being stained by oil, grease, and
              other pollutants. Concrete coatings create a barrier that protects
              the underlying concrete from such stains, making it easier to
              clean and maintain. Additionally, coatings can prevent damage from
              de-icing salts and chemicals used in pools, further extending the
              lifespan of outdoor concrete surfaces.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Putting a Protective Layer on Outdoor Concrete Floors",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p></p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Before You Start: The floor needs to be cleaned and fixed if there are any breaks or rough spots. Sometimes, you might need to make the concrete rough (like using sandpaper on wood) so the protective layer sticks better. Additionally, consider the climatic conditions in your locality and select a suitable outer garment that can withstand them.",
          "Taking Care of It: This protective layer is pretty easy to take care of. Washing it with a gentle cleaner and putting on a new layer every few years keeps it looking nice. It’s a good idea to check now and then to see if there are any scratches or spots that need fixing.",
        ],
      },
    ],
  },
  {
    heading:
      "Enhance Your Outdoor Living Experience with Expert Concrete Coating",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Are you ready to transform your outdoor spaces into stunning,
              durable areas that withstand the test of time and weather? Our
              Concrete Coating services are tailored to breathe new life into
              your patios, driveways, pool decks, and more, offering a perfect
              blend of beauty, durability, and safety. With an array of finishes
              and colors to choose from, we guarantee a customized solution that
              not only meets your aesthetic desires but also enhances the
              functionality and longevity of your concrete surfaces. Wave
              goodbye to poor outdated outdoor spaces and welcome lively,
              safeguarded regions that you and your family can relish for an
              extended period.
            </p>
            <p className="mt-2">
              Ready to upgrade your outdoor surfaces with top-tier concrete
              coating?
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
            {title || "Is Concrete Coating Suitable for Outdoor Surfaces?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "March 5, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:54 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Is-Concrete-Coating-Suitable-for-Outdoor-Surfaces-2.jpg"
            alt="Is-Epoxy-Patio-Coating-a-Durable-Option-for-Concrete-2"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Concrete coating is an excellent way to protect and enhance outdoor
            surfaces. Whether it’s a driveway, patio, or pool deck, applying a
            coating can provide numerous benefits, from improving aesthetics to
            extending the life of the concrete. But is concrete coating suitable
            for outdoor surfaces? The article will examine the benefits and
            factors to be taken into account.
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
            Concrete coating is a suitable and beneficial choice for outdoor
            surfaces, offering enhanced durability, aesthetics, and safety. When
            properly applied and maintained, a concrete coating can protect and
            beautify outdoor spaces for many years. However, it is essential to
            select the appropriate items and ensure accurate administration to
            attain optimal outcomes. For those unsure about tackling the project
            themselves. Consulting with a professional concrete patio coating
            service can provide peace of mind and ensure a high-quality finish.
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
