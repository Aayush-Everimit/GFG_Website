import { useState } from "react";

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
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect width="40" height="40" rx="8" fill="#2F8D46" />
                        <path
                            d="M12 28V12H18C20.2 12 22 13.8 22 16C22 17.2 21.4 18.3 20.5 19C21.9 19.7 23 21.2 23 23C23 25.8 20.8 28 18 28H12ZM15 18H18C18.6 18 19 17.6 19 17C19 16.4 18.6 16 18 16H15V18ZM15 25H18C19.1 25 20 24.1 20 23C20 21.9 19.1 21 18 21H15V25Z"
                            fill="white"
                        />
                        <circle cx="28" cy="20" r="3" fill="white" />
                    </svg>
                    <span className="text-xl font-bold text-white">Club GFG</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {links.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="nav-link text-gray-300 hover:text-green-400"
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
        </nav>
    );
}
