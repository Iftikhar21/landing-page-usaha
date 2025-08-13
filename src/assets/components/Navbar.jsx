import { useState, useEffect } from "react";

function Navbar() {
    const [active, setActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="flex justify-center items-center">
            <nav className="fixed top-4 z-50 transition-all duration-300 ease-in-out">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl px-6 py-3 mx-4 max-w-4xl">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="font-bold text-primary">
                                <img src="logo hitam wixiz.png" alt="Wixiz Logo" className="h-10 rounded-full" />
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {[
                                    { href: "#home", label: "Beranda" },
                                    { href: "#services", label: "Layanan" },
                                    { href: "#pricing", label: "Harga" },
                                    { href: "#contact", label: "Kontak" },
                                ].map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="relative text-gray-800 px-4 py-2 rounded-xl font-medium group"
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <span className="absolute left-1/2 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden ml-auto">
                            <button
                                className="text-gray-800 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-2 mx-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-4 animate-fadeInDown">
                            <div className="flex flex-col space-y-1">
                                {[
                                    { href: "#home", label: "Beranda" },
                                    { href: "#services", label: "Layanan" },
                                    { href: "#pricing", label: "Harga" },
                                    { href: "#contact", label: "Kontak" },
                                ].map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className="relative text-gray-800 py-3 px-4 rounded-xl font-medium group"
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;