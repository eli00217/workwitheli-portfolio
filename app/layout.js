import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Eli Alcantara — Your Sourcing Guy | Product Sourcing & Procurement Specialist",
  description:
    "Hi, I'm Eli — Your Sourcing Guy. I help brands find reliable manufacturers, negotiate better pricing, and turn product ideas into real products.",
  keywords: [
    "product sourcing",
    "sourcing specialist",
    "supplier sourcing",
    "product development",
    "Eli Alcantara",
    "Your Sourcing Guy",
    "Work With Eli Co",
  ],
  openGraph: {
    title: "Eli Alcantara — Your Sourcing Guy",
    description:
      "Product Sourcing & Procurement Specialist. Need a supplier? Have a product idea? You\u2019re in the right place.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
