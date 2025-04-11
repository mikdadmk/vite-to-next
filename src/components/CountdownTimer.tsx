
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Summit date: May 15, 2025
  const summitDate = new Date('2025-05-15T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = summitDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [summitDate]);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl font-bold">{timeLeft.days}</span>
        </div>
        <span className="text-xs mt-2 text-foreground/80">Days</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl font-bold">{timeLeft.hours}</span>
        </div>
        <span className="text-xs mt-2 text-foreground/80">Hours</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl font-bold">{timeLeft.minutes}</span>
        </div>
        <span className="text-xs mt-2 text-foreground/80">Minutes</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl font-bold">{timeLeft.seconds}</span>
        </div>
        <span className="text-xs mt-2 text-foreground/80">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
