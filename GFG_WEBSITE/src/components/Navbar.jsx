import { useState } from "react";
import logo from '../assets/logo.png';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Resources", href: "#resources" },
        { label: "Blog", href: "#blog" },
        { label: "Nation SkillUp", href: "#skillup" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md shadow-lg z-40">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Club GFG Logo" className="w-10 h-10" />
                    <span className="text-xl font-bold text-white">Club GFG</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12">
                    {links.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="nav-link text-lg text-gray-300 hover:text-green-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Button */}
                <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4 space-y-2 px-6 pb-4">
                    {links.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-gray-300 hover:text-green-400"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
            {/* Navbar strip */}
            <div className="absolute right-0 top-0 h-full w-16" style={{ backgroundColor: '#255853' }}></div>
        </nav>
    );
}
