"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import Image from "next/image";

export default function Certifications() {
  const sliderRef = useRef(null);
  const [logos] = useState([
    "/images/certifications/1.png",
    "/images/certifications/2.png",
    "/images/certifications/3.png",
    "/images/certifications/4.png",
    "/images/certifications/5.png",
    "/images/certifications/6.png",
    "/images/certifications/7.png",

  ]);

  // Duplicate logos for infinite loop
  const infiniteLogos = [...logos, ...logos];

  useEffect(() => {
    gsap.fromTo(
      sliderRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const scrollAmount = 300;

  const scrollLeft = () => {
    if (sliderRef.current) {
      if (sliderRef.current.scrollLeft === 0) {
        sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2;
      }
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      if (
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth - 1
      ) {
        sliderRef.current.scrollLeft =
          sliderRef.current.scrollWidth / 2 - sliderRef.current.clientWidth;
      }
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="text-center max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-primary text-primary mb-4">
          Professional Accreditations & Certifications
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          WiseK9 Limited holds SIA Approved Contractor Status for the Provision
          of security guarding services. <br />
          WiseK9 is accredited by COP 119:2024 and maintains the highest
          industry standards across all operations.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-10 max-w-5xl mx-auto">
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-3 shadow-md hover:bg-red-600 z-10"
        >
          <MdOutlineKeyboardArrowLeft size={28} />
        </button>

        {/* Logos container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-hidden scroll-smooth px-12 py-2 bg-gray-50"
        >
          {infiniteLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Certification logo ${idx + 1}`}
                width={128}
                height={128}
                className="object-contain rounded"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full p-3 shadow-md hover:bg-red-600 z-10"
        >
          <MdOutlineKeyboardArrowRight size={28} />
        </button>
      </div>
    </section>
  );
}
