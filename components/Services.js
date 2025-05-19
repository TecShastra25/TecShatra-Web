import { motion } from "framer-motion";
import { FaCode, FaPalette, FaChartLine, FaBolt, FaTruck } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built using modern technologies and best practices.",
      icon: FaCode,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      slug: "web-development",
    },
    {
      title: "UI/UX Design",
      description: "User-centric design solutions that create engaging digital experiences.",
      icon: FaPalette,
      image: "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug : "ui-ux-design",
    },
    {
      title: "SEO & Digital Marketing",
      description: "Data-driven strategies to increase your online presence and reach.",
      icon: FaChartLine,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      slug : "seo-digital-marketing",
    },
    {
      title: "Business Automation",
      description: "Streamlined solutions with the latest automation technologies.",
      icon: FaBolt,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      slug : "business-automation",
    },
    {
      title: "Logistics Services",
      description: "Efficient supply chain management and logistics optimization.",
      icon: FaTruck,
      image: "https://images.unsplash.com/photo-1671000855216-f775b10f832e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      slug : "logistics-services",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12 dark:text-white glow"
      >
        Services Offered
      </motion.h2>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="relative group"
          >
            <Link href={`/services/${service.slug}`}>
              {/* Transparent Card */}
              <div className="p-6 rounded-lg bg-transparent backdrop-blur-lg">
                {/* Image */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Icon + Title */}
                <div className="flex items-center mb-4">
                  <service.icon className="text-4xl text-primary glow-icon mr-3" />
                  <h3 className="text-xl font-semibold dark:text-white">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>

                {/* Learn More Button */}
                <div className="mt-4 flex items-center text-primary hover:text-secondary transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
