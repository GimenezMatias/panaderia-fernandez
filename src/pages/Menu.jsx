import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MenuCategoryNav from '../components/menu/MenuCategoryNav';
import MenuSection from '../components/menu/MenuSection';
import { menuCategories } from '../lib/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const handleSelect = (id) => {
    setActiveCategory(id);
    const el = document.getElementById(`menu-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('menu-', '');
            setActiveCategory(id);
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    menuCategories.forEach((cat) => {
      const el = document.getElementById(`menu-${cat.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-accent py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono tracking-[0.2em] uppercase text-accent-foreground/60 mb-2"
          >
            Panadería Fernández
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-accent-foreground tracking-tight"
          >
            Nuestro Menú
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-foreground/70 font-body mt-3 max-w-lg text-base sm:text-lg"
          >
            Todo lo que necesitás para el desayuno, la merienda o simplemente darte un gusto.
          </motion.p>
        </div>
      </div>

      {/* Category Navigation */}
      <MenuCategoryNav
        categories={menuCategories}
        activeCategory={activeCategory}
        onSelect={handleSelect}
      />

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {menuCategories.map((cat) => (
          <MenuSection key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}