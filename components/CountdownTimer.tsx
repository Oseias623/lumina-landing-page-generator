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
    <div className="fixed top-0 left-0 right-0 z-[60] bg-navy-900 text-center py-2 px-4 shadow-md">
      <span className="text-gold-400 font-bold text-sm sm:text-base tracking-wide">
        ¡Oferta especial! Esta promoción expira en: <span className="font-mono text-white">{display}</span>
      </span>
    </div>
  );
};

export default CountdownTimer;
