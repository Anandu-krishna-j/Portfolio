import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Live Video Streaming Dashboard",
      desc: "WebSocket integration, H.264/H.265 streaming, custom fullscreen UI."
    },
    {
      title: "Emotion-based Music Player",
      desc: "React UI with Python backend for real-time emotion detection."
    },
    {
      title: "ERP Store Management UI",
      desc: "Inventory dashboard with reusable components and clean layout."
    },
    {
      title: "Electron Desktop App",
      desc: "Custom window controls & seamless IPC communication."
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute -top-10 left-10 w-80 h-80 bg-blue-500/20 blur-[140px] rounded-full"
        animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 9 }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"
        animate={{ opacity: [0.6, 0.8, 0.6], scale: [1.1, 1, 1.1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-14 
        bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.5 }
          }
        }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 40px rgba(90,120,255,0.25)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
              hover:shadow-[0_0_35px_rgba(80,120,255,0.3)]
              transition"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">{p.title}</h3>
            <p className="text-gray-300 leading-7">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
