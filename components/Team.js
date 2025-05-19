import { motion } from "framer-motion";
import {FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6'; // Import the new Twitter icon

const teamMembers = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "/team/alex.jpg",
    bio: "Visionary leader with 15+ years of experience in tech innovation.",
    social: {
      linkedin: "https://linkedin.com/in/alexthompson",
      twitter: "https://twitter.com/alexthompson"
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CTO",
    image: "/team/priya.jpg",
    bio: "Tech expert specializing in AI and machine learning solutions.",
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      twitter: "https://twitter.com/priyasharma"
    }
  },
  {
    id: 3,
    name: "David Chen",
    role: "Lead Developer",
    image: "/team/david.jpg",
    bio: "Full-stack developer with a passion for creating scalable solutions.",
    social: {
      linkedin: "https://linkedin.com/in/davidchen",
      twitter: "https://twitter.com/davidchen"
    }
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "UX/UI Designer",
    image: "/team/maria.jpg",
    bio: "Creative designer focused on delivering exceptional user experiences.",
    social: {
      linkedin: "https://linkedin.com/in/mariagarcia",
      twitter: "https://twitter.com/mariagarcia"
    }
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white glow">
            Meet Our Team
          </h2>
          <p className="text-lg tetext-gray-600 dark:text-gray-300 mx-auto">
            Our talented team of experts is dedicated to delivering exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-transparent backdrop-blur-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-105">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Follow ${member.name} on Twitter`}
                      >
                        <FaXTwitter size={20} />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <FiLinkedin size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}