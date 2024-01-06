"use client"
import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        return prevDots === '...' ? '' : `${prevDots}.`;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center">
      <span className="mr-2">Assistant is typing</span>
      <div className="animate-typing">{dots}</div>
    </div>
  );
};

export default TypingAnimation;
