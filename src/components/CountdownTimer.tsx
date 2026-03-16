import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-09-04T09:00:00-03:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "DIAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="countdown-box rounded-xl w-20 h-24 sm:w-24 sm:h-28 flex flex-col items-center justify-center"
        >
          <span className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            {String(block.value).padStart(2, "0")}
          </span>
          <span className="text-xs text-muted-foreground font-display font-medium tracking-wider">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
