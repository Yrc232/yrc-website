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
    heading: "What is Polyaspartic Flooring?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              A tough, enduring cover for concrete surfaces is called
              polyaspartic flooring. Born in the 1990s, it was first used in big
              businesses. Now, it’s a hit in home settings, especially garages.
              What are these made of? Polyaspartic coatings are a kind of
              polyurea. They are much better than the old epoxy coatings. They
              dry quicker, fight off sunlight better, and are much more
              flexible.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Benefits of Polyaspartic Garage Floor Coatings",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              People often pick polyaspartic coatings for garage floors because
              they last a long time. They hold up well to scuffs, chemicals, and
              stains. That’s why they’re perfect for places that get lots of
              use, like garages. Polyaspartic coatings are also good in the sun.
            </p>
            <p className="mt-2">
              They won’t turn yellow or lose color when they’re in sunlight.
              That’s better than epoxy coatings. Epoxy can change color over
              time. Another good thing is how fast they cure. Epoxy takes days
              to fully cure. Polyaspartic can be recovered in a day. Your garage
              won’t be out of commission for long, and you can get back to your
              usual stuff quickly.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How Long Does Polyaspartic Take to Dry?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings have a neat trick, they dry super quickly.
              The time it takes to dry can depend on the coating type and the
              place it’s used. But usually, they are dry enough to touch in just
              a couple of hours. They get fully hard and chemically stable,
              typically within one day. This fast-drying feature is handy,
              especially for fixing garage floors. It cuts down on the chaos and
              lets the job get done much faster.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Where to Buy Polyaspartic Floor Coating?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Looking for polyaspartic coatings for garage floors? There are
              plenty of places to find them! You might check out your local home
              improvement store or specialty flooring shops, or even search the
              web. Picking where to buy isn’t just about convenience. It’s also
              about quality, reviews from other buyers, and the offer of a
              warranty. Try well-regarded brands like Rust-Oleum, ArmorPoxy, or
              GarageCoatings.com. They provide top-notch polyaspartic coatings,
              easy-to-follow instructions, and top-notch customer service.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Application Process of Polyaspartic Coatings",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              To get your garage floor ready for a polyaspartic coating, you
              need to do a few things. Start by cleaning the concrete floor
              well. Get rid of old coatings, fix any cracks, and make sure
              there’s no dust or junk on it. Let’s look at the next step.
              Putting on a primer, or polyaspartic coatings for garage floors
              will help the coating stick better. Now, mix the polyaspartic
              coating. Spread it out with a roller or a squeezer. Want it really
              thick and smooth? You might need more than one coating. Last step,
              let it dry before you walk or drive on it.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "What Are the Disadvantages of Polyaspartic Coating?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings have a lot of plus points, but they also
              come with a few minutes. One big downside is the price tag. These
              coatings can often cost more than their epoxy counterparts in both
              supply and outlet fitting. Additionally, they set prices quickly.
              It’s great most of the time but can be a bit tough for DIY folks.
              Good airflow is a must when applying, the fumes can be strong.
            </p>
            <p className="mt-2"></p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How Long Does Polyaspartic Garage Floor Coating Last?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings on garage floors are famous for their
              durability. Once correctly added and taken care of, these coatings
              can endure for a decade or two. The lasting time of the coating
              can be more or less dependent on product quality, the preparedness
              of the surface, and how much load the floor bears. To keep the
              coating lasting longer, occasional cleaning and fixes can be handy
              for your polyaspartic-layered garage floor.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How Long Does It Take for Polyaspartic Smell to Go Away?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings come with a disadvantage due to the solvents
              in them. The scent can be strong when applied but usually fades as
              it settles. In areas with good airflow, the scent may disappear in
              a few hours or days. Good ventilation when and after you apply
              this scent can lessen its length and strength
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Polyaspartic Toxic to Dogs?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Think about your pets’ safety when choosing a floor. Polyaspartic
              coatings, when completely dry, are often safe for pets, dogs
              included. But, during the coating process, harmful fumes can be
              released. These fumes can be dangerous if your pet breathes in too
              many of them. Keep your pets far from the area when applying the
              coating and for a while after. This way, you’ll avoid harmful fume
              exposure
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Polyaspartic on Garage Floor Worth It?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings for garage floors are a great choice for
              lots of people. Do you know why? It’s tough. It dries fast. And UV
              rays or chemicals? No bother with it. Sure, it might cost more at
              first. But over time? It needs less upkeep and lasts longer. That
              makes it a good value.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Maintaining Your Polyaspartic Garage Floor",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Taking care of polyaspartic coatings for garage floors is easy.
              Just regularly sweep and sometimes mop with a light soap to keep
              it clean. For hard-to-remove stains, a soft brush can do the
              trick. Additionally, it’s wise not to pull heavy or sharp things
              across the floor to avoid scratches. Being careful like this means
              your garage floor can stay looking good and working well for a
              long time.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "How Does Polyaspartic Compare to Epoxy?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyspartic and epoxy, two favorites for garage floors, aren’t the
              same. What are the perks of polyaspartic? Quickly set times. More
              bend. Handles sunlight better. Then you’ve got e-poxy. It usually
              digs less of a hole in your pocket. It’s more of a breeze for the
              home handymen out there. The winner? It depends on what you’re
              after and how much you’re willing to spend.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Can Polyaspartic Coatings Be Applied in Cold Weather?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings have one great plus, you can use them in
              many different weather conditions. Epoxy, on the other hand, is
              hard to use when it’s cold. But polyaspartic coatings? They can
              handle the cold just fine. This means you can use them in any
              season or climate.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Are Polyaspartic Coatings Slip-Resistant?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Polyaspartic coatings can be tailored to have anti-slip elements,
              making them a secure choice for garage floors. These elements
              offer additional hold, minimizing the danger of slippery
              situations, especially on wet grounds. If anti-slip is crucial,
              select a coating that already has it or request your installer to
              include it during application.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Can I Apply Polyaspartic Coatings Myself?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Putting on polyaspartic coverings can be a tough DIY project.
              Quick-drying and needing careful prep work can be tricky. If
              you’ve done similar stuff and trust your skills, you might do
              okay. But many house owners like to get a pro. They want top-notch
              looks and to dodge problems.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "What Colors and Finishes Are Available?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              With polyaspartic coatings, you can pick the color and finish that
              best suits your garage floor. You can choose simple, solid colors,
              shiny metallic finishes, or even decorative flecks. Want to match
              your garage’s look? No proble­m! You can make your own blend of
              colors and designs.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "Is Your Garage Floor Ready for a Makeover?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              Transform your garage into a clean, durable, and visually stunning
              space with our Polyaspartic Garage Floor Coating Services. Say
              goodbye to stains, cracks, and the dull appearance of your
              concrete floor. Our expert team is ready to provide you with a
              professional finish that not only enhances the aesthetics of your
              garage but also protects it from everyday wear and tear.
              Experience the superior durability, quick drying times, and
              resistance to UV damage that polyaspartic coatings offer.
            </p>
          </div>
        ),
        image: "/images/Polyaspartic-Floor-Coating-1024x768.jpg",
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
              "The Ultimate Guide to Polyaspartic Coatings for Garage Floors"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "yrc"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "June 12, 2024"} />
            <InfoItem icon={<FaClock />} text={time || "8:40 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#0D772F] p-2 inline-block">
          <img
            src="/images/Polyaspartic-Floor-Coating-1.jpg"
            alt="Polyaspartic-Floor-Coating"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Are you looking to boost and safeguard your garage floor?
            Polyaspartic coatings are a top-notch pick. This walkthrough will
            help you grasp all about polyaspartic flooring. We’ll explore
            polyaspartic coatings for garage floor perks, how to apply them,
            possible downsides, and up-to-date advice. So, if you aim to boost
            your garage’s appeal or sturdiness, polyaspartic coatings might be
            your perfect match.
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
            Polyaspartic coatings can help create a better garage floor.
            Polyaspartic coatings for garage floors are tough and cure fast.
            Goodbye UV and chemical harm. This means a long-lasting, pretty, and
            practical garage. Sure, pricing and applying it might not be simple.
            But guess what? The benefits are often greater. Pick the right
            stuff, apply it well, and keep it up. The result? A garage floor
            you’ll love for years.
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
