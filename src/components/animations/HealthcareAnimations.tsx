import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface Props {
  className?: string;
}

export const PulseAnimation: React.FC<Props> = ({ className = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = anime({
      targets: elementRef.current,
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      easing: 'easeInOutSine',
      duration: 2000,
      loop: true
    });

    return () => animation.pause();
  }, []);

  return (
    <div ref={elementRef} className={`w-3 h-3 bg-primary-400 rounded-full ${className}`} />
  );
};

export const HeartbeatAnimation: React.FC<Props> = ({ className = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = anime({
      targets: elementRef.current,
      scale: [1, 1.2, 1, 1.4, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
      loop: true
    });

    return () => animation.pause();
  }, []);

  return (
    <div ref={elementRef} className={`w-4 h-4 bg-red-500 rounded-full ${className}`} />
  );
};

export const DNAAnimation: React.FC<Props> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (!elements) return;

    const animation = anime({
      targets: elements,
      translateY: function(el: Element, i: number) {
        return Math.sin(i * 0.35) * 15;
      },
      translateX: function(el: Element, i: number) {
        return Math.cos(i * 0.35) * 15;
      },
      scale: function(el: Element, i: number) {
        return 0.8 + Math.sin(i * 0.35) * 0.2;
      },
      rotate: function(el: Element, i: number) {
        return Math.sin(i * 0.35) * 45;
      },
      duration: 4000,
      loop: true,
      delay: function(el: Element, i: number) {
        return i * 100;
      },
      easing: 'easeInOutSine'
    });

    return () => animation.pause();
  }, []);

  return (
    <div ref={containerRef} className={`flex space-x-1 ${className}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div 
          key={i} 
          className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary-400' : 'bg-secondary-900'}`} 
        />
      ))}
    </div>
  );
};

export const MoleculeAnimation: React.FC<Props> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (!elements) return;

    const animation = anime({
      targets: elements,
      scale: [1, 1.2, 1],
      rotate: function(el: Element, i: number) {
        return [0, 360];
      },
      translateX: function(el: Element, i: number) {
        return [0, Math.cos(i * Math.PI * 2 / 6) * 20];
      },
      translateY: function(el: Element, i: number) {
        return [0, Math.sin(i * Math.PI * 2 / 6) * 20];
      },
      delay: function(el: Element, i: number) {
        return i * 100;
      },
      duration: 3000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });

    return () => animation.pause();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute w-3 h-3 bg-primary-400 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
};