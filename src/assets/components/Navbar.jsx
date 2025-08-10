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
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-3xl z-50 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="font-bold text-primary">
                            <img src="logo hitam wixiz.png" alt="Wixiz Logo" className="h-12 rounded-full" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#home" className="relative text-gray-700 px-3 py-2 group">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Beranda</span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                            <a href="#services" className="relative text-gray-700 px-3 py-2 group">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Layanan</span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                            {/* <a href="#portfolio" className="relative text-gray-700 px-3 py-2 group">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Portfolio</span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a> */}
                            <a href="#pricing" className="relative text-gray-700 px-3 py-2 group">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Harga</span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                            <a href="#contact" className="relative text-gray-700 px-3 py-2 group">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Kontak</span>
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 hover:text-primary focus:outline-none"
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
            {menuOpen && (
                <div className="md:hidden w-full bg-white border-t border-gray-200 shadow-lg animate-fadeInDown z-50 absolute left-0">
                    <div className="flex flex-col py-4 px-6 space-y-2">
                        <a href="#home" onClick={handleNavClick} className="relative text-gray-700 py-2 group inline-block">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Beranda</span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#services" onClick={handleNavClick} className="relative text-gray-700 py-2 group inline-block">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Layanan</span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        {/* <a href="#portfolio" onClick={handleNavClick} className="relative text-gray-700 py-2 group inline-block">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Galeri</span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a> */}
                        <a href="#pricing" onClick={handleNavClick} className="relative text-gray-700 py-2 group inline-block">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Harga</span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#contact" onClick={handleNavClick} className="relative text-gray-700 py-2 group inline-block">
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Kontak</span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;