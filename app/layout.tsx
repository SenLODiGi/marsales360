import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "MarSales360 — Growth-Focused Marketing Agency",
  description: "Strategy-first digital marketing agency helping startups, entrepreneurs, and SMEs grow with AI-powered marketing systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
