import { useEffect, useState } from 'react';

export default function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  delay: number = 0
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!end) return;
    
    const timeout = setTimeout(() => {
      let start = 0;
      const step = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += step;
        setCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return count;
}