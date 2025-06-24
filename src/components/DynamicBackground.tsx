
import React from 'react';
import { useScroll } from '@/contexts/ScrollContext';

const DynamicBackground = () => {
  const { scrollProgress, scrollY } = useScroll();
  
  const getBackgroundStyle = () => {
    const hue1 = 220 + (scrollProgress * 60); // Blue to purple transition
    const hue2 = 280 + (scrollProgress * 40); // Purple to pink transition
    const opacity = 0.1 + (scrollProgress * 0.2);
    
    return {
      background: `
        radial-gradient(circle at 20% 80%, hsla(${hue1}, 70%, 50%, ${opacity}) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, hsla(${hue2}, 70%, 50%, ${opacity}) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, hsla(${hue1 + 20}, 70%, 50%, ${opacity * 0.5}) 0%, transparent 50%)
      `,
      transform: `translateY(${scrollY * 0.3}px)`,
      transition: 'background 0.3s ease-out'
    };
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={getBackgroundStyle()}
    />
  );
};

export default DynamicBackground;
