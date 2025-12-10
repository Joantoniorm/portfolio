import { useState, useRef } from "react";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!?#$%&";

export default function ScrambleText({
  text,
  duration = 2000,
  speed = 80,
  className = ""
}) {
  const [display, setDisplay] = useState(text);
  const original = useRef(text);
  const interval = useRef(null);

  const getRandomChar = (char) => {
    if (/[A-Z]/.test(char)) {
      return UPPER[Math.floor(Math.random() * UPPER.length)];
    } else if (/[a-z]/.test(char)) {
      return LOWER[Math.floor(Math.random() * LOWER.length)];
    } else if (/[0-9]/.test(char)) {
      return NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
    } else {
      return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    }
  };

  const handleMouseEnter = () => {
    if (interval.current) clearInterval(interval.current);

    const letters = original.current.split("");
    let progress = 0;
    const totalSteps = Math.floor(duration / speed);

    interval.current = setInterval(() => {
      progress++;

      if (!interval.current) return;

      const next = letters.map((letter, i) => {
        if (i < (progress / totalSteps) * letters.length) {
          return letter;
        } else {
          return getRandomChar(letter);
        }
      });

      setDisplay(next.join(""));

      if (progress >= totalSteps) {
        clearInterval(interval.current);
        interval.current = null;
        setDisplay(original.current);
      }
    }, speed);
  };

  const handleMouseLeave = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
    setDisplay(original.current);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer inline-block transition-colors ${className}`}
    >
      {display}
    </span>
  );
}
