import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = `${import.meta.env.BASE_URL}images/hero.jpg`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Interior de Panadería Fernández con panes artesanales recién horneados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/70 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase mb-4"
          >
            Panadería y Café · Córdoba
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold text-white leading-[0.95] tracking-tight"
          >
            Panadería
            <br />
            <span className="italic font-light" style={{ color: '#D4AF37' }}>Fernández</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/80 font-body text-lg sm:text-xl mt-6 max-w-lg leading-relaxed"
          >
            Pan fresco, café de verdad y el sabor de siempre. 
            6 sucursales para que siempre tengas una cerca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10"
          >
            <Button asChild size="lg" className="text-base px-8 py-6 rounded-xl font-body font-medium">
              <Link to="/menu">
                <UtensilsCrossed size={20} className="mr-2" />
                Ver Menú
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl font-body font-medium bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <Link to="/sucursales">
                <MapPin size={20} className="mr-2" />
                Sucursales
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl font-body font-medium bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <a href="tel:+548816170">
                <Phone size={20} className="mr-2" />
                Llamanos
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient for smooth scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}