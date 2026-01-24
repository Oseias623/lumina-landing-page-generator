import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gold-500 text-center py-2 px-4 shadow-md">
      <span className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>¡Oferta especial! Esta promoción expira en:</span>
        <span className="font-mono bg-white text-gold-600 px-2 py-0.5 rounded-md">{display}</span>
      </span>
    </div>
  );
};

export default CountdownTimer;
