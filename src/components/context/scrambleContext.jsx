import { createContext, useEffect, useRef } from "react";

export const ScrambleContext = createContext();

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!?#$%&";

export function ScrambleProvider({ children }) {
  const containerRef = useRef(null);

  const getRandomChar = (char) => {
    if (/[A-Z]/.test(char)) return UPPER[Math.floor(Math.random() * UPPER.length)];
    if (/[a-z]/.test(char)) return LOWER[Math.floor(Math.random() * LOWER.length)];
    if (/[0-9]/.test(char)) return NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const textNodes = [];

    // Función recursiva para recorrer todo el DOM dentro del contenedor
    const walk = (node) => {
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
          textNodes.push(child);
        } else {
          walk(child);
        }
      });
    };

    walk(containerRef.current);

    // Por cada nodo de texto, hacemos scramble
    textNodes.forEach((node) => {
      const original = node.textContent;
      let progress = 0;
      const duration = 2000;
      const speed = 40;
      const totalSteps = Math.floor(duration / speed);

      const interval = setInterval(() => {
        progress++;
        const letters = original.split("").map((char, i) => {
          const threshold = (i + 1) / original.length;
          return progress / totalSteps >= threshold ? char : getRandomChar(char);
        });
        node.textContent = letters.join("");

        if (progress >= totalSteps) {
          clearInterval(interval);
          node.textContent = original;
        }
      }, speed);
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
