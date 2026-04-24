import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '../SectionTitle';

const branches = [
  'Julio Arboleda 3857',
  'Av. Santa Fe 944',
  'Av. Diagonal Ica 784',
  'Av. Emilio Caraffa 2568',
  'Av. Mons. Pablo Cabrera 3101',
  'Fructuoso Rivera 800',
];

export default function LocationsPreview() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Nuestras sucursales"
          subtitle="Siempre hay un Fernández cerca tuyo"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {branches.map((addr, i) => (
            <motion.div
              key={addr}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <span className="font-body text-sm sm:text-base">{addr}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-8"
        >
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8 py-6 text-base font-body">
            <Link to="/sucursales">
              Ver horarios y direcciones <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}