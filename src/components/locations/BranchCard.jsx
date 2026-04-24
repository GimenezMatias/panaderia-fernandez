import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BranchCard({ branch, index }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${branch.mapsQuery}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl border border-border/50 p-6 sm:p-7 hover:shadow-xl hover:border-primary/20 transition-all duration-400"
    >
      {/* Header */}
      <div className="mb-4">
        {branch.highlight && (
          <div className="mb-3">
            <span className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium w-fit">
              <Star size={12} className="fill-primary" />
              {branch.highlight}
            </span>
          </div>
        )}
        <div>
          <h3 className="text-xl font-display font-semibold">{branch.name}</h3>
          <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
            <MapPin size={14} />
            <span className="text-sm font-body">{branch.address}</span>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          <Clock size={14} className="text-primary" />
          Horarios
        </div>
        {Object.entries(branch.schedule).map(([days, hours]) => (
          <div key={days} className="flex justify-between text-sm pl-5">
            <span className="text-muted-foreground">{days}</span>
            <span className="font-medium font-mono text-foreground">{hours}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        asChild
        className="w-full rounded-xl py-5 text-base font-body"
      >
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
          <Navigation size={16} className="mr-2" />
          Cómo llegar
        </a>
      </Button>
    </motion.div>
  );
}