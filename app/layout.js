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

const SITE_URL = "https://workwithelico.net";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eli Alcantara | Product Sourcing & Procurement Specialist",
    template: "%s | Eli Alcantara",
  },
  description:
    "I help brands find reliable manufacturers, negotiate supplier terms, and turn product ideas into real products. Supplier sourcing, vetting, sampling, and production coordination.",
  keywords: [
    "product sourcing specialist",
    "procurement specialist",
    "supplier sourcing",
    "manufacturer vetting",
    "MOQ negotiation",
    "product development sourcing",
    "Eli Alcantara",
    "Your Sourcing Guy",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Eli Alcantara, Your Sourcing Guy",
    locale: "en_US",
    title: "Eli Alcantara | Product Sourcing & Procurement Specialist",
    description:
      "Need a supplier? Have a product idea? I help brands find reliable manufacturers, negotiate supplier terms, and turn ideas into real products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eli Alcantara, Product Sourcing & Procurement Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eli Alcantara | Product Sourcing & Procurement Specialist",
    description:
      "I help brands find reliable manufacturers, negotiate supplier terms, and turn product ideas into real products.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Eli Alcantara",
      alternateName: "Leopoldo Alcantara Jr.",
      jobTitle: "Product Sourcing & Procurement Specialist",
      description:
        "Product Sourcing & Procurement Specialist helping brands find reliable manufacturers, negotiate supplier terms, and turn product ideas into real products.",
      url: SITE_URL,
      email: "mailto:projects@workwithelico.net",
      sameAs: ["https://calendly.com/projects-workwithelico/60"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Eli Alcantara, Product Sourcing & Procurement",
      url: SITE_URL,
      description:
        "Product sourcing and procurement services: supplier research and vetting, quotation comparison, MOQ and pricing negotiation, sample and production coordination, packaging, and logistics support.",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: "Worldwide",
      serviceType: [
        "Product Sourcing",
        "Supplier Sourcing and Vetting",
        "Procurement Support",
        "Price and MOQ Negotiation",
        "Sample and Production Coordination",
        "Packaging Sourcing",
        "Logistics Coordination",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Eli Alcantara, Your Sourcing Guy",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
