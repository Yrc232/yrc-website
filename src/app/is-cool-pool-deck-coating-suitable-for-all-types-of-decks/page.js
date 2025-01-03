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
    heading: "What is Cool Pool Deck Coating?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Think of the cool pool deck coating as a unique skin for the pool
              deck surface. It’s crafted from high-tech materials. Is it a
              secret? Reflecting sunlight instead of soaking it in. This means
              the deck stays friendly to your touch, even on intense summer
              days. How do you apply it? You paint on the liquid coat, and then
              it air-dries and hardens. What’s the result? A sturdy surface that
              won’t let you slip.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading:
      "Types of Decks and Their Compatibility with Cool Pool Deck Coating",
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
        subheading: "Concrete Decks",
        paragraph: (
          <div>
            <p>
              Pools often use concrete for their decks because it lasts and can
              be used in many ways. Cool deck coatings do well when applied to
              concrete. Thanks to the small holes or pores in concrete, the
              coating sticks on very well, making it last longer. Plus, the cool
              deck pool deck coating can bounce back a lot of sunlight. This
              keeps the deck’s surface from getting too hot, so you can walk on
              it comfortably even in the hottest part of summer.
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
        subheading: "Wooden Decks",
        paragraph: (
          <div>
            <p>
              Wood decks near pools have a cozy, down-to-earth look. But wood
              can get hot, too hot to step on! Pool deck cool coating can be
              tricky on wood. It sticks better to concrete than to wood. Also,
              when wood gets cold or hot, it can expand or shrink. This might
              make the coating split or flake off. You might need special base
              coats and sealing paints to get the wood ready for the coating.
              Even if you do this, it might not last as long as other
              materials..
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
        subheading: "Stone Decks",
        paragraph: (
          <div>
            <p>
              Wood decks near pools have a cozy, down-to-earth look. But wood
              can get hot, too hot to step on! Cool deck pool coating can be
              tricky on wood. It sticks better to concrete than to wood. Also,
              when wood gets cold or hot, it can expand or shrink. This might
              make the coating split or flake off. You might need special base
              coats and sealing paints to get the wood ready for the coating.
              Even if you do this, it might not last as long as other materials.
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
        subheading: "Paver Decks",
        paragraph: (
          <div>
            <p>
              People often pick pavers for pool decks. Do you know why? Easy to
              install, many design options. Cool coatings for pool decks? Sure,
              they work on pavers. But let’s think about a few things. Paver
              joints might wear out the coating faster. Also, pavers need to
              seal well, or the coating may not last. With good prep, paver
              decks do well with cool pool deck coatings.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of Cool Pool Deck Coating",
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
        subheading: "Temperature Reduction",
        paragraph: (
          <div>
            <p>
              We all know how pool decks can get hot. That’s where cool deck
              coatings come in handy. These help to lessen the deck’s surface
              temperature. How? They bounce back the sun’s heat. Even on
              sweltering days, your deck stays cool. Walking barefoot? No sweat,
              and no worries about burns. Now, that’s comfort!
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
        subheading: "Enhanced Safety",
        paragraph: (
          <div>
            <p>
              These coatings do more than just cool surfaces. They also improve
              safety with their slip-resistant finish. Think about pool areas,
              which can be slippery when wet. They pose a slip hazard. Yet, the
              coating’s textured surface solves this problem. It helps prevent
              slips and falls, making everyone safer around the pool.
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
        subheading: "Durability and Longevity",
        paragraph: (
          <div>
            <p>
              Deck coatings that stay cool are built tough. They can handle
              rough outdoor weather. You won’t see cracks, peeps, or any fading.
              Your deck stays looking good, year after year. Also, they shield
              your deck from harmful stuff. Things like sun rays, water, and
              chemicals. So, your deck stays fresh and lasts longer.
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
        subheading: "Charming Look",
        paragraph: (
          <div>
            <p>
              There is a diverse set of shades and textures for these coatings.
              It lets homeowners tailor their swimming areas. Maybe you like a
              clean, current style, or perhaps you favor something more organic
              with texture. There’s a cool deck covering that satisfies your
              style taste. With so many designs to select from, it’s easy to
              amplify your backyard’s look. Plus, you’ll appreciate the
              practical perks of the coating.
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
        subheading: "Challenges and Considerations",
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
        subheading: "Proper Application",
        paragraph: (
          <div>
            <p>
              Applying a cool pool deck coating comes with its challenges. First
              and foremost, the deck surface needs a good cleaning. Any grime,
              grease, or loose particles can mess up the coating process. Issues
              like peeling or air pockets could come up later. This is why
              getting a pro to do the job is often a smart move. Their expertise
              ensures top-notch applications.
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
        subheading: "Maintenance",
        paragraph: (
          <div>
            <p>
              Pool deck coatings, though tough, needed a little upkeep to stay
              superb. Regular clean-ups stop dirt piles, keeping the coating
              working well. Additionally, sometimes you might need to apply a
              fresh layer, especially where the footsteps of old tread and
              coatings can thin fast.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading:
      "Is Cool Pool Deck Coating the Perfect Solution for Your Pool Area?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Are you tired of burning your feet on your pool deck? Discover how
              cool pool deck coatings can revolutionize your outdoor space. Our
              comprehensive blog explores the benefits, compatibility, and
              maintenance of cool pool deck coatings, helping you decide if this
              solution is right for you. Don’t let the heat ruin your poolside
              fun. Learn how our Pool Deck Coating Services can enhance safety,
              durability, and visual appeal, making your pool area the ultimate
              relaxation spot.
            </p>
            <p className="mt-2">
              Curious to find out if cool pool deck coating is the perfect
              solution for your pool area?
            </p>
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
              "Is Cool Pool Deck Coating Suitable for All Types of Decks?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "May 22, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:16 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Is-Cool-Pool-Deck-Coating-Suitable-for-All-Types-of-Decks-2.jpg"
            alt="Epoxy Concrete Flooring"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Many homes have swimming pools, a great place to relax and have fun.
            However, pool owners often worry about the dust around the pool. It
            can get very hot in the sun, making it difficult and sometimes
            unsafe to walk on. That’s where cool pool deck coatings help. They
            keep your pool deck’s surface cooler, making it nice to use. But you
            might wonder, Can all decks use this cool coating? This article will
            explore the different points about cool pool deck coatings.
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
            Cool pool deck coating brings lots of benefits. They lower heat,
            boost safety, and make decks stronger and prettier. But not all
            decks go with them. Concrete one­s? They’re best friends. Wooden and
            stone decks? They needed extra care and prep to look their best.
            Paver de­cks? They can shine too if kept right with good care and
            upkeep.
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
