import type { Metadata } from "next";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import SEO from "@/components/SEO";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ETHOS JIU JITSU ACADEMY",
  description:
    "Jiu-Jitsu Adulto e Kids, Muay-Thai. Rua Jorge Lacerda, 1151. Fale agora pelo WhatsApp.",
  openGraph: {
    title: "ETHOS JIU JITSU ACADEMY",
    description:
      "Treinos para adultos e crianças. Muay-Thai e Jiu-Jitsu. Venha fazer uma aula experimental!",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <SEO />
        {children}
        {/* Métricas de performance da Vercel */}
        <SpeedInsights />
      </body>
    </html>
  );
}
