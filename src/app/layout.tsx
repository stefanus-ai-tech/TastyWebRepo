import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { SeoMetadata } from "@/global/seo-metadata";
import { cn } from "@/lib/utils";
import "@/global/styles.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = SeoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        {children}
      </body>
    </html>
  );
}
