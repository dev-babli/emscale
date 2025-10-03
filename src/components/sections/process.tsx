"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const processSteps = [
  {
    value: "step-1",
    label: "STEP 1",
    stepNumber: "01",
    title: "Discover & Analyze",
    description: [
      "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities.",
      "Every system is mapped for clarity.",
      "We identify bottlenecks and areas where AI can add the most value.",
    ],
    imageSrc: "/images/process1.jpg",
  },
  {
    value: "step-2",
    label: "STEP 2",
    stepNumber: "02",
    title: "Design & Implement",
    description: [
      "We create tailored AI workflows that align with your business goals.",
      "Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
      "We provide training and documentation for your teams to ensure smooth adoption.",
    ],
    imageSrc: "/images/process2.jpg",
  },
  {
    value: "step-3",
    label: "STEP 3",
    stepNumber: "03",
    title: "Optimize & Scale",
    description: [
      "We monitor performance and provide ongoing support to refine and scale your automations.",
      "Ensuring they deliver continuous value and adapt to your evolving needs.",
      "We recommend improvements based on real-time analytics and feedback.",
    ],
    imageSrc: "/images/process3.jpg",
  },
];

export default function ProcessSection() {
  // State to control active tab
  const [activeTab, setActiveTab] = useState(processSteps[0].value);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = processSteps.findIndex(
          (step) => step.value === prev
        );
        const nextIndex = (currentIndex + 1) % processSteps.length;
        return processSteps[nextIndex].value;
      });
    }, 4000); // 4 seconds per step

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="process"
      className="relative py-18 border-t border-border bg-cover bg-center"
      style={{ backgroundImage: "url('/images/process.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1),_transparent_25%)] -z-0"></div>
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

      <div className="container relative z-10 mx-auto ">
        <div className="flex flex-col items-center text-center gap-2 mb-6">
          {" "}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {" "}
            <Sparkles className="h-4 w-4" /> PROCESS{" "}
          </div>{" "}
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            {" "}
            Our <span className="font-accent italic">Simple & Smart</span>{" "}
            Process{" "}
          </h2>{" "}
          <p className="max-w-2xl text-lg text-secondary-foreground">
            {" "}
            Everything you need to collaborate, create, and scale, all in one
            place.{" "}
          </p>{" "}
        </div>

        <Tabs value={activeTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 h-auto bg-card p-1.5 rounded-xl border border-border mx-auto">
            {processSteps.map((step) => (
              <TabsTrigger
                key={step.value}
                value={step.value}
                className="text-base rounded-lg py-2.5"
              >
                {step.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {processSteps.map((step) => (
            <TabsContent key={step.value} value={step.value} className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="bg-card border border-border rounded-2xl p-2 shadow-2xl shadow-black/20">
                  <Image
                    src={step.imageSrc}
                    alt={`${step.title} visualization`}
                    width={801}
                    height={525}
                    className="rounded-xl w-full object-cover"
                  />
                </div>
                <div className="relative">
                  {/* Big step number */}
                  <h3 className="text-[100px] font-bold text-white/10 absolute -top-35 -left-6 z-30 leading-none pointer-events-none">
                    {step.stepNumber}
                  </h3>
                  {/* Title */}
                  <motion.h4
                    className="text-3xl font-semibold text-foreground mb-4 relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {step.title}
                  </motion.h4>
                  {/* Description */}
                  <motion.p
                    className="text-lg text-secondary-foreground relative z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
