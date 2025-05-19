import React from "react";
import { motion } from "framer-motion";
import { LuLightbulb, LuRocket, LuHeadphones } from "react-icons/lu"; // Using Lucide icons

export default function Features() {
  const features = [
    {
      title: "Innovation First",
      description: "Cutting-edge solutions using the latest technologies.",
      icon: LuLightbulb,
      animation: {
        opacity: [0.5, 1, 0.5], // Smooth on/off effect
        filter: ["brightness(1)", "brightness(2)", "brightness(0.5)"], // Soft glow
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
      },
      gradient: "from-yellow-400 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality.",
      icon: LuRocket,
      animation: {
        y: [0, -10, 0], // Moves up like a launch, then resets
        opacity: [1, 0.5, 1], // Fades slightly at peak
        transition: { duration: 1, repeat: Infinity, ease: "easeOut" },
      },
      gradient: "from-purple-600 to-pink-200",
      image:
        "https://imgs.search.brave.com/0hTOqaWEYZhaK5LaQDY3MhB3tjtU0PEB-uW8ht3XHr0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzU3Lzc2LzM3/LzM2MF9GXzEwNTc3/NjM3MTFfZjF6WVlr/am5UTU84UHNwcXdl/WndCQ1NTNnRqOGp4/bHcuanBn",
    },
    {
      title: "Reliable Support",
      description: "24/7 expert support for your business needs.",
      icon: LuHeadphones,
      animation: {
        scale: [1, 1.1, 1], // Expands & shrinks like sound waves
        filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"], // Glows slightly
        transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
      },
      gradient: "from-blue-600 to-cyan-700",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section 
      id="features" 
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="text-center p-6 rounded-lg backdrop-blur-md">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden brightness-110">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="flex justify-center mb-4">
                <motion.div
                  animate={feature.animation}
                  className="relative w-14 h-14 flex items-center justify-center"
                >
                  <feature.icon 
                     className="w-10 h-10 stroke-primary dark:stroke-secondary"
                     strokeWidth="1.2" 
                  />
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
