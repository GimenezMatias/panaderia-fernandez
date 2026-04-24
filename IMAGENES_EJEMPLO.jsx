// EJEMPLO: Cómo usar las imágenes en tus componentes

import { Button } from '@/components/ui/button';

export default function GalleryExample() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestra Panadería</h2>
        
        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen 1: Exterior */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/images/exterior.jpg" 
              alt="Exterior de la panadería Fernández"
              className="w-full h-96 object-cover hover:scale-105 transition-transform"
            />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg">Nuestro Exterior</h3>
              <p className="text-sm text-gray-600">Ubicada en el corazón de Córdoba</p>
            </div>
          </div>

          {/* Imagen 2: Fachada */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/images/fachada.jpg" 
              alt="Fachada de la panadería Fernández"
              className="w-full h-96 object-cover hover:scale-105 transition-transform"
            />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg">Nuestra Fachada</h3>
              <p className="text-sm text-gray-600">Bienvenidos a Panadería Fernández</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button size="lg">Visítanos Hoy</Button>
        </div>
      </div>
    </section>
  );
}

/*
NOTAS IMPORTANTES:

1. La ruta /images/exterior.jpg es relativa a la carpeta public/
   - Archivo en: public/images/exterior.jpg
   - Referencia en código: /images/exterior.jpg

2. En desarrollo (npm run dev):
   - Las imágenes se sirven directamente desde public/
   - URL: http://localhost:5173/images/exterior.jpg

3. En producción (después de npm run build):
   - Las imágenes se copian a dist/images/
   - Vite las optimiza automáticamente
   - URL: https://tu-usuario.github.io/repo/images/exterior.jpg

4. Recomendaciones:
   - Siempre incluye alt text para accesibilidad
   - Usa object-cover para mantener proporción
   - Optimiza imágenes antes de subirlas
   - Máximo 500KB por imagen

5. Formatos soportados:
   - JPG/JPEG ✅ (mejor para fotos)
   - PNG ✅ (mejor para trasparencia)
   - WebP ✅ (mejor compresión, navegadores modernos)
   - GIF ✅ (animaciones simples)
*/
