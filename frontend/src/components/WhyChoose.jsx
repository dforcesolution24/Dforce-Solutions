import {
  Zap,
  Target,
  Shield,
  Headphones,
} from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Experienced Team",
      description:
        "4-5 years of experience in delivering quality digital solutions.",
    },
    {
      icon: Target,
      title: "Client Focused",
      description:
        "We focus on understanding your needs and delivering beyond expectations.",
    },
    {
      icon: Shield,
      title: "Quality & Reliability",
      description:
        "Clean code, secure infrastructure and performance you can rely on.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "We are always available to support you whenever you need us.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0B1120] text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-1/2 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-400 mb-6">
            ❓ Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Why Choose
            <span className="block text-cyan-400">DForce Solutions?</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-xl p-8 hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-cyan-500/20 p-4 text-cyan-400">
                    <Icon size={32} />
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3 text-white">
                  {reason.title}
                </h3>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
