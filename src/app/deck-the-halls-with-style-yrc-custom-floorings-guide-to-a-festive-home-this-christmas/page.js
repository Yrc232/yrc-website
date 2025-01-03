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
    heading:
      "Start with the Foundation: Choose the Right Flooring for Your Space",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The foundation of your home’s holiday transformation begins with
              the floor. Whether you’re hosting a large family dinner or
              planning an intimate Christmas gathering, the flooring you choose
              can set the tone for the entire space. YRC Custom Flooring offers
              a wide variety of options that combine beauty, durability, and
              comfort—perfect for the hustle and bustle of the holidays.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Hardwood Flooring for a Timeless Look: Nothing says elegance quite like hardwood floors. Rich oak, walnut, or maple hardwood floors create a warm, welcoming atmosphere for the holidays, providing a timeless backdrop for your decorations. Hardwood is also easy to clean, which is essential during the busy holiday season when there are plenty of gatherings and foot traffic.",
          "Luxury Vinyl Plank (LVP): If you want the look of hardwood but need something more budget-friendly or easier to maintain, LVP is the way to go. This durable and stylish flooring is perfect for high-traffic areas like living rooms or dining areas, where the action tends to be concentrated during the holiday season. Choose from a variety of designs and finishes to complement your holiday décor.",
          "Cozy Carpet for Comfort: For a more comfortable and soft ambiance, especially in bedrooms, family rooms, or home theaters, custom carpet is an excellent choice. Carpet can create a cozy atmosphere that’s perfect for relaxing by the fireplace or playing games with the family. Choose a plush, deep pile carpet in rich tones like red, green, or gold to bring out the festive spirit of Christmas.",
        ],
      },
    ],
  },
  {
    heading: "Warm Up Your Home with Area Rugs",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One of the easiest ways to create a festive atmosphere and enhance
              your flooring is by incorporating area rugs. Rugs add warmth,
              texture, and color to your space, while also helping to define
              different areas within a room. Whether you opt for a classic
              Christmas-themed rug or a more subtle design, area rugs can
              immediately make your home feel cozier and more inviting for the
              holiday season.
            </p>
            
          </div>
        ),
        listItems:[
          "Christmas-Themed Rugs: Consider adding a holiday-themed rug to your entryway or living room to instantly make your space feel festive. Choose designs with classic symbols like snowflakes, reindeer, or Christmas trees to bring in the holiday spirit.",
          "Elegant Rugs for Subtle Charm: If you prefer something more subtle, opt for an elegant rug in neutral tones with metallic accents. Gold, silver, or bronze can elevate the atmosphere without overpowering your décor. These rugs can seamlessly blend with your existing flooring and make your space feel both festive and sophisticated.",
          "YRC Custom Flooring offers a range of area rugs that can be custom-designed to suit your style, making it easy to complement your home’s look this holiday season."
        ]
      },
    ],
  },
  {
    heading: " Incorporate Festive Colors and Textures",
    sections: [
      {
        paragraph:
          "The Christmas season is all about rich, warm colors and textures. When it comes to flooring, you can achieve this festive look by carefully selecting materials and tones that highlight the season’s spirit. At YRC Custom Flooring, we can help you choose flooring options that enhance your home’s festive atmosphere with the right palette and textures.",
          listItems:[
            "Red, Green, and Gold Accents: These classic Christmas colors can be integrated into your flooring through accessories like rugs, runners, and throw blankets. Whether you choose rich dark woods or light neutrals, these accent colors can tie the entire space together, ensuring your home feels warm and welcoming.",
            "Textured Flooring for Depth: Adding texture to your flooring, such as a hand-scraped wood finish or a deep-pile carpet, can create a luxurious and inviting environment. These textures also add a sense of warmth and comfort, perfect for those chilly winter nights.",
            "Metallic Accents: For a touch of glamour, consider flooring with metallic accents or finishes, such as gold or silver metallic inlay in hardwood or tile. These small yet impactful details can bring sparkle and festive cheer to your home."
          ]
      },
      
    ],
  },
  ,
  {
    heading: "Maintain Clean Floors for Holiday Comfort",
    sections: [
      {
        paragraph:
          "The holiday season often means more foot traffic, spilled drinks, and dropped crumbs, which can quickly make your beautiful floors look less than pristine. With all the cooking, entertaining, and gift-giving, your floors are bound to take a hit during the Christmas season. To ensure your flooring remains in top condition throughout the holidays, consider these simple maintenance tips.",
          listItems:["Use Floor Protectors: Place floor protectors under heavy furniture and décor to prevent scratches and scuffs. This is particularly important if you have hardwood floors that are more susceptible to damage from the weight of furniture or sharp objects.",
            "Keep Floors Clean with Regular Sweeping and Mopping: Regular sweeping and mopping will help maintain the beauty of your floors and keep dust and dirt from accumulating. If you have a high-traffic area, consider using a vacuum with a soft brush attachment to avoid damaging the surface.",
            "Spill Protection: During holiday meals or celebrations, be prepared for spills. If you have hardwood or tile floors, ensure you wipe up any liquids immediately to prevent damage. For carpeted areas, use a cleaning solution designed for your carpet type to quickly remove any stains or spills.",
            "YRC Custom Flooring can help you maintain your floors with professional cleaning services and provide advice on how to keep your floors looking great throughout the holiday season."
          ]
      },
    ],
  },
  {
    heading: "Custom Flooring for Your Unique Christmas Style",
    sections: [
      {
        paragraph:
          "The beauty of custom flooring is that it allows you to create a truly unique and personalized home that reflects your style, whether you’re looking for something traditional or modern. At YRC Custom Flooring, we can design custom flooring solutions that fit your exact vision for the holidays and beyond.",

        image: "",
        listItems:["Personalized Designs: Whether you want a bold, festive floor design with intricate patterns or a sleek, minimalistic look with clean lines, our custom flooring options can help bring your vision to life. Choose from a variety of materials, colors, and textures to create the perfect flooring for your home",
          "Long-Lasting Quality: The holiday season is just one reason to invest in quality flooring. Custom flooring is designed to last for years, providing beauty and functionality for all your future holiday seasons. With professional installation from YRC Custom Flooring, you can rest assured that your new floors will stand the test of time.",
          
        ]
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
              "Deck the Halls with Style: YRC Custom Flooring’s Guide to a Festive Home This Christmas"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "December 16, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "9:29 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/yrc-chris.jpg"
            alt="Yrc Christmas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            The holiday season is a time of joy, togetherness, and celebration.
            It’s when we open our homes to loved ones, decorate with festive
            flair, and create memories that will last a lifetime. One of the
            most effective ways to elevate the ambiance of your home for
            Christmas is through your flooring. With the right custom flooring
            choices from YRC Custom Flooring, LLC, you can enhance your space
            and make it feel cozy, stylish, and ready for the holidays.
          </p>
          <h2 className="mt-6 text-lg text-green-600"></h2>
          <p className="mt-6">
            From sleek hardwood to cozy carpet, the right flooring choice can
            transform your space, making it the perfect setting for holiday
            gatherings, Christmas tree setups, and festive décor. This guide
            will walk you through how to “deck the halls” with beautiful
            flooring that sets the perfect tone for the holiday season.
          </p>
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
            This Christmas, make your home shine with beautiful, high-quality
            flooring from YRC Custom Flooring, LLC. From custom hardwood and
            luxury vinyl plank to plush carpet and festive area rugs, our
            flooring options can help you create the perfect atmosphere for the
            holidays. Whether you’re looking to add warmth, style, or comfort to
            your home, we have the expertise and products to make your home
            truly shine this Christmas season. Deck your halls with style and
            comfort, and let YRC Custom Flooring be your partner in creating a
            festive, welcoming home that’s ready for all your holiday
            gatherings. Reach out today to get started on your flooring
            transformation, and let’s make this Christmas one to remember!
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
