function Footer() {
    return (
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="col-span-1 md:col-span-2">
                        <div class="text-2xl font-bold text-white mb-4">Wixizz</div>
                        <p class="text-gray-300 mb-6 max-w-md">
                            Jasa pembuatan desain visual, website portfolio, dan landing page profesional untuk kebutuhan bisnis atau personal Anda. Kualitas premium, harga terjangkau.
                        </p>
                        <div class="flex space-x-4">
                            {/* Social icons */}
                            {/* (icon blocks remain unchanged) */}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Navigasi</h3>
                        <ul class="space-y-2 text-gray-300">
                            <li><a href="#home" class="hover:text-primary transition-colors duration-300">Beranda</a></li>
                            <li><a href="#features" class="hover:text-primary transition-colors duration-300">Fitur</a></li>
                            <li><a href="#gallery" class="hover:text-primary transition-colors duration-300">Galeri</a></li>
                            <li><a href="#pricing" class="hover:text-primary transition-colors duration-300">Harga</a></li>
                            <li><a href="#contact" class="hover:text-primary transition-colors duration-300">Kontak</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Layanan</h3>
                        <ul class="space-y-2 text-gray-300">
                            <li><a href="#" class="hover:text-primary transition-colors duration-300">Desain Visual</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors duration-300">Website Portfolio</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors duration-300">Landing Page</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors duration-300">Pengembangan Kustom</a></li>
                            <li><a href="#" class="hover:text-primary transition-colors duration-300">Konsultasi</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 wixiz.io. All rights reserved. Made with ❤️ to empower your digital presence.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;