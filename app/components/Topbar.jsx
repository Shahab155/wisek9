"use client";
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Topbar () {
  return (
    <div className="bg-black text-white hidden md:flex justify-between items-center px-4 py-2 text-sm">
      
      {/* Left Section (Phone + WhatsApp) */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
         <a
              href="mailto:info@wisek9.co.uk"
              className="hover:text-primary flex items-center justify-center"
            >
              <MdEmail className="w-4 h-4 mr-1" /> info@wisek9.co.uk
            </a>
        <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
          <FaPhoneAlt />
          <span>+92 300 1234567</span>
        </div>
        <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
          <FaWhatsapp  />
          <span>+92 333 9876543</span>
        </div>
      </div>

      {/* Right Section (Social Icons) */}
      <div className="flex items-center gap-4 mt-2 md:mt-0">
       
        <a href="" className="hover:text-blue-500 transition-colors">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-pink-500 transition-colors">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-red-500 transition-colors">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};
