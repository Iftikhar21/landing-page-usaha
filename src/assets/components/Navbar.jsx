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

    // Close menu on nav click (mobile)
    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-primary">EduXpace</div>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#home" className="text-gray-700 hover:text-primary transition-colors px-3 py-2">Beranda</a>
                            <a href="#features" className="text-gray-700 hover:text-primary transition-colors px-3 py-2">Fitur</a>
                            <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors px-3 py-2">Template</a>
                            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors px-3 py-2">Harga</a>
                            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors px-3 py-2">Kontak</a>
                        </div>
                    </div>
                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 hover:text-primary focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                // Close icon
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden w-full bg-white border-t border-gray-200 shadow-lg animate-fadeInDown z-50 absolute left-0">
                    <div className="flex flex-col py-4 px-6 space-y-2">
                        <a href="#home" onClick={handleNavClick} className="text-gray-700 hover:text-primary transition-colors text-base py-2">Beranda</a>
                        <a href="#features" onClick={handleNavClick} className="text-gray-700 hover:text-primary transition-colors text-base py-2">Fitur</a>
                        <a href="#gallery" onClick={handleNavClick} className="text-gray-700 hover:text-primary transition-colors text-base py-2">Template</a>
                        <a href="#pricing" onClick={handleNavClick} className="text-gray-700 hover:text-primary transition-colors text-base py-2">Harga</a>
                        <a href="#contact" onClick={handleNavClick} className="text-gray-700 hover:text-primary transition-colors text-base py-2">Kontak</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;