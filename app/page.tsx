"use client";

import { useEffect, useState } from "react";

const products = [
  {
    number: "01",
    title: "Tools & Hardware",
    copy: "Authorized dealer King Tony dan M7 untuk kebutuhan tools profesional serta industrial hardware.",
    image: "/assets/product-tools-industrial.png",
  },
  {
    number: "02",
    title: "Heavy Equipment Parts",
    copy: "Suku cadang andal untuk armada dan alat berat, dari komponen mesin hingga kebutuhan perawatan.",
    image: "/assets/product-heavy-industrial.png",
  },
  {
    number: "03",
    title: "Electrical & Industrial",
    copy: "Komponen elektrikal, panel, hose & fitting, serta kebutuhan industri dari merek tepercaya.",
    image: "/assets/product-electrical-industrial.png",
  },
  {
    number: "04",
    title: "Custom Engineering",
    copy: "Solusi custom untuk generator, pump system, panel, karoseri, dan konstruksi sesuai spesifikasi.",
    image: "/assets/product-generator-industrial.png",
  },
];

const projects = [
  {
    place: "Krueng, Aceh & Natuna, Kepri",
    title: "Fabrication & Supply",
    client: "Pertamina Port & Logistics",
    images: [
      "/assets/project-fabrication-01.jpg",
      "/assets/project-fabrication-02.jpg",
      "/assets/project-fabrication-03.jpg",
      "/assets/project-fabrication-04.jpg",
      "/assets/project-fabrication-05.jpg",
      "/assets/project-fabrication-06.jpg",
    ],
  },
  {
    place: "Cikopo, Jawa Barat",
    title: "Sparepart Hino",
    client: "Waskita Beton Precast",
    images: ["/assets/project-sparepart-hino.jpg"],
  },
  {
    place: "Jakarta",
    title: "King Tony Tool Set",
    client: "Pertamina Lab & Research",
    images: ["/assets/project-tools.jpg"],
  },
  {
    place: "BSD, Tangerang",
    title: "Instalasi Charging EV",
    client: "PT Bintaro Serpong Damai",
    images: ["/assets/project-ev-briefing.jpg", "/assets/project-ev-field.jpg"],
  },
];

function ProjectSlideshow({ images, title, client }: { images: string[]; title: string; client: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [images.length]);

  if (images.length === 1) {
    return <img src={images[0]} alt={`${title} untuk ${client}`} />;
  }

  return (
    <div className="project-slideshow" aria-label={`Dokumentasi ${title}`}>
      {images.map((image, imageIndex) => (
        <img
          className={`project-slide ${imageIndex === activeIndex ? "is-active" : ""}`}
          src={image}
          alt={`${title} - dokumentasi ${imageIndex + 1}`}
          key={image}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`loader ${loading ? "is-visible" : "is-hidden"}`} aria-hidden={!loading}>
        <div className="loader-mark">
          <img src="/assets/mda-logo.png" alt="PT MDA Amanah Sejahtera" />
          <div className="loader-line"><span /></div>
          <p>Reliable supply. Meaningful progress.</p>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kembali ke beranda">
          <img src="/assets/mda-logo.png" alt="MDA" />
        </a>
        <button
          className="menu-button"
          aria-label="Buka menu navigasi"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "is-open" : ""} aria-label="Navigasi utama">
          <a href="#about" onClick={() => setMenuOpen(false)}>Tentang</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Solusi</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Proyek</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Hubungi Kami</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <div className="eyebrow"><span /> General Supplier & Engineering</div>
            <h1>Solusi industri.<br /><em>Tepat</em> saat dibutuhkan.</h1>
            <p>
              Dari komponen kritis hingga sistem yang dirancang khusus, kami memastikan setiap kebutuhan
              operasional hadir dengan kualitas, kecepatan, dan layanan yang dapat diandalkan.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Diskusikan Kebutuhan <b>↗</b></a>
              <a className="text-link" href="#projects">Lihat rekam proyek <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Dokumentasi proyek MDA">
            <div className="hero-photo hero-photo-main"><img src="/assets/project-fabrication-06.jpg" alt="Proyek pengangkatan container dengan crane oleh MDA" /></div>
            <div className="hero-photo hero-photo-small"><img src="/assets/project-sparepart-hino.jpg" alt="Tim MDA menangani proyek sparepart Hino" /></div>
            <div className="hero-stamp"><strong>24H</strong><span>Fast response<br />for procurement</span></div>
          </div>
          <div className="hero-proof">
            <div><strong>10+</strong><span>Kategori solusi industri</span></div>
            <div><strong>24/7</strong><span>Dukungan kebutuhan mendesak</span></div>
            <div><strong>100%</strong><span>Fokus pada kualitas & ketepatan</span></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Klien dan mitra pilihan">
          <span>Dipercaya oleh</span>
          <div className="trust-names">
            <img src="/assets/clients/pertamina.png" alt="Pertamina" />
            <img src="/assets/clients/waskita.png" alt="Waskita" />
            <img className="logo-bsd" src="/assets/clients/bsd.png" alt="Margautama Nusantara - PT Bintaro Serpong Damai" />
            <img src="/assets/clients/bml.png" alt="BML - Chandra Batuah Mustika Lestari" />
            <img className="logo-panrb" src="/assets/clients/panrb.png" alt="Kementerian PANRB" />
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-kicker">01 / Tentang MDA</div>
          <div className="about-grid">
            <h2>Mitra pengadaan yang memahami <span>ritme industri.</span></h2>
            <div className="about-copy">
              <p className="lead">
                PT MDA Amanah Sejahtera menjembatani kebutuhan bisnis dengan jaringan manufaktur dan distributor tepercaya.
              </p>
              <p>
                Kami menyediakan barang dan jasa berkualitas dengan harga kompetitif, pengiriman presisi,
                serta layanan fleksibel untuk pengadaan rutin maupun kebutuhan darurat.
              </p>
              <a className="inline-link" href="#products">Jelajahi kapabilitas kami <span>↗</span></a>
            </div>
          </div>
          <div className="value-grid">
            <article><span>01</span><h3>Quality Assured</h3><p>Produk melalui proses kurasi untuk memastikan durabilitas dan performa optimal.</p></article>
            <article><span>02</span><h3>On-Time Delivery</h3><p>Logistik andal dan koordinasi responsif menjaga operasional tetap berjalan.</p></article>
            <article><span>03</span><h3>Flexible Supply</h3><p>Siap menangani pengadaan rutin hingga kebutuhan mendesak secara cepat.</p></article>
            <article><span>04</span><h3>Competitive Value</h3><p>Harga kompetitif tanpa mengurangi standar kualitas produk maupun layanan.</p></article>
          </div>
        </section>

        <section className="products section-dark" id="products">
          <div className="section-heading">
            <div>
              <div className="section-kicker light">02 / Solusi Kami</div>
              <h2>Satu partner.<br /><span>Beragam kebutuhan.</span></h2>
            </div>
            <p>Portofolio terpadu untuk membantu industri bergerak lebih efisien, aman, dan tanpa jeda.</p>
          </div>
          <div className="product-grid">
            {products.map((item) => (
              <article className="product-card" key={item.number}>
                <img src={item.image} alt="" />
                <div className="product-overlay" />
                <span className="product-number">{item.number}</span>
                <div className="product-content">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className="card-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="vision section">
          <div className="vision-panel">
            <div className="section-kicker light">03 / Arah Kami</div>
            <blockquote>
              “Menjadi general supplier terdepan dan tepercaya di Indonesia melalui solusi pengadaan
              yang <em>inovatif</em> dan berkualitas tinggi.”
            </blockquote>
            <div className="mission-row">
              <span>Kualitas Produk</span><span>Ketepatan Waktu</span><span>Layanan Prima</span><span>Integritas</span>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading dark-copy">
            <div>
              <div className="section-kicker">04 / Rekam Proyek</div>
              <h2>Pekerjaan nyata.<br /><span>Dampak terukur.</span></h2>
            </div>
            <p>Dari Aceh hingga Tangerang, MDA hadir di lapangan untuk menuntaskan kebutuhan mitra.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <ProjectSlideshow images={project.images} title={project.title} client={project.client} />
                <div className="project-meta">
                  <span>{project.place}</span>
                  <h3>{project.title}</h3>
                  <p>{project.client}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="more-projects">
            <span>Juga berpengalaman dalam</span>
            <p>Supply Part Hino · Custom Seragam · Custom Pump System · Custom Panel · Karoseri</p>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-orbit" />
          <div className="contact-copy">
            <div className="section-kicker light">Mulai dari sini</div>
            <h2>Ada kebutuhan<br />yang harus <em>segera</em>?</h2>
            <p>Ceritakan kebutuhan Anda. Tim kami siap merespons dan menyiapkan solusi yang tepat.</p>
            <div className="contact-actions">
              <a className="button button-light" href="https://wa.me/6281117885" target="_blank" rel="noopener noreferrer">Kirim Permintaan <b>↗</b></a>
              <a className="contact-phone" href="https://wa.me/6281117885" target="_blank" rel="noopener noreferrer"><span>Call us</span>+62 811 177 855</a>
            </div>
          </div>
          <div className="contact-details">
            <div><span>Email</span><a href="mailto:salesexecutivemda@gmail.com">salesexecutivemda@gmail.com</a></div>
            <div><span>Website</span><a href="https://mda.co.id">mda.co.id</a></div>
            <div><span>Office</span><p>Jl. River Garden Boulevard B2 No. 21B<br />Cakung, Jakarta Timur</p></div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href="https://wa.me/6281117885"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi PT MDA Amanah Sejahtera melalui WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">☎</span>
        <span className="whatsapp-label"><small>Butuh bantuan?</small>Hubungi Kami</span>
      </a>

      <footer>
        <img src="/assets/mda-logo.png" alt="PT MDA Amanah Sejahtera" />
        <p>Consistently innovate to achieve meaningful goals.</p>
        <span>© 2026 PT MDA Amanah Sejahtera</span>
      </footer>
    </>
  );
}
