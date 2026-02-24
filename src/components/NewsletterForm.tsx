"use client";

import { useActionState } from "react";
import { subscribe } from "@/lib/subscribe-action";

export default function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribe, null);

  if (state?.success) {
    return (
      <p className="mt-8 text-green-400 font-medium">
        You&apos;re subscribed! Check your inbox for a welcome email.
      </p>
    );
  }

  if (state?.alreadySubscribed) {
    return (
      <p className="mt-8 text-yellow-400 font-medium">
        You&apos;re already subscribed!
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="flex-1 rounded-full border border-gray-600 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yamaha-accent"
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-yamaha-blue px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isPending ? "Subscribing..." : "Subscribe"}
      </button>
      {state?.error && (
        <p className="text-red-400 text-sm mt-2">{state.error}</p>
      )}
    </form>
  );
}
