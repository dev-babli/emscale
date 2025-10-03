"use client";

import React from "react";
import {
  Wallet,
  Bell,
  Users,
  Twitter,
  CheckCircle2,
  Sparkles,
  LayoutDashboard,
  Mail,
  FolderOpen,
  User,
} from "lucide-react"; // make sure lucide-react is installed
import { motion } from "framer-motion";

const ServiceCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={`bg-card/10 p-6 rounded-3xl shadow-lg flex flex-col ${className || ""}`}
  >
    {children}
  </div>
);

// ==================== Card 1 ====================
export const Card1: React.FC<{ className?: string }> = ({ className }) => {
  const listHeight = 60; // height of one item (adjust according to your item height)

  const scrollVariants = {
    hover: {
      y: [-0, -listHeight * 3], // move all items up by 3 item heights
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <ServiceCard>
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 flex-grow flex flex-col cursor-pointer overflow-hidden">
        {/* Motion wrapper for list */}
        <motion.div
          initial={{ y: 0 }}
          whileHover="hover"
          variants={scrollVariants as any}
        >
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg border border-border/50">
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-card-foreground font-medium">
                  Cost Management
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg border border-border/50">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-card-foreground font-medium">
                  Payment reminder
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>

            <div className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg border border-border/50">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-card-foreground font-medium">
                  Employee Tracking
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg border border-border/50">
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-card-foreground font-medium">
                  Social media post
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer text */}
      <div className="pt-8">
        <h3 className="text-xl font-semibold text-card-foreground">
          Automate repetitive tasks
        </h3>
        <p className="text-secondary-foreground mt-2 text-base leading-relaxed">
          We help you streamline internal operations by automating manual
          workflows
        </p>
      </div>
    </ServiceCard>
  );
};
// ==================== Card 2 ====================
export const Card2: React.FC<{ className?: string }> = ({ className }) => {
  const floatingVariants = {
    animate: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Improved positions to avoid overlap
  const icons = [
    { icon: LayoutDashboard, top: "15%", left: "20%" },
    { icon: Mail, top: "25%", right: "20%" },
    { icon: FolderOpen, bottom: "25%", left: "20%" },
    { icon: User, bottom: "15%", right: "20%" },
    { icon: Wallet, top: "10%", right: "10%" },
    { icon: Bell, bottom: "10%", left: "30%" },
    { icon: Users, top: "35%", left: "30%" },
    { icon: Twitter, bottom: "35%", right: "30%" },
  ];

  return (
    <ServiceCard>
      <div className="relative w-full h-[230px] flex items-center justify-center -mt-4">
        <div className="absolute w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
        <Sparkles className="absolute w-16 h-16 text-primary animate-pulse" />

        {icons.map(({ icon: Icon, ...pos }, i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 bg-card rounded-lg border border-border flex items-center justify-center"
            style={pos}
            variants={floatingVariants as any}
            animate="animate"
          >
            <Icon className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        ))}
      </div>

      <div className="pt-8 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-card-foreground">
          Automated Workflows
        </h3>
        <p className="text-secondary-foreground mt-2 text-base leading-relaxed">
          Boost efficiency across teams with smart automation. Build intelligent
          workflows that automate multi-step processes across tools and
          platforms.
        </p>
      </div>
    </ServiceCard>
  );
};
