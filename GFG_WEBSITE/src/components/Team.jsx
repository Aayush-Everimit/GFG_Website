import { TEAM_MEMBERS } from "../utils/constants";
import useReveal from "../utils/useReveal";

export default function Team() {
    const [ref, visible] = useReveal();

    return (
        <section
            ref={ref}
            id="team"
            className={`py-24 px-6 bg-gray-800/50 relative z-10 section-reveal ${
                visible ? "visible" : ""
            }`}
        >
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-14 gradient-text">
                    Meet the Team
                </h2>

                {/* Grid for 20 members */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
                    {TEAM_MEMBERS.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-900 p-4 rounded-xl border border-green-600/20 hover:border-green-600/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-green-600/40">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-white">{member.name}</h3>
                            <p className="text-xs text-green-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
