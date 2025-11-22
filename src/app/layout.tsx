import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "vxglobal – UAE Visa Assistance for 75+ Countries",
  description: "Trusted visa services in Dubai and Abu Dhabi. Door-step visa assistance for 75+ countries. Free consultation, 25% off applications, stress-free visa processing from UAE.",
  keywords: "visa services Dubai, UAE visa assistance, Schengen visa, Turkey visa, visa consultant Dubai, door-step service, business visa, tourist visa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}