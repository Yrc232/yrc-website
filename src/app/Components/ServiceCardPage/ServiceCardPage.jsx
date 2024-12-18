import React from "react";
import "./ServiceCardPage.css"; // Ensure CSS is correctly imported

const ServiceCardPage = () => {
  const services = [
    {
      name: "Patio Coating",
      description:
        "Outdoor patios are exposed to influences such as heat, weather and traffic",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7",
      link: "/patio-coating", // Example path for the SVG
    },
    {
      name: "Garage Coating",
      description:
        "Polyurea-polyaspartic coating protects your garage surface for years",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7",
      link: "/garage-coating", // Different SVG path
    },
    {
      name: "Concrete Coating",
      description:
        "Concrete coatings are a cost-effective renovation project that can",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7",
      link: "/concrete-coating", // Different SVG path
    },
    {
      name: "Driveway Coating",
      description:
        "Our driveways are often the outdoor area that suffers the most damage but",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7", // Different SVG path
      link: "/driveway-coating",
    },
    {
      name: "Pool Deck Coating",
      description:
        "Pool deck resurfacing removes old concrete and makes way for smooth",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7", // Different SVG path
      link: "/pool-deck-coating"
    },
    {
      name: "Commercial Coating",
      description:
        "When it comes to commercial coating in Tampa, Florida, we specialize in",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7", // Different SVG path
      link:"/commercial-coating"
    },
    {
      name: "Epoxy Garage Coating",
      description:
        "YRC is an unparalleled leader in the installation of the high-performance epoxy floor in your garages.",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7",
       link:"/epoxy-garage-coating"
       // Different SVG path
    },
    {
      name: "Decorative Metallic Floor",
      description:
        "Unprotected concrete can leave your home or business exposed to safety hazards.",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7", // Different SVG path
      link:'/decorative-metallic-floor'
    },
    {
      name: "Polyaspartic Garage Coating",
      description:
        "The polyurea-polyaspartic coating protects your garage surface for years",
      logoSvgPath: "M12 19.5l-7-7 7-7m5 14l7-7-7-7", // Different SVG path
      link:"/polyaspartic-garage-coating"
    },
    // Add more services as needed
  ];

  return (
    <div className="parent">
      {services.map((service, index) => (
        <div key={index} className="card">
          <div className="logo">
            <span className="circle circle1"></span>
            <span className="circle circle2"></span>
            <span className="circle circle3"></span>
            <span className="circle circle4"></span>
            <span className="circle circle5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="svg"
              >
                <path
                  d={service.logoSvgPath}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="glass"></div>
          <div className="content">
            <span className="title">{service.name}</span>
            <span className="text">{service.description}</span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              {/* Social buttons SVGs */}
            </div>
            <div className="view-more">
              {/* Use a link if using React Router or similar */}
              <a href={service.link} className="view-more-button">
                View more
              </a>
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardPage;
