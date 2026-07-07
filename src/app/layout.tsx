import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";
import "./logo.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The True Remnant Podcast | Faithful Christian Media",
  description: "A podcast-first Christian media platform for discernment, testimony, mission and sound resources."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
