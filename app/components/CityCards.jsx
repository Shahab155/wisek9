"use client";
import { useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CityCards() {
  const cardsRef = useRef([]);

  const cities = [
    { title: "Surrey", desc: "Premium security services", color: "bg-red-600" },
    { title: "Birmingham", desc: "UK's second city", color: "bg-blue-600" },
    { title: "Bristol", desc: "South West hub", color: "bg-green-600" },
    { title: "Cardiff", desc: "Wales' capital", color: "bg-purple-600" },
    { title: "Edinburgh", desc: "Scotland's capital", color: "bg-pink-600" },
    { title: "Glasgow", desc: "Scotland's largest", color: "bg-yellow-600" },
    { title: "Liverpool", desc: "Maritime city", color: "bg-indigo-600" },
    { title: "London", desc: "Capital city", color: "bg-orange-600" },
    { title: "Manchester", desc: "Industrial heritage", color: "bg-teal-600" },
    { title: "Newcastle", desc: "North East", color: "bg-cyan-600" },
    { title: "Sheffield", desc: "Steel city", color: "bg-fuchsia-600" },
    { title: "York", desc: "Historic city", color: "bg-lime-600" },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="p-8  max-w-7xl mx-auto py-16 px-4" id="Cities">
        <div className="mx-auto max-w-3xl mb-8 text-center">
            <h2 className="text-primary font-primary text-3xl md:text-5xl lg:text-6xl ">UK Major Cities We Serve
</h2>
<p className="text-gray-600 text-md  md:text-xl mt-4 ">
   Professional security services across the UK's major metropolitan areas with local expertise and rapid response capabilities
</p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
        {cities.map((city, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className={`${city.color} text-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 hover:shadow-xl transition-transform duration-300`}
          >
            {/* Icon Circle */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300/30 mb-4">
              <MdLocationOn className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{city.title}</h3>

            {/* Description */}
            <p className="text-sm text-center opacity-90">{city.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary to-red-700 text-center p-8 mt-12 rounded-2xl shadow-lg max-w-7xl mx-auto flex flex-col items-center gap-4">
        
            <h2 className="text-white font-primary text-2xl md:text-3xl ">
                Don't See Your City?
            </h2>
            <p className="text-xl text-white">We cover 87% of the UK. Contact us to discuss security solutions in your area.</p>
            <Link href="https://wisek9.co.uk/contact-us/" target="_blank" rel="noopener noreferrer">
            <button className="w-[180px] py-2 rounded-full text-primary bg-white hover:scale-105 transition-transform font-primary ">
                Contact Us Today
            </button>
            </Link>
        
      </div>
    </section>
  );
}
