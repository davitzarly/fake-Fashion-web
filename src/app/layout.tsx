import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Mata Elang Terbang | Alas Kaki Plus Size Mewah",
    template: "%s | Mata Elang Terbang",
  },
  description:
    "Mata Elang Terbang menghadirkan alas kaki ukuran plus yang nyaman, modern, dan mewah. Dukungan pelanggan fokus pada konsultasi ukuran, perawatan, serta pengembalian mudah.",
  keywords: [
    "alas kaki plus size",
    "sepatu ukuran besar",
    "fashion ukuran besar",
    "dukungan pelanggan sepatu",
    "sepatu desainer",
    "mata elang terbang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <div className="lux-bg min-h-screen">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-28 top-[-120px] h-80 w-80 rounded-full bg-[radial-gradient(circle,#f97316_0%,transparent_68%)] opacity-60 blur-3xl" />
              <div className="absolute right-[-80px] top-[120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,#1b0f0a_0%,transparent_70%)] opacity-30 blur-3xl" />
              <div className="absolute bottom-[-180px] left-[30%] h-96 w-96 rounded-full bg-[radial-gradient(circle,#ffb37a_0%,transparent_70%)] opacity-40 blur-3xl" />
            </div>

            <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pt-8">
              <Link href="/" className="group">
                <span className="block font-display text-2xl uppercase tracking-[0.18em]">
                  Mata Elang Terbang
                </span>
                <span className="block text-xs uppercase tracking-[0.42em] text-[color:var(--muted)]">
                  Plus Size Footwear
                </span>
              </Link>

              <nav className="flex flex-wrap items-center gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--muted)] md:gap-6 md:text-sm">
                <Link className="transition hover:text-[color:var(--ink)]" href="/">
                  Beranda
                </Link>
                <Link className="transition hover:text-[color:var(--ink)]" href="/toko">
                  Toko
                </Link>
                <Link
                  className="transition hover:text-[color:var(--ink)]"
                  href="/kontak"
                >
                  Kontak
                </Link>
                <Link
                  className="transition hover:text-[color:var(--ink)]"
                  href="/kebijakan-privasi"
                >
                  Privasi
                </Link>
              </nav>

              <Link className="btn-ghost hidden md:inline-flex" href="/kontak">
                Konsultasi Ukuran
              </Link>
            </header>

            <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
              {children}
            </main>

            <footer className="mx-auto w-full max-w-6xl border-t border-[color:var(--stroke)] px-6 py-10">
              <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
                <div className="space-y-3">
                  <p className="font-display text-xl">Dukungan Pelanggan Premium</p>
                  <p className="text-sm text-[color:var(--muted)]">
                    Tim kami fokus membantu Anda menemukan ukuran paling nyaman,
                    merawat bahan premium, dan memastikan setiap pesanan tiba dengan
                    aman.
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Layanan
                  </p>
                  <p>Konsultasi ukuran &amp; fitting</p>
                  <p>Pengembalian 30 hari</p>
                  <p>Perawatan bahan premium</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    Ikuti Kami
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a className="pill" href="https://instagram.com">
                      Instagram
                    </a>
                    <a className="pill" href="https://tiktok.com">
                      TikTok
                    </a>
                    <a className="pill" href="https://pinterest.com">
                      Pinterest
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                © 2026 Mata Elang Terbang. Semua hak cipta dilindungi.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

