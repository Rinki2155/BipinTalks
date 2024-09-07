import React from 'react'
import { useEffect, useRef } from 'react';


function AnimationScroll() {
    const elementsRef = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-rise');
          } else {
            entry.target.classList.remove('animate-rise');
          }
        });
      });
  
      elementsRef.current.forEach((element) => {
        if (element) observer.observe(element);
      });
  
      return () => {
        elementsRef.current.forEach((element) => {
          if (element) observer.unobserve(element);
        });
      };
    }, []);
  
    return elementsRef;
}

export default AnimationScroll