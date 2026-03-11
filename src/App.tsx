import { Heart, MapPin, Calendar, Clock } from "lucide-react";
import Countdown from "./components/Countdown";
import type { CSSProperties } from "react";

function FloralCorner({ className, style }: Readonly<{ className?: string; style?: CSSProperties }>) {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      {/* Main diagonal stem */}
      <path d="M8 152 C 40 120 90 80 148 12" stroke="#3d6b4f" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Side branch left */}
      <path d="M30 128 C 10 115 5 95 18 88" stroke="#3d6b4f" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      {/* Side branch right */}
      <path d="M80 80 C 95 62 88 42 100 38" stroke="#3d6b4f" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      {/* Leaf 1 */}
      <path d="M48 110 C 62 90 82 95 70 110 C 58 122 44 120 48 110Z" fill="#3d6b4f"/>
      <path d="M48 110 C 58 102 70 110" stroke="#2d4f3a" strokeWidth="0.5" fill="none"/>
      {/* Leaf 2 */}
      <path d="M42 118 C 28 108 26 88 38 101 C 46 111 44 122 42 118Z" fill="#5a8a6a"/>
      {/* Leaf 3 */}
      <path d="M75 82 C 89 62 109 67 97 82 C 85 94 71 92 75 82Z" fill="#3d6b4f"/>
      <path d="M75 82 C 85 75 97 82" stroke="#2d4f3a" strokeWidth="0.5" fill="none"/>
      {/* Leaf 4 */}
      <path d="M69 90 C 55 80 53 60 65 73 C 73 83 71 94 69 90Z" fill="#5a8a6a"/>
      {/* Leaf 5 upper */}
      <path d="M108 50 C 122 30 142 35 130 50 C 118 62 104 60 108 50Z" fill="#3d6b4f"/>
      {/* Rose at tip - outer petals */}
      <ellipse cx="148" cy="12" rx="5" ry="8" fill="#8b1a1a" opacity="0.9"/>
      <ellipse cx="148" cy="12" rx="8" ry="5" fill="#8b1a1a" opacity="0.9"/>
      <ellipse cx="148" cy="12" rx="5" ry="8" fill="#b82e2e" opacity="0.65" transform="rotate(45 148 12)"/>
      <ellipse cx="148" cy="12" rx="5" ry="8" fill="#b82e2e" opacity="0.65" transform="rotate(-45 148 12)"/>
      {/* Rose center */}
      <circle cx="148" cy="12" r="4" fill="#6b1010"/>
      <circle cx="148" cy="12" r="2" fill="#d4a853"/>
      {/* Small bud left branch */}
      <circle cx="18" cy="88" r="3" fill="#8b1a1a" opacity="0.75"/>
      <ellipse cx="18" cy="84" rx="1.5" ry="3" fill="#b82e2e" opacity="0.75"/>
      <ellipse cx="22" cy="88" rx="3" ry="1.5" fill="#b82e2e" opacity="0.75"/>
      {/* Small bud right branch */}
      <circle cx="100" cy="38" r="3" fill="#8b1a1a" opacity="0.75"/>
      <ellipse cx="100" cy="34" rx="1.5" ry="3" fill="#b82e2e" opacity="0.75"/>
      <ellipse cx="96" cy="38" rx="3" ry="1.5" fill="#8b1a1a" opacity="0.75"/>
    </svg>
  );
}

const WEDDING_DATE = "2026-04-11T17:00:00";
const WEDDING_DISPLAY_DATE = "Saturday, April 11th, 2026";
const WEDDING_TIME = "5:00 PM";
const WEDDING_VENUE = "The Garden Venue";
const WEDDING_ADDRESS = "Family Park, Gate 4, New Cairo";
const WEDDING_MAP_URL = "https://maps.app.goo.gl/MGcWduSzkcBLm4PE9";

const CONTENT = {
  en: {
    lang: "en",
    dir: "ltr",
    switchLabel: "العربية",
    family: "Together with their families",
    invite: "Invite you to celebrate their wedding",
    details: "Wedding Details",
    dateLabel: "The Date",
    timeLabel: "The Time",
    venueLabel: "The Venue",
    addToCalendar: "Add to Calendar",
    viewMap: "View Map",
    countdownTitle: "Counting Down",
    countdownSubtitle: "To Our Special Day",
    countdownLabels: ["Days", "Hours", "Minutes", "Seconds"] as const,
    closingLines: ["Kiss Your Kids Goodnight", "And", "Join Us"],
    signature: "Amr & Nadine",
    footer: "With love, Amr & Nadine",
    displayDate: WEDDING_DISPLAY_DATE,
    calendarSummary: "Amr & Nadine Wedding",
    calendarDescription: "Wedding celebration",
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    switchLabel: "English",
    family: "بدعوة من عائلتيهما",
    invite: "يدعوانكم لمشاركتهما فرحة الزفاف",
    details: "تفاصيل الحفل",
    dateLabel: "التاريخ",
    timeLabel: "الوقت",
    venueLabel: "المكان",
    addToCalendar: "أضف إلى التقويم",
    viewMap: "عرض الموقع",
    countdownTitle: "العد التنازلي",
    countdownSubtitle: "حتى يومنا المميز",
    countdownLabels: ["أيام", "ساعات", "دقائق", "ثوانٍ"] as const,
    closingLines: ["قبّلوا أطفالكم تصبحون على خير", "و", "انضموا إلينا"],
    signature: "عمرو و نادين",
    footer: "مع الحب، عمرو و نادين",
    displayDate: "السبت، 11 أبريل 2026",
    calendarSummary: "زفاف عمرو و نادين",
    calendarDescription: "حفل الزفاف",
  },
} as const;

type Language = keyof typeof CONTENT;

function formatCalendarDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

interface AppProps {
  initialLanguage: Language;
}

export default function App({ initialLanguage }: Readonly<AppProps>) {
  const content = CONTENT[initialLanguage];
  const isArabic = initialLanguage === "ar";
  const switchHref = isArabic ? "../" : "./ar/";
  const weddingStart = new Date(WEDDING_DATE);
  const weddingEnd = new Date(weddingStart.getTime() + 4 * 60 * 60 * 1000);
  const calendarFile = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Amr and Nadine Wedding//EN",
    "BEGIN:VEVENT",
    `UID:amr-nadine-wedding-${formatCalendarDate(weddingStart)}@wedding`,
    `DTSTAMP:${formatCalendarDate(new Date())}`,
    `DTSTART:${formatCalendarDate(weddingStart)}`,
    `DTEND:${formatCalendarDate(weddingEnd)}`,
    `SUMMARY:${content.calendarSummary}`,
    `LOCATION:${WEDDING_VENUE}, ${WEDDING_ADDRESS}`,
    `DESCRIPTION:${content.calendarDescription} - ${content.displayDate} ${WEDDING_TIME} - ${WEDDING_VENUE}, ${WEDDING_ADDRESS}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");
  const calendarHref = `data:text/calendar;charset=utf-8,${encodeURIComponent(calendarFile)}`;

  return (
    <div className="relative min-h-screen overflow-hidden" dir={content.dir} lang={content.lang}>
      {/* Background pattern overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d6b4f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />


      <main className="relative z-10 flex flex-col items-center">
        <div className="fixed top-4 z-20 w-full px-6">
          <div className={`mx-auto flex max-w-6xl ${isArabic ? "justify-start" : "justify-end"}`}>
            <a
              href={switchHref}
              className="inline-block text-sm font-semibold tracking-widest text-gold border border-gold/50 rounded-full px-5 py-2 hover:bg-gold/10 transition-colors font-[family-name:var(--font-playfair)] bg-background/80 backdrop-blur-sm"
            >
              {content.switchLabel}
            </a>
          </div>
        </div>

        {/* ── Hero Section (from new design) ── */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center overflow-hidden">
          {/* Floral corner decorations */}
          <FloralCorner className="pointer-events-none absolute top-0 left-0 w-44 sm:w-64 h-44 sm:h-64 opacity-20" style={{ transform: "scaleX(-1) scaleY(-1)" }} />
          <FloralCorner className="pointer-events-none absolute top-0 right-0 w-44 sm:w-64 h-44 sm:h-64 opacity-20" style={{ transform: "scaleY(-1)" }} />
          <FloralCorner className="pointer-events-none absolute bottom-0 left-0 w-44 sm:w-64 h-44 sm:h-64 opacity-20" style={{ transform: "scaleX(-1)" }} />
          <FloralCorner className="pointer-events-none absolute bottom-0 right-0 w-44 sm:w-64 h-44 sm:h-64 opacity-20" />
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
            <p className={`mb-8 text-base font-semibold text-gold font-[family-name:var(--font-playfair)] ${isArabic ? "tracking-normal" : "uppercase tracking-[0.35em]"}`}>
              {content.family}
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
            <p className={`text-xl sm:text-2xl font-semibold text-foreground font-[family-name:var(--font-playfair)] ${isArabic ? "tracking-normal leading-loose" : "tracking-widest"}`}>
              {content.invite}
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
                {content.details}
              </h2>
              <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                <FloralCorner className="w-10 h-10 opacity-50" style={{ transform: "scaleX(-1)" }} />
                <span className="text-gold text-xs">✦ ✦ ✦</span>
                <FloralCorner className="w-10 h-10 opacity-50" />
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
                  {content.dateLabel}
                </h3>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-foreground" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {content.displayDate}
                </p>
                <a
                  href={calendarHref}
                  download="amr-nadine-wedding.ics"
                  className="mt-3 inline-block text-sm font-semibold uppercase tracking-widest text-gold border border-gold/50 rounded-full px-5 py-2 hover:bg-gold/10 transition-colors font-[family-name:var(--font-playfair)]"
                >
                  {content.addToCalendar}
                </a>
              </div>

              {/* Time */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gold">
                  {content.timeLabel}
                </h3>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-foreground" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {isArabic ? "5:00 مساءً" : WEDDING_TIME}
                </p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gold">
                  {content.venueLabel}
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
                  {content.viewMap}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Countdown Section (original design) ── */}
        <section className="w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="gold-shimmer font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold mb-3">
            {content.countdownTitle}
          </h2>
          <p className={`text-foreground text-base font-semibold mb-10 font-[family-name:var(--font-playfair)] ${isArabic ? "tracking-normal" : "tracking-widest uppercase"}`}>
            {content.countdownSubtitle}
          </p>
          <Countdown targetDate={WEDDING_DATE} labels={content.countdownLabels} />
        </section>

        {/* ── Closing Section (from new design) ── */}
        <section className="w-full max-w-3xl px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-16 bg-gold/30" />
            <Heart className="h-4 w-4 text-gold fill-gold/40" />
            <span className="h-px w-16 bg-gold/30" />
          </div>

          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-6 leading-snug">
            {content.closingLines[0]}
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-6 leading-snug">
            {content.closingLines[1]}
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-6 leading-snug">
            {content.closingLines[2]}
          </p>

          <p className={`text-foreground text-lg font-semibold font-[family-name:var(--font-playfair)] ${isArabic ? "tracking-normal" : "tracking-[0.25em] uppercase"}`}>
            {content.signature}
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
            {content.footer} &bull; {content.displayDate}
          </p>
        </footer>
      </main>
    </div>
  );
}
