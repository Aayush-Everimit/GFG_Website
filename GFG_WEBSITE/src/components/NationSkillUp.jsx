import useReveal from "../utils/useReveal";

export default function NationSkillUp() {
    const [ref, visible] = useReveal();
    const stats = [
        { value: "10,000+", label: "Students Trained" },
        { value: "50+", label: "Partner Colleges" },
        { value: "100+", label: "Bootcamps" },
        { value: "85%", label: "Placement Rate" },
    ];

    return (
        <section ref={ref} id="skillup" className={`py-24 px-6 bg-gradient-to-br from-green-600 to-green-800 text-white section-reveal station ${visible ? "visible" : ""}`}>
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-6">Nation SkillUp</h2>
                <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                    Join our national initiative to upskill students across the country.
                </p>
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {stats.map(s => (
                        <div key={s.label} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <div className="text-3xl font-bold mb-2">{s.value}</div>
                            <div className="opacity-90">{s.label}</div>
                        </div>
                    ))}
                </div>
                <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105">
                    Register for SkillUp
                </button>
            </div>
        </section>
    );
}
