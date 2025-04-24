"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      img: "/assets/Banner3.jpg",
      heading: "Your Trusted City Dental Care for a Brighter Smile",
      desc: "Achieving your dream smile through customized dental solutions tailored to your needs.",
      shortHeading: "Your Trusted City Dentist",
    },
    {
      img: "/assets/Banner4.jpg",
      heading: "Expert Dental Services in the Heart of the City",
      desc: "Expert dentists in Rangpur, creating brighter smiles with a focus on comfort and care.",
      shortHeading: "Expert Care, City Smiles",
    },
    {
      img: "/assets/Banner5.jpg",
      heading: "Transform Your Smile with City Dental Solutions",
      desc: "Dedicated to your dental health with state-of-the-art technology and a caring team.",
      shortHeading: "Transform Your Smile Today",
    },
    {
      img: "/assets/Banner6.jpg",
      heading:
        "Comprehensive Dental Care in Rangpur – Healthy Smiles Begin Here",
      desc: "Providing top-notch dental care for healthy, beautiful smiles in the heart of the city.",
      shortHeading: "City Dental Excellence",
    },
    {
      img: "/assets/Banner8.jpg",
      heading: "Your City’s Leading Dental Clinic for Personalized Care",
      desc: "Your smile is our priority—offering expert care with personalized treatments for all ages.",
      shortHeading: "Brighter Smiles, Citywide",
    },
    {
      img: "/assets/Banner9.jpg",
      heading: "Achieve Your Perfect Smile at Our City Dental Practice",
      desc: "Trusted dental services in Rangpur, combining expertise and compassion for a perfect smile.",
      shortHeading: "Leading Dental Care in Rangpur",
    },
    {
      img: "/assets/Banner10.jpg",
      heading: "Brightening Smiles Across the City – Your Dental Care Experts",
      desc: "From routine checklefts to advanced treatments, we deliver quality dental care you can count on.",
      shortHeading: "Achieve Your Perfect Smile",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="justify-center items-center m-auto">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track current slide index
        >
          {data.map((d, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={activeIndex} // Force re-render on slide change
                className="relative w-full h-[450px] sm:h-[600px] md:h-[750px] bg-cover bg-center bg-no-repeat px-4"
                style={{ backgroundImage: `url(${d.img})` }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                {/* Simple Light Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-zinc-900 opacity-45"></div>

                {/* Centering Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:ml-40 px-5 max-w-3xl">
                  <div className="py-8 sm:py-12 md:py-16 text-left">
                    <div className="sm:pb-6">
                      <p
                        className="text-white text-base sm:text-lg md:text-2xl text-left"
                        data-aos="fade-left"
                      >
                        {d.shortHeading}
                      </p>
                    </div>
                    <h2
                      className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl pb-4 sm:pb-6"
                      data-aos="fade-left"
                    >
                      {d.heading}
                      <br />
                    </h2>
                    <p
                      className="text-white pb-6 sm:pb-8 text-sm sm:text-base"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      {d.desc}
                    </p>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-1.5 text-center me-2 mb-2 text-[16px] sm:text-[18px] my-3"
                      data-aos="flip-left"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
