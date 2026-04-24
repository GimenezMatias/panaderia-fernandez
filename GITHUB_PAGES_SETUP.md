# 📦 Guía de Deployment en GitHub Pages

## 1. ESTRUCTURA DE CARPETAS

```
panaderia_y_cafe_demo/
├── public/
│   └── images/          ← TUS IMÁGENES AQUÍ
│       ├── exterior.jpg
│       └── fachada.jpg
├── src/
├── dist/                ← GENERADO AL HACER BUILD (NO SUBIR A GIT)
├── package.json
├── vite.config.js
├── .gitignore
└── ...
```

## 2. PREPARAR EL REPOSITORIO EN GITHUB

### Paso 1: Crear repo en GitHub
- Ve a github.com y crea un nuevo repositorio
- Nombre: `panaderia-fernandez` (o el que prefieras)
- **Importante**: Debe ser público para usar GitHub Pages

### Paso 2: Configurar el proyecto localmente
```bash
cd /home/usuario/Downloads/panaderia_y_cafe_demo

# Inicializar git (si no está hecho)
git init

# Agregar el origen remoto
git remote add origin https://github.com/TU_USUARIO/panaderia-fernandez.git

# Configurar rama main
git branch -M main
```

## 3. CONFIGURAR VITE PARA GITHUB PAGES

Tu `vite.config.js` ya está configurado correctamente con:
```javascript
export default defineConfig({
  base: '/',  // Si usas github.com/usuario/repo, cambia a: '/repo/'
  // ...
})
```

**IMPORTANTE**: Si tu repo es `github.com/tuusuario/panaderia-fernandez`, cambia:
```javascript
base: '/panaderia-fernandez/',
```

Si usas un dominio personalizado, déjalo en `'/'`

## 4. BUILD Y DEPLOY (MANUAL)

### Opción A: Build local + Push manual

```bash
# 1. Buildear (comprime y optimiza automáticamente)
npm run build

# Esto genera carpeta 'dist/' con:
# - HTML/CSS/JS minificados
# - Imágenes comprimidas automáticamente
# - Listo para producción

# 2. Hacer commit y push
git add .
git commit -m "Update: [describe los cambios]"
git push -u origin main
```

### Opción B: Usar GitHub Actions (AUTOMÁTICO - RECOMENDADO)

Crea este archivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Cuando hagas push a main, GitHub automáticamente:
1. Instala dependencias
2. Hace build
3. Publica en GitHub Pages

## 5. HABILITTAR GITHUB PAGES EN EL REPO

1. Ve a **Settings** del repositorio
2. Baja a **Pages**
3. En "Build and deployment":
   - Source: selecciona **Deploy from a branch**
   - Branch: **gh-pages** (se crea automáticamente con GitHub Actions)
4. Espera unos minutos y verás tu sitio en:
   - `https://tu-usuario.github.io/panaderia-fernandez/`

## 6. COMPRENSIÓN DEL PROCESO DE BUILD

### ¿Qué hace `npm run build`?

```
npm run build
    ↓
Vite compila todo
    ↓
- Minifica HTML/CSS/JS (reduce tamaño)
- Comprime imágenes automáticamente
- Genera archivos con hash para caché (ejemplo: main-abc123.js)
- Crea carpeta 'dist/' lista para producción
```

**Tamaño típico:**
- Código fuente: ~50MB (con node_modules)
- Carpeta dist: ~2MB (comprimida y optimizada)

### ¿Necesito comprimir imágenes manualmente?

**NO, pero se recomienda:**
- Vite comprime automáticamente en build
- Pero mejor aún es comprimir antes:
  - Usa: TinyPNG, ImageOptim, o ffmpeg
  - Reduce 50-70% del tamaño sin perder calidad

## 7. WORKFLOW TÍPICO PARA CAMBIOS

### Cambiar información del menú:
```bash
# 1. Edita src/lib/menuData.js
# 2. Prueba localmente
npm run dev

# 3. Cuando está listo, buildea y sube
npm run build
git add .
git commit -m "Update: Agregar nuevas categorías al menú"
git push

# ✅ GitHub Actions automáticamente hace deploy
```

### Cambiar horarios de sucursales:
```bash
# 1. Edita src/lib/branchesData.js
# 2. Prueba: npm run dev
# 3. Sube cambios
git add .
git commit -m "Update: Horarios nuevos en Julio Arboleda"
git push
```

### Agregar nuevas imágenes:
```bash
# 1. Copia imagen a: public/images/
# 2. Actualiza el componente que la usa (ej: src/components/home/Hero.jsx)
# 3. Prueba: npm run dev
# 4. Sube:
git add .
git commit -m "Add: Nueva foto de fachada"
git push
```

## 8. SOLUCIONAR ERRORES

### Sitio en blanco en GitHub Pages
```
❌ Problema: Las imágenes o CSS no cargan
✅ Solución: Revisa vite.config.js - el 'base' debe ser correcto

base: '/'  → Para dominio personalizado
base: '/repo-name/'  → Para github.com/usuario/repo
```

### Cambios no aparecen
```
❌ Problema: Cambios locales no se ven en GitHub Pages
✅ Soluciones:
1. Limpia caché del navegador (Ctrl+Shift+Del)
2. Fuerza recarga: Ctrl+Shift+R
3. Espera 5-10 minutos (GitHub puede tardar)
4. Revisa "Actions" en GitHub - verifica que el deploy terminó
```

### Imágenes rotas
```
❌ Problema: Las imágenes no cargan
✅ Revisa:
1. Ruta en el código: /images/exterior.jpg
2. Archivo existe en: public/images/exterior.jpg
3. Nombre exacto (sensible a mayúsculas)
```

## 9. FLUJO COMPLETO RECOMENDADO

```
1. DESARROLLO LOCAL
   npm run dev
   → http://localhost:5173
   → Haz cambios
   → Prueba todo

2. COMMIT
   git add .
   git commit -m "Update: descripción"

3. PUSH
   git push

4. GITHUB ACTIONS (automático)
   → Instala dependencias
   → Hace build
   → Deploy a GitHub Pages

5. VERIFICAR
   → Visita https://tu-usuario.github.io/panaderia-fernandez/
   → Prueba todo funcione
```

## 10. ARCHIVOS A NO SUBIR (en .gitignore)

Tu .gitignore ya debe tener:
```
node_modules/
dist/
.env
.env.local
.DS_Store
```

Estos NO se suben a GitHub:
- `node_modules/` → Se descarga con `npm install`
- `dist/` → Se genera con `npm run build`

## 11. COMANDO ÚTILES

```bash
# Ver cambios sin subir
git status

# Ver historial de commits
git log --oneline

# Deshacer último commit (sin push)
git reset --soft HEAD~1

# Limpiar dist y reinstalar
rm -rf dist node_modules
npm install

# Forzar recarga de GitHub Pages
# (A veces GitHub cachea, espera 5-10 min)
```

## 12. DOMINIO PERSONALIZADO (OPCIONAL)

Si tienes dominio propio (ej: www.panaderiafernanez.com.ar):

1. En el dominio, apunta a GitHub Pages (configurar DNS)
2. En Settings → Pages → Custom domain: www.tudominio.com.ar
3. GitHub genera automáticamente certificado SSL (HTTPS)

## 📋 CHECKLIST ANTES DE DEPLOY

- [ ] Imágenes están en `public/images/`
- [ ] Menú y horarios actualizados en `src/lib/`
- [ ] `npm run dev` funciona perfecto localmente
- [ ] `npm run build` no tiene errores
- [ ] `vite.config.js` tiene el `base` correcto
- [ ] `.github/workflows/deploy.yml` existe (si usas Actions)
- [ ] Repository es PÚBLICO en GitHub
- [ ] GitHub Pages habilitado en Settings

---

**¿PREGUNTAS?** Este es todo el flujo. Con GitHub Actions nunca tienes que hacer nada más que `git push`. ¡El resto es automático!
