"use client";
import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="py-6 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#1d2735] to-[#0f1623] text-white rounded-2xl shadow-lg p-10 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Informed with Security Insights
        </h2>

        {/* Subheading */}
        <p className="text-lg mb-8 text-gray-200">
          Subscribe to our blog for the latest security industry updates, expert
          tips, and professional guidance.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-6 py-3 rounded-full text-gray-800 focus:outline-none"
          />
          <button className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-8 py-3 rounded-full">
            Subscribe Now
          </button>
        </div>

        {/* Small Text */}
        <p className="text-gray-400 text-sm">
          Join 1,000+ security professionals who trust our insights
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="https://wisek9.co.uk/blog/" target="_blank" rel="noopener noreferrer">
      <button  className=" text-white font-primary text-lg  bg-primary px-10 py-3 rounded-lg transition hover:bg-red-800">
            View All Blogs
        </button>
        </Link>
      </div>
    </section>
  );
}
