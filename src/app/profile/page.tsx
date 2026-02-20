import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAddress } from "@/data/addresses";
import { getPaymentMethod } from "@/data/payment-methods";
import { AddressForm } from "./address-form";
import { PaymentForm } from "./payment-form";
import { SignOutButton } from "./sign-out-button";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin?callbackUrl=/profile");
  }

  const initials = session.user.name
    ? session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <div className="bg-yamaha-light min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-yamaha-dark mb-8">Profile</h1>

        {/* User Info */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <div className="flex items-center gap-4">
            {session.user.image ? (
              <img
                src={session.user.image}
                alt=""
                className="h-16 w-16 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-yamaha-blue text-white text-xl font-bold flex items-center justify-center">
                {initials}
              </div>
            )}
            <div>
              <p className="text-lg font-semibold text-yamaha-dark">
                {session.user.name}
              </p>
              <p className="text-sm text-gray-500">{session.user.email}</p>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <AddressForm address={await getAddress(session.user.id!)} />

        {/* Payment Method */}
        <PaymentForm method={await getPaymentMethod(session.user.id!)} />

        {/* Sign Out */}
        <SignOutButton />
      </div>
    </div>
  );
}
