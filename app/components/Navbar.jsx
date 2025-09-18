"use client";
import { useEffect, useState } from 'react';
import { FaHouse, FaCircleCheck, FaLocationDot, FaCity } from "react-icons/fa6";
import { MdEmail, MdOutlineMenu,MdOutlineMiscellaneousServices } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import Image from 'next/image';
import MoreDropdown from './MoreDropDown';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`flex items-center justify-between px-6 sm:px-10 md:px-16 h-20 py-2 fixed w-full z-40 transition-colors duration-300 ${isScrolled && 'bg-black/95'} ${isScrolled ? 'top-0' : 'top-10'}`}>
      <div className="flex items-center">
        <Link href={"/"} onClick={handleLinkClick}>
          <Image src="/logo.png" alt="Wise-K9 Logo" height={60} width={60} />
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="block md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <RxCross2 className="w-6 h-6 font-primary" /> : <MdOutlineMenu className="w-6 h-6 font-primary" />}
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`md:flex md:gap-6 md:items-center ${
          isMobileMenuOpen
            ? "flex flex-col justify-center items-center fixed top-0 left-0 h-screen w-full bg-black/80 p-4 transition-transform ease-in-out duration-300 transform translate-x-0"
            : "hidden md:flex flex-row md:gap-6 transform -translate-x-full md:translate-x-0"
        }`}
      >
        <li>
          <Link
            href="/"
            onClick={handleLinkClick}
            className="nav-link flex flex-col items-center hover:text-primary group relative text-white text-[15px] font-primary"
          >
            <FaHouse className="w-5 h-5 mb-2 font-primary" />
            Home
            <span className="relative bottom-[-3px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
          </Link>
        </li>
        <li>
          <Link
            href="#About"
            onClick={handleLinkClick}
            className="nav-link flex flex-col items-center hover:text-primary group relative text-white text-[15px] font-primary"
          >
            <FaCircleCheck className="w-5 h-5 mb-2 font-primary" />
            About Us
            <span className="relative bottom-[-3px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
          </Link>
        </li>
        <li>
          <Link
            href="#Services"
            onClick={handleLinkClick}
            className="nav-link flex flex-col items-center hover:text-primary group relative text-white text-[15px] font-primary"
          >
            <MdOutlineMiscellaneousServices className="w-5 h-5 mb-2 font-primary" />
            Services
            <span className="relative bottom-[-3px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
          </Link>
        </li>
        <li>
          <Link
            href="#Regions"
            onClick={handleLinkClick}
            className="nav-link flex flex-col items-center hover:text-primary group relative text-white text-[15px] font-primary"
          >
            <FaLocationDot className="w-5 h-5 mb-2 font-primary" />
            Regions
            <span className="relative bottom-[-3px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
          </Link>
        </li>
        <li>
          <Link
            href="#Cities"
            onClick={handleLinkClick}
            className="nav-link flex flex-col items-center hover:text-primary group relative text-white text-[15px] font-primary"
          >
            <FaCity className="w-5 h-5 mb-2 font-primary" />
            UK Cities
            <span className="relative bottom-[-3px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
          </Link>
        </li>
        <li>
          <Link
            href="#Contact"
            onClick={handleLinkClick}
            className="nav-link flex flex-col items-center hover:text-primary group relative text-white text-[15px] font-primary"
          >
            <MdEmail className="w-5 h-5 mb-2 font-primary" />
            Contact
            <span className="relative bottom-[-3px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
          </Link>
        </li>
        {/* Dropdown "More" */}
        <MoreDropdown />
      </ul>
    </nav>
  );
};