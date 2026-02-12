import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toko",
  description:
    "Jelajahi koleksi alas kaki ukuran plus dari Mata Elang Terbang. Desain modern, nyaman, dan dikurasi oleh desainer top dunia.",
};

const categories = [
  {
    title: "Heels & Evening",
    detail: "Siluet elegan dengan kestabilan ekstra.",
  },
  {
    title: "Loafers & Work",
    detail: "Tampilan polished untuk rutinitas harian.",
  },
  {
    title: "Sneakers Modern",
    detail: "Ringan, responsif, dan mendukung kaki besar.",
  },
  {
    title: "Sandals Luxe",
    detail: "Ventilasi maksimal dengan sentuhan premium.",
  },
];

const products = [
  {
    name: "Skyline Atelier Heel",
    price: "Rp 1.850.000",
    note: "Bantalan memory foam + heel stabil.",
  },
  {
    name: "Noir Loafer Plus",
    price: "Rp 1.450.000",
    note: "Kulit lembut, lebar tambahan.",
  },
  {
    name: "Orion Runner Pro",
    price: "Rp 1.650.000",
    note: "Arch support 360° dan outsole ringan.",
  },
  {
    name: "Celeste Sandal",
    price: "Rp 1.250.000",
    note: "Strap adjustable untuk kaki lebar.",
  },
  {
    name: "Studio Mules",
    price: "Rp 1.380.000",
    note: "Slip-on mewah untuk agenda santai.",
  },
  {
    name: "Metropolitan Sneaker",
    price: "Rp 1.720.000",
    note: "Knit premium, ringan, dan fleksibel.",
  },
];

const productImage = (name: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(name)}/640/480`;

const revealDelays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export default function TokoPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="space-y-4 reveal">
        <p className="pill">Toko</p>
        <h1 className="text-4xl md:text-5xl">
          Koleksi plus size yang dirancang untuk kenyamanan premium.
        </h1>
        <p className="text-base text-[color:var(--muted)] md:text-lg">
          Setiap model dibuat dengan proporsi yang menyesuaikan kaki ukuran
          besar, sehingga Anda dapat melangkah stabil tanpa kompromi gaya.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-4">
        {categories.map((item, index) => (
          <div
            key={item.title}
            className={`surface-card p-5 reveal ${revealDelays[index % revealDelays.length]}`}
          >
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="pill">Best Seller</p>
            <h2 className="text-3xl md:text-4xl">Pilihan favorit pelanggan.</h2>
          </div>
          <Link className="btn-ghost" href="/kontak">
            Butuh bantuan ukuran?
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`surface-card p-6 reveal ${revealDelays[index % revealDelays.length]}`}
            >
              <div className="relative h-36 overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full object-cover"
                  src={productImage(product.name)}
                  alt={product.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
              </div>
              <p className="mt-5 text-lg font-semibold">{product.name}</p>
              <p className="text-sm text-[color:var(--muted)]">{product.note}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold">{product.price}</span>
                <span className="pill">Plus Size</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="pill">Dukungan Ukuran</p>
          <p className="text-2xl md:text-3xl">
            Dapatkan rekomendasi ukuran personal sebelum checkout.
          </p>
          <p className="text-sm text-[color:var(--muted)]">
            Kirim ukuran kaki Anda, kami akan mengarahkan model yang paling
            nyaman.
          </p>
        </div>
        <Link className="btn-primary" href="/kontak">
          Konsultasi Ukuran
        </Link>
      </section>
    </div>
  );
}

