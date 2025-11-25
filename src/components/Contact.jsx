import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide 
      drop-shadow-[0_0_20px_rgba(0,200,255,0.4)]">
        Get In Touch
      </h2>

      <div className="max-w-xl mx-auto">
        <div
          className="p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 
          shadow-[0_0_40px_rgba(0,150,255,0.25)] hover:shadow-[0_0_60px_rgba(0,200,255,0.4)] 
          transition-all duration-300"
        >
          <div className="flex flex-col gap-8 text-lg">
            
            {/* EMAIL */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-400/30 
              group-hover:bg-blue-500/40 transition">
                <Mail size={28} className="text-blue-400" />
              </div>
              <p className="text-gray-300 group-hover:text-blue-400 transition">
                mailme.anandukrishna@gmail.com
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-400/30
              group-hover:bg-green-500/40 transition">
                <Phone size={28} className="text-green-400" />
              </div>
              <p className="text-gray-300 group-hover:text-green-400 transition">
                +91 8138091435
              </p>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-pink-500/20 border border-pink-400/30
              group-hover:bg-pink-500/40 transition">
                <MapPin size={28} className="text-pink-400" />
              </div>
              <p className="text-gray-300 group-hover:text-pink-400 transition">
                Thiruvananthapuram, Kerala, India
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
