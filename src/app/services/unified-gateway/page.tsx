"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UnifiedGatewayPage() {
  const features = [
    { icon: "🌐", title: "Centralized Access", description: "Manage all integrations and endpoints from a single platform." },
    { icon: "⚡", title: "Optimized Performance", description: "Ensure high-speed routing and processing for your workflows." },
    { icon: "🔒", title: "Secure Gateway", description: "Maintain enterprise-grade security and compliance across all connections." },
  ];

  const useCases = [
    "API integration hub",
    "Centralized workflow management",
    "Data routing optimization",
    "Secure enterprise gateway",
  ];

  return (
    <div className="bg-black min-h-screen text-white px-6 py-12">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Unified Gateway Value</h1>
        <p className="text-lg text-gray-400 mb-8">
          Centralize, optimize, and secure all your integrations and workflows through a unified gateway solution.
        </p>
        <div className="flex justify-center gap-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">Get Started</motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-black transition">Learn More</motion.button>
        </div>
      </motion.div>

      {/* Features */}
      <section className="mt-16 max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }} className="flex flex-col items-center p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-400 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* How It Works */}
      <section className="mt-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-gray-400 mb-8">
          Manage all endpoints and integrations from a single platform while optimizing performance and maintaining security.
        </p>
        <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Step 1: Connect all endpoints",
            "Step 2: Centralize workflow management",
            "Step 3: Optimize performance",
            "Step 4: Ensure secure operations",
          ].map((step, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg text-left">
              <h4 className="font-semibold text-lg mb-2">{step}</h4>
              <p className="text-gray-400 text-sm">Detailed explanation for {step.toLowerCase()}.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="mt-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          {useCases.map((useCase, i) => (
            <motion.li key={i} whileHover={{ scale: 1.05 }} className="p-4 bg-gray-900 rounded-xl shadow hover:shadow-lg transition cursor-pointer">{useCase}</motion.li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-24 bg-gray-900 rounded-2xl p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Centralize and optimize your integrations</h2>
        <p className="text-gray-400 mb-6">Start using Unified Gateway to simplify workflow management and ensure secure, optimized performance.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition">Start Now</motion.button>
      </motion.section>
    </div>
  );
}
