import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";
import "./logo.css";
import "./launch.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The True Remnant Podcast | Supernatural Truth for the Last Days",
  description: "A Christian podcast exploring the supernatural truth of Scripture, the gifts of the Holy Spirit, spiritual warfare, end-times deception and worship in spirit and truth."
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
