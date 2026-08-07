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
  title: "Leopoldo Alcantara Jr. — Product Sourcing Specialist | Work With Eli Co",
  description:
    "End-to-end product sourcing, supplier management, and development. From organic personal care and natural crystal nails to nutrition supplements and custom packaging — Leopoldo Alcantara Jr. brings your product ideas to life.",
  keywords: [
    "product sourcing",
    "sourcing specialist",
    "supplier sourcing",
    "product development",
    "Leopoldo Alcantara Jr",
    "Work With Eli Co",
  ],
  openGraph: {
    title: "Leopoldo Alcantara Jr. — Product Sourcing Specialist",
    description:
      "End-to-end product sourcing, supplier management, and development to bring your ideas to life.",
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
