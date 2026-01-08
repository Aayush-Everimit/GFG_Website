import { RESOURCE_CARDS } from "../utils/constants";
import useReveal from "../utils/useReveal";
// Using Lucide icons for that clean, professional look
import { CreditCard, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";

export default function Resources() {
  const [ref, visible] = useReveal();

  // Helper to map icons based on index or title if not provided in constants
  const icons = [<CreditCard size={20} />, <ShieldCheck size={20} />, <BarChart3 size={20} />];

  return (
    <section
      ref={ref}
      id="resources"
      className={`py-32 px-6 bg-black section-reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT COLUMN (7/12 width) */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <span className="text-green-500 font-bold text-xs tracking-[0.3em] uppercase">
              RESOURCES
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter">
              Learn With <br />
              <span className="text-zinc-600">Us.</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-lg leading-relaxed">
                "The best way to get started is to quit talking and begin doing." – Walt Disney
            </p>
          </div>

          {/* Vertical Feature List */}
          <div className="space-y-10">
            {RESOURCE_CARDS.map((card, index) => (
              <div key={card.title} className="flex gap-6 group cursor-default">
                {/* Neon Icon Box */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] group-hover:bg-green-500/20 transition-all duration-500">
                  {icons[index] || icons[0]}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                    {card.desc}
                  </p>
                  <button className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all pt-2 group-hover:text-green-400">
                    {card.action || "Learn more"} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE COLUMN (5/12 width) */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-[48px] overflow-hidden border border-white/10 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
             {/* Replace this URL with any photo */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
              alt="Creativity Graphic" 
              className="w-full h-[600px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          
          {/* Decorative Background Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

      </div>
    </section>
  );
}