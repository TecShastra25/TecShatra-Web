"use client";

import { motion } from "framer-motion";
import FloatingShape from "./kokonutui/FloatingShape";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6 text-center">
        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            color="bg-indigo-500/20"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <FloatingShape
            delay={0.4}
            width={520}
            height={130}
            rotate={-10}
            color="bg-purple-500/20"
            className="right-[10%] top-[20%]"
          />
          <FloatingShape
            delay={0.5}
            width={480}
            height={110}
            rotate={12}
            color="bg-indigo-500/20"
            className="left-[15%] bottom-[30%]"
          />
          <FloatingShape
            delay={0.6}
            width={350}
            height={100}
            rotate={18}
            color="bg-cyan-500/20"
            className="right-[5%] bottom-[10%]"
          />
        </div>

        {/* Blurred Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingShape
            delay={0.3}
            width={200}
            height={120}
            rotate={15}
            color="bg-red-500/20"
            className="left-[5%] top-[10%]"
            blur
          />
          <FloatingShape
            delay={0.7}
            width={270}
            height={105}
            rotate={-25}
            color="bg-green-500/20"
            className="right-[25%] bottom-[35%]"
            blur
          />
          <FloatingShape
            delay={0.9}
            width={310}
            height={125}
            rotate={8}
            color="bg-orange-500/20"
            className="left-[50%] top-[15%]"
            blur
          />
        </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl font-bold text-gray-200 leading drop-shadow-[0_0_25px_rgba(0,255,255,0.3)] leading-tight"
        >
          Building Digital <br />
          <span
            className={cn(
              "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(255,0,255,0.3)]",
              pacifico.className
            )}
          >
            Journey Today
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-gray-300 mt-10 max-w-3xl mx-auto leading-relaxed"
        >
          We transform bold ideas into powerful digital solutions. Whether you're a startup, a growing business, or an enterprise, our expertise
          in web development, UI/UX design, and business automation ensures your
          success.
        </motion.p>
      </div>
    </section>
  );
}
