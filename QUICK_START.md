# 🚀 QUICK START - Pasos Simples

## PASO 1: Preparar las imágenes

1. Consigue 2 fotos de la panadería (exterior y fachada)
2. Comprímelas (opcional pero recomendado):
   - Usa: https://tinypng.com o https://imagecompressor.com
   - Guarda como: `exterior.jpg` y `fachada.jpg`
3. Copia a: `public/images/`

```
Resultado:
public/
└── images/
    ├── exterior.jpg
    └── fachada.jpg
```

## PASO 2: Usar imágenes en tu código

En cualquier componente:
```jsx
<img src="/images/exterior.jpg" alt="Descripción" />
```

## PASO 3: Git + GitHub

```bash
# 1. Crear repo vacío en github.com

# 2. Inicializar Git
git init
git remote add origin https://github.com/TU_USUARIO/panaderia-fernandez.git
git branch -M main

# 3. Subir código
git add .
git commit -m "Initial commit"
git push -u origin main
```

## PASO 4: GitHub Pages

1. Ve a Settings del repo
2. Pages → Deploy from a branch → gh-pages
3. ¡Listo! Tu sitio está en: `https://tu-usuario.github.io/panaderia-fernandez/`

> **Nota**: Los cambios tardan 2-3 minutos en aparecer

## PASO 5: Cambios futuros

**Para cambiar cualquier cosa:**

```bash
# Edita archivos (menú, horarios, imágenes, etc)

# Sube cambios
git add .
git commit -m "Update: [qué cambió]"
git push

# ✅ GitHub Actions automáticamente redeploya
```

---

## 📋 Archivos Importantes

| Archivo | Cambiar cuando quieras |
|---------|----------------------|
| `src/lib/menuData.js` | Agregar/cambiar productos del menú |
| `src/lib/branchesData.js` | Cambiar horarios o sucursales |
| `public/images/` | Agregar nuevas fotos |
| `src/components/` | Modificar diseño o layout |

---

## 🐛 Problemas Comunes

| Problema | Solución |
|----------|----------|
| Imágenes no cargan | Verifica que estén en `public/images/` con el nombre exacto |
| Cambios no aparecen | Limpia caché (Ctrl+Shift+Del) o espera 5 min |
| Sitio en blanco | Revisa que `vite.config.js` tenga `base: '/'` o `base: '/repo-name/'` |
| Build falla | Revisa que `npm install` esté completo: `npm run build` |

---

## ✅ Resumen

✔️ Imágenes en: `public/images/`
✔️ Menú en: `src/lib/menuData.js`
✔️ Horarios en: `src/lib/branchesData.js`
✔️ Luego: `git push`
✔️ Listo - Deploy automático en 2-3 min

**¡Eso es todo!** 🎉
