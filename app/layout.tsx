import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { salon } from "@/lib/salon";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  // Podmień na docelową domenę przed publikacją
  metadataBase: new URL("https://madohairstudio.pl"),
  title: "MaDo Hair Studio — fryzjer Pszczyna | strzyżenie, koloryzacja, Olaplex",
  description:
    "MaDo Hair Studio Magdalena Petynia — salon fryzjerski w centrum Pszczyny, ul. Bednorza 2D. Strzyżenie damskie i męskie, koloryzacja, Air Touch, Olaplex, fryzury ślubne. Umów wizytę online.",
  openGraph: {
    title: "MaDo Hair Studio — salon fryzjerski w Pszczynie",
    description: "Strzyżenie, koloryzacja, pielęgnacja i stylizacja. Umów wizytę online przez Booksy.",
    images: ["/images/wnetrze-1.jpg"],
    locale: "pl_PL",
    type: "website",
  },
  other: {
    "supported-color-schemes": "light",
    nightmode: "disable",
  },
};

const lightCanvas = "#faf8f4";

export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: [
    { color: lightCanvas },
    { media: "(prefers-color-scheme: light)", color: lightCanvas },
    { media: "(prefers-color-scheme: dark)", color: lightCanvas },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: `${salon.name} ${salon.owner}`,
  image: "/images/wnetrze-1.jpg",
  telephone: "+48536148133",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bednorza 2D",
    postalCode: salon.address.postalCode,
    addressLocality: salon.address.city,
    addressCountry: "PL",
  },
  geo: { "@type": "GeoCoordinates", latitude: salon.geo.lat, longitude: salon.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
  sameAs: [salon.facebook, salon.bookingUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${cormorant.variable}`}
      style={{ colorScheme: "only light", backgroundColor: lightCanvas }}
    >
      <body className="font-sans" style={{ colorScheme: "only light", backgroundColor: lightCanvas, color: "#1d1d1b" }}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
