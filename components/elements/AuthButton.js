"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
const AuthButton = () => {
  const { data: session } = useSession();
  const btnClasses = "h-7 w-full";
  if (session) {
    return (
      <Button
        variant="outline"
        className={btnClasses}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    );
  } else {
    return (
      <Button variant="outline" className={btnClasses} onClick={() => signIn()}>
        Sign In
      </Button>
    );
  }
};
export default AuthButton;
