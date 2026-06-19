import type { Metadata } from "next";
import "./globals.css";
import "@/styles/translo/all.min.css";
import "@/styles/translo/main.scss";
import "@/styles/translo/animate.min.css";
import "@/styles/translo/custom-animate.css";
import "@/styles/translo/responsive.css";
import "@/styles/translo/icomoon.css";
import "@/styles/translo/style-main.css";

export const metadata: Metadata = {
  title: {
    default: "Cardoil Avantaj — Reduceri la carburant & transport marfă",
    template: "%s | Cardoil Avantaj",
  },
  description:
    "Cardoil Avantaj — broker de transport și combustibil. Card combustibil, reduceri la carburant, transport marfă și platforma Gestcom pentru firme de transport din România.",
  keywords: [
    "card combustibil",
    "reduceri carburant",
    "transport marfă",
    "firma transport",
    "Cardoil Avantaj",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
