
import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from '@/contexts/ScrollContext';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'slide' | 'scale' | 'gradient';
  gradientFrom?: string;
  gradientTo?: string;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'fade',
  gradientFrom = 'from-blue-900/20',
  gradientTo = 'to-purple-900/20'
}: AnimatedSectionProps) => {
  const { scrollY } = useScroll();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setOffset(rect.top + scrollY);
    }
  }, [scrollY]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slide':
          return `${baseClasses} opacity-0 translate-y-20`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'gradient':
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 translate-y-10`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 scale-100`;
  };

  const parallaxOffset = (scrollY - offset) * 0.5;

  return (
    <div 
      ref={sectionRef}
      className={`relative ${getAnimationClasses()} ${className}`}
      style={{
        transform: animationType === 'slide' && isVisible 
          ? `translateY(${Math.max(parallaxOffset * -0.1, -20)}px)` 
          : undefined
      }}
    >
      {animationType === 'gradient' && isVisible && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} transition-opacity duration-1000`}
          style={{ opacity: Math.min(scrollY / 1000, 0.3) }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
