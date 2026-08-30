import { Code } from "lucide-react";

const Technologies = () => {
  const techs = [
    {
      icon: "⚙️",
      title: "MERN Stack",
      description: "MongoDB, Express.js, React.js, Node.js",
    },
    {
      icon: "📝",
      title: "WordPress",
      description: "Custom WordPress themes, plugins & solutions",
    },
    {
      icon: "🛒",
      title: "Shopify",
      description: "eCommerce solutions that sell and scale",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0B1120] text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-400 mb-6">
            <Code size={16} /> Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Technologies
            <span className="block text-cyan-400">We Use</span>
          </h2>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl p-12 text-center hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-2"
            >
              <div className="mb-6 text-4xl">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {tech.title}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
