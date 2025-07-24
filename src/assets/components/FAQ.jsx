// FAQ.jsx
import FAQItem from './FAQItems';

const FAQ = () => {
  const faqItems = [
    {
      question: 'Apakah template bisa dikustomisasi sesuai kebutuhan?',
      answer: 'Ya, semua template kami dapat dikustomisasi sepenuhnya. Kami menyediakan file sumber dan dokumentasi lengkap untuk memudahkan proses kustomisasi sesuai kebutuhan Anda.'
    },
    {
      question: 'Bagaimana cara mendapatkan template setelah pembelian?',
      answer: 'Setelah konfirmasi pembayaran, Anda akan menerima email dengan link download yang berisi semua file template, dokumentasi, dan petunjuk instalasi.'
    },
    {
      question: 'Apakah ada support teknis jika mengalami kesulitan?',
      answer: 'Tentu! Kami menyediakan support melalui email dan WhatsApp. Untuk paket bundle dan custom, Anda mendapatkan support prioritas dengan response time yang lebih cepat.'
    },
    {
      question: 'Metode pembayaran apa saja yang tersedia?',
      answer: 'Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan berbagai metode pembayaran digital lainnya untuk kemudahan Anda.'
    },
    {
      question: 'Apakah template compatible dengan semua browser?',
      answer: 'Ya, semua template kami telah ditest dan kompatibel dengan browser modern seperti Chrome, Firefox, Safari, dan Edge. Template juga responsive untuk semua ukuran layar.'
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Pertanyaan yang sering diajukan</p>
        </div>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;