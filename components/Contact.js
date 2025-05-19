import React, { useRef, useState } from 'react';
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
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
      form.current.reset();
    }, (error) => {
      setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
    });
  };

  return (
    <section id="contact" className="py-20 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white glow">
          Reach Out to Us
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-transparent rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center dark:text-gray-300">
                    <span className="mr-2">📍</span>
                    39 Rue Boieldieu, 94400 Vitry-Sur-Seine, France
                  </p>
                  <p className="flex items-center dark:text-gray-300">
                    <span className="mr-2">📞</span>
                    (+33) 752-18-6161
                  </p>
                  <p className="flex items-center dark:text-gray-300">
                    <span className="mr-2">📧</span>
                    tecshastra25@gmail.com
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">
                    Follow Us
                  </h4>
                  <div className="flex items-center space-x-4">
                    <a
                      href="#"
                      className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white hover:scale-110 transition-transform shadow-md"
                      aria-label="Twitter"
                    >
                      <FaXTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-2 text-white hover:scale-110 transition-transform shadow-md"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gradient-to-r from-gray-700 to-gray-900 p-2 text-white hover:scale-110 transition-transform shadow-md"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gradient-to-r from-blue-700 to-blue-500 p-2 text-white hover:scale-110 transition-transform shadow-md"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-2 text-white hover:scale-110 transition-transform shadow-md"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full bg-gradient-to-r from-green-500 to-green-700 p-2 text-white hover:scale-110 transition-transform shadow-md"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <form ref={form} onSubmit={sendEmail} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Full Name"
                    className="mt-1 block w-full h-14 px-4 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white text-gray-900 placeholder-gray-500 dark:bg-dark-card dark:text-white dark:placeholder-gray-400 text-lg tracking-wide"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email Address"
                    className="mt-1 block w-full h-14 px-4 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white text-gray-900 placeholder-gray-500 dark:bg-dark-card dark:text-white dark:placeholder-gray-400 text-lg tracking-wide"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white text-gray-900 placeholder-gray-500 dark:bg-dark-card dark:text-white dark:placeholder-gray-400 text-lg tracking-wide"
                    required
                  ></textarea>
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

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity py-4 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
