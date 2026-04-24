import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';

const ABOUT_IMAGE = `${import.meta.env.BASE_URL}images/about.jpg`;

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ABOUT_IMAGE}
                alt="Fachada de Panadería Fernández"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-primary mb-3">Sobre Nosotros</p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-5">
              Tradición que se siente en cada bocado
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Panadería Fernández</strong> es mucho más que una panadería. 
                Es el lugar donde se juntan familias, amigos y vecinos del barrio a disfrutar un buen desayuno, 
                una merienda tranquila o simplemente a llevarse el pan del día.
              </p>
              <p>
                Con <strong className="text-foreground">6 sucursales</strong> en Córdoba, ofrecemos un menú variado 
                que incluye desayunos completos, tortas caseras, café recién hecho, facturas, medialunas y 
                todo lo que esperás de tu panadería de confianza.
              </p>
              <p>
                Nuestro compromiso es simple: <em>que vengas por el pan y te quedes por el ambiente</em>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}