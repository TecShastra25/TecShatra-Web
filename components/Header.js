import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";
import useAuthStore from "../store/authStore";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, clearUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    clearUser();
  };

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Courses", href: "/courses" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/10 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between">
        {/* Logo & Slogan */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="relative w-16 h-16 flex-shrink-0"
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 1,
            }}
          >
            <Image
              src="/images/TecShastra_Logo-removebg-preview.png"
              alt="TecShastra Logo"
              width={60}
              height={60}
              style={{ width: "auto", height: "auto" }}
              className="filter invert brightness-700 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              priority
            />
          </motion.div>
          <motion.div
            className=" text-white text-lg md:text-xl font-semibold glow"
            initial={{ opacity: 0, x: 0 }}
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-center transition-colors duration-300 hover:text-purple-500 to-pink-500"
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <div className="flex items-center space-x-6">
              <Link href="/cart">
                <FiShoppingCart
                  size={24}
                  className="text-white hover:text-primary"
                />
              </Link>
              <div className="relative group">
                <FiUser size={24} className="text-white cursor-pointer" />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <motion.button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </motion.button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button - iPad Mini and below */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden text-white p-2 focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden backdrop-blur-lg bg-white/10 border border-white/10 mx-4 rounded-xl p-6 flex flex-col items-center space-y-4 shadow-lg"
            aria-hidden={!isOpen}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center transition-colors duration-300 hover:text-purple-500 to-pink-500"
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  href="/profile"
                  className="text-white hover:text-primary text-center"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-white hover:text-primary text-center"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/login">
                <button className="w-full px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90">
                  Get Started
                </button>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
