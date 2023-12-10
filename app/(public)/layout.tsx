import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Join Us",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionNew = await getServerSession();
  console.log("session", sessionNew?.user?.name);

  if (sessionNew || sessionNew?.user) {
    redirect("/");
  }
  return <main className="flex h-full">{children}</main>;
}
