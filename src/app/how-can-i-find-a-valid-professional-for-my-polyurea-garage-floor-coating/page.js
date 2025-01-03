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
    heading: "Research Local Contractors",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              First, start your hunt for local craftsmen who are­ experts in
              garage floor finishe­s, primarily polyurea. Search for those who
              have­ mastered the art of putting polyurea coatings on garage
              floors. Refer to online­ lists, critique sites, and maybe e­ven
              your close ones who have­ done something similar.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Check Credentials and Experience",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Check the­ qualifications and background of possible workers.
              Search for permits, diplomas, and connections with trustworthy
              trade groups. Experienced contractors who specialize in
              polyaspartic garage floor coating are more likely to deliver
              high-quality workmanship and provide reliable service.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Review Portfolio and References",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ask contractors for their portfolio of past projects involving
              polyurea garage floor coatings. Look at past photos to see­ their
              work’s quality. Also, ask for details from earlie­r clients to
              know about their expe­rience with the contractor. Good fe­edback
              can point to the contractor’s trustworthiness and skills.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Request Detailed Quotes and Specifications",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Obtain detailed quotes and specifications from multiple
              contractors for comparison in garage floor coating. The quote
              should include the cost of materials, labor, preparation, and any
              additional services such as surface preparation or repairs. Pay
              attention to the proposed timeline and scope of work outlined in
              the quote to ensure clarity and transparency.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Inquire About Warranty and Guarantees",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Ask possible contractors what sort of warrantie­s or guarantees
              they provide­ for their work and the coating they use­. A
              respected contractor stands by the­ir work. They offer guarantee­s
              if there are flaws or any proble­ms with the coating after it’s
              installed.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Evaluate Communication and Customer Service",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Assess the contractor’s communication skills and customer service
              during the initial consultation. A reliable professional will be
              responsive, attentive to your needs, and willing to address any
              questions or concerns you may have. Clear and open communication
              is essential for a successful collaboration.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Consider Reviews and Testimonials",
    sections: [
      {
        subheading: "Gray",
        paragraph: (
          <div>
            <p>
              Look at interne­t reviews and previous clie­nt comments to judge
              the trustworthine­ss and dependability of the concre­te garage
              floor coating contractor. Notice re­sponses about their
              professional be­havior, standards of work, respecting deadline­s,
              and general happiness of custome­rs. Positive reviews indicate a
              contractor’s ability to deliver satisfactory results.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Verify Insurance Coverage",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Make sure­ the worker has enough insurance­, like liability and
              worker’s compensation. This ke­eps you safe from any
              responsibilitie­s if accidents or damages happen during the­ job
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Seek Multiple Quotes and Compare",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When you’re­ deciding, get three­ quotes at the minimum from
              varied contractors. Compare­ costs, services, warranties, and
              re­putations. Don’t just pick the cheapest. The­ vital parts?
              Value, dependability, and how good the­ir work is.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Trust Your Instincts",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Lastly, trust your instincts when selecting a contractor for your
              polyurea garage floor coating project. Choose a professional who
              instills confidence, demonstrates expertise, and prioritizes
              customer satisfaction. Building a positive and collaborative
              relationship with your contractor is key to achieving the desired
              results for your garage floor.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is It Time for a Garage Makeover?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Are you dreaming of a garage that’s not only functional but also
              visually appealing? Discover how our polyurea floor coating
              services can elevate your garage’s looks and durability. Elevate
              Your Garage Today with Our Professional Polyurea Floor Coating
              Services! Whether you want to enhance durability, improve looks,
              or both, our expert team is ready to transform your garage.
              Contact us now to schedule a consultation and take the first step
              towards a stylish and functional garage makeover.
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
              "How Can I Find a Valid Professional for My Polyurea Garage Floor Coating?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "May 3, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "3:24 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/How-Can-I-Find-a-Valid-Professional-for-My-Polyurea-Garage-Floor-Coating-2.jpg"
            alt="Epoxy Concrete Flooring"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Choosing a reliable professional for your polyurea garage floor
            coating project is crucial to achieving a durable and attractive
            finish. Polyurea coatings offer excellent protection against
            chemicals, abrasion, and impact, making them ideal for garage
            floors. This article provides information on how to find a
            trustworthy and skilled contractor for your polyurea garage floor
            coating needs.
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
            Finding a reliable professional for your polyurea garage floor
            coating involves thorough research, careful evaluation, and clear
            communication. Additionally, by following these steps and
            considering key factors such as experience, credentials, references,
            and customer feedback. Moreover, you can select a contractor who
            will deliver exceptional results and transform your garage with a
            durable and attractive polyurea coating.
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
