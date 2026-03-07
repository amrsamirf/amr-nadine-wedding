import { Heart, MapPin, Calendar, Clock } from "lucide-react";
import Countdown from "./components/Countdown";

const WEDDING_DATE = "2026-04-11T17:00:00";
const WEDDING_DISPLAY_DATE = "Saturday, April 11th, 2026";
const WEDDING_TIME = "5:00 PM";
const WEDDING_VENUE = "The Garden Venue";
const WEDDING_ADDRESS = "Family Park, Gate 4, New Cairo";
const WEDDING_MAP_URL = "https://maps.app.goo.gl/MGcWduSzkcBLm4PE9";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background pattern overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d6b4f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />


      <main className="relative z-10 flex flex-col items-center">

        {/* ── Hero Section (from new design) ── */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
          {/* Top decorative flourish */}
          <div className="fade-in-up mb-6">
            <svg className="mx-auto h-16 w-40 text-gold/40" viewBox="0 0 200 60" fill="none">
              <path d="M20 30 Q50 5 100 30 Q150 55 180 30" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M20 30 Q50 55 100 30 Q150 5 180 30" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="100" cy="30" r="3" fill="currentColor"/>
              <circle cx="20" cy="30" r="2" fill="currentColor"/>
              <circle cx="180" cy="30" r="2" fill="currentColor"/>
            </svg>
          </div>

          <div className="fade-in-up fade-in-up-delay-1">
            <p className="mb-8 text-base font-semibold uppercase tracking-[0.35em] text-gold font-[family-name:var(--font-playfair)]">
              Together with their families
            </p>
          </div>

          <div className="fade-in-up fade-in-up-delay-2">
            <h1 className="font-[family-name:var(--font-great-vibes)] text-7xl sm:text-8xl md:text-9xl text-gold leading-none">
              Amr
            </h1>
          </div>

          <div className="fade-in-up fade-in-up-delay-3 my-5 flex items-center gap-5">
            <span className="h-px w-14 bg-gold/50" />
            <span className="font-[family-name:var(--font-great-vibes)] text-3xl text-gold">&amp;</span>
            <span className="h-px w-14 bg-gold/50" />
          </div>

          <div className="fade-in-up fade-in-up-delay-4">
            <h1 className="font-[family-name:var(--font-great-vibes)] text-7xl sm:text-8xl md:text-9xl text-gold leading-none">
              Nadine
            </h1>
          </div>

          <div className="fade-in-up fade-in-up-delay-5 mt-10">
            <p className="text-xl sm:text-2xl font-semibold tracking-widest text-foreground font-[family-name:var(--font-playfair)]">
              Invite you to celebrate their wedding
            </p>
          </div>

          {/* Bottom decorative flourish */}
          <div className="fade-in-up fade-in-up-delay-6 mt-8">
            <svg className="mx-auto h-16 w-40 text-gold/40 rotate-180" viewBox="0 0 200 60" fill="none">
              <path d="M20 30 Q50 5 100 30 Q150 55 180 30" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M20 30 Q50 55 100 30 Q150 5 180 30" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="100" cy="30" r="3" fill="currentColor"/>
              <circle cx="20" cy="30" r="2" fill="currentColor"/>
              <circle cx="180" cy="30" r="2" fill="currentColor"/>
            </svg>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 animate-bounce">
            <svg className="h-6 w-6 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ── Details Section (original design) ── */}
        <section className="w-full max-w-4xl px-6 py-24">
          <div className="fancy-border rounded-xl bg-red-dark p-8 sm:p-12">
            {/* Section title */}
            <div className="mb-12 text-center">
              <h2 className="gold-shimmer font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold">
                Wedding Details
              </h2>
              <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gold/30" />
                <span className="text-gold text-xs">✦ ✦ ✦</span>
                <span className="h-px w-12 bg-gold/30" />
              </div>
            </div>

            {/* Details grid */}
            <div className="grid gap-8 sm:grid-cols-3">
              {/* Date */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <Calendar className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gold">
                  The Date
                </h3>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-foreground" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {WEDDING_DISPLAY_DATE}
                </p>
              </div>

              {/* Time */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gold">
                  The Time
                </h3>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-foreground" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {WEDDING_TIME}
                </p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gold">
                  The Venue
                </h3>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-foreground" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {WEDDING_VENUE}
                </p>
                <p className="text-base text-foreground mt-1" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {WEDDING_ADDRESS}
                </p>
                <a
                  href={WEDDING_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold uppercase tracking-widest text-gold border border-gold/50 rounded-full px-5 py-2 hover:bg-gold/10 transition-colors font-[family-name:var(--font-playfair)]"
                >
                  View Map
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Countdown Section (original design) ── */}
        <section className="w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="gold-shimmer font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold mb-3">
            Counting Down
          </h2>
          <p className="text-foreground text-base font-semibold tracking-widest uppercase mb-10 font-[family-name:var(--font-playfair)]">
            To Our Special Day
          </p>
          <Countdown targetDate={WEDDING_DATE} />
        </section>

        {/* ── Closing Section (from new design) ── */}
        <section className="w-full max-w-3xl px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-16 bg-gold/30" />
            <Heart className="h-4 w-4 text-gold fill-gold/40" />
            <span className="h-px w-16 bg-gold/30" />
          </div>

          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-6 leading-snug">
            Kiss Your Kids Goodnight
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-6 leading-snug">
            And
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-6 leading-snug">
            Join Us
          </p>

          <p className="text-foreground text-lg font-semibold tracking-[0.25em] uppercase font-[family-name:var(--font-playfair)]">
            Amr &amp; Nadine
          </p>

          {/* Bottom flourish */}
          <div className="mt-10">
            <svg className="mx-auto h-12 w-32 text-gold/30" viewBox="0 0 200 60" fill="none">
              <path d="M20 30 Q50 5 100 30 Q150 55 180 30" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M20 30 Q50 55 100 30 Q150 5 180 30" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="100" cy="30" r="3" fill="currentColor"/>
            </svg>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="w-full py-8 text-center border-t border-gold/10">
          <p className="text-sm text-foreground font-[family-name:var(--font-playfair)] tracking-wider">
            With love, Amr &amp; Nadine &bull; {WEDDING_DISPLAY_DATE}
          </p>
        </footer>
      </main>
    </div>
  );
}
