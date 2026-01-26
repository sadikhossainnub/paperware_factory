// 🚀 Smooth Scroll Enhancement Component
import React from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  React.useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Smooth scroll enhancement with momentum
    let isScrolling: NodeJS.Timeout;
    
    const handleScroll = () => {
      window.clearTimeout(isScrolling);
      document.body.classList.add('is-scrolling');
      
      isScrolling = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return <>{children}</>;
}
