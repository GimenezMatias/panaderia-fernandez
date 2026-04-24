import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function MenuSection({ category }) {
  return (
    <motion.div
      id={`menu-${category.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-36"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.emoji}</span>
        <h2 className="text-2xl sm:text-3xl font-display font-semibold">{category.name}</h2>
      </div>

      <div className="space-y-1">
        {category.items.map((item, i) => (
          <motion.div
            key={`${category.id}-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.4 }}
            className="flex items-start justify-between gap-4 py-3 px-3 sm:px-4 rounded-lg hover:bg-secondary/50 transition-colors duration-200 group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-body font-medium text-base">{item.name}</span>
                {item.best && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <Star size={10} className="fill-primary" />
                    Más vendido
                  </span>
                )}
              </div>
              {item.desc && (
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
              )}
            </div>
            {item.price && (
              <span className="font-display font-bold text-lg text-primary whitespace-nowrap flex-shrink-0 group-hover:scale-105 transition-transform">
                {item.price}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}