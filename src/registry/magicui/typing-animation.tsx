'use client';

import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  children: string;
  speed?: number;
}

export const TypingAnimation = ({ children, speed = 50 }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      // Prevent accessing undefined
      if (index < children.length) {
        setDisplayedText((prev) => prev + children.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return (
    <span className="inline-block border-r border-gray-400 pr-1 bg-gradient-to-br from-gray-300  to-[#6366f1] bg-clip-text text-transparent">
      {displayedText}
    </span>
  );
};
