import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-[#0B1120]
      pt-32
      "
    >
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-2
              text-cyan-400
              mb-6
            "
            >
              <Sparkles size={16} />
              Modern Web Development Agency
            </div>

            {/* Heading */}
            <h1
              className="
              text-3xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-tight
              text-white
            "
            >
              Building
              <span className="block text-cyan-400">
                Modern Websites
              </span>
              That Drive
              <span className="block">
                Real Results
              </span>
            </h1>

            {/* Description */}
            <p
              className="
              mt-6
              max-w-xl
              text-sm
              md:text-base
              leading-relaxed
              text-slate-400
            "
            >
              We design and develop high-performance
              websites that help businesses grow,
              attract customers, and establish a
              powerful digital presence.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                className="
                rounded-full
                bg-cyan-500
                px-8
                py-4
                text-white
                font-semibold
                shadow-[0_0_40px_rgba(34,211,238,0.25)]
              "
              >
                <div className="flex items-center gap-2">
                  Start Project
                  <ArrowRight size={18} />
                </div>
              </Button>

              <Button
                className="
                rounded-full
                border
                border-cyan-400/30
                bg-white/5
                px-8
                py-4
                text-white
                backdrop-blur-md
              "
              >
                View Work
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-6 md:gap-10 flex-wrap">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  12+
                </h3>

                <p className="text-xs md:text-sm text-slate-400">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  100%
                </h3>

                <p className="text-xs md:text-sm text-slate-400">
                  Responsive
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  24/7
                </h3>

                <p className="text-xs md:text-sm text-slate-400">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:block">
            {/* Main Mockup */}
            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-4
              shadow-[0_0_60px_rgba(34,211,238,0.15)]
            "
            >
              <img
                src="/src/assets/hero.png"
                alt="Website Mockup"
                className="rounded-2xl w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;