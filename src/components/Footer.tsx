import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yamaha-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">
                YAMAHA
              </span>
              <span className="text-xs font-medium tracking-widest text-yamaha-accent uppercase">
                Hi-Fi
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium high-fidelity audio equipment. Experience sound the way
              artists intended — pure, powerful, and precise.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=amplifiers" className="hover:text-white transition-colors">
                  Amplifiers
                </Link>
              </li>
              <li>
                <Link href="/products?category=speakers" className="hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/products?category=receivers" className="hover:text-white transition-colors">
                  Receivers
                </Link>
              </li>
              <li>
                <Link href="/products?category=turntables" className="hover:text-white transition-colors">
                  Turntables
                </Link>
              </li>
              <li>
                <Link href="/products?category=headphones" className="hover:text-white transition-colors">
                  Headphones
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <span className="cursor-default">Careers</span>
              </li>
              <li>
                <span className="cursor-default">Press</span>
              </li>
              <li>
                <span className="cursor-default">Contact</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="cursor-default">Help Center</span>
              </li>
              <li>
                <span className="cursor-default">Shipping & Returns</span>
              </li>
              <li>
                <span className="cursor-default">Warranty</span>
              </li>
              <li>
                <span className="cursor-default">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Yamaha Hi-Fi. All rights reserved.
          Photos by{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Unsplash
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
