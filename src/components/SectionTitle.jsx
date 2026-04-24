import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 sm:mb-14"
    >
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-semibold tracking-tight ${
        light ? 'text-accent-foreground' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg font-body max-w-xl mx-auto ${
          light ? 'text-accent-foreground/70' : 'text-muted-foreground'
        }`}>
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`w-16 h-0.5 mx-auto mt-5 ${light ? 'bg-accent-foreground/30' : 'bg-primary/40'}`}
      />
    </motion.div>
  );
}