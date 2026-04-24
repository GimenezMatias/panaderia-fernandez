# 📸 GUÍA COMPLETA DE 4 IMÁGENES

Tu página necesita **exactamente 4 imágenes** en la carpeta `public/images/`

---

## 📋 LAS 4 IMÁGENES QUE NECESITAS

### 1️⃣ **hero.jpg** - Portada Principal (GRANDE)
- **Dónde aparece**: Portada/Hero al abrir la web
- **Tamaño recomendado**: 1920x1080px (mínimo 1200x680px)
- **Peso máximo**: 400KB (comprimir)
- **Qué debe ser**: Foto del interior/exterior de tu panadería (la más impactante)
- **Ubicación en código**: `src/components/home/Hero.jsx`
- **Uso actual**: Era un placeholder marrón con texto

```
Ejemplo: Una foto bonita del interior de la panadería, 
estantes con pan, buena iluminación
```

---

### 2️⃣ **about.jpg** - Sección "Sobre Nosotros"
- **Dónde aparece**: Sección "Sobre Nosotros" en la página principal
- **Tamaño recomendado**: 600x400px (o similar proporción)
- **Peso máximo**: 300KB (comprimir)
- **Qué debe ser**: Foto de tu fachada, entrada o algún aspecto representativo
- **Ubicación en código**: `src/components/home/AboutPreview.jsx`
- **Uso actual**: Era un placeholder beige con texto

```
Ejemplo: Fachada de la panadería, entrada con letrero, 
o foto de producción de pan
```

---

### 3️⃣ **exterior.jpg** - "Facturas Argentinas Frescas"
- **Dónde aparece**: Sección "Lo más pedido" (solo en DESKTOP)
- **Tamaño recomendado**: 400x400px
- **Peso máximo**: 250KB (comprimir)
- **Qué debe ser**: Foto de facturas/medialunas/panes recién hechos
- **Ubicación en código**: `src/components/home/FeaturedProducts.jsx`
- **Uso actual**: Era un placeholder vacío

```
Ejemplo: Bandeja de medialunas recién horneadas, 
close-up de facturas doradas, o variedad de panes
```

---

### 4️⃣ **fachada.jpg** - "Desayuno Completo con Café y Medialunas"
- **Dónde aparece**: Sección "Lo más pedido" (solo en DESKTOP, abajo de la anterior)
- **Tamaño recomendado**: 400x300px
- **Peso máximo**: 200KB (comprimir)
- **Qué debe ser**: Foto de desayuno completo con café y medialunas
- **Ubicación en código**: `src/components/home/FeaturedProducts.jsx`
- **Uso actual**: Era un placeholder vacío

```
Ejemplo: Taza de café con croissants alrededor, 
desayuno completo en mesa, café y facturas juntos
```

---

## 📁 ESTRUCTURA DE CARPETAS

```
panaderia_y_cafe_demo/
├── public/
│   └── images/              ← AQUÍ COPIAS LAS 4 IMÁGENES
│       ├── hero.jpg         ✅ Portada grande
│       ├── about.jpg        ✅ Sobre nosotros
│       ├── exterior.jpg     ✅ Facturas (Lo más pedido)
│       └── fachada.jpg      ✅ Desayuno (Lo más pedido)
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.jsx              (usa hero.jpg)
│   │   │   ├── AboutPreview.jsx      (usa about.jpg)
│   │   │   └── FeaturedProducts.jsx  (usa exterior.jpg + fachada.jpg)
```

---

## 🎨 RESUMEN VISUAL

```
WEB FLOW:

PORTADA (Hero)
    ↓ [hero.jpg: 1920x1080]
    ↓
CARACTERÍSTICAS
    ↓
SOBRE NOSOTROS (About)
    ↓ [about.jpg: 600x400]
    ↓
LO MÁS PEDIDO (Featured)
    ├─ [exterior.jpg: 400x400] ← Facturas
    └─ [fachada.jpg: 400x300] ← Desayuno
    ↓
MENU / SUCURSALES / CONTACTO
```

---

## ✅ PASO A PASO PARA INSTALAR LAS 4 IMÁGENES

### **PASO 1: Conseguir las 4 fotos**

```
Necesitas tomar/conseguir:
  1. Foto grande del interior/exterior de la panadería (hero.jpg)
  2. Foto de tu fachada o aspecto representativo (about.jpg)
  3. Foto de facturas/medialunas recién hechas (exterior.jpg)
  4. Foto de desayuno completo con café (fachada.jpg)
```

### **PASO 2: Comprimir las imágenes**

```
Ve a: https://tinypng.com
  1. Sube las 4 fotos
  2. Target de tamaño: 
     - hero.jpg: <400KB
     - about.jpg: <300KB
     - exterior.jpg: <250KB
     - fachada.jpg: <200KB
  3. Descarga las 4 comprimidas
```

### **PASO 3: Renombrar**

```
Asegúrate que tengan EXACTAMENTE estos nombres:
  ✓ hero.jpg
  ✓ about.jpg
  ✓ exterior.jpg
  ✓ fachada.jpg
```

### **PASO 4: Copiar a la carpeta**

```bash
# Desde terminal, ve a la carpeta images
cd /home/usuario/Downloads/panaderia_y_cafe_demo/public/images/

# Copia las 4 imágenes aquí
# O arrastra desde carpeta gráfica
```

### **PASO 5: Verificar**

```bash
# Desde terminal, verifica que estén todas
ls -la /home/usuario/Downloads/panaderia_y_cafe_demo/public/images/

# Debe mostrar:
# hero.jpg
# about.jpg
# exterior.jpg
# fachada.jpg
```

### **PASO 6: Probar localmente (OPCIONAL)**

```bash
cd /home/usuario/Downloads/panaderia_y_cafe_demo
npm run dev

# Abre: http://localhost:5173
# Recorre la página de arriba abajo
# ¿Ves todas 4 imágenes? ✅
```

### **PASO 7: Subir a GitHub**

```bash
git add .
git commit -m "Add: 4 product and featured images"
git push
```

### **PASO 8: Esperar**

```
GitHub Actions automáticamente:
  ✓ npm install
  ✓ npm run build
  ✓ Deploy a GitHub Pages

Espera 2-3 minutos

Abre: https://tu-usuario.github.io/panaderia-fernandez/
¡Verás todas tus imágenes! 🎉
```

---

## 🎯 TABLA DE REFERENCIA RÁPIDA

| # | Nombre | Ubicación | Dónde se ve | Tamaño | Peso |
|---|--------|-----------|-------------|--------|------|
| 1 | hero.jpg | public/images/ | Portada arriba | 1920x1080 | <400KB |
| 2 | about.jpg | public/images/ | Sección "Nosotros" | 600x400 | <300KB |
| 3 | exterior.jpg | public/images/ | "Lo más pedido" (arriba) | 400x400 | <250KB |
| 4 | fachada.jpg | public/images/ | "Lo más pedido" (abajo) | 400x300 | <200KB |

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Qué pasa si no agrego las imágenes?**
R: La web se ve pero con espacios en blanco. Necesitas las 4 para que vea perfecta.

**P: ¿Puedo usar otras medidas?**
R: Sí, pero recomiendo las sugeridas para que se vea bien en todos los dispositivos.

**P: ¿Las imágenes aparecen en móvil?**
R: `hero.jpg` y `about.jpg` sí. Las de "Lo más pedido" (exterior y fachada) NO, porque es solo desktop (pantallas de 1024px+).

**P: ¿Dónde compro las imágenes?**
R: Toma fotos tú mismo (las mejores), o usa sitios como Unsplash/Pexels si necesitas stock.

**P: ¿Puedo cambiar el nombre de las imágenes?**
R: No, deben ser exactamente esos nombres porque el código así las busca.

---

## 🎨 INSPIRACIÓN PARA CADA FOTO

### **hero.jpg** 📷
- Interior de la panadería con luz natural
- Estantes con panes/facturas
- Gente desayunando
- Mostrador con variedad de productos
- Horno/producción

### **about.jpg** 📷
- Fachada frente (la más linda)
- Entrada con señalética
- Zona de atención
- Detalle decorativo
- Equipo trabajando

### **exterior.jpg** 📷
- Bandeja recién salida del horno
- Close-up de medialunas/facturas
- Variedad de panes apilados
- Mano sacando pan del horno
- Aspecto dorado/fresco

### **fachada.jpg** 📷
- Desayuno completo en mesa
- Taza de café + medialunas
- Tostadas con dulce
- Facturas con cappuccino
- Té/café con facturas

---

## 🚀 RESUMEN FINAL

**Tienes que:**
1. Conseguir 4 fotos ← TU RESPONSABILIDAD
2. Comprimir en TinyPNG ← TinyPNG
3. Copiar a `public/images/` ← TU RESPONSABILIDAD
4. Renombrar (hero, about, exterior, fachada) ← TU RESPONSABILIDAD
5. Hacer `git push` ← TU RESPONSABILIDAD
6. Esperar 3 min ← GITHUB (automático)

**El código ya está listo.** Solo necesita las imágenes. ✅

---

## 📞 SOPORTE

Si necesitas:
- Comprimir imágenes: https://tinypng.com
- Editar imágenes: https://pixlr.com (online, gratis)
- Fotos gratis: https://unsplash.com o https://pexels.com

---

**¡Listo para poner tus imágenes!** 🎉
