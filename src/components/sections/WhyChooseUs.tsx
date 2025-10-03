"use client";
import { motion, Variants } from "framer-motion";

const WhyChooseUs = () => {
  const needleVariants = {
    initial: {
      rotate: -45,
      transition: { duration: 1, ease: "easeInOut" }, // 1s smooth swing
    },
    hover: {
      rotate: 45,
      transition: { duration: 1, ease: "easeInOut" }, // 1s smooth swing
    },
  };

  const cardVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 10px 25px rgba(0,0,0,0.4)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const circleVariants: Variants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: { duration: 2, ease: "linear", repeat: Infinity },
    },
  };

  const graphData = [40, 70, 90, 60, 100];

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-16 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/whychooseus.jpg')",
      }}
    >
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        {/* 1️⃣ Clock Card */}

        <motion.div
          className="bg-gray-900/80 p-6 rounded-3xl shadow-2xl flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.div initial="initial" whileHover="hover" className="w-64">
            {/* Top-half speedometer with needle at bottom */}
            <div className="relative w-64 h-32 overflow-hidden">
              {/* Full circle */}
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full border-4 border-gray-700 bg-gray-900 shadow-lg" />

              {/* Needle (smaller height) pivoting from bottom */}
              <motion.div
                className="absolute bottom-0 left-1/2 origin-bottom w-1 h-28 bg-gray-700 rounded-full"
                style={{ transformOrigin: "bottom center" }}
                variants={needleVariants as any}
              />

            
            </div>

            {/* Text below */}
            <div className="mt-6 text-center max-w-xs">
              <h3 className="font-semibold text-lg">Real-Time Intelligence</h3>
              <p className="text-gray-300 text-sm">
                Access accurate, real-time data to drive smarter decisions
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 2️⃣ Graph Card */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-900 rounded-3xl shadow-lg cursor-pointer"
          initial="initial"
          whileHover="hover"
          variants={{
            initial: {
              scale: 1,
              y: 0,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            },
            hover: {
              scale: 1.05,
              y: -5,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.4)",
            },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div className="w-full h-48 flex items-end justify-between gap-2">
            {graphData.map((h, i) => {
              const barVariants = {
                initial: { height: `${h}%` },
                hover: {
                  height: [`${h}%`, `${h + 20}%`, `${h - 10}%`, `${h}%`],
                  transition: {
                    duration: 1,
                    repeat: Infinity, // 🔥 loops only during hover
                    repeatType: "mirror" as const,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  },
                },
              };

              return (
                <motion.div
                  key={i}
                  className="flex-1 bg-gray-700 rounded-md"
                  variants={barVariants as any}
                />
              );
            })}
          </motion.div>
          <div className="mt-6 text-center max-w-xs">
            <h3 className="font-semibold text-lg">Measurable Impact</h3>
            <p className="text-gray-300 text-sm">
              Track performance, uncover insights, and achieve data-backed
              growth
            </p>
          </div>
        </motion.div>
     <motion.div
  className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-900 rounded-3xl shadow-lg cursor-pointer"
  variants={cardVariants as any}
  initial="initial"
  whileHover="hover"
>
  {/* Circle with thicker border */}
  <motion.div
    className="relative w-40 h-40 rounded-full border-4 border-gray-700 flex items-center justify-center"
    variants={circleVariants}
  >
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-16 bg-gray-700 rounded"
        style={{
          top: "50%",
          left: "50%",
          transform: `rotate(${i * 60}deg) translateY(-12px)`,
          transformOrigin: "center center",
        }}
      />
    ))}
  </motion.div>

  <div className="mt-6 text-center max-w-xs">
    <h3 className="font-semibold text-lg">Seamless Integration</h3>
    <p className="text-gray-300 text-sm">
      Connect tools, teams, and workflows with intelligent automation
    </p>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
