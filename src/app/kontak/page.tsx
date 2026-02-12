import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim dukungan Mata Elang Terbang untuk konsultasi ukuran, status pesanan, dan bantuan perawatan alas kaki.",
};

const contactChannels = [
  {
    title: "Konsultasi Ukuran",
    detail: "Bimbingan personal untuk memilih ukuran dan lebar yang tepat.",
  },
  {
    title: "Status Pesanan",
    detail: "Pelacakan pengiriman premium dan update real-time.",
  },
  {
    title: "Perawatan Produk",
    detail: "Panduan membersihkan material premium agar awet.",
  },
];

const revealDelays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function KontakPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="space-y-4 reveal">
        <p className="pill">Kontak</p>
        <h1 className="text-4xl md:text-5xl">
          Kami siap membantu setiap langkah Anda.
        </h1>
        <p className="text-base text-[color:var(--muted)] md:text-lg">
          Jelaskan kebutuhan Anda, mulai dari konsultasi ukuran hingga perawatan
          produk. Tim dukungan pelanggan kami akan merespons kurang dari dua jam
          selama jam operasional.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <form className="surface-card space-y-4 p-6 reveal">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm">
              Nama
              <input
                className="input-field mt-2"
                name="nama"
                placeholder="Nama lengkap"
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
            Nomor Telepon
            <input
              className="input-field mt-2"
              name="telepon"
              placeholder="08xx-xxxx-xxxx"
              type="tel"
            />
          </label>
          <label className="text-sm">
            Topik Bantuan
            <select className="input-field mt-2" name="topik">
              <option>Konsultasi ukuran</option>
              <option>Status pesanan</option>
              <option>Pengembalian atau penukaran</option>
              <option>Perawatan produk</option>
            </select>
          </label>
          <label className="text-sm">
            Pesan
            <textarea
              className="input-field mt-2 min-h-[140px]"
              name="pesan"
              placeholder="Tuliskan kebutuhan Anda"
            />
          </label>
          <button className="btn-primary" type="submit">
            Kirim Permintaan
          </button>
        </form>

        <div className="space-y-6">
          <div className="surface-card p-6 reveal reveal-delay-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Kontak Utama
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
          <div className="surface-card space-y-3 p-6 reveal reveal-delay-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Studio Pengukuran
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Jadwalkan fitting privat untuk memastikan ukuran terbaik.
            </p>
            <p className="text-sm font-semibold">
              Jl. Jendral Sudirman No. 88, Jakarta Selatan
            </p>
            <Link className="btn-secondary" href="/toko">
              Lihat Koleksi
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {contactChannels.map((item, index) => (
          <div
            key={item.title}
            className={`surface-card p-6 reveal ${revealDelays[index] ?? ""}`}
          >
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="surface-card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="pill">Media Sosial</p>
          <p className="mt-3 text-2xl md:text-3xl">
            Ikuti kami untuk tips styling dan update koleksi terbaru.
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

