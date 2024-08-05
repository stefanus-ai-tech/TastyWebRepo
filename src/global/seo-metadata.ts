import type { Metadata } from "next";

export const SeoMetadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
  ),
  title: "",
  icons: { icon: "/favicon.ico" },
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: process.env.NEXT_PUBLIC_DOMAIN,
    siteName: "",
    locale: "id_ID",
    type: "website",
  },
  authors: [
    {
      name: "Achmad Daniel Syahputra",
      url: "https://github.com/achmaddaniel24",
    },
    // add your name here (from daniel)
    { name: "", url: "" },
    { name: "", url: "" },
    { name: "", url: "" },
  ],
  keywords: ["tasty"],
};
