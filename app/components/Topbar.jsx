"use client";
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Topbar () {
  return (
    <div className="bg-black text-white   flex justify-center md:justify-between items-center px-4 py-2 text-sm">
      
      {/* Left Section (Phone + WhatsApp) */}
      <div className="flex   items-center gap-2 md:gap-6">
         <a
              href="mailto:info@wisek9.co.uk"
              className="hover:text-primary text-[9px] md:text-sm flex items-center justify-center"
            >
              <MdEmail className="w-4 h-4 mr-1" /> info@wisek9.co.uk
            </a>
        <div className="flex items-center md:text-sm text-[9px] gap-2 hover:text-primary cursor-pointer">
          <FaPhoneAlt className="w-4 h-4 mr-1"/>
          <span>+923001234567</span>
        </div>
        <div className="flex text-[9px] md:text-sm items-center gap-2 hover:text-primary cursor-pointer">
          <FaWhatsapp className=" w-4 h-4 mr-1"/>
          <span>+923339876543</span>
        </div>
      </div>

      {/* Right Section (Social Icons) */}
      <div className=" items-center gap-4 mt-2 md:mt-0 hidden md:flex">
       
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
