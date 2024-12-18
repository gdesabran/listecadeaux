import type { Metadata } from "next";
import "./globals.css";
import { oswald, inter } from "./fonts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps de Guillaume",
  description: "Ce site regroupe les applications créés par Guillaume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-gray-50`}
      >
        <div className="text-center lg:text-6xl text-4xl py-6 font-semibold bg-indigo-600">
          <Link href="/">
            <h1 className="font-title lg:text-6xl sm:text-4xl text-2xl uppercase italic text-yellow-300">
              Apps de Guillaume
            </h1>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
