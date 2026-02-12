import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Mata Elang Terbang untuk melindungi data pelanggan dan penggunaan informasi secara aman.",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="space-y-4">
        <p className="pill">Kebijakan Privasi</p>
        <h1 className="text-4xl md:text-5xl">
          Perlindungan data adalah bagian dari layanan premium kami.
        </h1>
        <p className="text-base text-[color:var(--muted)] md:text-lg">
          Terakhir diperbarui: 12 Februari 2026
        </p>
      </section>

      <section className="space-y-6">
        <div className="surface-card space-y-3 p-6">
          <h2 className="text-2xl">Informasi yang kami kumpulkan</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Kami mengumpulkan data yang Anda berikan secara langsung, seperti
            nama, email, nomor telepon, alamat pengiriman, ukuran sepatu, dan
            preferensi produk. Kami juga dapat mengumpulkan informasi teknis
            seperti jenis perangkat, alamat IP, dan perilaku penggunaan situs.
          </p>
        </div>
        <div className="surface-card space-y-3 p-6">
          <h2 className="text-2xl">Cara kami menggunakan data</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Data digunakan untuk memproses pesanan, memberikan rekomendasi
            ukuran, mengirimkan pembaruan pengiriman, serta meningkatkan
            pengalaman dukungan pelanggan. Kami dapat menggunakan informasi
            untuk komunikasi promo jika Anda menyetujuinya.
          </p>
        </div>
        <div className="surface-card space-y-3 p-6">
          <h2 className="text-2xl">Cookies dan pelacakan</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Kami menggunakan cookies untuk menyimpan preferensi, menjaga sesi
            login, dan memahami perilaku pengguna. Anda dapat menonaktifkan
            cookies melalui pengaturan browser, namun beberapa fitur mungkin
            tidak berfungsi optimal.
          </p>
        </div>
        <div className="surface-card space-y-3 p-6">
          <h2 className="text-2xl">Berbagi dengan pihak ketiga</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Informasi dapat dibagikan kepada mitra logistik, penyedia pembayaran,
            dan layanan analitik yang membantu kami menjalankan bisnis. Kami
            memastikan mitra mematuhi standar keamanan data.
          </p>
        </div>
        <div className="surface-card space-y-3 p-6">
          <h2 className="text-2xl">Penyimpanan dan keamanan</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Data disimpan selama diperlukan untuk tujuan layanan dan kepatuhan
            hukum. Kami menerapkan enkripsi, kontrol akses, serta pemantauan
            rutin untuk menjaga keamanan informasi pelanggan.
          </p>
        </div>
        <div className="surface-card space-y-3 p-6">
          <h2 className="text-2xl">Hak Anda</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Anda berhak mengakses, memperbarui, atau menghapus data pribadi.
            Hubungi kami jika ingin menarik persetujuan komunikasi marketing atau
            meminta salinan informasi yang kami simpan.
          </p>
        </div>
        <div className="surface-card space-y-3 p-6">
          <h2 className="text-2xl">Hubungi kami</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Untuk pertanyaan privasi, silakan hubungi{" "}
            <a className="font-semibold" href="mailto:privacy@mataelangterbang.id">
              privacy@mataelangterbang.id
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

