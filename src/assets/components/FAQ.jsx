// FAQ.jsx
import FAQItem from './FAQItems';

const FAQ = () => {
  const faqItems = [
    {
      question: 'Apakah desain bisa disesuaikan dengan branding saya?',
      answer: 'Bisa banget! Kami terbuka untuk revisi dan penyesuaian agar desain atau website kamu sesuai dengan identitas brand atau personal style.'
    },
    {
      question: 'Berapa lama proses pengerjaan website?',
      answer: 'Tergantung jenis layanan. Untuk landing page biasanya 2–5 hari kerja, sementara web portfolio bisa memakan waktu 5–10 hari tergantung revisi dan konten.'
    },
    {
      question: 'Apakah saya bisa request fitur tertentu di landing page?',
      answer: 'Tentu! Kami bisa bantu custom fitur seperti form kontak, tombol WhatsApp, integrasi social media, bahkan animasi interaktif.'
    },
    {
      question: 'Bagaimana sistem pembayaran?',
      answer: 'Pembayaran bisa dilakukan melalui transfer bank atau e-wallet (DANA, OVO, GoPay). Untuk project custom, DP 50% akan diminta di awal.'
    },
    {
      question: 'Apakah website yang dibuat mobile friendly?',
      answer: 'Ya, semua desain dan website kami sudah responsif dan dioptimalkan untuk tampil bagus di HP, tablet, dan laptop.'
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
          <p className="text-xl text-gray-600">Kamu mungkin ingin tahu hal-hal ini</p>
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