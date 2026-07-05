import type { Metadata } from "next";
import "./globals.css";
import "./logo.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "The True Remnant Network",
  description: "Christian interviews, conversations, and end-times discernment for unity around truth in Christ."
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
