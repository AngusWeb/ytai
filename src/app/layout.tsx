import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// --- UPDATE THIS METADATA ---
export const metadata: Metadata = {
  title: "YouTube AI Companion - Enhance Your Viewing with AI Insights",
  description:
    "Enhances YouTube with AI tools: fact-checking, vocabulary, simplification, outlines & timestamps, Q&A directly in the YouTube interface.",
  // Add keywords, open graph tags etc. later if needed
};
// --- ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add link to your favicon */}
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
