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
    heading: "Understanding Concrete Floor Insulation",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Concrete floor insulation simply means putting in stuff that slows
              down heat moving from the floor to the earth. It does two jobs,
              making the floor feel toastier and keeping the inside temperature
              steady. This way, there’s no need to crank up the heat or AC too
              much.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How to Insulate Concrete Floor from Cold",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Concrete floor insulation from the cold is essential to prevent
              heat loss and to create a comfortable living space. Here are some
              effective methods:
            </p>
          </div>
        ),
        listItems: [
          "Insulation Boards: Imagine hard panes you can place directly on your concrete floor. These are floor insulation boards. Materials like polystyrene or polyurethane make them up. Good noodles resist heat excellently. Additionally, they’re a breeze to fit. After that, pop on any flooring you like, be it carpet, laminate, or even vinyl.",
          "Underfloor Heating Systems: Underfloor heating systems can be slipped under the concrete to keep things warm. They use wires with electricity or pipes filled with water to make heat. This heat moves to the concrete floor and then up into the room on top.",
          "Foam Insulation: Directly applying spray foam insulation to a concrete floor works wonders. It seals all nooks and crannies, blocking chilly air from creeping in. This type of insulation proves especially beneficial in basements and places where dampness often lurks.",
          "Insulating Mats and Rolls: You can place these materials right on your concrete floor. Usually, they’re fiberglass, mineral wool, or foam. They offer insulation, keeping your floor toasty. places where dampness often lurks."
        ],
      },
    ],
  },
  {
    heading: " Are Concrete Floors Good for Insulation?",
    sections: [
      {
        paragraph:
          "Concrete floors don’t inherently provide much insulation. They soak up and move heat quickly, often resulting in a chilly and uninviting environment. Yet, by applying suitable insulation techniques, we can significantly improve the comfort and energy savings of concrete floors.",
     
      },
    ],
  },
  ,
  {
    heading: "What is the Minimum Thickness for Floor Insulation?",
    sections: [
      {
        paragraph:
          "Floor insulation thickness can change. Do you know why? The material used and the building’s needs are important to consider. Most times, insulation boards need to be 25 to 50 millimeters thick. But if we use spray foam insulation instead, it might need to be 50 to 100 millimeters thick. This is to make sure we get the right heat protection.",
       
      },
    ],
  },
  {
    heading: "How to Make Concrete Floor Warmer?",
    sections: [
      {
        paragraph:
          "Making a concrete floor warmer involves using one or more insulation methods mentioned earlier. Here are some additional tips for concrete floor insulation:",

        image: "",
        listItems: [
          "Carpet and Rugs: Covering the insulated concrete floor with carpets or rugs can add an extra layer of warmth and comfort.",
          "Thermal Underlay: Installing a thermal underlay beneath your chosen floor covering can enhance the insulating properties of the floor.",
          "Radiant Floor Heating: This system can be integrated into the concrete floor to provide consistent and adjustable warmth."
        ],
      },
    ],
  },
  {
    heading: "What is the Cheapest Way to Insulate a Concrete Floor?",
    sections: [
      {
        paragraph:
          "A budget-friendly way to insulate a concrete floor involves the use of insulating mats or rolls. These substances are fairly cheap and easy to set up, making them a thrifty approach to lowering heat loss. Additionally, employing carpe­ts and rugs can provide additional coziness without a hefty expense.",

        image: "",
     
      },
    ],
  },
  {
    heading: "Floor Insulation Boards",
    sections: [
      {
        paragraph:
          "You’ll find floor insulation boards commonly used for concrete floors, thanks to their high heat resistance and simple setup. These boards range in size and substance, tailoring to unique requirements. Polystyrene boards, both light and budget-friendly, are an option, whereas polyurethane boards deliver top-notch insulation.",

        image: "",
     
      },
    ],
  },
  {
    heading: "Waterproof Floor Insulation",
    sections: [
      {
        paragraph:
          "Keeping areas that get damp, like bases and bathrooms, dry is key. Do you know how? Use stuff like closed-cell foam or put in a vapor barrier. This stops water from getting into your insulation. It does more than protect insulation. It stops mold and mildew from growing. Additionally, that makes your inside air healthy.",

        image: "",
     
      },
    ],
  },
  {
    heading: "Underfloor Insulation for Wooden Floors",
    sections: [
      {
        paragraph:
          "Having wooden floors on a concrete slab in your home? Boosting comfort and energy-saving can be as simple as insulating. Placing insulating boards or rolls underneath the wood floors can create a barrier. Additionally, the cold concrete can’t reach you.",

        image: "",
     
      },
    ],
  },
  {
    heading: "Best Insulation Over Concrete Floor",
    sections: [
      {
        paragraph:
          "Figuring out the ideal insulation for a concrete floor relies on considerations such as budget, ease of installation, and expected thermal effectiveness. Popular choices include insulation boards, foam insulation, and underfloor heating systems. Additionally, they all bring benefits to the table, but the perfect pick hinges on what you require and favor.",

        image: "",
     
      },
    ],
  },
  {
    heading: "How to Insulate Concrete Floor from Cold?",
    sections: [
      {
        paragraph:
          "If you want a warm concrete floor, first clean it well. Then, pick the right insulation. Ponder options like insulation boards, foam, or mats. Follow the manufacturer’s guide to install whichever you pick. Make sure it fits snugly and covers completely. Lastly, add your favorite floor topping. It could be carpet, laminate, or tiles. Apart from comfort, this helps with the look.",

        image: "",
     
      },
    ],
  },
  {
    heading: "Are Concrete Floors Good for Insulation? ",
    sections: [
      {
        paragraph:
          "Concrete floors, they’re cold, right? Guess what? Not always! Sure, they may zap warmth because they conduct heat quickly. But here’s the cool part (pun intended), you can boost their heat-trapping ability. Right insulation, that’s the trick. A raw, chilly concrete floor? Turn it cozy and live on with the right moves!",

        image: "",
     
      },
    ],
  },
  {
    heading: "What is the Minimum Thickness for Floor Insulation?  ",
    sections: [
      {
        paragraph:
          "How thick should your floor insulation be? It depends on the kind you use. Rigid insulation boards? Aim for 25 to 50 millimeters. Using spray foam? You might need 50 to 100 millimeters for good heat resistance. Don’t forget to check the manufacturer’s advice and local building rules. That way, you’ll know the right thickness for your unique task",

        image: "",
     
      },
    ],
  },
  {
    heading: "How to Make Concrete Floor Warmer?",
    sections: [
      {
        paragraph:
          "Think your concrete floor’s too cold? Try putting in underfloor heating or thermal insulation under your floor finish. Throwing down carpets and rugs can make it cozier, too. To keep your feet toasty, you need to insulate right. Additionally, use stuff like insulation boards or foam insulation.",

        image: "",
     
      },
    ],
  },
  {
    heading: "What is the Cheapest Way to Insulate a Concrete Floor?",
    sections: [
      {
        paragraph:
          "Layering your concre­te floor with insulating mats or rolls is your best bet if you’re­ budget-minded. They’re­ not pricey, plus they’re simple­ to set up. They’re awe­some for cutting down on heat escape­. Throwing down some carpets and rugs, too, can bump up your floor’s coziness without making your finance­s sweat.",

        image: "",
     
      },
    ],
  },
  {
    heading: "Is Your Concrete Floor Cold and Uncomfortable?",
    sections: [
      {
        paragraph:
          "Don’t let an uninsulated concrete floor diminish the comfort and warmth of your home. Our Concrete Coating Services offer a comprehensive solution to enhance the thermal performance of your concrete floors, making them warm, inviting, and energy-efficient. With our expert application of high-quality insulation materials, you’ll experience a significant improvement in your indoor comfort, reducing energy costs and creating a cozy living environment.",

        image: "/images/Concrete-Floor-Insulation-1024x683.jpeg",
     
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
              "What Are the Best Methods for Concrete Floor Insulation?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "June 21, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "9:29 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Concrete-Floor-Insulation.png"
            alt="Yrc Christmas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Concrete floors are hard and practical. But they can also feel
            chilly without good insulation. Correct insulation on these floors
            can increase your house’s comfort. It can make your home more
            energy-efficient and lower your heating bills. This article will
            explore the different ways to concrete floor insulation. We’ll offer
            in-depth facts about each way and tackle the usual questions about
            floor insulation
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
            Concrete floor insulation is key to a cozy, energy-saving home.
            Recognizing different strategies and picking suitable insulation
            goods can turn a chilly, uninviting concrete floor into a welcoming
            part of your home. You could choose insulation boards, foam
            insulation, or even underfloor heating. The rewards of good
            insulation justify the investment. Additionally, think about aspects
            like cost, simplicity of installation, and desired heat performance
            when choosing the best insulation method for your concrete floor.
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
