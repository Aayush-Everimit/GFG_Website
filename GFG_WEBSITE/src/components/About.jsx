import { ABOUT_CONTENT } from "../utils/constants";
import useReveal from "../utils/useReveal";

export default function About() {
    const [ref, visible] = useReveal();
    return (
        <section ref={ref} id="about" className={`py-24 px-6 bg-gray-800/50 section-reveal ${visible ? "visible" : ""}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 gradient-text">{ABOUT_CONTENT.title}</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">{ABOUT_CONTENT.description}</p>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        {ABOUT_CONTENT.features.map(f => (
                            <Feature key={f.title} {...f} />
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {ABOUT_CONTENT.stats.map(s => (
                            <Stat key={s.label} {...s} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({ title, desc }) {
    return (
        <div>
            <h3 className="font-semibold text-lg mb-1 text-white">{title}</h3>
            <p className="text-gray-400">{desc}</p>
        </div>
    );
}

function Stat({ value, label }) {
    return (
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl card-hover text-center border border-green-600/20">
            <div className="text-4xl font-bold text-green-400 mb-2">{value}</div>
            <div className="text-gray-300 font-medium">{label}</div>
        </div>
    );
}
