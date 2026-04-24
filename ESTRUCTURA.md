# 📁 ESTRUCTURA DEL PROYECTO

```
panaderia_y_cafe_demo/
│
├── 📂 public/
│   └── 📂 images/               ← 🎯 TUS IMÁGENES AQUÍ
│       ├── exterior.jpg         ← Copia aquí tu foto
│       ├── fachada.jpg          ← Copia aquí tu foto
│       └── README.md            ← Instrucciones
│
├── 📂 src/
│   ├── 📂 api/
│   │   └── base44Client.js      ← Mock API (no tocar)
│   │
│   ├── 📂 components/
│   │   ├── Navbar.jsx           ← Menú principal
│   │   ├── Footer.jsx           ← Pie de página
│   │   └── 📂 home/
│   │       ├── Hero.jsx         ← Sección principal
│   │       ├── Features.jsx     ← Características
│   │       └── ...
│   │
│   ├── 📂 lib/
│   │   ├── menuData.js          ← 🎯 EDITA AQUÍ: Menú
│   │   ├── branchesData.js      ← 🎯 EDITA AQUÍ: Sucursales/horarios
│   │   ├── AuthContext.jsx      ← Autenticación (mock)
│   │   └── app-params.js        ← Parámetros app
│   │
│   ├── 📂 pages/
│   │   ├── Home.jsx             ← Página inicio
│   │   ├── Menu.jsx             ← Página menú
│   │   ├── Locations.jsx        ← Página sucursales
│   │   └── Contact.jsx          ← Página contacto
│   │
│   ├── App.jsx                  ← Componente principal
│   ├── main.jsx                 ← Entry point
│   └── index.css                ← Estilos globales
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── deploy.yml           ← 🎯 GitHub Actions (automático)
│
├── 📂 dist/                     ← 🚫 NO SUBIR A GIT (generado por build)
│
├── vite.config.js              ← Configuración build
├── tailwind.config.js          ← Configuración diseño
├── package.json                ← Dependencias + scripts
├── .gitignore                  ← Qué no subir a git
│
├── 📋 QUICK_START.md           ← Pasos rápidos (START HERE!)
├── 📋 GITHUB_PAGES_SETUP.md    ← Deployment completo
├── 📋 MANTENIMIENTO.md         ← Solucionar problemas
├── 📋 IMAGENES_EJEMPLO.jsx     ← Ejemplo de código
│
└── README.md                    ← Documentación general
```

---

## 🎯 ARCHIVOS CLAVE A EDITAR

### 1. Menú y Productos
**Archivo**: `src/lib/menuData.js`
```javascript
export const menuCategories = [
  {
    id: 'desayunos',
    name: 'Desayunos',
    items: [
      { name: 'Producto', desc: 'Descripción', price: '$9.99' }
    ]
  }
]
```

### 2. Sucursales y Horarios  
**Archivo**: `src/lib/branchesData.js`
```javascript
export const branches = [
  {
    id: 'julio-arboleda',
    name: 'Julio Arboleda',
    address: 'Julio Arboleda 3857, Córdoba',
    schedule: {
      'Lunes a Sábado': '7:00 – 23:00'
    }
  }
]
```

### 3. Imágenes
**Carpeta**: `public/images/`
```
exterior.jpg   ← Foto del exterior
fachada.jpg    ← Foto de la fachada
```

### 4. Página de Inicio
**Archivo**: `src/pages/Home.jsx`
```jsx
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
// ... más componentes
```

---

## 📊 DONDE VER CADA COSA EN LA WEB

```
https://localhost:5173/              ← Home.jsx
│
├── / (Home)
│   ├── Hero section              ← src/components/home/Hero.jsx
│   ├── Features                  ← src/components/home/Features.jsx
│   ├── Products destacados       ← src/components/home/FeaturedProducts.jsx
│   └── Ubicaciones               ← src/components/home/LocationsPreview.jsx
│
├── /menu                         ← src/pages/Menu.jsx
│   └── Menú completo             ← src/lib/menuData.js
│
├── /sucursales                   ← src/pages/Locations.jsx
│   └── Todas las sucursales      ← src/lib/branchesData.js
│
└── /contacto                     ← src/pages/Contact.jsx
```

---

## 🔄 FLUJO DE DEPLOYMENT

```
1. Cambias archivo en src/
         ↓
2. Pruebas localmente (npm run dev)
         ↓
3. Haces git commit
         ↓
4. git push a main
         ↓
5. GitHub Actions detecta cambios
         ↓
6. Automáticamente:
   - npm install
   - npm run build (comprime todo)
   - Deploy a gh-pages branch
         ↓
7. En 2-3 minutos está online
         ↓
8. Accedes a: https://usuario.github.io/repo/
```

---

## ✅ CHECKLIST VISUAL

```
Para publicar en GitHub Pages:

[ ] Carpeta src/ - código completo
[ ] Carpeta public/images/ - tus 2 fotos
[ ] Archivo package.json - dependencias
[ ] Archivo vite.config.js - configurado
[ ] Archivo .gitignore - configurado
[ ] Archivo .github/workflows/deploy.yml - GitHub Actions
[ ] Repository en GitHub - PÚBLICO
[ ] Settings → Pages → Habilitado
    → Branch: gh-pages
```

---

## 🚀 PARA EMPEZAR AHORA

1. **Lee**: `QUICK_START.md` (5 minutos)
2. **Copia imágenes**: A `public/images/`
3. **Edita info**: En `src/lib/menuData.js` y `branchesData.js`
4. **Prueba**: `npm run dev`
5. **Sube a GitHub**: `git push`
6. **Listo**: Tu sitio está online en 2-3 minutos

---

## 📞 SI ALGO FALLA

| Problema | Solución |
|----------|----------|
| No sé qué editar | Lee `QUICK_START.md` |
| Las fotos no carga | Revisa estén en `public/images/` |
| Cambios no aparecen | Espera 3 min o limpia caché |
| Necesito cambiar algo | Lee `MANTENIMIENTO.md` |

**¡Éxito! 🎉**
