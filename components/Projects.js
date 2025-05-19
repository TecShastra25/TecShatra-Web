import { motion } from "framer-motion";
import {
    FaShoppingCart,
    FaChartBar,
    FaMobile,
    FaTruckLoading,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Modern e-commerce solutions with advanced features.",
            icon: FaShoppingCart,
            image:
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            liveLink: "https://ecommerce-platform-demo.com", // Add your live demo link here
            repoLink: "https://github.com/TecShastra25/MERN-E-Commerce-Store-main.git", // Add your GitHub repo link here
        },
        {
            title: "Analytics Dashboard",
            description: "Visual data insights and analytics platform.",
            icon: FaChartBar,
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            liveLink: "https://analytics-dashboard-live.net", // Add your live demo link here
            repoLink: "https://github.com/TecShastra25/Online-Learning-Platform-main.git", // Add your GitHub repo link here
        },
        {
            title: "Mobile App Design",
            description: "User-centered mobile application design.",
            icon: FaMobile,
            image:
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            liveLink: "https://mobile-app-showcase.app", // Add your live demo link here
            repoLink: "https://github.com/TecShastra25/MERN-Movies-App-main.git", // Add your GitHub repo link here
        },
        {
            title: "Logistics System",
            description: "Automated logistics management system.",
            icon: FaTruckLoading,
            image:
                "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            liveLink: "https://logistics-system-online.info", // Add your live demo link here
            repoLink: "https://github.com/TecShastra25/Crypto-Tracker.git", // Add your GitHub repo link here
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="projects" className="py-20">
            <div className="p-6 rounded-lg bg-transparent backdrop-blur-lg">
                {/* Gradient Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12
                    bg-gradient-to-r from-blue-400 to-purple-600
                    text-transparent bg-clip-text
                    dark:text-white glow"
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            className="relative group"
                        >
                            {/* You can choose which link to use here, for example, the repoLink */}
                            <Link
                                href={project.repoLink} // Use the repoLink here
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* Transparent Card with Soft Blur */}
                                <div className="p-6 rounded-lg backdrop-blur-md  shadow-md hover:shadow-xl transition-all duration-300 bg-transparent">
                                    {/* Image Section */}
                                    <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <project.icon className="absolute bottom-4 right-4 text-3xl text-white" />
                                    </div>

                                    {/* Card Content */}
                                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>

                                    {/* View Project Button */}
                                    <div className="mt-4 flex justify-between gap-4">
                                        <Button
                                            onClick={() => window.open(project.repoLink, '_blank')}
                                            className="flex-1 h-10 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
                                        >
                                            View Code
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}