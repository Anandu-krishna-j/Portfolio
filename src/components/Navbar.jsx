import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
        >
          Anandu Krishna
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              className="cursor-pointer text-gray-300 hover:text-white relative"
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {item}

              {/* Underline animation */}
              <motion.div
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="md:hidden text-white text-3xl cursor-pointer"
        >
          ☰
        </motion.div>
      </div>
    </nav>
  );
}
