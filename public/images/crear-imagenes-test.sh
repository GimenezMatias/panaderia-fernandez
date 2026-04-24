#!/bin/bash

# Script para crear imágenes placeholder de prueba (solo testing)
# REEMPLAZA ESTAS CON TUS FOTOS REALES DESPUÉS

# Instala ImageMagick si no lo tienes:
# apt-get install imagemagick
# o brew install imagemagick (Mac)

# Crear imagen de pasteles/facturas (400x400)
convert -size 400x400 \
  -background '#D2691E' \
  -fill '#FFFFFF' \
  -gravity center \
  -font Arial -pointsize 48 \
  label:'🥐 Facturas\nFrescas' \
  /home/usuario/Downloads/panaderia_y_cafe_demo/public/images/exterior.jpg

# Crear imagen de desayuno/café (400x300)
convert -size 400x300 \
  -background '#8B4513' \
  -fill '#FFFFFF' \
  -gravity center \
  -font Arial -pointsize 40 \
  label:'☕ Desayuno\nCompleto' \
  /home/usuario/Downloads/panaderia_y_cafe_demo/public/images/fachada.jpg

echo "✅ Imágenes placeholder creadas!"
echo "   Reemplaza con tus fotos reales después"
