import { RESOURCE_CARDS } from "../utils/constants";
import useReveal from "../utils/useReveal";

export default function Resources() {
    const [ref, visible] = useReveal();
    return (
        <section ref={ref} id="resources" className={`py-24 px-6 bg-gray-900/50 section-reveal station ${visible ? "visible" : ""}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Resources</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {RESOURCE_CARDS.map(card => (
                        <div key={card.title} className="bg-gray-800 p-8 rounded-2xl card-hover border border-green-600/20">
                            <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                            <p className="text-gray-400 mb-6">{card.desc}</p>
                            <button className="text-green-400 font-semibold hover:text-green-300">
                                {card.action} →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
