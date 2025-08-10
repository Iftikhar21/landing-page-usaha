import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold text-white mb-4">Wixizz</div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Jasa pembuatan desain visual, website portfolio, dan landing page profesional untuk kebutuhan bisnis atau personal Anda. Kualitas premium, harga terjangkau.
                        </p>
                        <div className="flex space-x-2">
                            {/* Social icons */}
                            <a
                                href="https://wa.me/6281905478802"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400 transition-colors duration-300 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com/wixiz.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400 transition-colors duration-300 bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600 transform hover:scale-110 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#home" className="hover:text-primary transition-colors duration-300">Beranda</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors duration-300">Layanan</a></li>
                            {/* <li><a href="#gallery" className="hover:text-primary transition-colors duration-300">Galeri</a></li> */}
                            <li><a href="#pricing" className="hover:text-primary transition-colors duration-300">Harga</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Layanan</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-primary transition-colors duration-300">Desain Visual</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors duration-300">Website Portfolio</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors duration-300">Landing Page</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors duration-300">Pengembangan Kustom</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors duration-300">Konsultasi</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 wixiz.io. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;