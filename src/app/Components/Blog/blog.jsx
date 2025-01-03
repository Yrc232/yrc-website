"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const blogPosts = [
  {
    title:
      "Step into 2025 with Style – YRC Custom Flooring Welcomes the New Year!",
    image: "/images/yrc-happy-new-year.jpg",
    description:
      "As we enter 2025, there’s no better way to welcome the new year than by upgrading your home or office with a fresh, stylish flooring solution. Whether you’re looking to enhance the look and feel",
    category: "December 17, 2024",
    readTime: "",
    link: "/step-into-2025-with-style-yrc-custom-flooring-welcomes-the-new-year",
  },
  {
    title:
      "Deck the Halls with Style: YRC Custom Flooring’s Guide to a Festive Home This Christmas",
    image: "/images/yrc-chris.jpg",
    description:
      "The holiday season is a time of joy, togetherness, and celebration. It’s when we open our homes to loved ones,",
    category: "December 16, 2024",
    readTime: "",
    link: "/deck-the-halls-with-style-yrc-custom-floorings-guide-to-a-festive-home-this-christmas",
  },
  {
    title:
      "Where Are Polished Concrete Floors Best Used?",
    image: "/images/Polished-Concrete-Floors.jpg",
    description:
      "Polished concrete floors are not a fancy trend in elite homes. They’re floors. Simply your typical concrete floors, but polished perfectly. If you are trying",
    category: "November 29, 2024 ",
    readTime: "",
    link: "/where-are-polished-concrete-floors-best-used",
  },
  {
    title:
      "Transform Your Space with YRC Custom Flooring, LLC",
    image: "/images/Downloader-La-946291-5.jpg",
    description:
      "Black Friday is the perfect time to upgrade your floors with YRC Custom Flooring, LLC. We offer exceptional deals on high-quality flooring solutions tailored to",
    category: "November 28, 2024 ",
    readTime: "",
    link: "/transform-your-space-with-yrc-custom-flooring-llc",
  },
  {
    title:
      "What is the Benefit of an Epoxy Garage Floor?",
    image: "/images/Epoxy-Garage-Floor-Hero.webp",
    description:
      "Epoxy coating for garage flooring provides flexible and appealing safety for concrete surfaces. Many homeowners select it due to its durability and cleanliness of their",
    category: "November 21, 2024",
    readTime: "",
    link: "/what-is-the-benefit-of-an-epoxy-garage-floor",
  },
   {
     title:
       "Why Are Basement Floor Cracks Common in Older Homes?",
     image: "/images/Why-Are-Basement-Floor-Cracks-Common-in-Older-Homes.jpg",
     description:
      "Basement floor cracks can frustrate homeowners, especially in older houses. Are those cracks a bigger trouble or normal wear? Thankfully, maximum cracks are recoverable.",
     category: "November 12, 2024",
     readTime: "",
    link: "/why-are-basement-floor-cracks-common-in-older-homes",
  },
 
   {
     title:
      "What Are the Main Benefits of Epoxy Concrete Flooring?",
    image: "/images/Epoxy-Concrete-Flooring.jpg",
    description:
       "Epoxy concrete flooring is a general choice for many houses and groups. It offers power, beauty, and ease of use. Many people love its durability and low maintenance needs",
     category: "November 4, 2024",
     readTime: "",
     link: "/what-are-the-main-benefits-of-epoxy-concrete-flooring",
   },
  {
     title:
       "Why Hardwood Flooring White Oak is a Top Choice for Homeowners",
     image: "/images/Hardwood-Floorin.jpg",
     description:
       "Homeowners want great flooring options for their residing spaces. Choosing the proper flooring makes a large distinction in any home. Among many options, white oak hardwood flooring is a notable one.",
     category: "October 21, 2024",
     readTime: "",
    link: "/why-hardwood-flooring-white-oak-is-a-top-choice-for-homeowners",
  }
  ,
  {
    title:
      "Why Is Leveling Important for Garage Floor Repair?",
    image: "/images/Leveling-Important-for-Garage-Floor-Repair.jpg",
    description:
      "Garage floor repair is essential for maintaining your space and its cost. Many homeowners forget the importance of proper leveling of their garages. Leveling plays an essential role",
    category: "October 14, 2024",
    readTime: "",
    link: "/why-is-leveling-important-for-garage-floor-repair",
  }
  ,
  {
    title:
      "How Floor Coating Protects and Strengthens Concrete?",
    image: "/images/How-Floor-Coating-Protects-and-Strengthens-Concrete.png",
    description:
      "Concrete is a strong fabric that could be put down over the years. It’s frequently exposed to diverse elements, including chemical compounds, water, and heavy machinery.",
    category: "October 11, 2024",
    readTime: "",
    link: "/how-floor-coating-protects-and-strengthens-concrete",
  }
  ,
  {
    title:
      "How Do Quartz Epoxy Floors Enhance Durability and Slip Resistance?",
    image: "/images/quartz-epoxy-floors.png",
    description:
      "Quartz epoxy floors are the top choice for both houses and offices because of their unique mixture of materials. This floor combines small quartz debris with strong epoxy to create a",
    category: "October 1, 2024",
    readTime: "",
    link: "/how-quartz-epoxy-floors-enhance-durability-and-slip-resistance",
  }
  ,
  {
    title:
      "Which Colors and Patterns Work Best with Epoxy Flake Floors?",
    image: "/images/Which-Colors-and-Patterns-Work-Best-with-Epoxy-Flake-Floors.png",
    description:
      "Quartz epoxy floors are the top choice for both houses and offices because of their unique mixture of materials. This floor combines small quartz debris with strong epoxy to create a",
    category: "September 23, 2024",
    readTime: "",
    link: "/which-colors-and-patterns-work-best-with-epoxy-flake-floors",
  }
  ,
  {
    title:
      "Why Do People Like to Use Paver Stones for Patio Floors?",
    image: "/images/patio-floor-.png",
    description:
      "Many owners love to enhance their yard spaces. One popular way to do that is by improving their patio flooring. When it comes to patio floor ideas, paver stones always become",
    category: "September 13, 2024",
    readTime: "",
    link: "/why-do-people-like-to-use-paver-stones-for-patio-floors",
  }
  ,
  {
    title:
      "What Sets Polyurea Coating Apart from Other Coatings in Tampa?",
    image: "/images/Polyurea-Coating.png",
    description:
      "The climate regularly assesses the strength of materials, so finding the proper defensive coating is important in Tampa. Whether for residential, enterprise, or business programs, ",
    category: "August 26, 2024",
    readTime: "",
    link: "/what-sets-polyurea-coating-apart-from-other-coatings-in-tampa",
  }
  ,
  {
    title:
      "What Makes Epoxy Driveway Coating Durable and Long-lasting?",
    image: "/images/Epoxy-Driveway-Coating-1.jpg",
    description:
      "Epoxy driveway coating is a popular choice for house owners looking for stability and an attractive finish for their driveways. It provides a strong surface that can easily face hard",
    category: "August 20, 2024",
    readTime: "",
    link: "/what-makes-epoxy-driveway-coating-durable-and-long-lasting",
  }
  ,
  {
    title:
      "How to Select the Right Color for Your Garage Floor Epoxy?",
    image: "/images/Garage-Epoxy-1-1.jpg",
    description:
      "Choosing the perfect color for your garage floor epoxy may be both thrilling and challenging. A properly chosen color can transform your garage from an unremarkable garage ",
    category: "August 12, 2024",
    readTime: "",
    link: "/how-to-select-the-right-color-for-your-garage-floor-epoxy",
  }
  ,
  {
    title:
      "Why is Metallic Epoxy Floor Popular in Restaurants and Cafes?",
    image: "/images/Why-is-Metallic-Epoxy-Floor-Popular-in-Restaurants-and-Cafes-1.jpg",
    description:
      "In the competitive international of eating places and cafes, developing a long-lasting impact on clients is essential. One key aspect of this is the selection of floors. Recently,",
    category: "July 29, 2024",
    readTime: "",
    link: "/why-is-metallic-epoxy-floor-popular-in-restaurants-and-cafes",
  }
  ,
  {
    title:
      "Why You Should Consider the Best Laminate Flooring in Tampa?",
    image: "/images/Why-You-Should-Consider-the-Best-Laminate-Flooring-in-Tampa-1.webp",
    description:
      "When it involves flooring alternatives, the best laminate flooring stands proud for its combination of sturdiness, style, and affordability. In Tampa’s diverse weather, laminate floors",
    category: "July 22, 2024",
    readTime: "",
    link: "/why-you-should-consider-the-best-laminate-flooring-in-tampa",
  }
  ,
  {
    title:
      "Which Epoxy Coat Options Are Best for High Traffic Areas?",
    image: "/images/Which-Epoxy-Coat-Options-Are-Best-for-High-Traffic-Areas-1.jpg",
    description:
      "Epoxy coatings are drastically long-lasting and aesthetically beautiful answers for flooring in excessive website traffic areas. Whether it is for storage, basement",
    category: "July 15, 2024",
    readTime: "",
    link: "/which-epoxy-coat-options-are-best-for-high-traffic-areas",
  }
  ,
  {
    title:
      "Why Do Basement Floors Develop Cracks and How Can I Fix Them?",
    image: "/images/Basement-Floors-Develop-Cracks-1.jpg",
    description:
      "Basement floors are the unsung heroes of our homes, providing a solid foundation for everything above them. But what happens when these sturdy surfaces start showing",
    category: "June 28, 2024",
    readTime: "",
    link: "/why-do-basement-floors-develop-cracks",
  }
  ,
  {
    title:
      "What Are the Best Methods for Concrete Floor Insulation?",
    image: "/images/Concrete-Floor-Insulation.png",
    description:
      "Concrete floors are hard and practical. But they can also feel chilly without good insulation. Correct insulation on these floors can increase your house’s comfort.",
    category: "June 21, 2024",
    readTime: "",
    link: "/best-methods-for-concrete-floor-insulation",
  }
  ,
  {
    title:
      "The Ultimate Guide to Polyaspartic Coatings for Garage Floors",
    image: "/images/Polyaspartic-Floor-Coating-1.jpg",
    description:
      "Are you looking to boost and safeguard your garage floor? Polyaspartic coatings are a top-notch pick. This walkthrough will help you grasp all about polyaspartic flooring.",
    category: "June 12, 2024",
    readTime: "",
    link: "/ultimate-guide-to-polyaspartic-coatings-for-garage-floors",
  }
  ,
  {
    title:
      "What Qualities Should You Check for in a Polyaspartic Floor Coating Installer?",
    image: "/images/What-Qualities-Should-You-Check-for-in-a-Polyaspartic-Floor-Coating-Installer-2.jpg",
    description:
      "Choosing the correct individual to set up your polyaspartic floor covering is vital. Known for its strength, this flooring is perfect for garages and work areas. It can handle harsh chemicals",
    category: "June 5, 2024",
    readTime: "",
    link: "/what-qualities-should-you-check-for-in-a-polyaspartic-floor-coating-installer",
  }
  ,
  {
    title:
      "Why Should Your Pool Deck Be Made of Stamped Concrete in Tampa?",
    image: "/images/Why-Should-Your-Pool-Deck-Be-Made-of-Stamped-Concrete-in-Tampa-2.jpg",
    description:
      "Choosing the right material for your pool deck is key when building or redoing your pool area. It can greatly affect how your space both looks and works. Tampa’s warm",
    category: "May 29, 2024",
    readTime: "",
    link: "/why-should-your-pool-deck-be-made-of-stamped-concrete-in-tampa",
  }
  ,
  {
    title:
      "Is Cool Pool Deck Coating Suitable for All Types of Decks?",
    image: "/images/Is-Cool-Pool-Deck-Coating-Suitable-for-All-Types-of-Decks-2.jpg",
    description:
      "Many homes have swimming pools, a great place to relax and have fun. However, pool owners often worry about the dust around the pool. It can get very hot in the sun",
    category: "May 22, 2024",
    readTime: "",
    link: "/is-cool-pool-deck-coating-suitable-for-all-types-of-decks",
  }
  ,
  {
    title:
      "How Can I Find a Valid Professional for My Polyurea Garage Floor Coating?",
    image: "/images/How-Can-I-Find-a-Valid-Professional-for-My-Polyurea-Garage-Floor-Coating-2.jpg",
    description:
      "Choosing a reliable professional for your polyurea garage floor coating project is crucial to achieving a durable and attractive finish. Polyurea coatings offer excellent protection against chemicals",
    category: "May 3, 2024",
    readTime: "",
    link: "/how-can-i-find-a-valid-professional-for-my-polyurea-garage-floor-coating",
  }
  ,
  {
    title:
      "The Top Benefits of Using Concrete Coating for Your Pool Deck",
    image: "/images/The-Top-Benefits-of-Using-Concrete-Coating-for-Your-Pool-Deck-2.jpg",
    description:
      "A concrete pool deck coating offers numerous benefits for homeowners looking to increase the beauty, safety, and durability of their outdoor living space.",
    category: "April 30, 2024",
    readTime: "",
    link: "/the-top-benefits-of-using-concrete-coating-for-your-pool-deck",
  }
  ,
  

  // Add more blog posts as needed How Car Detailing Service Can Preserve Your Car’s Value

];

const Blog1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="py-12 bg-gradient-to-r from-[#0D772F] to-black bg-center bg-no-repeat bg-cover z-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              className="relative"
              variants={cardVariants}
              key={index}
            >
              <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border-2 border-[#0D772F] rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4),0_2px_4px_-1px_rgba(0,0,0,0.2)] hover:shadow-lg hover:-translate-y-1">
                {/* Blog Tag */}
                <span className="absolute top-2 right-2 bg-[#0D772F] text-black px-2 py-1 text-xs font-bold rounded-md z-10">
                  Blog
                </span>
                <Link
                  href={post.link}
                  title={post.title}
                  className="block w-full h-60 overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={post.image}
                    alt={`thumbnail-${index + 1}`}
                  />
                </Link>
                <div className="flex-1 px-4 py-5 sm:p-6">
                  <Link href={post.link} title={post.title}>
                    <p className="text-lg font-bold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-black">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-white">
                        <Link href={post.link} title={post.category}>
                          {post.category}
                        </Link>
                      </p>
                      <span className="text-sm font-medium text-gray-900">
                        
                      </span>
                      <p className="text-sm font-medium text-gray-900">
                        {post.readTime}
                      </p>
                    </div>
                    <Link href={post.link} title="" className="" role="button">
                      <svg
                        className="w-5 h-5 text-white transition-all duration-200 group-hover:text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog1;
