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
    heading: "Understanding Polished Concrete Floors",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            What exactly are polished concrete floors? It’s like concrete decided to glow up. Concrete floor polishing is a unique process that turns rough, boring concrete into a sleek surface. People can’t stop admiring them in homes, shops, and industries everywhere. These polished beauties are durable, modern, and practical. They’re also extremely low-maintenance, which is great because who likes cleaning all the time?
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Where Are Polished Concrete Floors Best Used?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Polished concrete floors belong anywhere people want easy and clean surfaces. Period. But, to be more precise, let’s dig into the details.
            </p>
            <p className="mt-2">
             
            </p>
            <p className="mt-2">
             
            </p>
            <p className="mt-2">
             
            </p>
            <p className="mt-2">
           
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Residential Spaces",
    sections: [
      {
        paragraph:
          "Imagine polished concrete floors shining in your fancy kitchen or bright living room. Now, imagine them there when you spill red wine or spaghetti sauce. They can take it all. Seriously! Polished concrete floors work wonders in residential spaces because they look sleek, are easy to clean, and make your home cooler—literally cooler in temperature.",
      },
    ],
  },
  ,
  {
    heading: "Commercial Buildings",
    sections: [
      {
        paragraph:
          "If polished concrete floors were in a movie, they’d be the hero walking in slow motion through a commercial building. You know, that iconic shot of something ridiculously cool. Offices love polished concrete floors. That’s because they’re low-cost and high-impact. Commercial settings need floors that resist foot traffic, coffee spills, and people’s occasional questionable shoe choices.",
      },
    ],
  },
  {
    heading: "Industrial Environments",
    sections: [
      {
        paragraph:
          "Do you want polished concrete floors for your factory? Say no more! Concrete floor polishing is perfect for industrial spaces. Forget about that dusty, dirty factory floor. Imagine sparkling polished concrete that stays cleaner, is resistant to wear, and doesn’t create issues with heavy machinery. Your industry won’t just produce goods—it’ll produce style!",

        image: "",
      },
    ],
  },
  {
    heading: "Retail and Showrooms",
    sections: [
      {
        paragraph:
          "Retail owners must love polished concrete floors. They’re the kind of floor you can’t ignore. Retail shops, showrooms, and stores with polished concrete don’t just invite customers inside; they convince customers to buy things. Why? Because the floor says, “I’m fabulous, and everything on me looks amazing!” And polished concrete isn’t lying—everything does look amazing",

        image: "",
      },
    ],
  },
  {
    heading: "Benefits of Polished Concrete Floors",
    sections: [
      {
        paragraph:
          "",

        image: "/images/Polished-Concrete-Floors1-1024x683.jpg",
      },
    ],
  },
  {
    heading: "Durability and Low Maintenance",
    sections: [
      {
        paragraph:
          "Polished concrete floors are here to stay. And by that, we mean they’re not going anywhere, no matter how much you use them. They laugh in the face of wear and tear. Also, they’re super easy to maintain. Mop once in a while, and you’re set. No waxing, no complicated cleaning routines—just a mop and some water, and boom, it’s like new!",

        image: "",
      },
    ],
  },
  {
    heading: "Aesthetic Appeal and Versatility",
    sections: [
      {
        paragraph:
          "They’re also pretty to look at. Yes, we said it. Concrete can be beautiful. These polished surfaces have a glossy shine that reflects light and enhances the space. You get elegance without having to pay for Italian marble. As polished concrete floors are available in various finishes and colors, you can select the one that most fits your preferences.",

        image: "",
      },
    ],
  },
  {
    heading: "Cost-effectiveness in the Long Run",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
            Here’s the catch: Polished concrete floors cost a bit more upfront but save you a fortune later. No more expensive cleaning solutions, no costly replacements—these floors last ages. You save in the long run, and that’s what everyone loves—a good bargain with style.
            </p>
            <p className="mt-2">
           
            </p>
            <p className="mt-2">
              
            </p>
            <p className="mt-2">
            
            </p>
          </div>
        ),
      },
    ],
  },
];
const faqsData = [
  {     question: "How to Polish Stained Concrete Floors?",
     answer:
       "Polishing stained concrete floors is not rocket science. But you will need a concrete grinder. First, clean and prepare the floor by removing anything that shouldn’t be there—like dirt or bad memories. Use a concrete grinder to smooth the surface. Then apply polish and continue grinding until it’s as shiny as your favorite celebrity’s teeth.",
   },
   {
     question: "How to Clean Polished Concrete Floors?",
     answer:
       "Cleaning polished concrete floors is easy! Get a mop that doesn’t look like it fought a war. Add warm water. Swipe across the polished floor, and ta-da! Mix a little neutral pH cleaner into the water if some dirt refuses to leave. Done in minutes—no drama.",
   },   {
     question: "Are Polished Concrete Floors Worth It?",
     answer:
       "Yes. End of story. Okay, maybe not entirely the end. Polished concrete floors are a great investment if you value resilience, easy care, financial savings, and sophisticated style. They are contemporary, they are simple, and they are a great option overall. If polished concrete floors were a person, they would be dependable friends who always come through for you.",
   },
  //  {
  //    question: "Can I Remove Swirl Marks by Hand?",
  //    answer:
  //      "Yes, removing swirls by using a hand is possible with a mark remover and a microfiber fabric. This approach requires greater effort and endurance as compared to machine polishing. Apply the remover in small sections, lightly work it into the paint, and buff the location until clean.",
  //  },
  //  {
  //    question: "How to Buff Without Swirl Marks?",
  //    answer:
  //      "To buff without growing marks, use a smooth, tender microfiber cloth or a buffing pad. Apply light, and even pressure, and use an again-and-forth or side-to-side motion instead of circular moves. Ensure the floor is clean and avoid excessive stress to save you new blemishes.",
  //  },
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
              "Where Are Polished Concrete Floors Best Used?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "yrc"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 29, 2024"}
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
            src="/images/Polished-Concrete-Floors.jpg"
            alt="Polished Concrete"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
          Polished concrete floors are not a fancy trend in elite homes. They’re floors. Simply your typical concrete floors, but polished perfectly. If you are trying to find the ideal area for polished concrete floors, this is not the right source for that information. Just joking. You are in the perfect place.
          </p>
          <h2 className="mt-6 text-lg text-green-600">
            
          </h2>
          <p className="mt-6">
          
          </p>
          <p className="mt-6">
            
          </p>
          <p className="mt-6">
         
          </p>
          <p className="mt-6">
            
          </p>
          <p className="mt-6">
           
          </p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-green-600">{item.heading}</h2>

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
          <h2 className="text-2xl font-bold text-black">
          Conclusion
          </h2>
          <p className="text-md text-black mt-2">
          Polished concrete floors are perfect for residences, commercial properties, manufacturing facilities, and shopping venues. They sparkle, last long, and require less care. Who would not want that on a floor? Concrete floor polishing is not just practical but about style and reliability. If you are thinking about flooring, think polished concrete. It might be the easiest and best decision you will ever make. Next, choose a floor that offers both beauty and durability. Contact us today to get started on your polished concrete project! Cheers to making wise flooring choices!
          </p>
          <p className="text-md text-black mt-2">
            
          </p>
        </div>
        {/* FAQs Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-green-800">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-green-600">
                {faq.question}
              </h3>
              <p className="text-md text-black mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
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
