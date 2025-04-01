"use client";
import { useEffect, useRef } from 'react';

type TextRevealProps = {
  text: string;
  delay?: number;
};

export default function TextReveal({ text, delay = 100 }: TextRevealProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = text.split('');
    textRef.current!.innerHTML = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.opacity = '0';
      span.style.transition = `opacity 0.5s ease ${index * delay}ms`;
      textRef.current!.appendChild(span);

      requestAnimationFrame(() => {
        span.style.opacity = '1';
      });
    });
  }, [text, delay]);

  return <h1 ref={textRef} className="text-3xl font-bold"></h1>;
}