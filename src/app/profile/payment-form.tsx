"use client";

import { useActionState, useState, useEffect } from "react";
import { updatePaymentMethod } from "@/lib/payment-actions";
import type { PaymentMethod } from "@/data/payment-methods";

export function PaymentForm({ method }: { method: PaymentMethod | null }) {
  const [editing, setEditing] = useState(false);
  const [state, formAction, pending] = useActionState(updatePaymentMethod, null);

  useEffect(() => {
    if (state?.success) {
      setEditing(false);
    }
  }, [state]);

  const maskedNumber = method
    ? `•••• •••• •••• ${method.cardNumber.slice(-4)}`
    : "";

  // View mode — no payment method saved
  if (!method && !editing) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-semibold text-yamaha-dark mb-4">
          Payment Method
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
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500">No payment method on file</p>
          </div>
          <button
            onClick={() => setEditing(true)}
            className="text-sm font-semibold text-yamaha-blue hover:text-yamaha-dark transition-colors cursor-pointer"
          >
            Add Payment Method
          </button>
        </div>
      </div>
    );
  }

  // View mode — payment method saved
  if (method && !editing) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-yamaha-dark">
            Payment Method
          </h2>
          <button
            onClick={() => setEditing(true)}
            className="text-sm font-semibold text-yamaha-blue hover:text-yamaha-dark transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-medium">{method.cardholderName}</p>
            <p>
              {maskedNumber} &middot; {method.expiryMonth}/{method.expiryYear}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Edit mode
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
      <h2 className="text-lg font-semibold text-yamaha-dark mb-4">
        Payment Method
      </h2>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name
          </label>
          <input
            id="cardholderName"
            name="cardholderName"
            type="text"
            required
            defaultValue={method?.cardholderName ?? ""}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
          />
        </div>

        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            required
            inputMode="numeric"
            placeholder="1234 5678 9012 3456"
            defaultValue={method ? maskedNumber : ""}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Month
            </label>
            <select
              id="expiryMonth"
              name="expiryMonth"
              required
              defaultValue={method?.expiryMonth ?? ""}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => {
                const m = String(i + 1).padStart(2, "0");
                return <option key={m} value={m}>{m}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="expiryYear" className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Year
            </label>
            <select
              id="expiryYear"
              name="expiryYear"
              required
              defaultValue={method?.expiryYear ?? ""}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yamaha-blue focus:outline-none focus:ring-1 focus:ring-yamaha-blue"
            >
              <option value="">Year</option>
              {Array.from({ length: 10 }, (_, i) => {
                const y = String(2025 + i);
                return <option key={y} value={y}>{y}</option>;
              })}
            </select>
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
            {pending ? "Saving..." : "Save Payment Method"}
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
