import React from 'react';
import { motion } from 'framer-motion';
import BranchCard from '../components/locations/BranchCard';
import { branches } from '../lib/branchesData';

export default function Locations() {
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
            6 sucursales en Córdoba
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-accent-foreground tracking-tight"
          >
            Sucursales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-foreground/70 font-body mt-3 max-w-lg text-base sm:text-lg"
          >
            Encontrá la sucursal más cercana, con dirección, horarios y cómo llegar.
          </motion.p>
        </div>
      </div>

      {/* Branches Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <BranchCard key={branch.id} branch={branch} index={i} />
          ))}
        </div>
      </div>

      {/* Map Embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-border/50"
        >
          <iframe
            title="Panadería Fernández sucursales en Córdoba"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108908.82612984684!2d-64.26051!3d-31.4135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmEsIEPDs3Jkb2JhLCBBcmdlbnRpbmE!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}