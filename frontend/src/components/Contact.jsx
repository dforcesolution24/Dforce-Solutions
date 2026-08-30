import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0B1120] text-white overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-400 mb-8">
              📞 Contact Us
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Let's Work
              <span className="block text-cyan-400">Together</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-400 mb-12">
              Have a project in mind? Send us a message and we'll get back to you as soon as possible.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-cyan-500/20 p-3 text-cyan-400 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:dforcesolution24@gmail.com"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    dforcesolution24@gmail.com
                  </a>
                </div>
              </div>



              <div className="flex items-start gap-4">
                <div className="rounded-full bg-cyan-500/20 p-3 text-cyan-400 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-slate-400">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-xl p-8 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXX-XXXXX"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="4"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-cyan-500 px-8 py-4 text-white font-semibold shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:shadow-[0_0_60px_rgba(34,211,238,0.4)]"
              >
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
