"use client";

import { SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

export default function SignIn() {
  const user = useUser();

  return (
    <main>
      {!user.isSignedIn && <SignInButton />}
      {!!user.isSignedIn && <SignOutButton />}
    </main>
  );
}
