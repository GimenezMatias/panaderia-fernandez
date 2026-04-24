import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProducts from '../components/home/FeaturedProducts';
import LocationsPreview from '../components/home/LocationsPreview';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedProducts />
      <AboutPreview />
      <LocationsPreview />
    </div>
  );
}