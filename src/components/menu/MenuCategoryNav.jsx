import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MenuCategoryNav({ categories, activeCategory, onSelect }) {
  const scrollContainerRef = useRef(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);
  const scrollTimeoutRef = useRef(null);

  // Scroll active button to center - synchronized with selection
  useEffect(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    if (!scrollContainerRef.current) return;
    
    const activeButton = scrollContainerRef.current.querySelector('[data-active="true"]');
    if (activeButton) {
      const container = scrollContainerRef.current;
      const buttonOffset = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;
      const containerWidth = container.offsetWidth;
      
      // Center the active button
      const scrollPosition = buttonOffset - (containerWidth / 2) + (buttonWidth / 2);
      container.scrollLeft = scrollPosition;
    }
  }, [activeCategory]);

  // Handle scroll gradient visibility
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftGradient(scrollLeft > 10);
    setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    handleScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      container?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Left gradient (mobile only) */}
        {showLeftGradient && (
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background/95 to-transparent z-10 sm:hidden" />
        )}
        
        {/* Right gradient (mobile only) */}
        {showRightGradient && (
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background/95 to-transparent z-10 sm:hidden" />
        )}
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            
            return (
              <button
                key={cat.id}
                data-active={isActive}
                onClick={() => onSelect(cat.id)}
                className={`relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <span className="mr-1.5">{cat.emoji}</span>
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}