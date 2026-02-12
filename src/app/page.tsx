import Link from "next/link";

const supportHighlights = [
  {
    title: "Konsultasi Ukuran 1:1",
    description:
      "Spesialis fit kami membantu memilih ukuran yang tepat lewat chat, telepon, atau video singkat.",
  },
  {
    title: "Pengembalian 30 Hari",
    description:
      "Coba di rumah dengan tenang. Jika ukuran belum pas, kami bantu tukar dengan cepat.",
  },
  {
    title: "Perawatan Material Premium",
    description:
      "Panduan eksklusif untuk menjaga kulit, suede, dan material modern agar awet lebih lama.",
  },
];

const collections = [
  {
    name: "Skyline Atelier",
    detail: "Heels stabil dengan bantalan memory foam.",
    sizes: "Ukuran 41-49",
  },
  {
    name: "Midnight Loafer",
    detail: "Slip-on elegan untuk agenda malam dan kantor.",
    sizes: "Ukuran 40-48",
  },
  {
    name: "Orion Runner",
    detail: "Sneakers modern dengan dukungan arch premium.",
    sizes: "Ukuran 42-50",
  },
];

const faq = [
  {
    question: "Bagaimana cara memilih ukuran yang tepat?",
    answer:
      "Gunakan panduan ukuran kami atau hubungi tim fitting. Kami akan memastikan ukuran paling nyaman berdasarkan panjang dan lebar kaki.",
  },
  {
    question: "Apakah ada opsi pengiriman cepat?",
    answer:
      "Ya. Pengiriman premium 2-4 hari tersedia untuk area tertentu, lengkap dengan pelacakan real-time.",
  },
  {
    question: "Bagaimana proses pengembalian?",
    answer:
      "Ajukan lewat formulir di halaman kontak. Kurir akan menjemput paket Anda dan proses tukar selesai dalam 3-5 hari kerja.",
  },
];

const heroImage = "https://picsum.photos/seed/signature-plus/900/600";
const revealDelays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <section className="grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6 reveal">
          <span className="pill">Luxury Plus Size Footwear</span>
          <h1 className="text-4xl leading-tight md:text-6xl">
            Alas kaki ukuran plus yang terasa nyaman, tampil modern, dan
            sepenuhnya mewah.
          </h1>
          <p className="text-base text-[color:var(--muted)] md:text-lg">
            Mata Elang Terbang memadukan desain desainer top dunia dengan sistem
            dukungan pelanggan yang memastikan setiap langkah Anda pas, elegan,
            dan percaya diri. Kami fokus pada kenyamanan, fit, dan layanan
            premium dari awal hingga setelah pembelian.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link className="btn-primary" href="/toko">
              Lihat Koleksi
            </Link>
            <a className="btn-secondary" href="#hubungi-kami">
              Hubungi Kami
            </a>
          </div>
          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="surface-card p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Ukuran
              </p>
              <p className="text-lg font-semibold">40 - 50</p>
            </div>
            <div className="surface-card p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Pengiriman
              </p>
              <p className="text-lg font-semibold">2-4 Hari Premium</p>
            </div>
            <div className="surface-card p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Bantuan
              </p>
              <p className="text-lg font-semibold">Respon &lt; 2 Jam</p>
            </div>
          </div>
        </div>
        <div className="relative reveal reveal-delay-1">
          <div className="surface-card float p-6">
            <div className="relative h-56 overflow-hidden rounded-2xl">
              <img
                className="h-full w-full object-cover"
                src={heroImage}
                alt="Signature Plus"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/35" />
            </div>
            <div className="mt-6 flex items-center justify-between text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Studio Drop
                </p>
                <p className="text-lg font-semibold">Signature Plus</p>
              </div>
              <span className="pill">Limited</span>
            </div>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              Dirancang untuk kaki ukuran besar dengan struktur sol yang lebih
              stabil dan bantalan ekstra empuk.
            </p>
          </div>
          <div className="absolute -bottom-8 right-4 hidden rounded-2xl bg-white/70 p-4 shadow-lg backdrop-blur md:block">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Fitting Note
            </p>
            <p className="text-base font-semibold">
              Lebar kaki? Kami sesuaikan.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="pill">Dukungan Pelanggan Utama</p>
            <h2 className="text-3xl md:text-4xl">
              Fokus utama kami: layanan yang membuat Anda nyaman.
            </h2>
          </div>
          <Link className="btn-ghost" href="/kontak">
            Konsultasi Sekarang
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {supportHighlights.map((item, index) => (
            <div
              key={item.title}
              className={`surface-card p-6 reveal ${revealDelays[index] ?? ""}`}
            >
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="pill">Koleksi Kurasi</p>
          <h2 className="text-3xl md:text-4xl">
            Desain modern yang memperhatikan proporsi kaki ukuran plus.
          </h2>
          <p className="text-sm text-[color:var(--muted)] md:text-base">
            Setiap desain dipilih untuk memberikan siluet modern tanpa
            mengorbankan kenyamanan. Kami memastikan bantalan, lebar, dan
            distribusi berat ideal.
          </p>
          <div className="grid gap-4">
            {collections.map((item) => (
              <div key={item.name} className="surface-card p-5">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <span className="pill">{item.sizes}</span>
                </div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="surface-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Fitur Kenyamanan
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-lg font-semibold">Arch Support 360°</p>
              <p className="text-sm text-[color:var(--muted)]">
                Bantalan menyeluruh untuk tekanan kaki bagian tengah.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Grip Anti-Slip</p>
              <p className="text-sm text-[color:var(--muted)]">
                Sol yang stabil untuk langkah percaya diri sepanjang hari.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Material Premium</p>
              <p className="text-sm text-[color:var(--muted)]">
                Kulit lembut dan tekstil modern yang tetap ringan.
              </p>
            </div>
            <Link className="btn-secondary mt-2" href="/toko">
              Jelajahi Semua
            </Link>
          </div>
        </div>
      </section>

      <section id="hubungi-kami" className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="pill">Hubungi Kami</p>
          <h2 className="text-3xl md:text-4xl">
            Butuh bantuan? Tim layanan pelanggan siap membantu hari ini.
          </h2>
          <p className="text-sm text-[color:var(--muted)] md:text-base">
            Tanyakan ukuran, jadwal pengiriman, atau rekomendasi model. Kami
            akan membalas dalam waktu kurang dari dua jam selama jam kerja.
          </p>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                Nama Lengkap
                <input
                  className="input-field mt-2"
                  name="nama"
                  placeholder="Nama Anda"
                  type="text"
                />
              </label>
              <label className="text-sm">
                Email
                <input
                  className="input-field mt-2"
                  name="email"
                  placeholder="nama@email.com"
                  type="email"
                />
              </label>
            </div>
            <label className="text-sm">
              Ukuran yang Anda pakai
              <input
                className="input-field mt-2"
                name="ukuran"
                placeholder="Contoh: 45"
                type="text"
              />
            </label>
            <label className="text-sm">
              Pertanyaan Anda
              <textarea
                className="input-field mt-2 min-h-[120px]"
                name="pesan"
                placeholder="Ceritakan kebutuhan Anda"
              />
            </label>
            <button className="btn-primary" type="submit">
              Kirim Pesan
            </button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="surface-card p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Kontak Langsung
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                Email: <a href="mailto:support@mataelangterbang.id">support@mataelangterbang.id</a>
              </p>
              <p>Telepon: <a href="tel:+628001234511">+62 800 1234 511</a></p>
              <p>WhatsApp: <a href="https://wa.me/628001234511">+62 800 1234 511</a></p>
              <p>Jam layanan: Senin - Sabtu, 09.00 - 20.00 WIB</p>
            </div>
          </div>
          <div className="surface-card p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Studio Pengukuran
            </p>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Kunjungi showroom kami untuk fitting privat bersama konsultan
              ukuran.
            </p>
            <p className="mt-4 text-sm font-semibold">
              Jl. Jendral Sudirman No. 88, Jakarta Selatan
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="pill">FAQ Singkat</p>
          <h2 className="text-3xl md:text-4xl">
            Jawaban cepat sebelum Anda menghubungi kami.
          </h2>
        </div>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={item.question}
              className={`surface-card p-5 reveal ${revealDelays[index] ?? ""}`}
            >
              <p className="text-base font-semibold">{item.question}</p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="pill">Ikuti Kami</p>
          <h2 className="text-3xl md:text-4xl">
            Dapatkan inspirasi styling dan kabar koleksi terbaru.
          </h2>
          <p className="text-sm text-[color:var(--muted)] md:text-base">
            Ikuti media sosial kami untuk tips styling, promo eksklusif, dan
            cerita di balik setiap desain.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="btn-primary" href="https://instagram.com">
            Instagram
          </a>
          <a className="btn-secondary" href="https://tiktok.com">
            TikTok
          </a>
        </div>
      </section>
    </div>
  );
}

