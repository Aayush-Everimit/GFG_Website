import { useState, useEffect } from "react";
import { ABOUT_CONTENT } from "../utils/constants";
import useReveal from "../utils/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      id="about"
      className={`py-32 px-6 bg-black section-reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-24">
          <div className="text-left">
            <span className="text-zinc-500 uppercase tracking-widest text-lg mb-4 block">
              — About Us —
            </span>
          </div>
          <div className="flex justify-end">
            <p className="text-lg text-zinc-400 leading-relaxed text-left md:text-right max-w-md">
              {ABOUT_CONTENT.description}
            </p>
          </div>
        </div>

        {/* Staggered Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
          {ABOUT_CONTENT.stats.map((s, index) => (
            <Stat key={s.label} {...s} index={index} isParentVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, index, isParentVisible }) {
  const [count, setCount] = useState(0);
  
  // Extract number from string (e.g., "100+" becomes 100)
  const targetNumber = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isParentVisible) {
      let start = 0;
      const duration = 2000; // 2 seconds animation
      const increment = targetNumber / (duration / 16); // 60fps approx

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isParentVisible, targetNumber]);

  const isStaggered = index === 1 || index === 3;
  const isFirst = index === 0;

  return (
    <div
      className={`
        relative p-10 flex flex-col justify-between 
        aspect-[3/4] transition-all duration-700 ease-out
        ${isStaggered ? "md:translate-y-16" : ""} 
        ${isFirst ? "bg-green-600" : "bg-zinc-900 border border-white/5"}
        hover:border-green-500/50 group
      `}
    >
      {/* Corner Brackets */}
      <div className="absolute top-5 left-5 w-5 h-5 border-t border-l border-white/20 group-hover:border-green-400 transition-colors" />
      <div className="absolute bottom-5 right-5 w-5 h-5 border-b border-r border-white/20 group-hover:border-green-400 transition-colors" />

      {/* Icon Area */}
      <div className="mb-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isFirst ? "bg-white/20" : "bg-zinc-800"}`}>
            <div className="w-5 h-5 border-2 border-white/50 rounded-sm" />
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-auto">
        <div className="text-5xl font-bold text-white mb-3 tracking-tight">
          {count}{suffix}
        </div>
        <div className={`text-xs font-bold uppercase tracking-[0.2em] leading-tight ${isFirst ? "text-white/80" : "text-zinc-500"}`}>
          {label}
        </div>
      </div>
    </div>
  );
}