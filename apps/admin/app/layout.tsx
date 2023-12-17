import "@repo/ui/styles/global.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hedge",
  description: "The administration dashboard for Hedge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
