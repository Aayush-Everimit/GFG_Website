import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BackgroundShapes() {
    const shapeRefs = useRef([]);

    const shapes = [
        { icon: '📖', speed: 0.3 },
        { icon: '💻', speed: 0.5 },
        { icon: '🔧', speed: 0.2 },
        { icon: '💡', speed: 0.4 },
        { icon: '📊', speed: 0.6 },
        { icon: '⚡', speed: 0.3 },
        { icon: '🎯', speed: 0.5 },
        { icon: '🚀', speed: 0.4 },
    ];

    useEffect(() => {
        shapeRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.to(ref, {
                    y: -200 * shapes[index].speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                    }
                });
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {shapes.map((shape, index) => (
                <div
                    key={index}
                    ref={el => shapeRefs.current[index] = el}
                    className="absolute text-4xl opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                >
                    {shape.icon}
                </div>
            ))}
        </div>
    );
}