import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Blurred Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
      >
        About Me
      </motion.h2>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(80,80,255,0.15)]"
      >
        <p className="text-lg md:text-xl text-gray-300 leading-8">
          I’m a passionate{" "}
          <span className="text-white font-semibold">React.js Developer</span>{" "}
          with 4 years of experience in building elegant and scalable user
          interfaces. I specialize in{" "}
          <span className="text-blue-300 font-medium">
            React, Redux Toolkit, Tailwind CSS, WebSockets
          </span>
          , and creating seamless frontend architectures.
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-8">
          I focus on writing clean, reusable code and crafting interfaces that
          feel fast, smooth, and modern. My projects emphasize performance,
          real-time communication, animations, and pixel-perfect design.
        </p>
      </motion.div>
    </section>
  );
}
