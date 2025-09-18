"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBloggerB, FaCheckCircle } from "react-icons/fa6";
import { MdKeyboardArrowDown} from "react-icons/md";
import { BsChatRightQuote } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineCarryOut } from "react-icons/ai";
import { gsap } from "gsap";

export default function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ddRef = useRef(null);
  const containerRef = useRef(null);

  // Detect desktop vs mobile
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 768 : true;

  // Close on escape / outside click
  useEffect(() => {
    function handleDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GSAP animation
  useEffect(() => {
    if (!ddRef.current) return;

    if (isOpen) {
      gsap.killTweensOf(ddRef.current);
      gsap.fromTo(
        ddRef.current,
        { opacity: 0, y: -8, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power3.out" }
      );
    } else {
      gsap.killTweensOf(ddRef.current);
      gsap.to(ddRef.current, {
        opacity: 0,
        y: -6,
        duration: 0.18,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const items = [
    { href: "https://wisek9.co.uk/blogs", label: "Blogs", Icon: FaBloggerB },
    { href: "https://wisek9.co.uk/careers", label: "Careers", Icon: AiOutlineCarryOut },
    { href: "https://wisek9.co.uk/quote", label: "Get Quote", Icon: BsChatRightQuote },
    { href: "https://wisek9.co.uk/training", label: "Training", Icon: PiStudentFill },
  ];

  return (
    <li
      ref={containerRef}
      className="group relative"
      onMouseEnter={() => isDesktop && setIsOpen(true)}
      onMouseLeave={() => isDesktop && setIsOpen(false)}
    >
      {/* Trigger */}
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="more-menu"
        className="nav-link flex flex-col items-center text-white text-[15px] font-primary group-hover:text-primary transition-colors"
        type="button"
        onClick={() => !isDesktop && setIsOpen((s) => !s)}
      >
        <MdKeyboardArrowDown
          className={`w-5 h-5 mb-2 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
        More
        <span className="relative bottom-[-3px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
      </button>

      {/* Dropdown panel (always mounted) */}
      <div
        id="more-menu"
        ref={ddRef}
        role="menu"
        className={`absolute top-full right-0 mt-2 w-56 bg-black text-white rounded-2xl shadow-2xl z-50 overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {items.map((it) => {
          const ItemIcon = it.Icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              role="menuitem"
              className="flex items-center px-4 py-3 text-sm transition-colors hover:bg-gray-300/10 hover:text-primary"
            >
              <ItemIcon className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="leading-tight">{it.label}</span>
            </Link>
          );
        })}
      </div>
    </li>
  );
}
