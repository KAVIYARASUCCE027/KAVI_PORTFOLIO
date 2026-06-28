import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { AmbientBackground } from "@/components/effects/AmbientBackground";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { ScrollTriggerProvider } from "@/components/effects/ScrollTriggerProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Kaviyarasu M | Cloud & DevOps Engineer & AI Enthusiast",
  description:
    "Premium portfolio of Kaviyarasu M — building scalable applications, cloud-native solutions, and AI-powered systems.",
  keywords: [
    "Kaviyarasu M",
    "Backend Developer",
    "DevOps",
    "AI Engineer",
    "Cloud Computing",
    "Portfolio",
  ],
  authors: [{ name: "Kaviyarasu M" }],
  openGraph: {
    title: "Kaviyarasu M | Cloud & DevOps Engineer",
    description:
      "Building scalable applications, cloud-native solutions, and AI-powered systems that make a difference.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-white`}
      >
        <SmoothScrollProvider>
          <AmbientBackground />
          <CursorGlow />
          <NoiseOverlay />
          <ScrollTriggerProvider />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
