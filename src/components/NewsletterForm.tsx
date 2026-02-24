"use client";

import { useState, type FormEvent } from "react";
import { subscribe } from "@/lib/subscribe-action";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    error?: string;
    alreadySubscribed?: boolean;
  } | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData();
    formData.set("email", email);
    const res = await subscribe(null, formData);
    setResult(res);
    setIsPending(false);
  }

  if (result?.success) {
    return (
      <p className="mt-8 text-green-400 font-medium">
        You&apos;re subscribed! Check your inbox for a welcome email.
      </p>
    );
  }

  if (result?.alreadySubscribed) {
    return (
      <p className="mt-8 text-yellow-400 font-medium">
        You&apos;re already subscribed!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-full border border-gray-600 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yamaha-accent"
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-yamaha-blue px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isPending ? "Subscribing..." : "Subscribe"}
      </button>
      {result?.error && (
        <p className="text-red-400 text-sm mt-2">{result.error}</p>
      )}
    </form>
  );
}
