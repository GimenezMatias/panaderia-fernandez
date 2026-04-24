import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '../SectionTitle';

const PASTRY_IMAGE = `${import.meta.env.BASE_URL}images/exterior.jpg`;
const MENU_IMAGE = `${import.meta.env.BASE_URL}images/fachada.jpg`;

const bestSellers = [
  { name: 'Combo Clásico', desc: 'Infusión + 2 medialunas', price: '$7.700', tag: 'Más vendido' },
  { name: 'Combo Torta', desc: 'Infusión + porción de torta a elección', price: '$10.500', tag: 'Más vendido' },
  { name: 'Café para llevar', desc: 'Infusión a elección', price: '$5.000', tag: 'Más vendido' },
  { name: '½ Docena de facturas', desc: 'Facturas surtidas', price: '$6.500', tag: 'Más vendido' },
  { name: 'Sándwich de miga', desc: 'Jamón y queso', price: '$3.700', tag: 'Más vendido' },
  { name: '¼ Criollos', desc: 'Hojaldre o comunes', price: '$2.800', tag: 'Panadería' },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Lo más pedido"
          subtitle="Los favoritos de nuestros clientes"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg sticky top-28">
              <img src={PASTRY_IMAGE} alt="Facturas argentinas frescas" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
              <img src={MENU_IMAGE} alt="Desayuno completo con café y medialunas" className="w-full h-64 object-cover" />
            </div>
          </motion.div>

          {/* Products */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bestSellers.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card rounded-xl p-5 border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Star size={14} className="text-primary fill-primary" />
                      <span className="text-xs font-mono text-primary uppercase tracking-wider">{item.tag}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <span className="text-lg font-display font-bold text-primary whitespace-nowrap ml-3">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" className="rounded-xl px-8 py-6 text-base font-body">
            <Link to="/menu">
              Ver menú completo <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}