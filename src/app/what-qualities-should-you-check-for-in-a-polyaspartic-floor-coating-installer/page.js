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
              Choosing the correct individual to set up your polyaspartic floor
              covering is vital. Known for its strength, this flooring is
              perfect for garages and work areas. It can handle harsh chemicals
              and heavy use because it cures quickly. Still, the person who lays
              the floor plays a big role in how well it turns out. This article
              will explore what to look for when hiring someone to put down your
              polyaspartic floor coating.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Experience and Expertise",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              In choosing an installer, their familiarity with polyaspartic
              floor coatings matters a ton. Installers well-versed in handling
              this material would know everything from handling the material
              down to the technique of application. Additionally, their
              knowledge would allow for the proper treatment of various surfaces
              and conditions, leading to a polished finish.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Proper Training and Certification",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              It’s key for installers to have appropriate training and
              credentials. Spot those who’ve been formally schooled in using
              polyaspartic floor coatings. If they have industry endorsement or
              certification, that’s a good sign. It shows that they value high
              quality. Always remember that certification usually involves
              continuing training and sticking to certain benchmarks. This way,
              the installer remains current with the newest methods and
              products.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Attention to Surface Preparation",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Preparing the floor is key when applying a polyaspartic coating.
              Top-notch pros spend time first deep-clean and prepare the ground.
              They may strip old coats, fill up cracks, or shovel out holes.
              What’s the aim? is to have a mess-free surface. Additionally, this
              preparation work is crucial. It helps the polyaspartic coating
              stick and offers a sturdy, long-term shine.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Use of High-Quality Materials",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A polyaspartic floor coating’s durability and looks are deeply
              influenced by the materials used. Trustworthy installers employ
              superior polyaspartic coatings, fine-tuned for your distinct
              requirements. Additionally, you can expect them to elaborate on
              the advantages of their chosen products and the reasoning behind
              considering them the go-to for your venture.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Knowledge of Polyaspartic Garage Floor Coatings",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A polyaspartic garage floor coating’s durability and looks are
              deeply influenced by the materials used. Trustworthy installers
              employ superior polyaspartic coatings for garage floors,
              fine-tuned for your distinct requirements. Additionally, you can
              expect them to elaborate on the advantages of their chosen
              products and the reasoning behind considering them the go-to for
              your venture.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Attention to Detail",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              When choosing a polyaspartic floor coating, their eye for detail
              is pivotal. Crafting a smooth and level finish requires careful
              precision. The experts in this field are those who mask off areas
              that don’t need coating, apply the coating smoothly, and tackle
              problems that crop up while the work is being done. Such attention
              to tiny details amps up your polyaspartic garage floor coating’s
              looks and sturdiness. Additionally, you should aim for an employee
              who loves their job and always strives for the highest quality.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Good Communication Skills",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Clear chats matter in all jobs. Floor coating experts need this
              too. A top-notch pro will walk you through the steps. They’ll
              answer queries, keep you updated, and make sure you’re in the
              loop. This clear talk makes sure everyone is on the same
              wavelength. It aims to match what you expect. Choose a floor
              coating pro. They should be quick to reply, act professionally,
              and be a breeze to work with.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Positive Customer Reviews and References",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Feedback from customers can shed light on an installer’s job
              quality. Go for those with happy past customers and who share
              contacts for references. This can make you aware of what’s coming
              and ensure you’re comfortable with your pick. Besides reviews, you
              might want to ask the installer directly for references.
              Conve­rsations with earlier customers can provide a deeper grasp
              of the quality of work and their happiness level
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Warranty and Aftercare Services",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A reliable polyaspartic floor coating specialist will likely have
              a warranty. This means they believe in their work and want you to
              be happy. Don’t forget to ask about the warranty. You’ll want to
              know what’s included and how long it will last. Care after the job
              is also key. A great specialist will guide you on how to look
              after your new floor. They may even help with upkeep if required.
              This means your floor will stay looking good for many years.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Are You Tired of Looking at Your Worn-Out, Stained Garage Floor?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Let’s make your floor striking and strong with our polyaspartic
              garage floor coating services. Our skilled crew excels at applying
              exterior polyaspartic coats. These resist chemicals, scratches,
              and hits well. Your garage will be usable swiftly because it sets
              quickly. As far as the floor of your garage is concerned, don’t
              compromise. Trust our experienced professionals to deliver
              outstanding results that exceed your expectations. Ready to
              enhance your garage with a top-tier polyaspartic floor coating?
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
            {title ||
              "What Qualities Should You Check for in a Polyaspartic Floor Coating Installer?"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "June 5, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:54 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/What-Qualities-Should-You-Check-for-in-a-Polyaspartic-Floor-Coating-Installer-2.jpg"
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
            Finding the best polyaspartic floor coating specialist is no small
            feat. They needed to have hands-on experience and know-how. Their
            work must be accurate and tidy. They’ll choose top-notch materials,
            get the surface right, and keep you informed. The right expert can
            make your polyaspartic floor coating sturdy, appealing, and
            functional. Be it for a garage or other areas, the choice of
            installer is critical for good outcomes.
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
