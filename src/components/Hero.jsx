// src/components/Hero.jsx
import { useState, useRef } from "react";
import hero from "../assets/hero.png";
import background from "../assets/background.gif";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Background animation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Smaller top text */}
            <div className="text-[#fea92a] uppercase tracking-wider font-semibold mb-4">
              The Ultimate Signal Marketplace
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#efefef] mb-6">
              Connect with Winning Punters & Traders
            </h1>

            {/* Additional text */}
            <p className="text-xl text-[#efefef] mb-8 max-w-2xl">
              Subscribe to professional sport betting experts and forex/crypto
              traders for premium signals, or become a signal provider yourself
              and earn from your expertise.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                className="bg-[#18ffc8] text-[#09100d] px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-colors"
                href="https://app.thepunterhub.com/register"
              >
                Find Experts
              </a>
              <a
                className="border border-[#efefef] text-[#efefef] px-8 py-3 rounded-md font-bold hover:bg-[#efefef] hover:text-[#09100d] transition-colors"
                href="https://app.thepunterhub.com/register"
              >
                Become a Punter
              </a>
            </div>
          </div>

          {/* Image/Illustration Content */}
          <div className="flex-1 flex justify-center">
            <img
              src={hero}
              alt="Hero"
              className="w-[50%] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
