import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React.js",
    "Redux Toolkit",
    "Redux Saga",
    "Tailwind CSS",
    "JavaScript ES6+",
    "TypeScript",
    "Electron.js",
    "WebSockets",
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[140px] rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[140px] rounded-full"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ repeat: Infinity, duration: 9 }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 
        bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
      >
        Skills
      </motion.h2>

      {/* Skill Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.12, duration: 0.5 },
          },
        }}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(80,150,255,0.4)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-xl text-center text-lg font-medium
            bg-white/5 backdrop-blur-xl border border-white/10
            shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_35px_rgba(80,120,255,0.3)]
            transition"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
