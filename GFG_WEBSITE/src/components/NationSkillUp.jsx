import useReveal from "../utils/useReveal";
import { ArrowRight, Mic, Sparkles } from "lucide-react";

export default function NationSkillUp() {
  const [ref, visible] = useReveal();

  return (
    <section 
      ref={ref} 
      id="skillup" 
      className={`min-h-screen py-24 px-6 bg-black section-reveal ${visible ? "visible" : ""}`}
    >
      {/* Main Container with 10% Green border for depth */}
      <div className="max-w-7xl mx-auto relative bg-[#0a0c10] rounded-[48px] border border-green-500/10 overflow-hidden p-8 lg:p-20 shadow-2xl">
        
        {/* Background Decorative Waves in Green */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1000 1000" className="w-full h-full text-green-400">
            <path d="M0,500 Q250,200 500,500 T1000,500" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0,600 Q250,300 500,600 T1000,600" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-green-500 font-bold text-xs tracking-[0.3em] uppercase">
                National Initiative
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tighter">
              Level up with <br />
              <span className="text-green-400 italic flex items-center gap-4">
                Nation SkillUp <Mic className="text-zinc-700" size={45}/>
              </span>
            </h1>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Join the national movement to bridge the skill gap. Unlock industry-led bootcamps and elite placement support.
            </p>

            {/* Email Input with Green Focus */}
            <div className="flex max-w-md bg-white/[0.03] p-2 rounded-2xl border border-white/10 focus-within:border-green-500/50 transition-all duration-500">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent flex-grow px-5 text-white outline-none placeholder:text-zinc-600 text-sm"
              />
              <button className="bg-green-600 hover:bg-green-500 text-black px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                Register Now <ArrowRight size={18}/>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-full max-w-[420px] aspect-[4/5] rounded-[50px] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-green-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" 
                  alt="Skillup Learning"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                />
              </div>

              {/* Status Badge in White/Green */}
              <div className="absolute -bottom-6 -left-10 bg-white rounded-3xl p-5 flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-float">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-black">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">Status</div>
                  <div className="text-sm font-black text-black">Ready to Hire</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-wrap gap-16 items-center">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/150?u=green${i}`} 
                  className="w-12 h-12 rounded-full border-[4px] border-[#0a0c10] object-cover" 
                  alt="student" 
                />
              ))}
            </div>
            <div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Live Training</div>
              <div className="text-white text-xl font-bold">10K+ Students</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
              <ArrowRight className="-rotate-45" size={20}/>
            </div>
            <div>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Network</div>
              <div className="text-white text-xl font-bold">50+ Colleges</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}