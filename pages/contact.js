import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import FloatingShape from '@/components/kokonutui/FloatingShape';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaHeadset, FaQuestionCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', type: 'info' });

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then((result) => {
      setStatus({ message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone Support",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543"
      ],
      availability: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: [
        "support@tecshastra.com",
        "info@tecshastra.com"
      ],
      availability: "24/7 Response"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Office Location",
      details: [
        "39 Rue Boieldieu",
        "94400 Vitry-Sur-Seine, France"
      ],
      availability: "Mon-Fri: 9:00 AM - 5:00 PM"
    }
  ];

  const helpResources = [
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Technical Support",
      description: "Get immediate assistance for technical issues",
      contact: "tech.support@tecshastra.com",
      priority: "High"
    },
    {
      icon: <FaQuestionCircle className="w-6 h-6" />,
      title: "General Inquiries",
      description: "Questions about our services and solutions",
      contact: "info@tecshastra.com",
      priority: "Normal"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp Support",
      description: "Quick responses through WhatsApp",
      contact: "+1 (555) 123-4567",
      priority: "Medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Contact Us - TecShastra</title>
        <meta name="description" content="Get in touch with TecShastra for innovative technology solutions" />
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
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have.
              We look forward to hearing from you!
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
              >
                <div className="text-blue-400 mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-300 mb-2">{detail}</p>
                ))}
                <p className="text-sm text-blue-400 mt-4">{info.availability}</p>
              </motion.div>
            ))}
          </div>

          {/* Help & Support Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Help & Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {helpResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
                >
                  <div className="text-blue-400 mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <p className="text-blue-400">{resource.contact}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm mt-4 ${
                    resource.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                    resource.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {resource.priority} Priority
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                    <Input
                        type="text"
                        name="user_phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-700/50 border-gray-600 text-white"
                        required
                    />
                </div>
                <div>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white min-h-[150px]"
                    required
                  />
                </div>

                {status.message && (
                  <div className={`text-center p-2 rounded ${
                    status.type === 'success' ? 'bg-green-500/20 text-green-300' :
                    status.type === 'error' ? 'bg-red-500/20 text-red-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What are your business hours?</h3>
                  <p className="text-gray-300">Our main office is open Monday through Friday, 9:00 AM to 6:00 PM (local time). However, our technical support team is available 24/7.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">How quickly can I expect a response?</h3>
                  <p className="text-gray-300">We aim to respond to all inquiries within 24 hours. For urgent matters, please use our technical support hotline.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do you offer emergency support?</h3>
                  <p className="text-gray-300">Yes, we provide 24/7 emergency technical support for our clients through our dedicated support hotline.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ContactPage;