import Link from 'next/link'; 
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Import the new Twitter icon
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/TecShastra25', label: 'GitHub' },
    { icon: FaXTwitter, href: '#', label: 'Twitter' }, // Use FaXTwitter here
    { icon: FiLinkedin, href: 'https://www.linkedin.com/company/tecshastra/', label: 'LinkedIn' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-transparent backdrop-blur-lg py-12">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-7">
        
          {/* ✅ Logo with Text */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/TecShastra_Logo-removebg-preview.png"
              alt="TecShastra Logo"
              width={60}
              height={60}
              style={{ width: "auto", height: "auto"}}
              className="filter invert brightness-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              priority
            />
            <motion.div
              className="logo-container absolute left-[110px] text-white text-lg md:text-xl font-semibold glow"
              initial={{ opacity: 0, x: 0  }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="rocabold font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-base   md:text-4xl">
                TecShastra
              </h2>
              <p className="gladiola text-sm md:text-sm text-gray-200 font-light glowing-slogan">
                Crafting Tomorrow's tech,Today
              </p>
            </motion.div>
          </Link>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 39 Rue Boieldieu</li>
              <li>94400 Vitry-Sur-Seine, France</li>
              <li>📞 (+33) 752-18-6161</li>
              <li>📧 tecshastra25@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 TecShastra. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
