"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaRegClock } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Newsletter from "./Newsletter";
import Link from "next/link";

const BlogSection = () => {
  const cardsRef = useRef([]); // Array to store card elements

  useEffect(() => {
    const validCards = cardsRef.current.filter((el) => el); // Filter out nulls

    if (validCards.length > 0) {
      const ctx = gsap.context(() => {
        gsap.from(validCards, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          onStart: () => {
            validCards.forEach((card) => {
              card.style.transition = "none"; // Disable CSS transitions during animation
            });
          },
          onComplete: () => {
            validCards.forEach((card) => {
              card.style.transition = "all 0.3s ease"; // Re-enable transitions with a smooth duration
              card.style.transform = "none"; // Reset GSAP transform to avoid conflicts
            });
          },
        });
      });

      return () => ctx.revert(); // Cleanup animations
    }
  }, []);

  const cards = [
    {
      id: 1,
      title: "London Doesn't Wait, and Neither Should Your Security",
      description:
        "In the fast-paced environment of London, security threats evolve rapidly. Discover why proactive security measures are essential for businesses operating in the capital and how Wise-K9 provides immediate response solutions.",
      img: "/images/blogs/1.jpeg",
      date: "18 Sept, 2025",
      alt: "Frontend development illustration",
      link: "https://wisek9.co.uk/london-security-services/",
    },
    {
      id: 2,
      title: "Why Event Security in Surrey Might Be the Best Decision You Make This Year",
      description:
        "Surrey's thriving event scene requires specialized security expertise. Learn how professional event security services can transform your gatherings from risky ventures into memorable, safe experiences.",
      img: "/images/blogs/2.jpeg",
      date: "15 Sept, 2025",
      alt: "Clean code tips illustration",
      link: "https://wisek9.co.uk/event-security-surrey/",
    },
    {
      id: 3,
      title: "Cleaners for Offices in the UK: Are They Worth It?",
      description:
        "Professional office cleaning services have become essential for UK businesses. Explore the cost-benefit analysis, health implications, and productivity impacts of investing in quality cleaning services.",
      img: "/images/blogs/3.jpeg",
      date: "12 Sept, 2025",
      alt: "UI/UX design illustration",
      link: "https://wisek9.co.uk/cleaners-for-offices-uk/",
    },
    {
      id: 4,
      title: "UK's Most Common Security Threats in 2025: Are You Prepared?",
      description:
        "The security landscape continues to evolve with new threats emerging regularly. Our comprehensive analysis reveals the most prevalent security challenges facing UK businesses in 2025 and actionable prevention strategies.",
      img: "/images/blogs/4.jpeg",
      date: "10 Sept, 2025",
      alt: "GSAP animation illustration",
      link: "https://wisek9.co.uk/uks-common-security-threats-2025/",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl mb-8 text-center">
          <h2 className="text-primary font-primary text-3xl md:text-5xl lg:text-6xl">
            Security Insights Blog
          </h2>
          <p className="text-gray-700 text-md md:text-xl mt-6">
            Stay informed with the latest security industry insights, expert analysis, and professional guidance from our security specialists
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el; // Assign ref
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group"
            >
              {/* Top Half with Image Tag */}
              <div className="relative h-72">
                <Image
                  src={card.img}
                  alt={card.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  Blog
                </span>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs bg-black/50 px-2 py-1 rounded-md">
                  <FaRegClock size={14} />
                  <span>{card.date}</span>
                </div>
              </div>

              {/* Bottom Half */}
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-primary">
                  By Admin - <span className="text-gray-800">Blog</span>
                </p>
                <h3 className="text-xl font-primary text-secondary mt-2 transition-colors duration-300 group-hover:text-red-500">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 font-secondary mt-2 line-clamp-3 flex-grow">
                  {card.description}
                </p>
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-md font-primary text-primary transition-transform duration-300 group-hover:translate-x-[3px]"
                >
                  Learn More <FaLongArrowAltRight className="inline-block ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default BlogSection;