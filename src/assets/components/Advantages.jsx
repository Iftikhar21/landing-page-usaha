function Adventages() {
    return (
        <section className="py-20 bg-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Mengapa Memilih Layanan Kami?</h2>
                    <p className="mt-4 text-gray-600">
                        Wixizz hadir untuk membantu kamu memiliki desain branding dan website profesional dengan proses mudah dan harga terjangkau.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Desain Kekinian</h3>
                        <p className="text-gray-600">Kami hadirkan desain visual yang modern, elegan, dan sesuai tren industri saat ini.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Praktis dan Cepat</h3>
                        <p className="text-gray-600">Proses pengerjaan cepat dan praktis, cukup kirim brief dan kami kerjakan dari A-Z.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Harga Bersahabat</h3>
                        <p className="text-gray-600">Layanan premium dengan harga ramah kantong, cocok untuk UMKM, personal, dan startup.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">File Lengkap & Panduan</h3>
                        <p className="text-gray-600">Kamu akan menerima file desain dan akses ke panduan lengkap untuk update & edit mandiri.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Adventages;