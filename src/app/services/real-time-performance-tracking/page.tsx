"use client";

import React from "react";

export default function RealTimePerformanceTracking() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-background px-6 py-16 space-y-16">
      {/* Hero Section */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-center animate-fadeSlideUp">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold tracking-tight mb-6 font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
            Real-Time Performance Tracking
          </h1>
          <p className="text-lg text-secondary-text mb-8">
            Monitor, measure, and optimize your AI workloads in real-time.
            EMScale empowers enterprises with actionable insights, ensuring
            maximum performance, efficiency, and reliability.
          </p>
          <ul className="space-y-4 text-secondary-text">
            <li>⚡ Live monitoring of AI pipelines</li>
            <li>📊 Granular performance metrics & analytics</li>
            <li>🔒 Secure & compliant tracking infrastructure</li>
            <li>🔄 Automated optimization recommendations</li>
            <li>📈 Enterprise-grade scalability</li>
          </ul>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-64 lg:h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl flex items-center justify-center text-white font-semibold text-xl">
            📊 Tracking Dashboard (Illustration Placeholder)
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-4xl text-center space-y-6">
        <h2 className="text-2xl font-bold text-primary-text">
          Ready to Scale Your AI with Real-Time Insights?
        </h2>
        <p className="text-secondary-text">
          Get a complete view of your model performance and ensure your
          organization stays ahead with proactive tracking and optimization.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl font-semibold hover:scale-105 transition transform duration-300 shadow-lg">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}
