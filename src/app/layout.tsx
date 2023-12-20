// "use client";
import "@/style/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BaseRootLayout from "@/components/root-layout/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Assignment",
  description: "This is a assignment for test",
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
