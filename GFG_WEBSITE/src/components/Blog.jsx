import { BLOG_POSTS } from "../utils/constants";
import useReveal from "../utils/useReveal";

export default function Blog() {
    const [ref, visible] = useReveal();
    return (
        <section ref={ref} id="blog" className={`py-24 px-6 bg-gray-800/50 section-reveal ${visible ? "visible" : ""}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Latest from Our Blog</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {BLOG_POSTS.map(post => (
                        <article key={post.title} className="bg-gray-800 rounded-2xl overflow-hidden card-hover border border-green-600/20">
                            <div className={`h-48 bg-gradient-to-br ${post.gradient}`} />
                            <div className="p-6">
                                <div className="text-sm text-green-400 font-semibold mb-2">{post.category}</div>
                                <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                                <p className="text-gray-400 mb-4">{post.desc}</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{post.read}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
