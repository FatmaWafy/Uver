import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 22,
    minutes: 43
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 my-8 text-4xl lg:text-6xl font-bold">
      <div className="text-center">
        <div className="timer-digit">{timeLeft.days.toString().padStart(2, '0')}</div>
        <div className="timer-label text-sm lg:text-base text-gray-600">days</div>
      </div>
      <div className="timer-digit text-gray-400">:</div>
      <div className="text-center">
        <div className="timer-digit">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="timer-label text-sm lg:text-base text-gray-600">hours</div>
      </div>
      <div className="timer-digit text-gray-400">:</div>
      <div className="text-center">
        <div className="timer-digit">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="timer-label text-sm lg:text-base text-gray-600">minutes</div>
      </div>
    </div>
  );
};

export default CountdownTimer;