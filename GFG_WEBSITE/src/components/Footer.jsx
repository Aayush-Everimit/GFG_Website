import logo from '../assets/logo.png';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0a0c10] text-white pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <Logo />
                            <span className="text-2xl font-bold tracking-tighter">Club GFG</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            The official GeeksForGeeks community chapter. Empowering students through technical excellence and national skill-up initiatives.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon type="instagram" href="#" hover="hover:bg-pink-500/20 hover:text-pink-500" />
                            <SocialIcon type="linkedin" href="#" hover="hover:bg-blue-500/20 hover:text-blue-500" />
                            <SocialIcon type="twitter" href="#" hover="hover:bg-white/10 hover:text-white" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#home" label="Home" />
                            <FooterLink href="#about" label="About Us" />
                            <FooterLink href="#resources" label="Resources" />
                            <FooterLink href="#skillup" label="Nation SkillUp" />
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Community</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#blog" label="Latest Blog" />
                            <FooterLink href="#team" label="Our Team" />
                            <FooterLink href="#" label="Events" />
                            <FooterLink href="#" label="Join Chapter" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-zinc-500 text-sm">
                                <Mail size={16} className="text-green-500" />
                                <span>abc@gfg.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-500 text-sm">
                                <MapPin size={16} className="text-green-500 mt-1" />
                                <span>Delhi Technical Campus,<br />Greater Noida, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs tracking-wide">
                        © {new Date().getFullYear()} Club GeeksForGeeks. Crafted for the Community.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ---------- Reusable Components ---------- */

function FooterLink({ href, label }) {
    return (
        <li>
            <a href={href} className="text-zinc-500 hover:text-green-400 text-sm transition-all flex items-center group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                {label}
            </a>
        </li>
    );
}

function Logo() {
    return (
        <div className="relative group">
            <div className="absolute inset-0 bg-green-500/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
            <img src={logo} alt="Club GFG Logo" className="w-10 h-10 relative z-10" />
        </div>
    );
}

function SocialIcon({ type, href, hover }) {
    // Svg paths shortened for brevity - use your existing icon logic here
    const icons = {
        instagram: <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7Zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />,
        linkedin: <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4V9h3v10zM5.5 7.27A1.77 1.77 0 1 1 5.5 3.73a1.77 1.77 0 0 1 0 3.54zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V9h3v1.77c1.4-2.58 7-2.78 7 2.47V19z" />,
        twitter: <path d="M24 4.557a9.82 9.82 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.389 4.482A13.97 13.97 0 0 1 1.671 3.149a4.92 4.92 0 0 0 1.523 6.574A4.9 4.9 0 0 1 .964 9.1v.062a4.92 4.92 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.419 9.875 9.875 0 0 1-6.102 2.105c-.395 0-.788-.023-1.176-.069A13.951 13.951 0 0 0 7.548 21c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />,
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 transition-all duration-300 ${hover}`}
        >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                {icons[type]}
            </svg>
        </a>
    );
}