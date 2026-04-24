import React from 'react';
import { motion } from 'framer-motion';

export default function MenuCategoryNav({ categories, activeCategory, onSelect }) {
  return (
    <div className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <span className="mr-1.5">{cat.emoji}</span>
                {cat.name.length > 20 ? cat.name.split(' ').slice(0, 2).join(' ') : cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}