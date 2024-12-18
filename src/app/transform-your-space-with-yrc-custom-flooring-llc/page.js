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
    heading: "Why Choose YRC Custom Flooring, LLC?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              We specialize in a variety of flooring services, ensuring your
              property looks its best. Our offerings include:
            </p>
            <p className="mt-2"></p>
          </div>
        ),
        listItems: [
          "Patio Coating: Protect your outdoor patios from heat, weather, and traffic with durable coatings.",
          "Garage Coating: Our polyurea-polyaspartic coatings safeguard your garage surfaces for years.",
          "Concrete Coating: Cost-effective renovations that enhance the appearance and longevity of concrete floors.",
          "Driveway Coating: Shield your driveway from damage with our resilient coating solutions.",
          "Pool Deck Coating: Resurface old concrete for smooth, attractive pool decks.",
          "Commercial Coating: Specialized coatings for commercial spaces, ensuring durability and aesthetics.",
        ],
      },
    ],
  },
  {
    heading: "Exclusive Black Friday Offers",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              This Black Friday, take advantage of our special deals on all
              services. Whether it’s a residential upgrade or a commercial
              project, our team is ready to assist. Contact us at (813) 679-0367
              or visit our website to learn more about our offers.
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
    heading: "How to Prepare for Your Flooring Project",
    sections: [
      {
        paragraph:
          "Start by assessing the areas that need improvement. Identify spaces that would benefit from new coatings or resurfacing. Scheduling a consultation with our experts will help determine the best approach for your flooring needs. We will guide you through selecting the services that suit your property’s requirements.",
      },
    ],
  },
  ,
  {
    heading: "Eco-Friendly Flooring Solutions",
    sections: [
      {
        paragraph:
          "At YRC Custom Flooring, LLC, we prioritize sustainable practices. Our coatings are designed to be durable and environmentally friendly, reducing the need for frequent replacements. Our goal is to provide beautiful results while promoting a healthier environment.",
      },
    ],
  },
  {
    heading: "Customer Testimonials",
    sections: [
      {
        paragraph:
          "Our clients appreciate our prompt and professional services. One customer noted, “YRC Custom Flooring transformed our garage with their top-quality epoxy coating.” Another shared, “The team was efficient and courteous, making the process stress-free.”",

        image: "",
      },
    ],
  },
  {
    heading: "Schedule Your Appointment Today",
    sections: [
      {
        paragraph:
          "Don’t miss out on our Black Friday deals! Contact YRC Custom Flooring, LLC to schedule your appointment. Our team is ready to help you enhance your space with premium flooring solutions.",

        image: "",
      },
    ],
  },
];
// const faqsData = [
//   {     question: "How to Polish Stained Concrete Floors?",
//      answer:
//        "Polishing stained concrete floors is not rocket science. But you will need a concrete grinder. First, clean and prepare the floor by removing anything that shouldn’t be there—like dirt or bad memories. Use a concrete grinder to smooth the surface. Then apply polish and continue grinding until it’s as shiny as your favorite celebrity’s teeth.",
//    },
//    {
//      question: "How to Clean Polished Concrete Floors?",
//      answer:
//        "Cleaning polished concrete floors is easy! Get a mop that doesn’t look like it fought a war. Add warm water. Swipe across the polished floor, and ta-da! Mix a little neutral pH cleaner into the water if some dirt refuses to leave. Done in minutes—no drama.",
//    },   {
//      question: "Are Polished Concrete Floors Worth It?",
//      answer:
//        "Yes. End of story. Okay, maybe not entirely the end. Polished concrete floors are a great investment if you value resilience, easy care, financial savings, and sophisticated style. They are contemporary, they are simple, and they are a great option overall. If polished concrete floors were a person, they would be dependable friends who always come through for you.",
//    },
//   //  {
//   //    question: "Can I Remove Swirl Marks by Hand?",
//   //    answer:
//   //      "Yes, removing swirls by using a hand is possible with a mark remover and a microfiber fabric. This approach requires greater effort and endurance as compared to machine polishing. Apply the remover in small sections, lightly work it into the paint, and buff the location until clean.",
//   //  },
//   //  {
//   //    question: "How to Buff Without Swirl Marks?",
//   //    answer:
//   //      "To buff without growing marks, use a smooth, tender microfiber cloth or a buffing pad. Apply light, and even pressure, and use an again-and-forth or side-to-side motion instead of circular moves. Ensure the floor is clean and avoid excessive stress to save you new blemishes.",
//   //  },
//  ];
const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#0D772F] to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title || "Transform Your Space with YRC Custom Flooring, LLC"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "November 28, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "12:06 am"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Downloader-La-946291-5.jpg"
            alt="Polished Concrete"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Black Friday is the perfect time to upgrade your floors with YRC
            Custom Flooring, LLC. We offer exceptional deals on high-quality
            flooring solutions tailored to your needs. Our team is dedicated to
            delivering unparalleled commercial and residential floor coating
            services in Tampa, Florida.
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
            Black Friday is the ideal time to invest in your property’s
            flooring. With YRC Custom Flooring, LLC’s exclusive deals and
            exceptional service, you can enjoy a more beautiful and durable
            environment. Take advantage of this opportunity and schedule your
            appointment today.
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
