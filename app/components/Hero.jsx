"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for better animation control
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Hero title animation
      tl.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
      })
      // Hero subtitle animation
      .from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
        },
        "-=0.5" // Overlap with previous animation
      )
      // CTA button animation
      .from(
        ".hero-btn",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      // Infinite CTA button pulse animation
      gsap.to(ctaRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Arrow animation
      gsap.to(".hero-arrow", {
        y: 10,
        opacity: 0.7,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden bg-gray-900"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/heroBg.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 relative z-10 text-center px-4 py-16 max-w-7xl mx-auto">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          SIA-licensed Security Guard Supplier
        </h1>
        <p className="hero-subtitle mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-200 max-w-4xl">
          Protecting Your Assets with SIA-approved officers for retail,
          corporate, construction, healthcare, and public sectors
        </p>
        <div className="mt-8">
          <Link href="https://wisek9.co.uk" target="_blank" rel="noopener noreferrer">
            <button
              ref={ctaRef}
              className="hero-btn inline-block bg-primary hover:bg-red-800 text-white text-lg sm:text-xl md:text-2xl font-semibold px-8 sm:px-10 md:px-12 py-3 md:py-4 rounded-full shadow-xl transition-colors duration-300"
            >
              Visit wisek9.co.uk
            </button>
          </Link>
        </div>
        <div className="mt-12 flex justify-center">
          <FaArrowDown className="hero-arrow w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
      </div>
    </section>
  );
}