// src/hooks/useScrollFadeIn.js
import { useEffect, useRef } from 'react';

function useScrollFadeIn() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return ref;
}

export default useScrollFadeIn;
