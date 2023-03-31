"use client";

import { SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

export default function SignIn() {
  const user = useUser();

  //   console.log("user", user);

  return (
    <main>
      {!user.isSignedIn && <SignInButton mode="modal" />}
      {user.isSignedIn && (
        <>
          <p className="mb-2">Welcome, {user.user.fullName}!</p>
          <SignOutButton />
        </>
      )}
    </main>
  );
}
