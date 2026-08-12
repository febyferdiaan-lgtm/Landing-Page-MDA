import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-mda-amanah.vercel.app"),
  title: "PT MDA Amanah Sejahtera | Industrial Supply & Engineering",
  description: "Solusi pengadaan industri, tools, heavy equipment parts, electrical, dan custom engineering yang andal.",
  icons: { icon: "/assets/favicon.png", shortcut: "/assets/favicon.png" },
  openGraph: {
    title: "PT MDA Amanah Sejahtera",
    description: "Solusi industri. Tepat saat dibutuhkan.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PT MDA Amanah Sejahtera - Solusi Industri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT MDA Amanah Sejahtera",
    description: "Solusi industri. Tepat saat dibutuhkan.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
