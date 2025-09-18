"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import {security_data} from '../../data';
import Link from 'next/link';


const EliteSecurity = () => {
  useEffect(() => {
    // GSAP animation for the items
    gsap.from('.service-item', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);


 

  return (
    <section className="bg-gray-50 py-16 " id="Services">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-primary text-primary text-center mb-12">Elite Security Services</h2>

       <div className="mx-auto max-w-7xl  px-4">
      {/* First 6 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {security_data.slice(0, 6).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {/* Last 2 cards in one row */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {security_data.slice(6, 8).map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
    </section>
  );
}
 

export default EliteSecurity;




function Card({ card }) {
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group">
      {/* Background Image */}
      <Image
        src={card.img}
        alt={card.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 transition-all duration-200"></div>

      {/* Badge */}
      <span className="absolute top-4 left-4 bg-primary text-white uppercase  text-md font-primary px-3 py-1 rounded-full shadow-md">
        {card.badge}
      </span>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
        <p className="text-sm mb-3">{card.desc}</p>
        <Link href={card.link} target="_blank" rel="noopener noreferrer"> 
        <button className="text-primary  text-md px-4 py-2 rounded-lg font-primary transition">
          Learn More <FaLongArrowAltRight className="inline-block ml-2" />
        </button>
        </Link>
      </div>
    </div>
  );
}