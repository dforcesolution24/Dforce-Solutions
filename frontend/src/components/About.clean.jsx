import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0B1120] text-white">
      <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-cyan-400 mb-8">
              ℹ️ About Us
            </div>

            <h2 className="text-6xl font-black leading-tight mb-6">
              We Are
              <span className="block text-cyan-400">DForce Solutions</span>
            </h2>

            <p className="text-base leading-relaxed text-slate-400 mb-8">
              DForce Solutions is a modern web development agency passionate about creating digital experiences that fuel growth. With 5+ years of experience in web and design, we have helped startups, small businesses, and brands bring their ideas to life online.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-cyan-400 flex-shrink-0 w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-white mb-1 text-base">On-Time Delivery</h3>
                  <p className="text-slate-400 text-sm">We respect deadlines and deliver on schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-cyan-400 flex-shrink-0 w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-white mb-1 text-base">Client Satisfaction</h3>
                  <p className="text-slate-400 text-sm">Your satisfaction is our priority</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-cyan-400 flex-shrink-0 w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-white mb-1 text-base">Modern & Scalable Solutions</h3>
                  <p className="text-slate-400 text-sm">Built with latest technologies for growth</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-cyan-400 flex-shrink-0 w-6 h-6" />
                <div>
                  <h3 className="font-semibold text-white mb-1 text-base">Dedicated Support</h3>
                  <p className="text-slate-400 text-sm">Always here when you need us</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md p-8 text-center">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">5+</h3>
              <p className="text-slate-400">Years of Experience</p>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md p-8 text-center">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">12+</h3>
              <p className="text-slate-400">Happy Clients</p>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md p-8 text-center col-span-2">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">100%</h3>
              <p className="text-slate-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
