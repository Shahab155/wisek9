"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { name: "Manned Guarding", icon: "👮" },
    { name: "Event Security", icon: "🎤" },
    { name: "Construction Security", icon: "🏗️" },
    { name: "Mobile Patrol", icon: "🚓" },
    { name: "Canine Security", icon: "🐕" },
    { name: "Temporary Staff Support", icon: "⚙️" },
    { name: "Cleaning & Staffing", icon: "🧹" },
  ];

  const features = [
    {
      title: "A team of professional SIA-Licensed guards",
      desc: "Highly trained and certified security professionals",
      icon: "🌍",
    },
    {
      title: "Dynamic security system",
      desc: "Adaptive and responsive security solutions",
      icon: "🔒",
    },
    {
      title: "Effective communication",
      desc: "Clear and timely communication channels",
      icon: "💬",
    },
    {
      title: "Outstanding recruitment procedure",
      desc: "Rigorous selection and training processes",
      icon: "🛡️",
    },
    {
      title: "First-class nationwide image",
      desc: "Trusted reputation across the UK",
      icon: "🏆",
    },
  ];

  return (
    <sectionz id="#About" ref={sectionRef} className="bg-gray-50 py-16">
      <div className="px-4 max-w-7xl mx-auto">

      {/* ----------- PART 1: About Us Intro ----------- */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-primary text-primary fade-up">About Us</h2>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto fade-up">
          WiseK9 is among the leading security companies that help you solve
          your security needs.
        </p>
        <h3 className="mt-8 text-2xl md:text-3xl font-bold text-black fade-up">
          We provide bespoke security solutions that make your life easier:
        </h3>
      </div>

      {/* Services Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center mb-20">
        {services.map((item, idx) => (
          <div key={idx} className="text-center fade-up">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white text-3xl shadow-md mx-auto mb-3">
              {item.icon}
            </div>
            <p className="text-sm font-medium text-secondary">{item.name}</p>
          </div>
        ))}
      </div>

      {/* ----------- PART 2: UK Coverage ----------- */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Text */}
        <div className="bg-white rounded-2xl shadow-lg p-8 fade-up">
          <p className="text-secondary leading-relaxed mb-6">
            We operate across the UK and provide construction and event security
            for your safety. As a result, WiseK9 has become a trusted security
            partner in the UK.
          </p>
          <p className="text-secondary leading-relaxed mb-6">
            After all, would you hire security if it did not keep you safe?
            Neither would we; therefore, so why should you hire a security
            company that will not keep your event or construction site properly
            safe?
          </p>
          <div className="bg-primary text-white rounded-lg py-4 px-6 text-center font-bold text-lg shadow-md">
            87% UK Coverage
            <p className="text-sm font-normal">
              Nationwide Security Solutions
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="fade-up">
          <img
            src="/images/about/aboutSec.jpg"
            alt="Security Guard"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* ----------- PART 3: Why Choose Us ----------- */}
      <div className="bg-gray-50 rounded-3xl shadow-sm max-w-7xl mx-auto p-10 md:p-16 text-center fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary fade-up">
          Why should you choose WiseK9?
        </h2>
        <p className="mt-6 text-secondary text-lg max-w-4xl mx-auto fade-up">
          Renowned for a reliable, excellent security company. We always strive
          to meet client expectations. Furthermore, our goal is to deliver
          reliable, exceptional, and efficient security services. Since we are a
          client-focused security service, we deliver security services to the
          clients, residents, commercial, and public sectors, providing
          stress-free security service.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-12">
          {features.map((item, idx) => (
            <div key={idx} className="fade-up">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white text-3xl mx-auto shadow-md mb-4">
                {item.icon}
              </div>
              <h3 className="text-[14px] font-bold text-red-600 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 fade-up">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-red-600 transition duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
      </div>
    </sectionz>
  );
}
