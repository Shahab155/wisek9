import Link  from "next/link";
import Counter from "./Counter";




export default function Footer() {
  return (
    <>
    <footer className="bg-black text-gray-200 py-12 px-6 md:px-16">
      {/* Stats Row */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <Counter end={87} label="% UK Coverage" />
        <Counter end={24} label="Hours Service" />
        <Counter end={1000} label="+ Clients Protected" />
        <Counter end={15} label="Years Experience" />
      </div>
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  pt-12">
        {/* Left - Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Wise-K9</h2>
          <p className="text-sm leading-relaxed mb-4">
            SIA-licensed Security Guard Supplier Company to Protect Your Assets
          </p>
          <p className="text-sm leading-relaxed mb-4">
            Serving retail, corporate, construction, healthcare, and public
            sectors with capable, SIA-approved officers.
          </p>
          <p className="text-sm">Company No. 13043701</p>
          <p className="text-sm">VAT No. 430 2828 22</p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Our Services</a></li>
            <li><a href="#" className="hover:text-primary">Careers</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
            <li><a href="#" className="hover:text-primary">Get Quote</a></li>
          </ul>
        </div>

        {/* Right - Explore More */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-6">
            Explore More
          </h3>
          <Link href="https://wisek9.com" target="_blank" >
              <button  className="inline-block bg-primary text-white font-semibold px-12 py-4 rounded-full shadow-lg hover:bg-[#cb0404] hover:scale-105 duration-200 transition">

            Explore wisek9
              </button>
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-300">
        © 2024 Wise-K9 Security Services. All rights reserved. | Your Safety, Our Mission | Developed by 
        <a href="https://irisxoft.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
          irisxoft.com
        </a>
      </div>
    </footer>
              </>
  );
}
