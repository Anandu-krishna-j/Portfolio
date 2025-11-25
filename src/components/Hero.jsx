import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden bg-[#0a0a0a] text-white">

      {/* Soft Background Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"
        animate={{ scale: [1.1, 1.3, 1.1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Glass Reflection Divider */}
      <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight"
      >
        Designing the Future,  
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          One Interface at a Time.
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-2xl max-w-2xl text-gray-300 mt-4 leading-relaxed"
      >
        Hi, I'm <span className="text-white font-semibold">Anandu Krishna</span> — a
        Frontend Developer crafting seamless digital experiences with React,
        animations, and modern UI engineering.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex gap-5 mt-10"
      >
        {/* Resume Button */}
        <button className="px-8 py-3 text-lg font-medium rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition-all duration-300">
          Download Resume
        </button>

        {/* Highlight Button */}
        <button className="px-8 py-3 text-lg font-medium rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:opacity-90 transition-all duration-300">
          Explore Work
        </button>
      </motion.div>
    </section>
  );
}
