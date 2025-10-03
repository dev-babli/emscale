"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const TypingText = ({
  text,
  speed = 60,
  delay = 2000,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) => {
  const [displayed, setDisplayed] = React.useState("");
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Reset after delay
      const resetTimeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, delay);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed, delay]);

  return <span>{displayed}|</span>;
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <div className="container relative z-10 px-6 mx-auto flex flex-col justify-center h-full">
        <div className="max-w-[800px] text-left">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Experiment, Automate, and Scale AI at Enterprise Speed
          </h1>
          <p className="mt-6 text-base text-white-700 max-w-[600px]">
            <TypingText text="EMSCALE enables organizations to efficiently optimize, monitor, and scale their AI workflows, delivering improved performance, secure operations, and measurable AI-driven business value. It empowers teams to automate repetitive tasks, accelerate model deployment, and maintain governance across multiple AI systems. With real-time insights, advanced analytics, and robust security controls, EMSCALE ensures your AI initiatives are not only fast and reliable but also compliant and scalable for enterprise-grade operations. Unlock innovation, reduce operational overhead, and drive consistent results across your organization with EMSCALE." />
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start gap-6">
            <button className="px-8 py-4 bg-gradient-to-r from-green-400 via-green-300 to-green-200 text-black rounded-lg font-medium hover:scale-105 transition-transform">
              Get Started
            </button>
            <Link
              href="/contact-us"
              className="px-8 py-4 border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-transform"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-700/20"></div>
    </section>
  );
};

export default Hero;
