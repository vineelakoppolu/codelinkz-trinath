import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PricingContactSection = () => {
  return (
    <section className="relative bg-white text-white py-32 overflow-hidden">
      {/* Background Animated Shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600 to-pink-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"></div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full w-2 h-2 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        {/* Title */}
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 mb-6">
          For Pricing Contact Us
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Explore our flexible pricing models for startups, SMEs, and large
          enterprises. Have a question or need a custom plan? Our team is ready
          to assist you anytime.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white font-semibold px-10 py-5 rounded-3xl text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Contact Us
          <ArrowRight className="ml-3 w-5 h-5" />
        </Link>
      </div>

      {/* Advanced overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.1); }
          66% { transform: translate(-20px,30px) scale(0.9); }
        }
        .animate-blob { animation: blob 15s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }

        @keyframes float {
          0% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.5; }
        }
        .animate-float { animation: float infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default PricingContactSection;
