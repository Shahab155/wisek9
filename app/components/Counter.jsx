"use client";
import { useState, useEffect, useRef } from "react";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Validate end prop
    if (!Number.isInteger(end) || end <= 0) {
      console.warn(`Invalid end prop: ${end}. Counter will not animate.`);
      return;
    }

    let animationFrameId;
    const duration = 2000; // 2 seconds for smooth animation
    const startTime = performance.now();

    const animateCounter = (currentTime) => {
      if (!hasAnimated) {
        console.log("Animating counter...");
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Normalize to [0, 1]
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCounter);
        } else {
          setCount(end); // Ensure exact end value
          setHasAnimated(true);
          console.log("Counter animation completed.");
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("IntersectionObserver triggered:", entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimated) {
          animationFrameId = requestAnimationFrame(animateCounter);
        }
      },
      {
        threshold: 0, // Trigger when any part of element is visible
        rootMargin: "100px", // Trigger 100px before/after element
      }
    );

    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      if (ref.current && !hasAnimated) {
        const rect = ref.current.getBoundingClientRect();
        const isInViewport =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        if (isInViewport) {
          console.log("Element already in viewport, starting animation...");
          animationFrameId = requestAnimationFrame(animateCounter);
        }
      }
    };

    if (ref.current) {
      observer.observe(ref.current);
      checkInitialVisibility(); // Check immediately on mount
    }

    // Fallback: Start animation after 2 seconds if observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
        console.log("Fallback timer triggered, starting animation...");
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    }, 2000);

    return () => {
      console.log("Cleaning up Counter component...");
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      clearTimeout(fallbackTimer);
    };
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-primary text-3xl font-bold">{count}</span>
      <span className="text-white text-sm">{label}</span>
    </div>
  );
};

export default Counter;