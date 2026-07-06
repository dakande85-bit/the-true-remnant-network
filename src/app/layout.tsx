import type { Metadata } from "next";
import "./globals.css";
import "./logo.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "The True Remnant",
  description: "A Christian podcast and media platform for conversations about faith, Scripture, the Gospel, spiritual warfare, the Church, and the times we are living in."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
