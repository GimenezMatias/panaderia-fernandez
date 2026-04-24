# 📸 CÓMO COMPLETAR LAS IMÁGENES

## Dos opciones:

### OPCIÓN A: Usa imágenes reales (RECOMENDADO)

1. **Toma 2 fotos** con tu celular
   - Una del exterior/fachada
   - Una del interior o desayuno completo

2. **Comprime en TinyPNG**
   - Ve a: https://tinypng.com
   - Sube las 2 fotos
   - Target: ~200-300KB cada una
   - Descarga

3. **Copia a la carpeta**
   - Renombra como:
     - `exterior.jpg`
     - `fachada.jpg`
   - Copia a: `public/images/`

4. **Verifica**
   ```bash
   ls -la public/images/
   # Debe mostrar:
   # exterior.jpg
   # fachada.jpg
   ```

5. **Haz push**
   ```bash
   git add .
   git commit -m "Add: Real images"
   git push
   ```

6. **Listo!** En 2-3 min ves en GitHub Pages

---

### OPCIÓN B: Usa placeholders temporales (TESTING)

Si no tienes fotos aún pero quieres ver cómo se ve:

**Desde línea de comandos:**

```bash
cd /home/usuario/Downloads/panaderia_y_cafe_demo/public/images/

# Crear imagen simple para exterior (marrón claro - pasteles)
# Necesitas ImageMagick instalado (ya debería estar)

# Intenta esto:
convert -size 400x400 xc:'#D2691E' -fill white \
  -gravity center -pointsize 48 -font Arial-Bold \
  -annotate 0 '🥐\nFacturas' exterior.jpg

# Y para fachada:
convert -size 400x300 xc:'#8B4513' -fill white \
  -gravity center -pointsize 40 -font Arial-Bold \
  -annotate 0 '☕\nDesayuno' fachada.jpg
```

Si no tienes ImageMagick:
```bash
# Instalar
sudo pacman -S imagemagick  # Arch
sudo apt-get install imagemagick  # Ubuntu
brew install imagemagick  # Mac
```

**Después intenta:**
```bash
ls -la public/images/
# Verifica que tengas los 2 JPGs

npm run dev
# Abre http://localhost:5173
# Baja a "Lo más pedido" - verás tus imágenes!
```

---

## ⚠️ IMPORTANTE

**Estas imágenes son CRUCIALES para que vea bien en**:
- Sección "Lo más pedido" (solo desktop/tablet)
- Solo aparecen en pantallas `lg` (1024px+)
- En móvil NO se ven (por eso diseño responsive)

---

## 🎯 TAMAÑOS RECOMENDADOS

| Imagen | Dimensión | Peso | Tipo |
|--------|-----------|------|------|
| `exterior.jpg` | 400x400px | < 250KB | Foto exterior/fachada |
| `fachada.jpg` | 400x300px | < 200KB | Foto interior/desayuno |

---

## ✅ CÓMO VERIFICAR

Después de agregar las imágenes:

```bash
# 1. Verifica que existan
ls -la public/images/
# Output debe incluir:
# exterior.jpg
# fachada.jpg

# 2. Prueba localmente
npm run dev
# Abre: http://localhost:5173
# Baja a sección "Lo más pedido"
# ¿Ves las 2 imágenes en desktop? ✅

# 3. Haz build
npm run build
# ¿Sin errores? ✅

# 4. Push
git add .
git commit -m "Add: Product images"
git push

# 5. Espera 2-3 min
# Abre: https://tu-usuario.github.io/panaderia-fernandez/
# ¿Ves las imágenes en GitHub Pages? ✅ ¡LISTO!
```

---

## 🚀 PRÓXIMOS PASOS

1. **Consigue 2 fotos** (o crea placeholders)
2. **Comprime en TinyPNG** (importante para velocidad)
3. **Copia a `public/images/`**
4. **Haz `git push`**
5. **Espera 2-3 min**
6. **¡Tu web está perfecta!** 🎉

---

¿Necesitas ayuda? Revisa `CAMBIOS_COMPLETADOS.md`
