import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaChartLine, FaBolt, FaTruck } from 'react-icons/fa';
import Link from 'next/link';
import { auth } from "../../firebase/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    description: "Custom web applications built using modern technologies and best practices.",
    icon: FaCode,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    fullDescription: `Our web development services encompass everything you need for a powerful online presence:
    
    • Custom Website Development
    • E-commerce Solutions
    • Progressive Web Applications (PWAs)
    • Full-Stack Development
    • API Development & Integration
    • Database Design & Management
    • Website Maintenance & Support
    
    We use cutting-edge technologies like React, Next.js, Node.js, and more to create scalable and performant web solutions.`,
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Firebase"],
    process: [
      "Requirements Analysis",
      "UI/UX Design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance"
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "User-centric design solutions that create engaging digital experiences.",
    icon: FaPalette,
    image: "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullDescription: `We create intuitive and engaging user experiences through:
    
    • User Research & Analysis
    • Wireframing & Prototyping
    • Visual Design
    • Interaction Design
    • Usability Testing
    • Design Systems
    • Responsive Design
    
    Our design process focuses on creating interfaces that are both beautiful and functional.`,
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
    process: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "User Testing",
      "Implementation"
    ]
  },
  "seo-digital-marketing": {
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies to increase your online presence and reach.",
    icon: FaChartLine,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    fullDescription: `Boost your online visibility and reach your target audience through:
    
    • Search Engine Optimization (SEO)
    • Content Marketing
    • Social Media Marketing
    • Email Marketing
    • PPC Advertising
    • Analytics & Reporting
    • Conversion Rate Optimization
    
    We use data-driven approaches to maximize your ROI and achieve sustainable growth.`,
    strategies: ["On-page SEO", "Off-page SEO", "Technical SEO", "Content Strategy", "Social Media Management"],
    tools: ["Google Analytics", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot"]
  },
  "business-automation": {
    title: "Business Automation",
    description: "Streamlined solutions with the latest automation technologies.",
    icon: FaBolt,
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    fullDescription: `Transform your business operations with our automation solutions:
    
    • Workflow Automation
    • Business Process Optimization
    • Custom Software Integration
    • RPA (Robotic Process Automation)
    • Cloud Integration
    • Data Analytics & Reporting
    • AI/ML Implementation
    
    We help businesses reduce manual effort and increase efficiency through intelligent automation.`,
    technologies: ["Zapier", "Power Automate", "Python", "TensorFlow", "Docker"],
    benefits: [
      "Increased Efficiency",
      "Reduced Costs",
      "Improved Accuracy",
      "Better Scalability",
      "Enhanced Customer Experience"
    ]
  },
  "logistics-services": {
    title: "Logistics Services",
    description: "Efficient supply chain management and logistics optimization.",
    icon: FaTruck,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    fullDescription: `Optimize your supply chain with our comprehensive logistics solutions:
    
    • Supply Chain Management
    • Warehouse Management
    • Transportation Management
    • Inventory Optimization
    • Route Planning
    • Real-time Tracking
    • Analytics & Reporting
    
    We leverage technology to create efficient and cost-effective logistics solutions.`,
    features: ["Real-time Tracking", "Route Optimization", "Inventory Management", "Warehouse Management"],
    technologies: ["GPS Tracking", "IoT Sensors", "Cloud-based Management Systems"]
  }
};

export default function ServiceDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const service = serviceDetails[slug];
  const [user] = useAuthState(auth);

  const handleGetStarted = () => {
    if (user) {
      router.push("/contact");
    } else {
      router.push("/login");
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Service Not Found</h1>
          <Link href="/#services" className="text-primary hover:text-secondary">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative h-96 rounded-xl overflow-hidden mb-12">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex items-center mb-4">
              <Icon className="text-5xl text-primary glow-icon mr-4" />
              <h1 className="text-4xl font-bold text-white">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-2xl">{service.description}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose dark:prose-invert max-w-none"
            >
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">Overview</h2>
              <div className="whitespace-pre-line text-gray-600 dark:text-gray-300">
                {service.fullDescription}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              {service.technologies && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {service.process && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Our Process</h3>
                  <div className="space-y-2">
                    {service.process.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8">
                <button
                  onClick={handleGetStarted}
                  className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {user ? "Get Started" : "Login to Get Started"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}