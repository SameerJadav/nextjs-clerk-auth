"use client";

import { SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

export default function SignIn() {
  const { isSignedIn, user } = useUser();

  return (
    <main>
      {!isSignedIn && <SignInButton mode="modal" />}
      {isSignedIn && (
        <>
          <p className="mb-2">Welcome, {user.username}!</p>
          <SignOutButton />
        </>
      )}
    </main>
  );
}
