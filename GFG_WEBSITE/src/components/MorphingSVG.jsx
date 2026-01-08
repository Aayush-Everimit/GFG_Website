import React, { useEffect, useRef } from 'react';
import { animate, svg, utils } from 'animejs';

const MorphingSVG = () => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);

  // The helper function to generate random points (moved inside or outside)
  const generatePoints = () => {
    const total = utils.random(4, 64);
    const r1 = utils.random(4, 56);
    const r2 = 56;
    const isOdd = (n) => n % 2;
    let points = '';
    for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
      const r = isOdd(i) ? r1 : r2;
      const a = (2 * Math.PI * i / l) - Math.PI / 2;
      const x = 152 + utils.round(r * Math.cos(a), 0);
      const y = 56 + utils.round(r * Math.sin(a), 0);
      points += `${x},${y} `;
    }
    return points;
  };

  useEffect(() => {
    const $path1 = path1Ref.current;
    const $path2 = path2Ref.current;

    function animateRandomPoints() {
      // 1. Update the hidden path with new random coordinates
      utils.set($path2, { points: generatePoints() });

      // 2. Morph the visible path to match the hidden path's new shape
      animate($path1, {
        points: svg.morphTo($path2),
        ease: 'inOutCirc',
        duration: 500,
        onComplete: animateRandomPoints, // Recursive call for infinite loop
      });
    }

    animateRandomPoints();

    // Cleanup: animejs handles basic stop, but recursion continues 
    // unless the component unmounts.
    return () => {
      // Optional: stop animations on unmount if needed
    };
  }, []);

  return (
    <svg viewBox="0 0 304 112" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#39FF14' }} />
          <stop offset="100%" style={{ stopColor: '#808080' }} />
        </linearGradient>
      </defs>
      <g
        strokeWidth="2"
        stroke="url(#morphGradient)"
        strokeLinejoin="round"
        fill="none"
        fillRule="evenodd"
      >
        <polygon 
          ref={path1Ref} 
          id="path-1" 
          points="152,4 170,38 204,56 170,74 152,108 134,74 100,56 134,38" 
        />
        <polygon 
          ref={path2Ref} 
          style={{ opacity: 0 }} 
          id="path-2" 
          points="152,4 170,38 204,56 170,74 152,108 134,74 100,56 134,38" 
        />
      </g>
    </svg>
  );
};

export default MorphingSVG;