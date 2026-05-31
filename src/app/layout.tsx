import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varada Agribusiness | Indian Agricultural Wholesaler & Bulk Exporter",
  description: "APEDA-registered Indian wholesale exporter supplying premium Yellow Maize, Basmati Rice, and high-protein pulses to the Middle East, Southeast Asia, and Africa. Sourced directly from central Indian farming clusters.",
  metadataBase: new URL("https://varada-agribusiness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Varada Agribusiness | Indian Agricultural Wholesaler & Bulk Exporter",
    description: "APEDA-registered Indian wholesale exporter supplying premium Yellow Maize, Basmati Rice, and high-protein pulses to global markets.",
    url: "/",
    siteName: "Varada Agribusiness",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-brand-cream text-brand-charcoal min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />

        {/* Hidden bind element for Google Translate */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Global Google Translate Initialization */}
        <Script id="google-translate-init" strategy="beforeInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
