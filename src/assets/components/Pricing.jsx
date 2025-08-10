function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Paket Layanan Kami</h2>
                    <p className="text-xl text-gray-600">Pilih solusi sesuai kebutuhan bisnis atau personal branding kamu</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

                    {/* Paket 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Brosur / Poster / Spanduk</h3>
                            <div className="text-xl font-bold text-primary mb-2">Rp 15K – Rp 20K</div>
                            <p className="text-gray-600 mb-8">Cocok untuk promosi bisnis & acara</p>
                            <ul className="text-left space-y-3 mb-8">
                                <li>✅ Desain custom</li>
                                <li>✅ File siap cetak</li>
                                <li>✅ Revisi minor</li>
                            </ul>
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300">
                                Pilih Paket
                            </button>
                        </div>
                    </div>

                    {/* Paket 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-primary relative">
                        <div className="absolute -top-4 left-3/5 transform -translate-x-1/2">
                            <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">TERLARIS</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Page + Portofolio (Hosting Gratis)</h3>
                            <div className="text-xl font-bold text-primary mb-2">Rp 70K – Rp 80K</div>
                            <p className="text-gray-600 mb-8">Menampilkan karya dan profil kamu</p>
                            <ul className="text-left space-y-3 mb-8">
                                <li>✅ 1 halaman portfolio</li>
                                <li>✅ Desain responsif</li>
                                <li>✅ Hosting gratis</li>
                            </ul>
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300">
                                Pilih Paket
                            </button>
                        </div>
                    </div>

                    {/* Paket 3 */}
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Page + Portofolio (Hosting Berbayar)</h3>
                            <div className="text-xl font-bold text-primary mb-2">Rp 115K – Rp 120K</div>
                            <p className="text-gray-600 mb-8">Biaya hosting Rp 45K/bulan</p>
                            <ul className="text-left space-y-3 mb-8">
                                <li>✅ 1 halaman portfolio</li>
                                <li>✅ Desain responsif</li>
                                <li>✅ Hosting berbayar</li>
                            </ul>
                            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300">
                                Konsultasi Sekarang
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Pricing;