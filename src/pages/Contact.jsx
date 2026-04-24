import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, ExternalLink, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '../components/SectionTitle';

const contactMethods = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+54 881 6170',
    href: 'tel:+548816170',
    cta: 'Llamar ahora',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@fernandezpanaderia.cafe',
    href: 'https://www.instagram.com/fernandezpanaderia.cafe/',
    cta: 'Seguinos',
  },
  {
    icon: ExternalLink,
    title: 'PedidosYa',
    value: 'Hacé tu pedido online',
    href: 'https://www.pedidosya.com.ar/restaurantes/cordoba/fernandez-panaderia-y-cafe-7eb65bc8-a038-4c42-bcca-0ed73a64224a-menu',
    cta: 'Pedir ahora',
  },
];

export default function Contact() {
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
            Estamos para vos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-accent-foreground tracking-tight"
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-foreground/70 font-body mt-3 max-w-lg text-base sm:text-lg"
          >
            ¿Querés hacer un pedido, consultar por un producto o simplemente saludarnos? Acá te dejamos todas las formas de contactarnos.
          </motion.p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl border border-border/50 p-6 sm:p-8 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={26} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{method.value}</p>
                <Button asChild className="w-full rounded-xl py-5 text-base font-body">
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.cta}
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 bg-secondary/50 rounded-2xl p-8 sm:p-10"
        >
          <h3 className="text-2xl font-display font-semibold mb-6 text-center">Información rápida</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-sm">6 Sucursales</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Julio Arboleda · Santa Fe · Diagonal Ica · Emilio Caraffa · Mons. Cabrera · Fructuoso Rivera
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-sm">Horarios generales</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Lunes a Sábado: 6:00 – 21:00<br />
                  Domingos: 7:30 – 20:00<br />
                  <span className="text-xs italic">*Sucursal Julio Arboleda abierta hasta las 23h</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}