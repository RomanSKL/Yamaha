import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80"
          alt="Audio equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-yamaha-dark/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-yamaha-accent text-sm font-semibold uppercase tracking-[0.2em] mb-2">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            About Yamaha Hi-Fi
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yamaha-accent text-sm font-semibold uppercase tracking-[0.2em] mb-2">
                Since 1887
              </p>
              <h2 className="text-3xl font-bold text-yamaha-dark mb-6">
                A Legacy of Sound Excellence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  For over a century, Yamaha has been at the forefront of audio
                  innovation. What began as a reed organ manufacturer in
                  Hamamatsu, Japan has evolved into one of the world&apos;s most
                  respected names in high-fidelity audio.
                </p>
                <p>
                  Our Hi-Fi division represents the pinnacle of Yamaha&apos;s
                  audio engineering — where decades of experience in crafting
                  musical instruments meets cutting-edge electronic design.
                  Every amplifier, speaker, and turntable we create is built on
                  one fundamental principle: True Sound.
                </p>
                <p>
                  True Sound means reproducing music exactly as the artist
                  intended — no coloring, no distortion, just pure, honest
                  audio. It&apos;s this philosophy that drives everything we do,
                  from our entry-level components to our reference-grade
                  flagship systems.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
                alt="Yamaha craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-yamaha-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yamaha-accent text-sm font-semibold uppercase tracking-[0.2em] mb-2">
              Our Values
            </p>
            <h2 className="text-3xl font-bold text-yamaha-dark">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yamaha-blue/10 text-yamaha-blue mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yamaha-dark mb-3">
                True Sound
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in reproducing music faithfully — capturing every
                nuance, every breath, every emotion exactly as the artist
                intended. No artificial coloring, just pure sonic truth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yamaha-blue/10 text-yamaha-blue mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yamaha-dark mb-3">
                Japanese Craftsmanship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every component is engineered with meticulous attention to
                detail. From hand-selected capacitors to precision-machined
                chassis, quality is embedded in every step of production.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yamaha-blue/10 text-yamaha-blue mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yamaha-dark mb-3">
                Continuous Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From pioneering natural sound to developing proprietary Zylon
                speaker diaphragms, we never stop pushing the boundaries of
                what&apos;s possible in audio reproduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-yamaha-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white">137+</div>
              <div className="mt-2 text-sm text-gray-400">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">30+</div>
              <div className="mt-2 text-sm text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="mt-2 text-sm text-gray-400">Audio Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">1M+</div>
              <div className="mt-2 text-sm text-gray-400">Happy Audiophiles</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-yamaha-dark mb-4">
            Ready to Experience True Sound?
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Explore our collection and discover why audiophiles worldwide trust
            Yamaha for their listening journey.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-yamaha-blue text-white font-semibold px-10 py-3.5 rounded-full hover:bg-yamaha-dark transition-colors"
          >
            Explore Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
