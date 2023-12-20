import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseRootLayout from "@/components/root-layout/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alzaf Assignment",
  description: "This is a assignment for alzaf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseRootLayout>{children}</BaseRootLayout>
      </body>
    </html>
  );
}
