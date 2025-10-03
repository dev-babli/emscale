"use client";

import { motion } from "framer-motion";

export default function EnterpriseSecurityGuardrailsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
          Enterprise Security & Guardrails
        </h1>
        <p className="text-gray-300 text-lg">
          Ensure compliance, protect sensitive data, and enforce AI guardrails with EMScale’s enterprise-grade security.
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {[
          {
            title: "Data Protection",
            desc: "Encrypt sensitive data and maintain compliance with enterprise standards.",
          },
          {
            title: "Access Control",
            desc: "Role-based access ensures only the right people access the right data.",
          },
          {
            title: "Guardrails for AI",
            desc: "Prevent harmful, biased, or non-compliant AI outputs in production.",
          },
          {
            title: "Monitoring & Alerts",
            desc: "Get real-time alerts on suspicious activity and potential risks.",
          },
          {
            title: "Audit Logging",
            desc: "Comprehensive logs for compliance, traceability, and investigation.",
          },
          {
            title: "Enterprise Integrations",
            desc: "Seamlessly connect with your identity providers and security systems.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 hover:border-green-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Use Cases */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Where It Helps</h2>
        <p className="text-gray-400 mb-12">
          From healthcare to finance, guardrails ensure that your AI operates safely and responsibly.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl">✅ Healthcare Compliance</div>
          <div className="p-6 bg-gray-800 rounded-xl">✅ Financial Risk Mitigation</div>
          <div className="p-6 bg-gray-800 rounded-xl">✅ Government Regulations</div>
          <div className="p-6 bg-gray-800 rounded-xl">✅ Ethical AI Deployment</div>
          <div className="p-6 bg-gray-800 rounded-xl">✅ Data Residency Enforcement</div>
          <div className="p-6 bg-gray-800 rounded-xl">✅ Corporate Policy Alignment</div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 bg-gray-900 rounded-2xl p-12 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">
          Secure your AI operations with confidence
        </h2>
        <p className="text-gray-400 mb-6">
          Implement guardrails and compliance measures tailored to your enterprise.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-200 text-black font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition"
        >
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
}
