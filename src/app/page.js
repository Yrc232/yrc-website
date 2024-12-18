import Image from "next/image";
import Hero from "./Components/Hero/hero";
import ChooseUsU from "./Components/ChooseUs/ChooseUsU";
import About from "./Components/About/About";
import Service from "./Components/Services/HomeServices";
import HomeGallery from "./Components/HomeGallery";
import TestimonialsU from "./Components/Testimonial/TestimonialU";

export default function Home() {
  return (
    
    <>
    <Hero/>
    <ChooseUsU/>
    <About/>
    <Service/>
    <HomeGallery/>
    <TestimonialsU/>
    </>
  );
}
