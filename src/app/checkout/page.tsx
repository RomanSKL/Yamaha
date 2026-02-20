import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function CheckoutPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin?callbackUrl=/checkout");
  }

  return (
    <div className="bg-yamaha-light min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-yamaha-dark mb-2">
            Checkout
          </h1>
          <p className="text-gray-500 mb-2">
            Welcome, {session.user.name}! You are signed in as{" "}
            <span className="font-medium text-yamaha-dark">
              {session.user.email}
            </span>
            .
          </p>
          <p className="text-gray-400 text-sm mb-8">
            This is a demo checkout page. Payment integration coming soon.
          </p>
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 bg-yamaha-blue text-white font-semibold px-8 py-3 rounded-full hover:bg-yamaha-dark transition-colors"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
