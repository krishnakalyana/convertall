import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/elements/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex "
      style={{
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,
          display: "flex",
          width: "100%",
          justifyContent: "center",
          overflow: "auto",
        }}
      >
        {children}
      </main>
      <footer></footer>
    </div>
  );
}
