# 🔧 MANTENIMIENTO Y SOLUCIÓN DE PROBLEMAS

## 1. CAMBIAR INFORMACIÓN

### Cambiar menú
```bash
# Archivo: src/lib/menuData.js
# Edita: Nombres, descripciones, precios

# Ejemplo de estructura:
{
  id: 'desayunos',
  name: 'Desayunos',
  emoji: '☀️',
  items: [
    { 
      name: 'Clásico', 
      desc: 'Infusión + 2 medialunas + jugo', 
      price: '$7.700' 
    }
  ]
}
```

### Cambiar horarios
```bash
# Archivo: src/lib/branchesData.js
# Edita: Direcciones, teléfonos, horarios

# Ejemplo:
{
  id: 'julio-arboleda',
  name: 'Julio Arboleda',
  address: 'Julio Arboleda 3857, Córdoba',
  schedule: {
    'Lunes a Sábado': '7:00 – 23:00',
    'Domingos': '7:00 – 23:00'
  }
}
```

### Cambiar textos
```bash
# Archivos principales:
src/components/home/Hero.jsx       # Slogan principal
src/components/home/Features.jsx   # Características
src/components/home/AboutPreview.jsx # Acerca de

# Archivos de páginas:
src/pages/Contact.jsx              # Página de contacto
src/pages/Menu.jsx                 # Layout del menú
src/pages/Locations.jsx            # Layout de sucursales
```

---

## 2. AGREGAR NUEVAS IMÁGENES

```bash
# 1. Copia la imagen a: public/images/
# Nombre: algo-descriptivo.jpg

# 2. En tu componente:
<img src="/images/algo-descriptivo.jpg" alt="Descripción" />

# 3. Sube cambios
git add .
git commit -m "Add: Nueva imagen"
git push
```

---

## 3. SOLUCIONAR ERRORES

### Error: "Cannot find module '@base44/sdk'"
✅ **YA ESTÁ SOLUCIONADO** - El archivo `src/api/base44Client.js` es un mock

### Error: "npm: command not found"
```bash
# Node.js no está instalado
# Solución: Instala Node.js desde nodejs.org
```

### Error: "dist folder not found" en deploy
```bash
# Solución: El build falló
# Ejecuta localmente:
npm run build

# Si tiene errores, verás dónde están
# Arréglalo y vuelve a intentar
```

### Imágenes rotas (404)
```
❌ Problem: Las imágenes no cargan en producción
✅ Checklist:
1. Archivo existe en: public/images/nombre.jpg ✓
2. Ruta en código es exacta: /images/nombre.jpg ✓
3. No confundas mayúsculas: exterior.jpg ≠ Exterior.JPG ✓
4. Después de cambios: npm run build && git push ✓
```

### Cambios no aparecen en GitHub Pages
```
Posibles causas y soluciones:

1. Caché del navegador:
   Ctrl+Shift+Del (Windows) o Cmd+Shift+Del (Mac)
   Limpia: "All time" + "Cached images and files"
   
2. GitHub está procesando:
   Espera 2-3 minutos
   Ve a Actions tab del repo para ver progreso
   
3. Build falló:
   Revisa Actions → Deploy workflow
   Ver logs de error
   
4. Versión vieja en URL:
   A veces GitHub cachea URLs
   Prueba: https://tu-usuario.github.io/panaderia-fernandez/?v=2
   (el ?v=2 fuerza a cargar versión nueva)
```

---

## 4. WORKFLOW DE DESARROLLO

### Para pruebas locales
```bash
# Inicia servidor de desarrollo
npm run dev

# Visita: http://localhost:5173

# Haz cambios
# Guarda archivo
# Se actualiza automáticamente en el navegador

# Cuando esté perfecto, procede a deploy
```

### Para deploy
```bash
# 1. Asegurate de que los cambios funcionar localmente
npm run dev

# 2. Commit
git add .
git commit -m "Feature: Descripción de cambios"

# 3. Push
git push

# 4. Espera 2-3 minutos
# GitHub Actions está haciendo:
#   → npm install
#   → npm run build
#   → Deploy a GitHub Pages

# 5. Verifica
# Visita: https://tu-usuario.github.io/panaderia-fernandez/
```

---

## 5. ACTUALIZAR DEPENDENCIAS (AVANZADO)

```bash
# Ver qué está desactualizado
npm outdated

# Actualizar todo
npm update

# O actualizar paquete específico
npm install react@latest

# Después siempre:
git add .
git commit -m "Update: Dependencies"
git push
```

---

## 6. COMPILACIÓN Y OPTIMIZACIÓN

### ¿Qué hace `npm run build`?

```
npm run build
    ↓
Lee todos los archivos de src/
    ↓
Minifica HTML/CSS/JavaScript
    ↓
Comprime imágenes
    ↓
Crea fingerprints (hash para caché)
    ↓
Genera carpeta 'dist/' (~2MB)
```

### Tamaño del build
```
Típicamente:
- Sin comprimir: 50MB+ (incluye node_modules)
- Build final: 2-5MB (listo para producción)
- Imágenes optimizadas: 70-80% más pequeñas
```

### Comandos útiles
```bash
# Ver qué ocupa espacio
npm run build && du -sh dist/

# Analizar bundle
npm install -D webpack-bundle-analyzer

# Limpiar y rebuildar
rm -rf dist && npm run build
```

---

## 7. PROBLEMAS ESPECÍFICOS

### Problema: El menú se ve cortado en mobile
```jsx
// Revisa: src/components/menu/MenuSection.jsx
// Agrega: className="max-w-full" o media queries
```

### Problema: Las imágenes pixeladas
```
Soluciones:
1. Sube imagen en mayor resolución
2. Usa formato WebP en lugar de JPG
3. Revisa la clase CSS: 
   object-cover → object-contain (según necesites)
```

### Problema: Sitio lento
```bash
# 1. Analiza rendimiento
npm run build

# 2. Comprime imágenes más
# usa: https://tinypng.com

# 3. Revisa qué JS se descarga
# Saca imports que no uses
```

---

## 8. BACKUP Y SEGURIDAD

```bash
# Git guarda historial de todo
# Puedes revertir cambios cuando quieras

# Ver historial
git log --oneline

# Revertir a versión anterior
git revert <commit-hash>

# O restaurar archivo específico
git checkout <commit-hash> -- src/lib/menuData.js
```

---

## 9. COMANDOS MÁS ÚTILES

```bash
# Status
git status                    # Qué cambió
git diff                      # Exactamente qué cambió

# Commits
git log --oneline -10         # Últimos 10 commits
git show <hash>               # Ver commit específico

# Branches
git branch                     # Ver ramas
git branch nueva-rama          # Crear rama
git checkout nueva-rama        # Cambiar a rama

# Limpiar
rm -rf node_modules && npm install   # Reinstalar
npm cache clean --force        # Limpiar caché npm
```

---

## 10. CHECKLIST SEMANAL

- [ ] Revisar que toda la info del menú sea correcta
- [ ] Verificar horarios en redes sociales vs app
- [ ] Revisar imágenes se ven bien en mobile
- [ ] Probar links internos y externos
- [ ] Actualizar ofertas/promociones

---

## 📞 AYUDA RÁPIDA

| Necesito | Archivo |
|----------|---------|
| Cambiar logo | `src/components/Navbar.jsx` |
| Cambiar colores | `tailwind.config.js` |
| Cambiar fuentes | `src/index.css` o `tailwind.config.js` |
| Cambiar favicon | `index.html` |
| Agregar página | `src/pages/` + actualizar `App.jsx` |
| Cambiar responsividad | Componentes individuales con Tailwind |

---

**Recuerda**: Con `git`, siempre puedes revertir cambios. ¡No temas experimentar! 🚀
