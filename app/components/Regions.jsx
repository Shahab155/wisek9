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
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      cardsRef.current.forEach((card) => {
        gsap.set(card, { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Card animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        }
      );

      // Subtle icon scale-in for extra smoothness
      gsap.from(".region-icon", {
        scale: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-16 bg-gray-50"
      id="Regions"
      ref={sectionRef}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="px-4 max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl mb-16 text-center">
          <h2 className="text-primary font-primary text-3xl md:text-5xl lg:text-6xl">
            Regions We Cover
          </h2>
          <p className="text-gray-600 text-base md:text-xl mt-6">
            Comprehensive security coverage across the United Kingdom with 87%
            nationwide reach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 group hover:scale-105 animate-in" // Reduced hover scale for subtlety, added animate-in class for post-GSAP transitions
            >
              {/* Top Half with Background */}
              <div className="relative min-h-40 bg-gradient-to-r from-primary to-red-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <MdLocationOn className="region-icon w-12 h-12 mx-auto mb-2" />
                  <h3 className="text-xl font-primary">{region.title}</h3>
                </div>
              </div>

              {/* Bottom Half */}
              <div className="p-5 flex flex-col justify-between flex-1 min-h-40">
                <p className="text-secondary text-sm md:text-base mb-4 line-clamp-3">{region.desc}</p> {/* Added line-clamp for overflow control */}
                <Link
                  href={region.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start"
                >
                  <button className="bg-primary text-white px-4  sm:w-[120px] py-2 rounded-full text-xs sm:text-sm font-primary transition-colors duration-300 group-hover:bg-red-600">
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