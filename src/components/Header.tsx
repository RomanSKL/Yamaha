"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";
import UserMenu from "./UserMenu";

export default function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-yamaha-dark">
                YAMAHA
              </span>
              <span className="ml-2 text-xs font-medium tracking-widest text-yamaha-blue uppercase">
                Hi-Fi
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-yamaha-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-yamaha-blue transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-yamaha-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/cart"
              className="relative flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-yamaha-blue transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-yamaha-blue text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <UserMenu />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-yamaha-blue"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-yamaha-blue"
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-yamaha-blue"
            >
              About
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-yamaha-blue"
            >
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
            <div className="pt-2 border-t border-gray-100">
              <UserMenu />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
