import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0B1120] text-white pt-20">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-2 items-center gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-400 mb-6 text-sm">
              <Sparkles size={16} />
              Modern Web Development Agency
            </div>

            <h1 className="text-6xl font-black leading-tight text-white mb-6">
              Building
              <span className="block text-cyan-400">Modern Websites</span>
              That Drive
              <span className="block">Real Results</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-400 mb-6">
              We design and develop high-performance websites that help businesses grow, attract customers, and establish a powerful digital presence.
            </p>

            <div className="mt-10 flex gap-4">
              <Button className="rounded-full bg-cyan-500 px-8 py-4 text-white text-base font-semibold shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                <div className="flex items-center gap-2">
                  Start Project
                  <ArrowRight size={18} />
                </div>
              </Button>

              <Button className="rounded-full border border-cyan-400/30 bg-white/5 px-8 py-4 text-white text-base backdrop-blur-md">
                View Work
              </Button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">12+</h3>
                <p className="text-slate-400">Projects Built</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="text-slate-400">Responsive</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                <p className="text-slate-400">Support</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
            <img src={heroImage} alt="Hero" className="rounded-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
