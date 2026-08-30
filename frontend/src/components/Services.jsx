import { Globe, Layout, Palette, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "High-performance websites built with latest tools, modern technologies, and fully responsive design.",
    },
    {
      icon: Layout,
      title: "Landing Page Design",
      description: "High-converting landing pages that captivate attention and drive measurable results.",
    },
    {
      icon: Palette,
      title: "Logo Designing",
      description: "Creative and memorable logos that represent your brand identity perfectly.",
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Beautiful, intuitive, and user-friendly interfaces that provide excellent user experience.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-[#0B1120] text-white overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-400 mb-6">
            🎯 Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
            What We Do
            <span className="block text-cyan-400">Best</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl p-8 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              >
                <div className="mb-6 inline-block rounded-full bg-cyan-500/20 p-4 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
                  <Icon size={32} />
                </div>

                <h3 className="text-lg font-bold mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
