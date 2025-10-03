"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquareText, Search, MoreHorizontal } from "lucide-react";

const storiesData = [
  {
    name: "Max's SaaS Revolution",
    description:
      "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
    stats: [
      { value: "50%", label: "increase in ROI" },
      { value: "75%", label: "boost in revenue" },
    ],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/101d2af2-f211-4ff4-9565-45dc3759dff9-landio-framer-website/assets/images/46yWpjkwWiKJojGTr2NKnNPtJ1c-3.jpg?",
    transform: "rotate-1 -translate-x-2 translate-y-2",
  },
  {
    name: "Emily's E-commerce Success",
    description:
      "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty",
    stats: [
      { value: "60%", label: "growth in sales" },
      { value: "45%", label: "rise in engagement" },
    ],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/101d2af2-f211-4ff4-9565-45dc3759dff9-landio-framer-website/assets/images/GuFZFCQnRSOpKJkAPlCkaRUGIjc-4.png?",
    transform: "-rotate-2",
  },
  {
    name: "Sophia's Retail Breakthrough",
    description:
      "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
    stats: [
      { value: "40%", label: "gain in retention" },
      { value: "50%", label: "surge in profits" },
    ],
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/101d2af2-f211-4ff4-9565-45dc3759dff9-landio-framer-website/assets/images/TXdiLXbrEnofSFENzswfxpdKpc-5.png?",
    transform: "rotate-3 translate-x-4 -translate-y-2",
  },
];

const StoryCard = ({
  story,
  isActive,
  zIndex,
  yOffset,
}: {
  story: (typeof storiesData)[0];
  isActive: boolean;
  zIndex: number;
  yOffset: number;
}) => (
  <motion.div
    className="absolute inset-0 rounded-2xl overflow-hidden"
    animate={{
      opacity: isActive ? 1 : 0.7,
      scale: isActive ? 1 : 0.95,
      y: isActive ? 0 : yOffset, // shift inactive cards up
    }}
    transition={{ duration: 0.8 }}
    style={{ zIndex }}
  >
    <div className="relative bg-card border border-border rounded-2xl shadow-[0_10px_40px_0px_rgba(0,0,0,0.4)] h-full w-full overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[62px] px-6 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-3">
          <Search className="w-4 h-4 text-secondary-foreground" />
          <p className="text-base font-medium text-foreground">{story.name}</p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-secondary-foreground" />
      </div>

      <div className="flex gap-10 h-full w-full pt-[86px] pb-10 px-10">
        <div className="flex flex-col gap-5 flex-1">
          <p className="text-secondary-foreground text-base leading-relaxed">
            {story.description}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-auto">
            {story.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background border border-border rounded-lg flex flex-col items-center justify-center text-center pt-4 px-6 pb-6"
              >
                <p className="text-5xl font-semibold text-foreground">
                  {stat.value.replace("%", "")}
                  <span className="text-2xl text-secondary-foreground">%</span>
                </p>
                <p className="text-base text-secondary-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block relative w-[380px] h-[500px] rounded-lg overflow-hidden">
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-contain object-top"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % storiesData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-background py-[120px] relative"
      style={{
        backgroundImage: "url('/images/successstories.jpg')",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 px-4 py-1 mb-2">
            <MessageSquareText className="h-4 w-4 text-foreground" />
            <p className="text-sm font-medium text-foreground tracking-wide">
              OUR CLIENTS
            </p>
          </div>

          <h2 className="font-accent text-5xl font-normal text-foreground mb-1">
            Success Stories to <span className="italic">Inspire</span>
          </h2>
          <p className="text-lg leading-7 text-secondary-foreground">
            Discover how businesses and creators achieve results
          </p>
        </div>

        <div className="relative mt-20 h-[550px] max-w-[1400px] mx-auto">
          {storiesData.map((story, index) => {
            const isActive = index === activeIndex;
            const zIndex = isActive ? 30 : 10 + index;

            // Layered offsets for visible stacked cards
            let yOffset = 0;
            if (!isActive) {
              if (index === (activeIndex + 1) % 3)
                yOffset = -20; // middle card
              else yOffset = -40; // back-most card
            }

            return (
              <StoryCard
                key={story.name}
                story={story}
                isActive={isActive}
                zIndex={zIndex}
                yOffset={yOffset}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-card"></div>
    </section>
  );
};

export default SuccessStories;
