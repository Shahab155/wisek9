"use client";
import { useEffect, useRef } from "react";
import { MdLocationOn } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { regions } from "../../data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Regions() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: "power3.out",
            willChange: "transform, opacity",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onComplete: () => {
              cardsRef.current.forEach((card) => {
                card.style.transition = "transform 0.3s ease, background-color 0.3s ease"; // Enable transitions
                card.style.transform = "none"; // Reset GSAP transform
              });
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="Regions" ref={sectionRef}>
      <div className="px-4 max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="text-primary font-primary text-3xl md:text-5xl lg:text-6xl">
            Regions We Cover
          </h2>
          <p className="text-gray-600 text-md md:text-xl mt-6">
            Comprehensive security coverage across the United Kingdom with 87%
            nationwide reach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group hover:scale-110"
            >
              {/* Top Half with Background */}
              <div className="relative h-40 bg-gradient-to-r from-primary to-red-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <MdLocationOn className="w-12 h-12 mx-auto mb-2" />
                  <h3 className="text-xl font-primary">{region.title}</h3>
                </div>
              </div>

              {/* Bottom Half */}
              <div className="p-5 flex flex-col justify-between h-40">
                <p className="text-secondary text-md mb-4">{region.desc}</p>
                <Link
                  href={region.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-primary text-white w-[120px] py-2 rounded-full text-sm font-primary transition-colors duration-300 group-hover:bg-red-600">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}