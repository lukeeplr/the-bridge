import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neue = localFont({
  src: "./fonts/NeueMontreal.otf",
  variable: "--font-neue",
  weight: "100 200 300 400 500 600 700 800 900",
});
const founders = localFont({
  src: "./fonts/FoundersGrotesk.woff2",
  variable: "--font-founders",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "The Bridge",
  description: "A ponte que conecta ao mundo digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`font-neue antialiased ${neue.variable} ${founders.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
