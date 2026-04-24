import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-accent text-accent-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4">Fernández</h3>
            <p className="text-accent-foreground/80 font-body text-sm leading-relaxed">
              Panadería y café con tradición en Córdoba. 6 sucursales para que siempre tengas una cerca.
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold mb-4 flex items-center gap-2">
              <MapPin size={16} /> Navegación
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">Inicio</Link>
              <Link to="/menu" className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">Menú</Link>
              <Link to="/sucursales" className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">Sucursales</Link>
              <Link to="/contacto" className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">Contacto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold mb-4 flex items-center gap-2">
              <Clock size={16} /> Horarios
            </h4>
            <div className="text-sm text-accent-foreground/80 space-y-1">
              <p>Lunes a Sábado: 6:00 – 21:00</p>
              <p>Domingos: 7:30 – 20:00</p>
              <p className="text-accent-foreground/60 text-xs mt-2">*Horarios varían por sucursal</p>
            </div>
          </div>

          <div>
            <h4 className="font-body font-semibold mb-4 flex items-center gap-2">
              <Phone size={16} /> Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+548816170"
                className="text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
              >
                +54 881 6170
              </a>
              <a
                href="https://www.instagram.com/fernandezpanaderia.cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://www.pedidosya.com.ar/restaurantes/cordoba/fernandez-panaderia-y-cafe-7eb65bc8-a038-4c42-bcca-0ed73a64224a-menu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
              >
                <ExternalLink size={16} /> PedidosYa
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-10 pt-6 text-center">
          <p className="text-xs text-accent-foreground/50 font-body">
            © {new Date().getFullYear()} Panadería Fernández — Córdoba, Argentina
          </p>
        </div>
      </div>
    </motion.footer>
  );
}