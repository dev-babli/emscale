"use client";
import Image from "next/image";
import React from "react";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/685ed791dfdeb4b0d4a54168_Mask%20group-4.png?",
    alt: "AWS Partner Advanced Tier Services",
    width: 104,
    height: 72,
    className: "h-16",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/6863924af41e4ddde670dc49_google-logo-png-29546-5.png?",
    alt: "Google logo",
    width: 63,
    height: 64,
    className: "h-16",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/6863e65b9b69467088754088_Microsoft_Azure_Logo-5.svg?",
    alt: "Microsoft Azure logo",
    width: 108,
    height: 31,
    className: "h-8",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/67f799703c0d759e85ae62ef_salesforce-6.png?",
    alt: "Salesforce logo",
    width: 106,
    height: 74,
    className: "h-16",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/67f79970f47f978c9957b2c7_databricskl-7.png?",
    alt: "Databricks Partner logo",
    width: 157,
    height: 30,
    className: "h-10",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    alt: "IBM logo",
    width: 120,
    height: 40,
    className: "h-10",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    alt: "Oracle logo",
    width: 120,
    height: 40,
    className: "h-10",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    alt: "SAP logo",
    width: 120,
    height: 40,
    className: "h-10",
  },
];

const IndustryEcosystems = () => {
  return (
    <section
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/industry.jpg')" }}
    >
      <div className="container relative z-10">
        <h2 className="text-4xl font-semibold leading-tight text-white text-center">
          <span className="text-gray-400/80">Works Seamlessly with </span>
          Industry Ecosystems
        </h2>

        {/* Scrolling Logos */}
        <div className="mt-16 overflow-hidden relative">
          <div className="flex animate-marquee gap-16">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.className} w-auto object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 4rem;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default IndustryEcosystems;
