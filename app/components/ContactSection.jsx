"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaEnvelope,
  FaCheckCircle,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneSquareAlt,
  FaMobileAlt,
  FaBriefcase,
  FaBell,
  FaClock,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      cardsRef.current.forEach((card) => gsap.set(card, { opacity: 1, y: 0, scale: 1 }));
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".contact-icon", {
        scale: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Contact"
      className="bg-[#0f172a] py-16 px-4 md:px-16"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="text-center max-w-5xl mx-auto py-10">
        <h2 className="text-3xl md:text-5xl font-primary text-primary ">
          Get In Touch With Us
        </h2>
        <p className="text-xl text-gray-500 leading-relaxed mt-2">
         Ready to secure your premises? Contact our expert team for a personalized <br />security consultation and quote.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            {/* Call Us */}
            <div
              ref={addToRefs}
              className="contact-card flex flex-col justify-between h-full bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-transparent hover:border-red-500 transition"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="contact-icon bg-red-500 p-3 rounded-full text-white text-lg flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">Call Us</h3>
                </div>
                <p className="text-gray-400 mb-4">Speak directly with our security experts</p>
              </div>

              <div className="space-y-2 text-white mt-6">
                <p className="flex items-center gap-3">
                  <FaPhoneSquareAlt className="text-primary" /> <span>0330 043 4152</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaMobileAlt className="text-blue-400" /> <span>+44 7415 274698</span>
                </p>
              </div>
            </div>

            {/* Visit Us */}
            <div
              ref={addToRefs}
              className="contact-card flex flex-col justify-between h-full bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-transparent hover:border-red-500 transition"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="contact-icon bg-red-500 p-3 rounded-full text-white text-lg flex-shrink-0">
                    <FaMapMarkedAlt />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">Visit Us</h3>
                </div>
                <p className="text-gray-400 mb-4">Our headquarters in Surrey</p>
              </div>

              <div className="space-y-1 text-white mt-6">
                <p className="text-white font-semibold">Regus – Camberley</p>
                <p className="text-white">Frimley Rd, Frimley</p>
                <p className="text-white">Camberley, GU16 7ER</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            {/* Email Us */}
            <div
              ref={addToRefs}
              className="contact-card flex flex-col justify-between h-full bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-transparent hover:border-red-500 transition"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="contact-icon bg-red-500 p-3 rounded-full text-white text-lg flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">Email Us</h3>
                </div>
                <p className="text-gray-400 mb-4">Get detailed quotes and information</p>
              </div>

              <div className="space-y-2 text-white mt-6">
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-red-400" /> <span>info@wisek9.co.uk</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaBriefcase className="text-orange-400" /> <span>quotes@wisek9.co.uk</span>
                </p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div
              ref={addToRefs}
              className="contact-card flex flex-col justify-between h-full bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-transparent hover:border-red-500 transition"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="contact-icon bg-red-500 p-3 rounded-full text-white text-lg flex-shrink-0">
                    <FaCheckCircle />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">24/7 Support</h3>
                </div>
                <p className="text-gray-400 mb-4">Emergency response available</p>
              </div>

              <div className="space-y-2 text-white mt-6">
                <p className="flex items-center gap-3">
                  <FaBell className="text-primary" /> Emergency Line Available
                </p>
                <p className="flex items-center gap-3">
                  <FaClock className="text-red-400" /> 24/7 Response Team
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8">
            {/* Our Locations */}
            <div
              ref={addToRefs}
              className="contact-card flex flex-col justify-between h-full bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-transparent hover:border-red-500 transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Locations</h3>
                <div className="bg-[#0b1220] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/blogs/map.jpeg"
                    alt="World Map"
                    width={600}
                    height={300}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-white flex items-center gap-2 mb-2">
                  <FaMapMarkedAlt className="text-primary" /> Camberley, Surrey
                </p>
               
                <Link
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="mt-4 px-6 py-2 bg-red-500 rounded-full text-white font-semibold hover:bg-red-600 transition">
                    Get Directions
                  </button>
                </Link>
              </div>
            </div>

            {/* Follow Us */}
            <div
              ref={addToRefs}
              className="contact-card flex flex-col justify-between h-full bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-transparent hover:border-red-500 transition text-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="#" aria-label="Facebook" className="transform hover:scale-110 transition">
                    <FaFacebookF className="text-primary text-2xl" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="transform hover:scale-110 transition">
                    <FaLinkedinIn className="text-primary text-2xl" />
                  </a>
                  <a href="#" aria-label="Twitter" className="transform hover:scale-110 transition">
                    <FaTwitter className="text-primary text-2xl" />
                  </a>
                </div>

                <p className="text-gray-400 mb-4">Stay updated with our latest security insights</p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link href={"https://wisek9.co.uk/quote/"} target="_blank" rel="noopener noreferrer">
                <button className="w-full px-6 py-3 bg-red-500 rounded-full text-white font-semibold hover:bg-red-600 transition">
                  Get Free Quote
                </button>
      </Link>
      <Link href="https://wisek9.co.uk/contact-us/" target="_blank" rel="noopener noreferrer">

                    <button className="w-full px-6 py-3 border border-red-500 rounded-full text-primary font-semibold hover:bg-red-500 hover:text-white transition">
                  Schedule Consultation
                </button>
               </Link> 
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;