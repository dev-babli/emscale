"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PromptManagementPage() {
  const features = [
    { icon: "✏️", title: "Centralized Prompts", description: "Manage all AI prompts in one place for consistency." },
    { icon: "⚡", title: "Dynamic Templates", description: "Create reusable prompt templates to speed up workflows." },
    { icon: "📊", title: "Performance Insights", description: "Analyze prompt effectiveness and optimize AI outputs." },
  ];

  const useCases = [
    "Standardize AI interactions",
    "Improve model output quality",
    "Reuse prompts across applications",
    "Monitor prompt performance",
  ];

  return (
    <div className="bg-black min-h-screen text-white px-6 py-12">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Prompt Management</h1>
        <p className="text-lg text-gray-400 mb-8">
          Organize, optimize, and monitor AI prompts to ensure consistent and high-quality responses across your applications.
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
          Manage your prompts centrally, create reusable templates, and analyze performance to improve AI outputs efficiently.
        </p>
        <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Step 1: Create and store prompts",
            "Step 2: Use templates for efficiency",
            "Step 3: Analyze results",
            "Step 4: Optimize for performance",
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
        <h2 className="text-3xl font-bold mb-4">Centralize and optimize your prompts</h2>
        <p className="text-gray-400 mb-6">Start using Prompt Management to ensure consistent, high-quality AI outputs.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition">Start Now</motion.button>
      </motion.section>
    </div>
  );
}
