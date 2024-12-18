// components/HomeGallery.jsx
import BeforeAfterSlider from "./BeforeAfterSlider";
import Link from "next/link";

const HomeGallery = () => {
  const images = [
    {
      before: "/images/floor-before-flooring-in-tampa.webp",
      after: "/images/eoxy-flooring-tampa-fl.webp",
    },
    {
      before: "/images/pool-flooring-tampa-fl.webp",
      after: "/images/pool-deck-flooring-tampa.webp",
    },
    {
      before: "/images/store-flooring-in-tampa-fl.webp",
      after: "/images/store-floor-after-flooring-tampa.webp",
    },
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <BeforeAfterSlider
            key={index}
            beforeImage={image.before}
            afterImage={image.after}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/gallery">
          <button className="text-white bg-[#0D772F] px-4 py-2 rounded hover:bg-green-600 transition">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeGallery;
