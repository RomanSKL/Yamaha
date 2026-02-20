"use client";

import { useActionState, useState, useEffect } from "react";
import { updateAddress } from "@/lib/address-actions";
import type { Address } from "@/data/addresses";

export function AddressForm({ address }: { address: Address | null }) {
  const [editing, setEditing] = useState(false);
  const [state, formAction, pending] = useActionState(updateAddress, null);

  useEffect(() => {
    if (state?.success) {
      setEditing(false);
    }
  }, [state]);

  // View mode — no address saved
  if (!address && !editing) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-yamaha-dark mb-4">
          Shipping Address
        </h2>
        <div className="flex items-center gap-4 rounded-xl border border-dashed border-gray-300 p-4">
          <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">No shipping address on file</p>
          </div>
          <button
            onClick={() => setEditing(true)}
            className="text-sm font-semibold text-yamaha-blue hover:text-yamaha-dark transition-colors cursor-pointer"
          >
            Add Shipping Address
          </button>
        </div>
      </div>
    );
  }

  // View mode — address saved
  if (address && !editing) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-yamaha-dark">
            Shipping Address
          </h2>
          <button
            onClick={() => setEditing(true)}
            className="text-sm font-semibold text-yamaha-blue hover:text-yamaha-dark transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>
        <div className="text-sm text-gray-700 space-y-1">
          <p className="font-medium">{address.fullName}</p>
          <p>{address.street}</p>
          {address.apartment && <p>{address.apartment}</p>}
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
          <p>{address.country}</p>
        </div>
      </div>
    );
  }

  // Edit mode
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h2 className="text-lg font-semibold text-yamaha-dark mb-4">
        Shipping Address
      </h2>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            defaultValue={address?.fullName ?? ""}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
          />
        </div>

        <div>
          <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            id="street"
            name="street"
            type="text"
            required
            defaultValue={address?.street ?? ""}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
          />
        </div>

        <div>
          <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
            Apartment, suite, etc. (optional)
          </label>
          <input
            id="apartment"
            name="apartment"
            type="text"
            defaultValue={address?.apartment ?? ""}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              defaultValue={address?.city ?? ""}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              required
              defaultValue={address?.state ?? ""}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              required
              defaultValue={address?.zip ?? ""}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              defaultValue={address?.country ?? ""}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
            />
          </div>
        </div>

        {state?.error && (
          <p className="text-sm text-red-600">{state.error}</p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={pending}
            className="rounded-lg bg-yamaha-blue px-4 py-2 text-sm font-semibold text-white hover:bg-yamaha-dark transition-colors disabled:opacity-50 cursor-pointer"
          >
            {pending ? "Saving..." : "Save Address"}
          </button>
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
