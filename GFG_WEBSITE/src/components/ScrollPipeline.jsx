import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollPipeline = () => {
  const pathRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { name: "HOME", color: "#00ff88" },
    { name: "ABOUT", color: "#3b82f6" },
    { name: "RESOURCES", color: "#a855f7" },
    { name: "SKILLUP", color: "#f43f5e" }
  ];

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // 1. Setup the line to be hidden initially
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1
    });

    // 2. The drawing animation
    const scrollAnim = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "body", // Change to "#root" or ".app-wrapper" if body doesn't work
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Smoothly follows the scroll
        onUpdate: (self) => {
          // Calculate which section we are in to highlight labels
          const index = Math.floor(self.progress * sections.length);
          if (index !== activeSection && index < sections.length) {
            setActiveSection(index);
          }
        }
      }
    });

    // 3. Refresh ScrollTrigger after a short delay to catch dynamic content
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      scrollAnim.kill();
      clearTimeout(timer);
    };
  }, [activeSection]);

  return (
    <div className="fixed left-0 top-0 h-screen w-40 pointer-events-none z-50 hidden md:block font-mono">
      <svg
        viewBox="0 0 160 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {/* Background Guide Line */}
        <line x1="40" y1="0" x2="40" y2="1000" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />

        {/* The Animated Drawing Path */}
        <path
          ref={pathRef}
          d="M 40 0 V 1000"
          fill="none"
          stroke={sections[activeSection]?.color || "#00ff88"}
          strokeWidth="3"
          className="transition-colors duration-500 filter drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]"
        />

        {/* Section Labels */}
        {sections.map((sec, i) => {
          const yPos = (i + 0.5) * (1000 / sections.length);
          const isActive = activeSection === i;

          return (
            <g key={i}>
              {/* Glowing Node */}
              <circle
                cx="40"
                cy={yPos}
                r={isActive ? "6" : "3"}
                fill={isActive ? sec.color : "#111827"}
                stroke={sec.color}
                strokeWidth="2"
                className="transition-all duration-300"
              />
              {/* Text Label */}
              <text
                x="60"
                y={yPos + 5}
                fill="white"
                fontSize="14"
                fontWeight={isActive ? "bold" : "normal"}
                className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}
                style={{ textShadow: isActive ? `0 0 10px ${sec.color}` : 'none' }}
              >
                {sec.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ScrollPipeline;