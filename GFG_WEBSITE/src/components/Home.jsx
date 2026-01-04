import { HERO_CONTENT } from "../utils/constants";
import useReveal from "../utils/useReveal";

export default function Home() {
    const [ref, visible, animationTrigger] = useReveal();

    return (
        <section
            key={animationTrigger}
            ref={ref}
            id="home"
            className={`min-h-screen flex items-center pt-20 px-6 relative z-10 section-reveal station ${
                visible ? "visible" : ""
            }`}
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left content */}
                <div className="text-left md:pr-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text leading-tight slide-right-fade-in" style={{ animationDelay: '0.2s' }}>
                        {HERO_CONTENT.title}
                    </h2>

                    <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md slide-right-fade-in" style={{ animationDelay: '0.4s' }}>
                        {HERO_CONTENT.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 md:justify-start justify-center slide-up-fade-in" style={{ animationDelay: '0.6s' }}>
                        {HERO_CONTENT.buttons.map((btn) => (
                            <button
                                key={btn.text}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg transition-all hover:scale-105"
                            >
                                {btn.text}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10 md:mt-0 fade-in" style={{ animationDelay: '0.8s' }}>
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-green-600/20 to-green-400/10 rounded-3xl border border-green-600/30 flex items-center justify-center">
                        {/* 👇 Replace this later with your 3D canvas (Three.js / R3F) */}
                        <span className="text-gray-500 text-sm"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
