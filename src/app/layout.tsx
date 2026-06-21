import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The True Remnant Network",
  description: "A trusted Christian network for faithful voices, ministries, missions and resources."
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
