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
    heading: "Durability and Longevity",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              If you live in Tampa and own a home, think about a stamp concrete
              pool deck. Do you know why? Because it’s tough. Stamped concrete
              takes on harsh weather like a champ. Tampa’s sizzling, steamy
              summers and random drenching rains can mess up a lot of outdoor
              stuff. But not stamped concrete. This stuff stays strong. It stays
              solid in high heat and won’t crack or fade. It’s an ace pick for
              pool decks under the sun for a long time.
            </p>
            <p className="mt-2"></p>
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
              Making a pool area look good is important. Stamped concrete pool
              decks can help with that. They have a lot of design options and
              look great. The best part is that they can mimic the style of
              expensive stuff like brick, slate, or wood, but they’re way
              cheaper. This means you can have a cool, stylish pool deck without
              breaking the bank. Whatever your taste might be, a modern stamped
              concrete pool deck can mold to it. Want a modern pool design with
              smooth lines and present-day designs? Or maybe you like a
              traditional look with complex patterns? With stamped concrete,
              everything’s possible.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Safety and Comfort",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Pool zones prioritize safety, and stamped concrete works wonders
              here. One big plus of stamped concrete pool decks? Less slipping
              thanks to their surface. The patterns and textures from stamping
              give a good grip, cutting down on the risk of slipping when it’s
              wet. This is key, especially for families with kids or older
              people who might have more accidents.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Low Maintenance Requirements",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              One straightforward reason to go for a stamped concrete pool deck
              is its easy-care nature. Keeping your pool space spotless
              shouldn’t be a constant task. Stamped concrete requires basic care
              compared to other materials. Simple washing with a hose or
              pressure washer is often all you need to get rid of filth and
              junk. Plus, sealing the surface can guard against stains and water
              impact, making it last longer and look good.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Cost-Effective Solution",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When planning home updates, the budget usually plays a crucial
              role. Picking stamped concrete for pool decks could be a
              money-saving option. You don’t have to give up quality or looks
              with it. Usually, putting in stamped concrete is quicker and
              easier compared to other stuff like natural stone or tile. This
              means less money spent on labor and a quicker finish time. You get
              to relax on your new pool deck sooner!
            </p>
            <p className="mt-2"></p>
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
              These days, caring for the environment counts when making choices.
              A stamped concrete pool deck can be eco-friendly. It needs less
              from nature than wood or stone does. Making concre­te hurts nature
              less, plus concre­te that’s stamped lasts longer. This lowers
              waste from constant swaps. Also, we can make this type of concrete
              deck look like many natural materials without using them. A
              gray-stamped concrete pool deck can look just like slate. What a
              stunning and great option!
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Enhanced Property Value",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Putting money into a stamped concrete pool deck can uplift your
              property’s worth. A properly kept, good-looking pool spot holds
              big value for those who might want to buy. The good looks,
              toughness, and easy upkeep of stamped concrete can add charm to
              your house, perhaps making its worth go up. In Tampa’s intense
              house-selling scene, a unique thing like a stamped concrete pool
              deck can make your property special.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Upgrade Your Pool Deck with Stamped Concrete Magic!",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Are you looking to elevate your pool area into a space that
              combines elegance and functionality? Our Concrete Coating Services
              specialize in creating exquisite stamped concrete pool decks that
              enhance the beauty of your outdoor space. From modern stamped
              concrete pool decks to sophisticated grey-stamped concrete
              designs, we provide solutions that are both stylish and practical,
              ensuring a safe and low-maintenance environment for you and your
              loved ones.
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
              "Why Should Your Pool Deck Be Made of Stamped Concrete in Tampa?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "May 29, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:41 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Why-Should-Your-Pool-Deck-Be-Made-of-Stamped-Concrete-in-Tampa-2.jpg"
            alt="Yrc New Year"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Choosing the right material for your pool deck is key when building
            or redoing your pool area. It can greatly affect how your space both
            looks and works. Tampa’s warm, inviting weather makes swimming pools
            a beloved and familiar part of many homes. The pool deck is more
            than just a useful area, it plays a big role in your outdoor fun.
            Stamped concrete is a top pick for pool designs. This article will
            explore why stamped concrete is the best for Tampa’s pool decks.
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
            A stamped concrete pool deck is a solid pick for those wanting to
            jazz up their backyard in Tampa. With its sturdy construction, good
            looks, safety aspects, easy upkeep, and affordable price, it’s a
            top-notch choice. Both modern and gray concrete designs will bring a
            wonderful addition to your home that’s both practical and enjoyable.
            Discover the perks of stamped concrete and turn your pool zone into
            a luxurious oasis for endless pleasure with your family.
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
