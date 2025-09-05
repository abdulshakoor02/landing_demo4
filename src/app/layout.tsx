import type { Metadata } from "next";
import { poppins, lato, fontClassNames } from "@/lib/fonts";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immigration Consultancy - Your Gateway to a New Beginning",
  description: "Expert guidance for your global immigration journey. We turn aspirations into reality.",
  keywords: "immigration, consultancy, visa, passport, immigration services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontClassNames} antialiased`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}