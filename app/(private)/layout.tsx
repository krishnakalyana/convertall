import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/elements/navbar/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Loading from "./loading";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionNew = await getServerSession();
  console.log("session", sessionNew?.user?.name);

  if (!sessionNew || !sessionNew.user) {
    redirect("/api/auth/signin");
  }
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
        <Suspense fallback={<Loading />}>
          <Loading />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}
