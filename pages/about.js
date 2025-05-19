import React from "react";
import { useRouter } from 'next/navigation'; 
import Head from "next/head";
import Contact from "@/components/Contact";
import { Button } from '@/components/ui/button';  
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaAward,
  FaHandshake,
  FaChartLine,
  FaGlobe,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaAngular,
  FaVuejs,
  FaSass,
  FaGitAlt,
  FaChartBar,
  FaUsersCog,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiRedis,
  SiElasticsearch,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiExpress,
} from "react-icons/si";
import FloatingShape from "../components/kokonutui/FloatingShape";
import Image from "next/image";

const About = () => {
  const router = useRouter();
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/images/team/john-doe.jpg",
      description:
        "Visionary leader with 15+ years of experience in tech innovation",
      social: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        github: "https://github.com/johndoe",
      },
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/images/team/jane-smith.jpg",
      description: "Tech expert specializing in AI and machine learning",
      social: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        github: "https://github.com/janesmith",
      },
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      image: "/images/team/mike-johnson.jpg",
      description:
        "Full-stack developer with expertise in modern web technologies",
      social: {
        linkedin: "https://linkedin.com/in/mikejohnson",
        twitter: "https://twitter.com/mikejohnson",
        github: "https://github.com/mikejohnson",
      },
    },
    {
      name: "Sarah Williams",
      role: "Design Director",
      image: "/images/team/sarah-williams.jpg",
      description:
        "Creative designer focused on user experience and interface design",
      social: {
        linkedin: "https://linkedin.com/in/sarahwilliams",
        twitter: "https://twitter.com/sarahwilliams",
        github: "https://github.com/sarahwilliams",
      },
    },
  ];

  const achievements = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Awarded Best Tech Company 2023",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Client Success",
      description: "500+ satisfied clients worldwide",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Growth",
      description: "300% growth in the last 3 years",
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Presence in 20+ countries",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "TechCorp Inc.",
      image: "/images/testimonials/alex.jpg",
      quote:
        "TecShastra transformed our digital presence with their innovative solutions. Their team's expertise and dedication are unmatched.",
    },
    {
      name: "Maria Garcia",
      company: "Innovate Solutions",
      image: "/images/testimonials/maria.jpg",
      quote:
        "Working with TecShastra has been a game-changer for our business. Their technical expertise and creative approach delivered exceptional results.",
    },
    {
      name: "David Chen",
      company: "Global Tech",
      image: "/images/testimonials/david.jpg",
      quote:
        "The team at TecShastra consistently delivers high-quality solutions that exceed our expectations. Their attention to detail is impressive.",
    },
  ];

  const techStack = [
    {
      icon: <FaReact className="w-10 h-10" />,
      name: "React",
      category: "Frontend",
      colors: {
        icon: "#61DAFB",
        bg: "rgba(97, 218, 251, 0.1)",
        hover: "rgba(97, 218, 251, 0.2)",
        text: "#61DAFB",
      },
    },
    {
      icon: <SiNextdotjs className="w-10 h-10" />,
      name: "Next.js",
      category: "Frontend",
      colors: {
        icon: "#000000",
        bg: "rgba(0, 0, 0, 0.1)",
        hover: "rgba(0, 0, 0, 0.2)",
        text: "#000000",
      },
    },
    {
      icon: <SiTypescript className="w-10 h-10" />,
      name: "TypeScript",
      category: "Frontend",
      colors: {
        icon: "#3178C6",
        bg: "rgba(49, 120, 198, 0.1)",
        hover: "rgba(49, 120, 198, 0.2)",
        text: "#3178C6",
      },
    },
    {
      icon: <FaAngular className="w-10 h-10" />,
      name: "Angular",
      category: "Frontend",
      colors: {
        icon: "#DD0031",
        bg: "rgba(221, 0, 49, 0.1)",
        hover: "rgba(221, 0, 49, 0.2)",
        text: "#DD0031",
      },
    },
    {
      icon: <FaVuejs className="w-10 h-10" />,
      name: "Vue.js",
      category: "Frontend",
      colors: {
        icon: "#4FC08D",
        bg: "rgba(79, 192, 141, 0.1)",
        hover: "rgba(79, 192, 141, 0.2)",
        text: "#4FC08D",
      },
    },
    {
      icon: <SiRedux className="w-10 h-10" />,
      name: "Redux",
      category: "State Management",
      colors: {
        icon: "#764ABC",
        bg: "rgba(118, 74, 188, 0.1)",
        hover: "rgba(118, 74, 188, 0.2)",
        text: "#764ABC",
      },
    },
    {
      icon: <FaNodeJs className="w-10 h-10" />,
      name: "Node.js",
      category: "Backend",
      colors: {
        icon: "#339933",
        bg: "rgba(51, 153, 51, 0.1)",
        hover: "rgba(51, 153, 51, 0.2)",
        text: "#339933",
      },
    },
    {
      icon: <SiExpress className="w-10 h-10" />,
      name: "Express",
      category: "Backend",
      colors: {
        icon: "#000000",
        bg: "rgba(0, 0, 0, 0.1)",
        hover: "rgba(0, 0, 0, 0.2)",
        text: "#000000",
      },
    },
    {
      icon: <FaPython className="w-10 h-10" />,
      name: "Python",
      category: "Backend",
      colors: {
        icon: "#3776AB",
        bg: "rgba(55, 118, 171, 0.1)",
        hover: "rgba(55, 118, 171, 0.2)",
        text: "#3776AB",
      },
    },
    {
      icon: <SiDjango className="w-10 h-10" />,
      name: "Django",
      category: "Backend",
      colors: {
        icon: "#092E20",
        bg: "rgba(9, 46, 32, 0.1)",
        hover: "rgba(9, 46, 32, 0.2)",
        text: "#092E20",
      },
    },
    {
      icon: <SiFlask className="w-10 h-10" />,
      name: "Flask",
      category: "Backend",
      colors: {
        icon: "#000000",
        bg: "rgba(0, 0, 0, 0.1)",
        hover: "rgba(0, 0, 0, 0.2)",
        text: "#000000",
      },
    },
    {
      icon: <FaJava className="w-10 h-10" />,
      name: "Java",
      category: "Backend",
      colors: {
        icon: "#007396",
        bg: "rgba(0, 115, 150, 0.1)",
        hover: "rgba(0, 115, 150, 0.2)",
        text: "#007396",
      },
    },
    {
      icon: <SiSpringboot className="w-10 h-10" />,
      name: "Spring Boot",
      category: "Backend",
      colors: {
        icon: "#6DB33F",
        bg: "rgba(109, 179, 63, 0.1)",
        hover: "rgba(109, 179, 63, 0.2)",
        text: "#6DB33F",
      },
    },
    {
      icon: <FaAws className="w-10 h-10" />,
      name: "AWS",
      category: "Cloud",
      colors: {
        icon: "#FF9900",
        bg: "rgba(255, 153, 0, 0.1)",
        hover: "rgba(255, 153, 0, 0.2)",
        text: "#FF9900",
      },
    },
    {
      icon: <FaDocker className="w-10 h-10" />,
      name: "Docker",
      category: "DevOps",
      colors: {
        icon: "#2496ED",
        bg: "rgba(36, 150, 237, 0.1)",
        hover: "rgba(36, 150, 237, 0.2)",
        text: "#2496ED",
      },
    },
    {
      icon: <SiMongodb className="w-10 h-10" />,
      name: "MongoDB",
      category: "Database",
      colors: {
        icon: "#47A248",
        bg: "rgba(71, 162, 72, 0.1)",
        hover: "rgba(71, 162, 72, 0.2)",
        text: "#47A248",
      },
    },
    {
      icon: <SiPostgresql className="w-10 h-10" />,
      name: "PostgreSQL",
      category: "Database",
      colors: {
        icon: "#336791",
        bg: "rgba(51, 103, 145, 0.1)",
        hover: "rgba(51, 103, 145, 0.2)",
        text: "#336791",
      },
    },
    {
      icon: <SiRedis className="w-10 h-10" />,
      name: "Redis",
      category: "Database",
      colors: {
        icon: "#DC382D",
        bg: "rgba(220, 56, 45, 0.1)",
        hover: "rgba(220, 56, 45, 0.2)",
        text: "#DC382D",
      },
    },
    {
      icon: <SiElasticsearch className="w-10 h-10" />,
      name: "Elasticsearch",
      category: "Search",
      colors: {
        icon: "#005571",
        bg: "rgba(0, 85, 113, 0.1)",
        hover: "rgba(0, 85, 113, 0.2)",
        text: "#005571",
      },
    },
    {
      icon: <SiGraphql className="w-10 h-10" />,
      name: "GraphQL",
      category: "API",
      colors: {
        icon: "#E10098",
        bg: "rgba(225, 0, 152, 0.1)",
        hover: "rgba(225, 0, 152, 0.2)",
        text: "#E10098",
      },
    },
    {
      icon: <SiFirebase className="w-10 h-10" />,
      name: "Firebase",
      category: "Backend",
      colors: {
        icon: "#FFCA28",
        bg: "rgba(255, 202, 40, 0.1)",
        hover: "rgba(255, 202, 40, 0.2)",
        text: "#FFCA28",
      },
    },
    {
      icon: <SiTailwindcss className="w-10 h-10" />,
      name: "Tailwind CSS",
      category: "Frontend",
      colors: {
        icon: "#06B6D4",
        bg: "rgba(6, 182, 212, 0.1)",
        hover: "rgba(6, 182, 212, 0.2)",
        text: "#06B6D4",
      },
    },
    {
      icon: <FaSass className="w-10 h-10" />,
      name: "Sass",
      category: "Frontend",
      colors: {
        icon: "#CC6699",
        bg: "rgba(204, 102, 153, 0.1)",
        hover: "rgba(204, 102, 153, 0.2)",
        text: "#CC6699",
      },
    },
    {
      icon: <FaGitAlt className="w-10 h-10" />,
      name: "Git",
      category: "DevOps",
      colors: {
        icon: "#F05032",
        bg: "rgba(240, 80, 50, 0.1)",
        hover: "rgba(240, 80, 50, 0.2)",
        text: "#F05032",
      },
    },
  ];

  const workProcess = [
    {
      title: "Discovery",
      description:
        "We begin by understanding your business needs, goals, and challenges through in-depth consultations.",
      icon: "🔍",
    },
    {
      title: "Planning",
      description:
        "Our team creates a detailed roadmap and strategy tailored to your specific requirements.",
      icon: "📋",
    },
    {
      title: "Development",
      description:
        "We implement solutions using cutting-edge technologies and best practices.",
      icon: "💻",
    },
    {
      title: "Testing",
      description:
        "Rigorous quality assurance ensures your solution meets the highest standards.",
      icon: "✅",
    },
    {
      title: "Deployment",
      description:
        "Smooth deployment and launch of your solution with comprehensive support.",
      icon: "🚀",
    },
    {
      title: "Support",
      description:
        "Ongoing maintenance and support to ensure your solution continues to perform optimally.",
      icon: "🛠️",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <FaChartBar className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Team Members",
      icon: <FaUsersCog className="w-6 h-6" />,
    },
    {
      number: "20+",
      label: "Countries Served",
      icon: <FaGlobe className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <FaHandshake className="w-6 h-6" />,
    },
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "Innovative solutions for healthcare providers and patients",
      icon: "🏥",
    },
    {
      title: "Finance",
      description: "Secure and scalable financial technology solutions",
      icon: "💼",
    },
    {
      title: "Education",
      description: "Digital learning platforms and educational tools",
      icon: "📚",
    },
    {
      title: "E-commerce",
      description: "Custom e-commerce solutions for businesses",
      icon: "🛍️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>About Us - TecShastra</title>
        <meta
          name="description"
          content="Learn more about TecShastra and our mission"
        />
      </Head>

      {/* Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <FloatingShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <FloatingShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <FloatingShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <FloatingShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 relative"
              style={{
                textShadow:
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              About TecShastra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We are a team of passionate technologists dedicated to creating
              innovative solutions that drive business growth and digital
              transformation.
            </motion.p>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div
                    className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                    style={{
                      textShadow:
                        "0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    {stat.number}
                  </div>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
            >
              <h2
                className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                style={{
                  textShadow:
                    "0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)",
                }}
              >
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At TecShastra, we're dedicated to transforming ideas into
                innovative digital solutions. We believe in the power of
                technology to create meaningful change and drive business
                growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8"
            >
              <h2
                className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                style={{
                  textShadow:
                    "0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)",
                }}
              >
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We envision a world where technology empowers businesses to
                reach their full potential, creating sustainable solutions that
                make a positive impact on society.
              </p>
            </motion.div>
          </div>

          {/* Industries We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-20"
          >
            <h2
              className="text-3xl font-bold text-center mb-12
                    bg-gradient-to-r from-blue-400 to-purple-600
                    text-transparent bg-clip-text
                    dark:text-white glow"
              style={{
                textShadow:
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-20"
          >
            <h2
              className="text-3xl font-bold text-center mb-12
                    bg-gradient-to-r from-blue-400 to-purple-600
                    text-transparent bg-clip-text
                    dark:text-white glow"
              style={{
                textShadow:
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 mb-2">{member.role}</p>
                      <p className="text-gray-300 mb-4">{member.description}</p>
                      <div className="flex space-x-4">
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <FaTwitter className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-20 -mx-4 sm:-mx-6 lg:-mx-8"
          >
            <h2
              className="text-3xl font-bold text-center mb-12
                    bg-gradient-to-r from-blue-400 to-purple-600
                    text-transparent bg-clip-text
                    dark:text-white glow"
              style={{
                textShadow:
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              Our Technology Stack
            </h2>
            <div className="relative w-full overflow-hidden">
              <div className="flex overflow-x-hidden py-8">
                <motion.div
                  className="flex space-x-6"
                  animate={{
                    x: [0, -2000],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    },
                  }}
                >
                  {[
                    ...techStack,
                    ...techStack,
                    ...techStack,
                    ...techStack,
                    ...techStack,
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-40"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div
                        className="relative bg-transparent backdrop-blur-lg rounded-xl p-4 text-center transform transition-all duration-300 group cursor-pointer"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                          <div
                            className="absolute inset-0 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                            style={{
                              backgroundColor: tech.colors.hover,
                            }}
                          />
                        </div>

                        <div className="relative z-10">
                          <motion.div
                            className="mb-3 flex justify-center transition-colors duration-300"
                            style={{
                              color: "rgba(255, 255, 255, 0.7)",
                              filter: "grayscale(100%)",
                            }}
                            whileHover={{
                              filter: "grayscale(0%)",
                              color: tech.colors.icon,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {tech.icon}
                          </motion.div>
                          <h3 className="font-semibold mb-1 text-base transition-colors duration-300 text-gray-300 group-hover:text-white">
                            {tech.name}
                          </h3>
                          <div className="inline-block px-2 py-0.5 rounded-full text-xs transition-colors duration-300 bg-gray-800/50 text-gray-400 group-hover:bg-blue-500/30 group-hover:text-blue-200">
                            {tech.category}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-20"
          >
            <h2
              className="text-3xl font-bold text-center mb-12
                    bg-gradient-to-r from-blue-400 to-purple-600
                    text-transparent bg-clip-text
                    dark:text-white glow"
              style={{
                textShadow:
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mb-20"
          >
            <h2
              className="text-3xl font-bold text-center mb-12
                    bg-gradient-to-r from-blue-400 to-purple-600
                    text-transparent bg-clip-text
                    dark:text-white glow"
              style={{
                textShadow:
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-center"
          >
            <h2
              className="text-3xl font-bold text-center mb-12
                    bg-gradient-to-r from-blue-400 to-purple-600
                    text-transparent bg-clip-text
                    dark:text-white glow"
              style={{
                textShadow:
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
              }}
            >
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in creating innovative solutions that drive business
              growth and digital transformation.
            </p>
            <Button
              onClick={() => {
                // Use router.push to navigate to the contact page
                router.push("/contact");
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity w-full md:w-auto h-14 px-6 text-lg"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
