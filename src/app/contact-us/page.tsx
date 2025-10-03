"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const TypingText = ({
  text,
  speed = 100,
  delay = 1000,
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
      // Reset after full text is typed out
      const resetTimeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, delay);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed, delay]);

  return <span>{displayed}|</span>;
};

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Typing effect state
  const fullText =
    "“Scheduling a demo was simple, and the team walked us through every feature in detail. Highly recommend!” – Mike S., Head of AI";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40); // typing speed
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 space-y-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/contact.jpg')" }}
    >
      {/* Hero Section */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 items-center animate-fadeSlideUp bg-black/60 p-8 rounded-3xl ml-auto mr-20">
        {/* Left: Form */}
        <div className="flex-1 bg-card/80 p-10 rounded-3xl shadow-2xl shadow-indigo-500/20 text-white">
          <p className="text-white mb-8 text-white-700">
            Fill out the form below and our team will contact you to walk
            through EMSCALE features, benefits, and pricing.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {["name", "email", "company"].map((field) => (
              <motion.input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: ["name", "email", "company"].indexOf(field) * 0.2,
                }}
                whileFocus={{ scale: 1.02 }}
              />
            ))}

            <motion.textarea
              name="message"
              placeholder="Message / Requirements"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileFocus={{ scale: 1.02 }}
            />

            <motion.button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-400 via-green-300 to-green-200 text-black rounded-xl font-semibold shadow-lg"
              whileHover={{
                scale: 1.0,
                boxShadow: "0px 0px 20px rgba(34,197,94,0.6)",
              }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 8,
                delay: 0.5,
              }}
            >
              Submit
            </motion.button>
          </form>
        </div>

        {/* Right: Features / Benefits */}
        <div className="flex-1 max-w-8xl ml-auto mr-20 flex flex-col gap-6 bg-black/50 p-8 rounded-3xl">
          <motion.div
            className="flex-1 max-w-8xl ml-auto mr-1 flex flex-col gap-6 bg-black/50 p-8 rounded-3xl"
            initial={{ x: 50, opacity: 0.8 }}
            animate={{ x: [0, 10, -10, 0], opacity: [0.8, 1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <h2 className="text-2xl text-white-700 font-bold text-white ">
              Why EMSCALE?
            </h2>
            <ul className="space-y-4 text-white-700">
              <li>✅ Optimize LLM and FM workflows efficiently</li>
              <li>✅ Real-time monitoring & performance analytics</li>
              <li>✅ Secure & scalable infrastructure for enterprises</li>
              <li>✅ Unified gateway for all AI services</li>
              <li>✅ No-code workflow management</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 items-center bg-black/60 p-8 rounded-3xl ml-auto mr-20">
        <h2 className="text-2xl font-bold text-white">What Our Clients Say</h2>

        <div className="flex flex-col gap-4">
          <p className="text-gray-200">
            “EMSCALE helped our AI operations improve efficiency by 40%. Their
            platform is intuitive, secure, and extremely fast.” – Jane D., CTO
            at TechCorp
          </p>

          {/* Typing effect on this one */}
          <p className="text-gray-200">
            <TypingText text="“Scheduling a demo was simple, and the team walked us through every feature in detail. Highly recommend!” – Mike S., Head of AI" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;
