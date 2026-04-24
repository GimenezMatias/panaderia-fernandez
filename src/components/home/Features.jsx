import React from 'react';
import { motion } from 'framer-motion';
import { Croissant, Clock, MapPin, Heart } from 'lucide-react';

const features = [
  {
    icon: Croissant,
    title: 'Horneado del día',
    description: 'Facturas, medialunas y pan recién salidos del horno, todos los días.',
  },
  {
    icon: Clock,
    title: 'Abrimos temprano',
    description: 'Desde las 6 de la mañana para que arranques bien el día.',
  },
  {
    icon: MapPin,
    title: '6 sucursales',
    description: 'Siempre hay un Fernández cerca tuyo en Córdoba.',
  },
  {
    icon: Heart,
    title: 'Sabor familiar',
    description: 'Recetas de siempre, hechas con cariño para compartir.',
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}