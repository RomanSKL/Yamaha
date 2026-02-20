"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="w-full bg-white rounded-2xl border border-gray-100 p-4 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
    >
      Sign Out
    </button>
  );
}
