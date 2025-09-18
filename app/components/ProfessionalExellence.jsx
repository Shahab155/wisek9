"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, CheckCircle2, MapPin, Clock } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ProfessionalExcellence() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      gsap.set(".card", { opacity: 1, y: 0 });
      gsap.set(".icon-circle", { scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Animate cards
      gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: {
          each: 0.2,
          from: "start",
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start when section is 80% in viewport
          toggleActions: "play none none none",
        },
      });

      // Animate icons
      gsap.from(".icon-circle", {
        scale: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Hover effects for cards
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            borderColor: "#ef4444",
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderColor: "#e5e7eb",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean up animations
  }, []);

  const cards = [
    {
      icon: <Shield className="w-10 h-10 text-white" />,
      title: "SIA Approved Contractor",
      desc: "Officially recognized by the Security Industry Authority for maintaining the highest professional standards in security services.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-white" />,
      title: "COP 119:2024 Certified",
      desc: "Accredited under the latest Code of Practice for security guarding, ensuring compliance with current industry regulations.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-white" />,
      title: "87% UK Coverage",
      desc: "Extensive nationwide presence covering 87% of the UK, providing reliable security solutions across England, Scotland, and Wales.",
    },
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      title: "24/7 Operations",
      desc: "Round-the-clock security services with continuous monitoring and rapid response capabilities for complete peace of mind.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white text-center"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-primary text-primary mb-4">
        Professional Excellence 
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
        Our commitment to excellence is demonstrated through industry-leading
        certifications, nationwide coverage, and unwavering dedication to
        security standards.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20">
        {cards.map((card, i) => (
          <div
            key={i}
            className="card relative bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div
                className="icon-circle w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, #f43f5e, #ef4444)",
                }}
              >
                {card.icon}
              </div>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}