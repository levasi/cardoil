import type { Metadata } from "next";
import { TransloFooter } from "@/components/translo/footer";
import { TransloHeader } from "@/components/translo/header";
import "./globals.css";
import "@/styles/translo/index.css";

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
      <body>
        <div className="body-dark-bg homeTwo">
          <div className="fix">
            <TransloHeader />
            {children}
            <TransloFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
