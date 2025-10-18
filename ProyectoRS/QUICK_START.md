# 🚀 Guía Rápida - Proyecto Diversidad Sexual

## ▶️ Ejecutar el Proyecto

### Con Docker (Recomendado)
```bash
# Desde la carpeta raíz del proyecto
cd /Users/benja/Desktop/ProyectoRS/ProyectoRS

# Modo desarrollo
docker-compose up app-dev

# La app estará en: http://localhost:5173
```

### Sin Docker
```bash
# Instalar dependencias (solo primera vez)
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📁 Estructura del Proyecto

```
ProyectoRS/
├── public/
│   ├── cropped-logoc-2.jpg  ✅ Logo de la Municipalidad
│   └── vite.svg
├── src/
│   ├── components/          🎨 Componentes React
│   │   ├── RainbowBar.jsx
│   │   ├── Header.jsx       (Incluye el logo)
│   │   ├── Navigation.jsx
│   │   ├── IntroSection.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Card.jsx
│   │   ├── ContentSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── sectionsData.js  📊 Datos de contenido
│   ├── App.jsx              🏠 Componente principal
│   ├── App.css              🎨 Estilos (100% responsive)
│   ├── main.jsx
│   └── index.css
├── Dockerfile               🐳 Configuración Docker
├── docker-compose.yml
└── package.json

```

## 🎯 Características Principales

✅ **Totalmente Responsive** - Se adapta a cualquier dispositivo
✅ **Logo Integrado** - Logo de la Municipalidad en el header
✅ **Navegación por Secciones** - 5 secciones interactivas
✅ **Componentes Reutilizables** - Arquitectura modular
✅ **Animaciones Suaves** - Transiciones y efectos visuales
✅ **Diseño Accesible** - ARIA labels y semántica HTML
✅ **Docker Ready** - Listo para desarrollo y producción

## 📱 Secciones de Contenido

1. **Inicio** - Bienvenida e introducción
2. **Sexualidad** - Orientaciones sexuales (8 conceptos)
3. **Género** - Construcciones sociales (6 conceptos)
4. **Sexo** - Aspectos biológicos (3 conceptos)
5. **Identidad** - Identidad de género (2 conceptos)

## 🎨 Personalización

### Cambiar colores
Edita las variables en `src/App.css`:
```css
:root {
  --primary-green: #4CAF50;
  --dark-green: #2E7D32;
  /* ... más colores */
}
```

### Agregar contenido
Edita el archivo `src/data/sectionsData.js`:
```javascript
export const sectionsData = {
  nuevaSeccion: {
    title: 'Título',
    description: 'Descripción',
    cards: [...]
  }
}
```

### Cambiar el logo
Reemplaza `/public/cropped-logoc-2.jpg` con tu imagen

## 🐛 Solución de Problemas

### El logo no aparece
```bash
# Verificar que el archivo existe
ls -la public/cropped-logoc-2.jpg

# Si no existe, copiarlo
cp /ruta/al/logo.jpg public/cropped-logoc-2.jpg
```

### Error al ejecutar Docker
```bash
# Limpiar contenedores anteriores
docker-compose down

# Reconstruir
docker-compose build

# Iniciar de nuevo
docker-compose up app-dev
```

### Hot reload no funciona
```bash
# Detener el servidor
# Limpiar caché
rm -rf node_modules/.vite

# Reiniciar
npm run dev
```

## 📚 Documentación Adicional

- `RESPONSIVE_DESIGN.md` - Detalles del diseño responsive
- `LOGO_INSTRUCTIONS.md` - Instrucciones para el logo
- `README.md` - Documentación general del proyecto

## 🌐 URLs

- **Desarrollo**: http://localhost:5173
- **Producción**: http://localhost:80 (con docker-compose up app-prod)

## 💡 Tips

- Usa las DevTools (F12) para probar en diferentes dispositivos
- El header es sticky (se mantiene fijo al hacer scroll)
- Las animaciones se pueden desactivar en `App.css`
- El contenido es fácilmente editable en `sectionsData.js`

---

**¿Necesitas ayuda?** Consulta los archivos .md en la raíz del proyecto
