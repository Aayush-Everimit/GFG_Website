import { BLOG_POSTS } from "../utils/constants";
import useReveal from "../utils/useReveal";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function Blog() {
  const [ref, visible] = useReveal();

  // We split the posts: one for the large featured slot, the rest for the list
  const featuredPost = BLOG_POSTS[0];
  const listPosts = BLOG_POSTS.slice(1, 4);

  return (
    <section
      ref={ref}
      id="blog"
      className={`py-32 px-6 bg-black section-reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="mb-20">
          <span className="text-green-500 font-bold text-xs tracking-[0.3em] uppercase block mb-4">
            Insights
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
            Latest from <span className="text-zinc-600">Our Blog.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Featured Post (Large Image Style) */}
          <div className="lg:col-span-6 group cursor-pointer">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 mb-8 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              {/* Using the gradient from your constants as a placeholder or an image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} opacity-40 group-hover:scale-105 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black via-black/60 to-transparent">
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
                  {featuredPost.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <div className="flex items-center gap-4 text-zinc-400 text-sm">
                   <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.read}</span>
                   <span className="flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: List of Articles */}
          <div className="lg:col-span-6 space-y-12">
            {listPosts.map((post) => (
              <article key={post.title} className="group cursor-pointer flex flex-col gap-4 border-b border-white/5 pb-8 last:border-0">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-3">
                    <span className="text-green-500 text-xs font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 max-w-md">
                      {post.desc}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-green-500 group-hover:border-green-500 group-hover:text-black transition-all duration-300 -rotate-45 group-hover:rotate-0">
                    <ArrowRight size={20} />
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-zinc-600 text-xs font-medium uppercase tracking-tighter">
                  <span>{post.read}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-800" />
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
            
            <button className="w-full py-5 rounded-2xl border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300">
              View All Insights
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}