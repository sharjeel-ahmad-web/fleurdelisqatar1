import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isClicked ? 0.85 : isHovered ? 1.25 : 1})`,
      }}
    >
      {/* Outer ambient glow halo */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isHovered
            ? 'w-10 h-10 -left-2 -top-2 bg-[#C29B38]/20 ring-1 ring-[#C29B38]/40 scale-100'
            : 'w-6 h-6 -left-0 -top-0 bg-[#C29B38]/5 scale-75'
        }`}
      />

      {/* Feminine Face Silhouette / Fleur Cursor Icon */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-colors duration-200 ${
            isHovered ? 'text-[#C29B38]' : 'text-[#1E252B]'
          }`}
        >
          {/* Subtle Silhouette Profile Path */}
          <path
            d="M11 4C10.2 4.5 9.5 5.5 9.4 6.8C9.2 7.8 9.5 8.8 9.9 9.5C9.9 9.8 9.3 10.2 8.9 10.7C8.6 11 8.8 11.4 9.4 11.4C9.6 11.4 10 11.2 10.2 11C10 11.6 10 12.2 10.2 12.6C10.6 13.5 11.5 14 12 14.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Flowing Hair Curls */}
          <path
            d="M12 4C13.5 4 15 5.2 15.2 6.8C15.5 8.5 14.8 10.5 14 12C13.5 13 13.2 15 13.5 17C13.8 19 15 20 16 19"
            stroke="#C29B38"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          {/* Subtle Arabesque Accent Dot */}
          <circle cx="12" cy="7" r="0.75" fill="#C29B38" />
        </svg>
      </div>
    </div>
  );
};
