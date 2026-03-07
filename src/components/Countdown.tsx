import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - Date.now();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-4 sm:gap-6">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="pulse-glow fancy-border rounded-lg bg-red-dark/50 px-4 py-5 sm:px-6 sm:py-6 min-w-[70px] sm:min-w-[90px]">
              <span className="block text-center text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-gold">
                --
              </span>
            </div>
            <span className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-gold/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-6">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="pulse-glow fancy-border rounded-lg bg-red-dark/50 px-4 py-5 sm:px-6 sm:py-6 min-w-[70px] sm:min-w-[90px]">
            <span className="block text-center text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-gold">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-gold/70">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
