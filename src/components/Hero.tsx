import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1684159856398-e3625ef21293?w=2560&q=100&fit=crop"
        alt="Ballet performance"
        fill
        className="object-cover object-[75%_center]"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yamaha-dark/90 via-yamaha-dark/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-yamaha-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Yamaha Hi-Fi &middot; High End Audio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Sound Beyond
            <br />
            <span className="text-yamaha-accent">Perfection</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
            Discover our curated collection of premium amplifiers, speakers,
            turntables, and headphones. Crafted for those who hear the
            difference.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-yamaha-blue text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors"
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
