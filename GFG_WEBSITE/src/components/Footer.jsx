export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Logo + Name */}
                <div className="flex items-center justify-center space-x-3 mb-6">
                    <Logo />
                    <span className="text-2xl font-bold">Club GeeksForGeeks</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                    <FooterLink href="#home" label="Home" />
                    <FooterLink href="#about" label="About" />
                    <FooterLink href="#resources" label="Resources" />
                    <FooterLink href="#blog" label="Blog" />
                    <FooterLink href="#skillup" label="Nation SkillUp" />
                    <FooterLink href="#team" label="Team" />
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-8">
                    <SocialIcon
                        type="instagram"
                        href="https://instagram.com/####"
                        hover="hover:text-pink-500"
                    />
                    <SocialIcon
                        type="linkedin"
                        href="https://linkedin.com/in/####"
                        hover="hover:text-blue-500"
                    />
                    <SocialIcon
                        type="twitter"
                        href="https://twitter.com/####"
                        hover="hover:text-sky-400"
                    />
                    <SocialIcon
                        type="whatsapp"
                        href="https://wa.me/##########"
                        hover="hover:text-green-500"
                    />
                </div>

                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    © 2025 Club GeeksForGeeks. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

/* ---------- Reusable Components ---------- */

function FooterLink({ href, label }) {
    return (
        <a href={href} className="hover:text-green-400 transition-colors">
            {label}
        </a>
    );
}

function Logo() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#2F8D46" />
            <path
                d="M12 28V12H18C20.2 12 22 13.8 22 16C22 17.2 21.4 18.3 20.5 19C21.9 19.7 23 21.2 23 23C23 25.8 20.8 28 18 28H12ZM15 18H18C18.6 18 19 17.6 19 17C19 16.4 18.6 16 18 16H15V18ZM15 25H18C19.1 25 20 24.1 20 23C20 21.9 19.1 21 18 21H15V25Z"
                fill="white"
            />
            <circle cx="28" cy="20" r="3" fill="white" />
        </svg>
    );
}

function SocialIcon({ type, href, hover }) {
    const icons = {
        instagram: (
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7Zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        ),
        linkedin: (
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4V9h3v10zM5.5 7.27A1.77 1.77 0 1 1 5.5 3.73a1.77 1.77 0 0 1 0 3.54zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V9h3v1.77c1.4-2.58 7-2.78 7 2.47V19z" />
        ),
        twitter: (
            <path d="M24 4.557a9.82 9.82 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.389 4.482A13.97 13.97 0 0 1 1.671 3.149a4.92 4.92 0 0 0 1.523 6.574A4.9 4.9 0 0 1 .964 9.1v.062a4.92 4.92 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.926 4.926 0 0 0 4.6 3.419 9.875 9.875 0 0 1-6.102 2.105c-.395 0-.788-.023-1.176-.069A13.951 13.951 0 0 0 7.548 21c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
        ),
        whatsapp: (
            <path d="M12.001 1.5c-5.792 0-10.5 4.707-10.5 10.5 0 1.856.487 3.647 1.41 5.236L1.5 22.5l5.423-1.375A10.47 10.47 0 0 0 12 22.5c5.793 0 10.5-4.707 10.5-10.5s-4.707-10.5-10.499-10.5zm0 18.9a8.36 8.36 0 0 1-4.266-1.167l-.305-.181-3.216.815.857-3.14-.198-.322A8.37 8.37 0 0 1 3.6 12a8.4 8.4 0 1 1 8.4 8.4zm4.647-6.23c-.254-.127-1.502-.741-1.734-.826-.233-.086-.403-.127-.573.127-.168.254-.657.826-.806.994-.15.17-.297.191-.55.063-.255-.127-1.076-.396-2.05-1.26-.758-.676-1.27-1.51-1.42-1.764-.15-.255-.016-.393.112-.52.115-.115.255-.297.382-.446.128-.15.17-.255.255-.425.085-.17.042-.319-.021-.446-.063-.127-.573-1.38-.786-1.89-.206-.495-.415-.427-.573-.435l-.489-.009a.939.939 0 0 0-.682.319c-.233.254-.888.867-.888 2.114 0 1.248.91 2.451 1.037 2.619.127.17 1.791 2.735 4.342 3.835.607.262 1.08.418 1.45.537.61.194 1.164.167 1.603.102.489-.073 1.502-.614 1.713-1.206.211-.593.211-1.1.147-1.206-.063-.106-.233-.17-.487-.297z" />
        ),
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${hover}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                {icons[type]}
            </svg>
        </a>
    );
}
